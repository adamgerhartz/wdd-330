import Todo from './todoEntity.js';
import LocalStorageHelper from './ls.js';

export default class TodoModel {

	constuctor() {
		this.todoList = [];
		this.storageHelper = new LocalStorageHelper(todoList);
	}

	getAllTodos() {
		return this.todoList;
	}

	getActiveTodos() {
		const filteredList = this.todoList.filter(todo => todo.completed === false);
		return filteredList;
	}

	getCompletedTodos() {
		const filteredList = this.todoList.filter(todo => todo.completed === true);
		return filteredList;
	}

	createTodo() {

	}
}