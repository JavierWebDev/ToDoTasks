export class AddTaskForm extends HTMLElement {
	constructor() {
		super();
		this.render();
	}
	render() {
		this.innerHTML = /* html */ `
        <style rel="stylesheet">
            @import "/../../../css/styles.css";
        </style>
		<section id="SectionAddTask" class="contenedor-anadir_tareas">
            <h2 class="contenedor-subtitulo">Añadir tarea</h2>

            <form id="ContenedorFormulario" class="contenedor-formulario_anadir">
                <div class="contenedor-anadir_nombre">
                    <label class="contenedor-label" for="InputNombreTarea">Nombre De La Tarea</label>
                    <input class="input" id="InputNombreTarea" type="text">
                </div>

                <div class="contenedor-anadir_fecha">
                    <div id="ContenedorInputInicio" class="contenedor-inputs_fechas">
                        <label class="contenedor-label_fechas" for="InputFechaInicio">Fecha De Inicio</label>
                        <input class="input-fecha input" type="date" id="InputFechaInicio" class="anadir-fecha">
                    </div>

                    <div id="ContenedorInputFin" class="contenedor-inputs_fechas">
                        <label class="contenedor-label_fechas" for="InputFechaFin">Fecha De Fin</label>
                        <input class="input-fecha input" type="date" id="InputFechaFin" class="anadir-fecha">
                    </div>
                </div>

                <div class="contenedor-anadir_descripcion">
                    <label class="contenedor-label contenedor-label_descripcion" for="InputDescripcion">Descripcion</label>
                    <textarea class="input-descripcion" id="InputDescripcion"></textarea>
                </div>

                <div class="contenedor-anadir_importancia">
                    <label class="contenedor-label contenedor-label_importancia" for="InputImportancia">Prioridad De La Tarea</label>
                    <div class="contenedor-input_importancia"> 
                        <select class="input-importancia" id="InputImportancia">
                            <option class="input-importancia_baja" value="low">Baja</option>
                            <option class="input-importancia_alta" value="high">Alta</option>
                        </select>
                    </div>
                </div>

                <div class="input-enviar_tarea">
                    <button id="InputEnviar" class="input-enviar">AÑADIR</button>
                </div>
            </form>
        </section>
		`
	}
}
customElements.define("taskadd-form",AddTaskForm)