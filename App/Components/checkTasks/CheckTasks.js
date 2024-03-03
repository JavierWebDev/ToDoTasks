export class MarcarTarea extends HTMLElements {
	constructor() {
		super();
		this.render();
	}
	render() {
		this.innerHTML = /* html */ `
		CODIGO HTML
		`
	}
}
customElements.define("check-tasks", MarcarTarea)