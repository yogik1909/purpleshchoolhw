/*
Написать объект ToDoList, который хранит в себе задачи { ‘title’: ‘Помыть посуду’, id: 1, priority: 1 } и имеет методы:

Добавить задачу
Удалить задачу по id
Обновить имя или приоритет по Id
Отсортировать задачи по приоритету
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