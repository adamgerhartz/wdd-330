export default class Todo {
	constructor(id, content, completed) {
		this.id = id;
		this.content = content;
		this.completed = completed;
	}

	getId() {
		return this.id;
	}
}