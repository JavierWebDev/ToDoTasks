export class MarcarTarea extends HTMLElement {
	constructor() {
		super();
		this.render();
	}
	render() {
		this.innerHTML = /* html */ `
		<section id="SectionMarcar" class="contenedor-marcar_tareas">
			<h2 class="contenedor-subtitulo">Gestor De Tareas</h2>

			<div id="ContenedorMarcarEstado" class="contenedor-tareas_select">
				<div id="Tarea" class="tarea-check prioridad-baja">
					<h3 class="nombre-tarea" id="NombreTarea">xxxx</h3>

					<label for="NombreTarea" id="LabelIntensidad class="">xxx</label>

					<div id="ContenedorSeleccionar" class="contenedor-select_check">
						<button id="BotonCompletada" class="seleccionar-btn"><box-icon name='check-circle' color='#56d324' ></box-icon></button>
						<button id="BotonPendiente" class="seleccionar-btn"><box-icon name='x-circle' color='#ec2a13'></box-icon></button>
					</div>
				</div>
			</div>
		</section>
		`
	}
}
customElements.define("check-tasks", MarcarTarea)