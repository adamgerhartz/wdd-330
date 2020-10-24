import TodoModel from './todoModel.js';
import TodoView  from './todoView.js';

export default class TodoController {
	constructor(parentId, addTodoId) {
		this.parentElement = document.getElementById(parentId);
		this.addTodoContainer = document.getElementById(addTodoId);
		this.todoModel = new TodoModel();
		this.todoView = new TodoView(parentId);
		this.error = false;
		this.todoList = [];
		this.taskLength = 0;
		this.completedLength = 0;
		this.todoElements = [];
		this.type = 'all';
	}

	showTodos(todos = this.todoModel.getTodoList('all')) {
		this.todoList = todos;
		this.taskLength = this.todoList.length;
		this.completedLength = this.todoModel.getCompletedLength();
		console.log(this.completedLength);
		this.todoView.renderTodoList(this.todoList, this.parentElement, this.taskLength, this.completedLength, this.type);
		this.todoView.renderAddTodo(this.addTodoContainer);
		
		if (this.todoList.length > 0 ) {
			this.todoElements = this.pinpointTodoLocations();
			for (const todoElement of this.todoElements) {
				let checkboxElement = this.pinpointCheckboxLocation(todoElement);
				if (this.todoModel.isCompletedTodo(todoElement.getAttribute('data-id'))) {
					this.performCompletion(todoElement, checkboxElement);
				} 
				
			}
		}
		this.addEventListeners();		
	}

	performCompletion(todo, checkbox) {
		let textElement = this.pinpointTextLocation(todo);
		this.todoView.displayCheck(checkbox, 'black');
		this.todoView.setTextDecoration(textElement, true);
		this.taskLength = this.taskLength - 1;
		this.completedLength = this.todoModel.getCompletedLength();
		this.todoView.renderBottomFilterChange(this.taskLength, this.completedLength, this.parentElement, this.type);
	}

	performIncompletion(todo, checkbox) {
		let textElement = this.pinpointTextLocation(todo);
		this.todoView.displayCheck(checkbox, 'white');
		this.todoView.setTextDecoration(textElement, false);
		this.taskLength = this.taskLength + 1;
		this.completedLength = this.todoModel.getCompletedLength();
		this.todoView.renderBottomFilterChange(this.taskLength, this.completedLength, this.parentElement, this.type);
	}

	addEventListeners() {
		this.listenForFocusEventOnTodoElement();
		this.listenForAddTodoEvent();
		this.listenForCheckboxes();
		this.listenForDeleteEvents();
		this.listenForFilterEvents();
	}

	listenForCheckboxes() {
		for (const todoElement of this.todoElements) {
			let checkboxElement = this.pinpointCheckboxLocation(todoElement);
			checkboxElement.addEventListener('click', ()=> {
				this.checkCompletion(todoElement, checkboxElement);
			});
			
		}
			
	}

	listenForDeleteEvents() {
		this.todoElements = this.pinpointTodoLocations();
		for (const todoElement of this.todoElements) {
			let deleteBtn = this.pinpointTrashLocation(todoElement);
			deleteBtn.addEventListener('click', ()=> {
				this.todoModel.deleteFromList(todoElement.getAttribute('data-id'));
				const todos = this.todoModel.getTodoList(this.type);
				this.showTodos(todos);
			});
		}
		
	}


	listenForFilterEvents() {
		let all, active, completed = '';
		all = this.parentElement.children[this.parentElement.childElementCount - 2].children[1];
		active = this.parentElement.children[this.parentElement.childElementCount - 2].children[2];
		completed = this.parentElement.children[this.parentElement.childElementCount - 2].children[3]; 

		all.addEventListener('click', ()=> {
			this.type = 'all';
			const todos = this.todoModel.getTodoList(this.type);
			this.showTodos(todos);
		});
		
		active.addEventListener('click', ()=> {
			this.type = 'active';
			const todos = this.todoModel.getTodoList(this.type);
			this.showTodos(todos);
		});

		completed.addEventListener('click', ()=> {
			this.type = 'completed';
			const todos = this.todoModel.getTodoList(this.type);
			this.showTodos(todos);
		});

	}



	checkCompletion(todo, checkbox) {
		let textElement = this.pinpointTextLocation(todo);
		if (!this.todoModel.isCompletedTodo(todo.getAttribute('data-id'))) {
			this.todoModel.setCompleted(todo.getAttribute('data-id'), true);
			const todos = this.todoModel.getTodoList(this.type);
			this.showTodos(todos);
		} else {
			this.todoModel.setCompleted(todo.getAttribute('data-id'), false);
			this.performIncompletion(todo, checkbox);
			const todos = this.todoModel.getTodoList(this.type);
			this.showTodos(todos);
		}
	} 

	pinpointTodoLocations() {
		const checkboxes = '';
		const children = [...this.parentElement.children];
		const todosOnlyArray = children.slice(0, this.parentElement.childElementCount - 2);
		return todosOnlyArray;
	}

	pinpointCheckboxLocation(todo) {
		return todo.children[0].children[0].children[0];
	}

	pinpointTrashLocation(todo) {
		return todo.children[0].children[2].children[0];
	}

	pinpointTextLocation(todo) {
		return todo.children[0].children[1];
	}

	pinpointAddTextLocation() {
		return this.parentElement.children[this.parentElement.childElementCount - 1].children[0];
	}

	pinpointAddButtonLocation() {
		return this.parentElement.children[this.parentElement.childElementCount -1].children[1];
	}
 
	listenForFocusEventOnTodoElement() {
		const element = this.pinpointAddTextLocation();
		const btn = this.pinpointAddButtonLocation();
		element.addEventListener('focus', ()=> {
			this.todoView.getRidOfPlaceholder(element);
			if (this.error === true) {
				this.todoView.resetBorder(element);
				this.todoView.resetIcon(btn);
				this.error = false;
			}
		});

		element.addEventListener('blur', ()=> {
			this.todoView.addPlaceholder(element);
		});
	}

	listenForAddTodoEvent() {
		const input = this.pinpointAddTextLocation();
		const btn = this.pinpointAddButtonLocation();

		input.addEventListener('keyup', (event)=> {
			if (event.keyCode === 13) { // if a user hits enter on the keyboard
				btn.click();
			}
		});

		btn.addEventListener('click', ()=> {
			if (input.value !== '') {
				this.todoModel.saveNewTodo(input.value);
				const todos = this.todoModel.getTodoList(this.type);
				this.showTodos(todos);
			} else {
				this.todoView.showErrorBorder(input);
				this.todoView.showErrorIcon(btn);
				this.error = true;
			}
		});

		btn.addEventListener('blur', ()=> {
			if (this.error === true) {
				this.todoView.resetIcon(btn);
			}
		})
	}
}