import Todo from "../types"
import Alert from "./alert";

export default class Modal {
	title: HTMLInputElement;
	description: HTMLInputElement;
	btn: HTMLButtonElement;
	completed: HTMLInputElement;
	todo: Todo;
	alert: Alert

	constructor() {
		this.title = document.getElementById("modal-title") as HTMLInputElement;
		this.description = document.getElementById("modal-description") as HTMLInputElement;
		this.btn = document.getElementById("modal-btn") as HTMLButtonElement;
		this.completed = document.getElementById("modal-completed") as HTMLInputElement;
		this.alert = new Alert("modal-alert");
	}

	setValues(todo: Todo) {
		this.todo = todo;
		this.title.value = todo.title;
		this.description.value = todo.description;
		this.completed.checked = todo.completed;
	}

	onClick(callback: Function) {
		this.btn.onclick = () => {
			if(!this.title.value || !this.description.value) {
				this.alert.show("Title and Description are required");
				return;
			}

			// @ts-ignore
			$("#modal").modal("toggle");

			callback(this.todo.id, {
				title: this.title.value,
				description: this.description.value,
				completed: this.completed.checked
			});
		}
	}

	
}