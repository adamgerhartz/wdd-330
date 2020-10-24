class TodoView {



	renderTodoList(todoList, todoElement, taskLength, completedLength, type) {
		console.log(type);
		todoElement.innerHTML = '';
		todoList.forEach(todo => {
			todoElement.appendChild(this.renderOneTodo(todo));
		});
		todoElement.appendChild(this.renderBottomFilter(taskLength, completedLength, type));
		todoElement.appendChild(this.renderAddTodo());
	}

	renderOneTodo(todo) {
		const item = document.createElement('div');
		item.classList.add('todo-class');
		item.setAttribute('data-id', todo.id);
		item.innerHTML = `<div id='todo'><span id="checkbox"><i class="gg-check-o"></i></span><span id="todo-text">${todo.content}</span><div id="trash-cont"><i class="gg-trash"></i></div></div>`;
		return item;
	}

	renderBottomFilter(taskLength, completedLength, type) {
		const item = document.createElement('div');
		item.classList.add('bottom');
		item.innerHTML = `<p id='bottom-bar'>${(type !== 'completed') ? taskLength + ' task(s) left' : completedLength + ' completed task(s)'}</p><span id='all' ${type === 'all' ? 'class="highlighted"' : ''}>All</span><span id='active' ${type === 'active' ? 'class="highlighted"' : ''}>Active</span><span id='completed' ${type === 'completed' ? 'class="highlighted"' : ''}>Completed</span>`;
		console.log(item);
		return item;
	}

	renderBottomFilterChange(taskLength, completedLength, todoElement, type) {
		console.log(todoElement.children);
		todoElement.removeChild(todoElement.children[todoElement.childElementCount - 1])
		todoElement.removeChild(todoElement.children[todoElement.childElementCount - 1])
		todoElement.appendChild(this.renderBottomFilter(taskLength, completedLength, type));
		todoElement.appendChild(this.renderAddTodo());
	}

	renderAddTodo() {
		const item = document.createElement('div');
		item.classList.add('todo-add-class');
		item.setAttribute('class', 'add-todo-div')
		item.innerHTML = `<input type='text' id='add-text' placeholder='Add todo here ...'><div id="icon"><i class="gg-add-r"></i></div>`;
		return item;
	}

	getRidOfPlaceholder(element) {
		element.placeholder = '';
	}

	addPlaceholder(element) {
		element.placeholder = 'Add todo here ...';
	}

	showErrorIcon(element) {
		element.style.color = 'red';
	}

	resetIcon(element) {
		element.style.color = '#197bbd';
	}

	showErrorBorder(element) {
		element.style.border = '1px solid red'; 
	}

	resetBorder(element) {
		element.style.border = 'none';
	}

	displayCheck(checkbox, color) {
		console.log("YES");
		checkbox.style.backgroundColor = color;
		console.log(checkbox.style.backgroundColor);
	}

	setTextDecoration(el, bool) {
		if (bool === true) {
			el.style.textDecoration = 'line-through';
		} else {
			el.style.textDecoration = 'none';
		}
	}
 
}
export default TodoView;