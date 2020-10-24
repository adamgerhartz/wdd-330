import Todo from './todoEntity.js';
import LocalStorageHelper from './ls.js';

export default class TodoModel {

	constructor() {
		this.todoList = [];
		this.storageHelper = new LocalStorageHelper();
	}

	getTodoList(type) {
		this.todoList = [];
		this.todoList = this.storageHelper.getTodoList(type);
		return this.todoList;
	}

	getCompletedLength() {
		return this.storageHelper.getCompletedLength();
	}

	saveNewTodo(content) {
		const todo = {
			'id' : Date.now(),
			'content' : content,
			'completed' : false
		}
		this.storageHelper.addToList(todo);
	}

	isCompletedTodo(todoId) {
		if (this.storageHelper.isCompletedTodo(todoId)) {
			return true;
		}
		return false;
	}

	setCompleted(id, booleanValue) {
		this.storageHelper.setCompleted(id, booleanValue);
	}

	deleteFromList(id) {
		this.storageHelper.deleteFromList(id);
	}
}