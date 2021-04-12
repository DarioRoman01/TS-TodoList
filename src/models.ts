import View from "./view";

export default class Model {
	view: View | null;
	todos: [];

	constructor() {
		this.view = null;
		this.todos = [];
	}

	setView(view: View): void {
		this.view = view
	}

	getTodos() {
		return this.todos;
	}

	addTodo(title: string, description: string) {
		const todo = {
			id: 0,
			title: title,
			description: description,
			completed: false,
		}
		console.log(todo)
	}
}