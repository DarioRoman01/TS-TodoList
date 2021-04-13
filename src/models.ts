import View from "./view";
import Todo, { TodoProps } from "./types"

export default class Model {
	view: View | null;
	todos: Todo[];
	currentId: number;

	constructor() {
		this.view = null;
		this.todos = JSON.parse(localStorage.getItem("todos"));
		if (!this.todos || this.todos.length < 1) {
			this.todos = [
				{
					id: 0,
					title: "Learn js",
					description: "Watch js tutorials",
					completed: false,
				}
			]
			this.currentId = 1;
		} else {
			this.currentId = this.todos[this.todos.length - 1].id+1;
		}
	}

	setView(view: View): void {
		this.view = view
	}

	save() {
		localStorage.setItem("todos", JSON.stringify(this.todos));
	}

	getTodos(): Todo[] {
		return this.todos;
	}

	findTodo(id: number): number {
		return this.todos.findIndex((todo: Todo) => todo.id === id);
	}

	editTodo(id: number, values: TodoProps) {
		const index = this.findTodo(id);
		Object.assign(this.todos[index], values);
		this.save();
	}

	toggleComplete(id: number) {
		const index = this.findTodo(id);
		const todo = this.todos[index];
		todo.completed = !todo.completed;
		this.save();
	}

	addTodo(title: string, description: string): Todo {
		const todo: Todo = {
			id: this.currentId++,
			title,
			description,
			completed: false,
		}
		
		this.todos.push(todo);
		this.save();
		return {...todo};
	}

	removeTodo(id: number) {
		const index = this.findTodo(id);
		this.todos.splice(index, 1);
		this.save();
	}
}