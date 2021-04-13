import Model from "./models";
import AddTodo from "./components/addTodo"
import Todo from "./types"

export default class View {
	model: Model | null;
	table: HTMLTableElement;
	addTodoForm: AddTodo;

	constructor() {
		this.model = null;
		this.table = document.getElementById("table") as HTMLTableElement;
		this.addTodoForm = new AddTodo();
		this.addTodoForm.onClick(
			(title: string, description: string) => this.addTodo(title, description)
		);
	}

	setModel(model: Model) {
		this.model = model;
	}

	addTodo(title: string, description: string) {
		const todo = this.model.addTodo(title, description);
		this.createRow(todo);
	}

	toggleCompleted(id: number) {
		this.model.toggleComplete(id);
	}

	removeTodo(id: number) {
		this.model.removeTodo(id);
		document.getElementById(id.toString()).remove();
	}

	createRow(todo: Todo) {
		const row = this.table.insertRow();
		row.setAttribute("id", todo.id.toString());
		row.innerHTML = `
			<td>${todo.title}</td>
			<td>${todo.description}</td>
			<td class="text-center">
			</td>
			<td class="text-right">
				<button class="btn btn-primary mb-1">
					<i class="fa fa-pencil"></i>
				</button>
			</td>
		`;

		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.checked = todo.completed;
		checkbox.onclick = () => this.toggleCompleted(todo.id)
		row.children[2].appendChild(checkbox);

		const removeBtn = document.createElement("button");
		removeBtn.classList.add("btn", "btn-danger", "mb-1", "ml-1");
		removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
		removeBtn.onclick = () => this.removeTodo(todo.id)
		row.children[3].appendChild(removeBtn);
	}
}