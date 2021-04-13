import Model from "./models";
import AddTodo from "./components/addTodo";
import Todo, { TodoProps } from "./types";
import Modal from "./components/modal";

export default class View {
	model: Model | null;
	table: HTMLTableElement;
	addTodoForm: AddTodo;
	modal: Modal;

	constructor() {
		this.model = null;
		this.table = document.getElementById("table") as HTMLTableElement;
		this.addTodoForm = new AddTodo();
		this.modal = new Modal();

		this.addTodoForm.onClick((title: string, description: string) => this.addTodo(title, description));
		this.modal.onClick((id: number, values: TodoProps) => this.editTodo(id, values));
	}

	setModel(model: Model) {
		this.model = model;
	}

	render() {
		const todos = this.model.getTodos();
		todos.forEach(todo => this.createRow(todo));
	}

	addTodo(title: string, description: string) {
		const todo = this.model.addTodo(title, description);
		this.createRow(todo);
	}

	toggleCompleted(id: number) {
		this.model.toggleComplete(id);
	}

	editTodo(id: number, values: TodoProps) {
		this.model.editTodo(id, values);
		const row = document.getElementById(id.toString()) as any;
		row.children[0].innerText = values.title
		row.children[1].innerText = values.description
		row.children[2].children[0].checked = values.completed;
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
			</td>
		`;

		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.checked = todo.completed;
		checkbox.onclick = () => this.toggleCompleted(todo.id)
		row.children[2].appendChild(checkbox);
		
		const editBtn = document.createElement("button");
		editBtn.classList.add("btn", "btn-primary", "mb-1");
		editBtn.innerHTML = '<i class="fa fa-pencil"></i>';
		editBtn.setAttribute("data-toggle", "modal");
		editBtn.setAttribute("data-target", "#modal");
		editBtn.onclick = () => this.modal.setValues(todo);
		row.children[3].appendChild(editBtn);

		const removeBtn = document.createElement("button");
		removeBtn.classList.add("btn", "btn-danger", "mb-1", "ml-1");
		removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
		removeBtn.onclick = () => this.removeTodo(todo.id)
		row.children[3].appendChild(removeBtn);
	}
}