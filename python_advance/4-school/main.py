# Спроектировать мини‑систему для школы, которая:

# хранит учеников, предметы и оценки (журнал);
# считает статистику по оценкам (средние баллы по предмету и ученику);
# отправляет уведомления (просто пишет в консоль) если средний бал по ученику становится < 3.5
# Требования:

# Разделить ответственность (отдельно: журнал, статистика, уведомления, мониторинг).
# Возможность добавлять новые типы уведомлений и алгоритмы статистики без изменения существующего кода.
# Высокоуровневые сервисы зависят от абстракций, а не от конкретных классов.


from dataclasses import dataclass
from typing import List, Protocol


@dataclass(frozen=True)
class Subject:
    name: str


@dataclass(frozen=True)
class Person:
    name: str
    age: int


@dataclass(frozen=True)
class Student(Person):
    pass


@dataclass(frozen=True)
class Teacher(Person):
    _skills: List[Subject]

    def add_skill(self, skill: Subject) -> None:
        self._skills.append(skill)
    
    def main_skill(self) -> Subject:
        return self._skills[0]
    
    @property
    def skills(self) -> List[Subject]:
        return self._skills
    
    def give_rating(
        self,
        journal: "GradeRepository",
        student: Student,
        subject: Subject,
        rating: float,
    ) -> None:
        """Create and store a grade for a student in a subject."""
        journal.add_grade(Grade(student, subject, rating))


class Curriculum:
    subjects: dict[Subject, Teacher]

    def __init__(self):
        self.subjects = {}

    def add_subject(self, subject: Subject, teacher: Teacher) -> None:
        if subject not in teacher.skills:
            raise ValueError(
                f"Teacher {teacher.name} does not teach subject {subject.name}"
            )
        self.subjects[subject] = teacher


@dataclass(frozen=True)
class Grade:
    student: Student
    subject: Subject
    grade: float


class GradeRepository(Protocol):
    def add_grade(self, grade: Grade) -> None: ...
    def get_grades(self) -> List[Grade]: ...


class StatisticsService(Protocol):
    def average_all(self) -> float: ...
    def average_by_student(self, student: Student) -> float: ...
    def average_by_subject(self, subject: Subject) -> float: ...


class Notifier(Protocol):
    def notify(self, message: str) -> None: ...


class Journal(GradeRepository):
    def __init__(self):
        self._grades: List[Grade] = []

    def add_grade(self, grade: Grade) -> None:
        self._grades.append(grade)

    def get_grades(self) -> List[Grade]:
        return self._grades.copy()


class AverageStatistics(StatisticsService):
    def __init__(self, repository: GradeRepository):
        self._repository = repository

    def average_all(self) -> float:
        grades = self._repository.get_grades()
        return self._safe_avg([grade.grade for grade in grades])

    def average_by_student(self, student: Student) -> float:
        grades = self._repository.get_grades()
        student_grades = [grade.grade for grade in grades if grade.student == student]
        return self._safe_avg(student_grades)

    def average_by_subject(self, subject: Subject) -> float:
        grades = self._repository.get_grades()
        subject_grades = [grade.grade for grade in grades if grade.subject == subject]
        return self._safe_avg(subject_grades)

    @staticmethod
    def _safe_avg(values: List[float]) -> float:
        if not values:
            return 0.0
        return sum(values) / len(values)


class ConsoleNotifier(Notifier):
    def notify(self, message: str) -> None:
        print(message)


class StudentPerformanceMonitor:
    def __init__(
        self,
        statistics: StatisticsService,
        notifier: Notifier,
        threshold: float = 3.5,
    ):
        self._statistics = statistics
        self._notifier = notifier
        self._threshold = threshold

    def check_student(self, student: Student) -> None:
        average = self._statistics.average_by_student(student)
        if average < self._threshold:
            self._notifier.notify(
                f"Warning: {student.name} has low average grade {average:.2f}"
            )


if __name__ == "__main__":
    # Create a curriculum
    curriculum = Curriculum()
    # Subject
    math = Subject("Math")
    # Create a teacher
    teacher = Teacher("John Doe", 30, [math])
    # Add a subject to the curriculum
    curriculum.add_subject(math, teacher)
    # Create a student
    student = Student("Jane Doe", 20)
    # Create a journal
    journal = Journal() 
    # Give a rating to the student
    teacher.give_rating(journal, student, Subject("Math"), 4.0)
    # Check the student's performance
    performance_monitor = StudentPerformanceMonitor(AverageStatistics(journal), ConsoleNotifier())
    performance_monitor.check_student(student)
    # Print statistc
    average_statistics = AverageStatistics(journal)
    print(f"Average grade for all students: {average_statistics.average_all()}")
    print(f"Average grade for {student.name}: {average_statistics.average_by_student(student)}")
    print(f"Average grade for {math.name}: {average_statistics.average_by_subject(math)}")