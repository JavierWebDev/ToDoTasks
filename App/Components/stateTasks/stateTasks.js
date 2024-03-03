export class ShowStateTasks extends HTMLElement {
	constructor() {
		super();
		this.render();
	}
	render() {
		this.innerHTML = /* html */ `
        <style rel="stylesheet">
            @import "/../../../css/styles.css";
        </style>
        <section id="ContenedorEstado" class="contenedor-mostrar_tareas">
            
            <div id="TareasCompletadas" class="contenedor-tareas_completadas">
                <h1 class="titulo-tareas_completadas">Tareas Completadas</h1>
                <div id="ContenedorMostrarCompletadas" class="contenedor-mostrar">
                    <div class="tarea-estado">
                        <h3 id="NombreMostrarTarea" class="nombre-tarea_mostrar">XXX</h3>

                        <button id="ButtonModal" class="button-ver">VER</button>
                    </div>
                </div>
            </div>

            <div id="TareasFallidas" class="contenedor-tareas_fallidas">
                <h1 class="titulo-tareas_fallidas">Tareas Fallidas</h1>
                <div id="ContenedorMostrarFallidas" class="contenedor-mostrar">
                    <div class="tarea-estado">
                        <h3 id="NombreMostrarTarea" class="nombre-tarea_mostrar">XXX</h3>

                        <button id="ButtonModal" class="button-ver">VER</button>
                    </div>
                </div>
            </div>
        </section>
		`
	}
}
customElements.define("state-tasks",ShowStateTasks)