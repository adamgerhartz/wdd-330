import TodoController from './todoController.js'

const todoController = new TodoController('todo-main', 'add-todo');
window.addEventListener('load', ()=> {
	todoController.showTodos();
});