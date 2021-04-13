import Alert from "./alert";

export default class AddTodo {
	btn: HTMLButtonElement;
	title: HTMLInputElement;
	description: HTMLInputElement;
	alert: Alert;

	constructor() {
		this.btn = document.getElementById("add") as HTMLButtonElement;
		this.title = document.getElementById("title") as HTMLInputElement;
	 	this.description = document.getElementById("description") as HTMLInputElement;
		this.alert = new Alert("alert");
	}

	onClick(callback: Function) {
		this.btn.onclick = () => {
			if (this.title.value === "" || this.description.value === "") {
				this.alert.show("title and description are required");
			} else {
				this.alert.hide();
				callback(this.title.value, this.description.value);
			}
		}
	}
}