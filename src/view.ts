import Model from "./models";

export default class View {
	model: Model | null;
	table: HTMLTableElement;

	constructor() {
		this.model = null;
		this.table = document.getElementById("table") as HTMLTableElement;
		const btn = document.getElementById("add") as HTMLElement;
		btn.onclick = () => {
			this.addTodo("title", "desc")
		}
	}

	setModel(model: Model) {
		this.model = model;
	}

	addTodo(title: string, description: string) {
		this.model?.addTodo(title, description);
	}
}