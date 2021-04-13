export default class Alert {
	alert: HTMLElement;

	constructor(alertId: string) {
		this.alert = document.getElementById(alertId) as HTMLElement;
	}

	show(message: string) {
		this.alert.classList.remove("d-none");
		this.alert.innerText = message;
	}

	hide() {
		this.alert.classList.add("d-none");
	}
}