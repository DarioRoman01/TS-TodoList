document.addEventListener("DOMContentLoaded", () => {
	const title = document.getElementById("title") as HTMLInputElement;
	const description = document.getElementById("description") as HTMLInputElement;
	const btn = document.getElementById("add") as HTMLElement;
	const alert = document.getElementById("alert") as HTMLElement;
	const table = document.getElementById("table") as HTMLTableElement;
	let id = 1;

	const removeTodo = (id: string) => {
		document.getElementById(id)?.remove();
	}

	const addTodo = () => {
		if (title.value === "" || description.value === "") {
			alert?.classList.remove("d-none");
			alert.innerText = "Title and description are required"
			return
		}

		alert.classList.add("d-none");
		const row = table.insertRow();
		row.setAttribute("id", (id++).toString());
		row.innerHTML = `
			<td>${title.value}</td>
			<td>${description.value}</td>
			<td class="text-center">
				<input type="checkbox">
			</td>
			<td class="text-right">
				<button class="btn btn-primary mb-1">
					<i class="fa fa-pencil"></i>
				</button>
			</td>
		`;

		const removeBtn = document.createElement("button");
		removeBtn.classList.add("btn", "btn-danger", "mb-1", "ml-1");
		removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
		removeBtn.onclick = () => {
			removeTodo(row.getAttribute("id") as string)
		}
		row.children[3].appendChild(removeBtn);

	}

	btn.onclick = () => { addTodo(); }

});