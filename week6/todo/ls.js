export default class LocalStorageHelper {
	constructor() {
		this.keys = Object.keys(localStorage);
		this.length = this.keys.length;
		this.intKeys = [];
		this.tempIntKeys = [];
		console.log(localStorage);
	}

	addToList(obj) {
		const listValues = [obj['content'], obj['completed']];
		localStorage.setItem(obj['id'], JSON.stringify(listValues));
	}

	getCompletedLength() {
		const todoList = this.getTodoList('completed');
		return todoList.length;
	}

	getTodoList(type) {
		let todos = [],
			keys = Object.keys(localStorage),
			i = keys.length;

			// sort numerically and make string again
			for (let index = 0; index < i; index++) {
				keys[index] = parseInt(keys[index]);
			}
			keys = keys.sort(this.numerically);
			for (let index = 0; index < i; index++) {
				keys[index] = keys[index].toString();
			}


		while (i--) {
			const values = JSON.parse(localStorage.getItem(keys[i]));
			const content = values[0];
			const completed = values[1]; 

			todos.push({
					'id' : keys[i], 
					'content' : content,
					'completed' : completed
				});
		}

		if (type === 'all') {
			console.log('ALL');
			return todos;
		} else if (type === 'active') {
			console.log('ACTIVE');
			return todos.filter(todo => todo.completed === false);
		} else {
			console.log('COMPLETED');
			return todos.filter(todo => todo.completed === true);
		}
	}

	numerically (a,b) {
	    if (a < b) {
	        return -1;
	    } else if (a> b) {
	        return 1;
	    } else {
	        return 0;
	    }
	}

	isCompletedTodo(id) {
		const values = JSON.parse(localStorage.getItem(id));
		if (values[1] === false) {
			return false;
		} else {
			return true;
		}
	}

	setCompleted(id, value) {
		const values = JSON.parse(localStorage.getItem(id));
		if (value === false) {
			values[1] = false;
		} else {
			values[1] = true;
		}

		localStorage.setItem(id, JSON.stringify(values));
	}

	deleteFromList(id) {
		localStorage.removeItem(id);
	}
}