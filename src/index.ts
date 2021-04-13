import Model from "./models";
import View from "./view"

document.addEventListener("DOMContentLoaded", () => {
	const model = new Model();
	const view = new View();
	model.setView(view);
	view.setModel(model);

	view.render();
});