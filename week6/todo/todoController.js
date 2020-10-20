import TodoModel from './todoModel.js';
import TodoView  from './todoView.js';

export default class TodoController {
	constructor(parentId) {
		this.parentElement = document.getElementById('parentId');
		this.todoModel = new TodoModel();
		this.todoView = new TodoView(parentId);
	}

	showTodos() {
		const todoList = this.todoModel.getAllTodos();		
	}
}