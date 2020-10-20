import TodoController from './todoController.js'

const todoController = new TodoController('todo-main');
window.addEventListener('load', ()=> {
	todoController.showTodos();
});