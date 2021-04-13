export default class AddTodo {
	btn: HTMLButtonElement;
	title: HTMLInputElement;
	description: HTMLInputElement;

	constructor() {
		this.btn = document.getElementById("add") as HTMLButtonElement;
		this.title = document.getElementById("title") as HTMLInputElement;
	 	this.description = document.getElementById("description") as HTMLInputElement;
	}

	onClick(callback: Function) {
		this.btn.onclick = () => {
			if (this.title.value === "" || this.description.value === "") {
				console.error("Incorrecto");
			} else {
				callback(this.title.value, this.description.value);
			}
		}
	}
}