/*
Нужно взять обект ToDoList и новый обьект newTask  с расширеным полями и последовательно примените все методы его на новый объект:

Расширение задачи
Ввод нового типа задачи с дополнительным свойством Description.
Цель: расширить функциональность без изменения исходных методов.
*/

const ToDoList = {

    tasks: [
        {
            title: 'Помыть посуду',
            id: 1,
            priority: 1
        }
    ],
    addTask(title, id, priority) {
        this.tasks.push({ title, id, priority: parseInt(priority) });
    },
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    },
    updateTask(id, title, priority) {
        this.tasks = this.tasks.map(task => task.id === id ? { ...task, title, priority } : task);
    },
    sortTasksByPriority() {
        this.tasks.sort((a, b) => a.priority - b.priority);
    }
}

const newTask = {
    tasks: [
        {
            id: 1,
            name: 'Вымыть пол',
            description: 'Желательно вымыть весь под, но если нет времени, помыть полк в кухне и коридоре',
            order: 0
        }
    ],
};

// bind привязывает this к newTask — методы всегда работают с newTask.tasks
newTask.addTask = ToDoList.addTask.bind(newTask);
newTask.deleteTask = ToDoList.deleteTask.bind(newTask);
newTask.updateTask = ToDoList.updateTask.bind(newTask);
newTask.sortTasksByPriority = ToDoList.sortTasksByPriority.bind(newTask);


