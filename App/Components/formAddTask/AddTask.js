
export class AddTaskForm extends HTMLElement {
	constructor() {
		super();
		this.render();
        this.saveDataLocal()
        this.ctrlBtns();
	}
	render() {
		this.innerHTML = /* html */ `
        <style rel="stylesheet">
            @import "/../../../css/styles.css";
        </style>
		<section id="SectionAddTask" class="contenedor-anadir_tareas">
            <h2 class="contenedor-subtitulo">Añadir tarea</h2>

            <div id="ContenedorBotonesForm" class="contenedor-botones_generales">
                <button class="button-activate_add" id="BtnActivar"><box-icon name='plus-circle' color='#ffffff' ></box-icon></button>
                <button class="disabled" id="BtnCancel" disabled><box-icon name='x-circle' color='#ffffff' ></box-icon></button>
                <button class="disabled" id="BtnEditar"><box-icon name='edit' color='#ffffff' ></box-icon></button>
            </div>

            <form id="ContenedorFormulario" class="contenedor-formulario_anadir">
                <div class="contenedor-anadir_nombre">
                    <label class="contenedor-label" for="InputNombreTarea">Nombre De La Tarea</label>
                    <input name="InputNombreTarea" class="inpt input" id="InputNombreTarea" type="text">
                </div>

                <div class="contenedor-anadir_fecha">
                    <div id="ContenedorInputInicio" class="contenedor-inputs_fechas">
                        <label class="contenedor-label_fechas" for="InputFechaInicio">Fecha De Inicio</label>
                        <input name="InputFechaInicio" class="inpt input-fecha input" type="date" id="InputFechaInicio" class="anadir-fecha">
                    </div>

                    <div id="ContenedorInputFin" class="contenedor-inputs_fechas">
                        <label class="contenedor-label_fechas" for="InputFechaFin">Fecha De Fin</label>
                        <input name="InputFechaFin" class="inpt input-fecha input" type="date" id="InputFechaFin" class="anadir-fecha">
                    </div>
                </div>

                <div class="contenedor-anadir_descripcion">
                    <label class="contenedor-label contenedor-label_descripcion" for="InputDescripcion">Descripcion</label>
                    <textarea name="InputDescripcion" class="inpt input-descripcion" id="InputDescripcion"></textarea>
                </div>

                <div class="contenedor-anadir_importancia">
                    <label class="contenedor-label contenedor-label_importancia" for="InputImportancia">Prioridad De La Tarea</label>
                    <div class="contenedor-input_importancia"> 
                        <select name="InputImportancia" class="inpt input-importancia" id="InputImportancia">
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
    saveDataLocal = () => {
        const formRegistro = document.querySelector("#ContenedorFormulario")
        document.querySelector("#InputEnviar").addEventListener("click", (e) => {
            const data = Object.fromEntries(new FormData(formRegistro).entries())

            console.log(data)

            e.stopImmediatePropagation()
            e.preventDefault()
        })
    }

    ctrlBtns = () => {
        const BtnActivar = document.querySelector("#BtnActivar");
        const BtnCancel = document.querySelector("#BtnCancel");
        const BtnEditar = document.querySelector("#BtnEditar");
    
        const inputs = document.querySelectorAll(".inpt");
        
        inputs.forEach(input => {
            input.disabled = true;
        });

        BtnActivar.addEventListener("click", () => {
            inputs.forEach(input => {
                input.disabled = false;
            });
    
            BtnActivar.classList.add("disabled");
            BtnActivar.classList.remove("button-activate_add");
            BtnActivar.disabled = true;
    
            BtnCancel.classList.remove("disabled");
            BtnCancel.classList.add("button-activate_add");
            BtnCancel.disabled = false;
    
            BtnEditar.classList.remove("disabled");
            BtnEditar.classList.add("button-activate_add");
            BtnEditar.disabled = false;
        });
    
        BtnCancel.addEventListener("click", () => {
            inputs.forEach(input => {
                input.disabled = true;
            });
    
            BtnActivar.classList.remove("disabled");
            BtnActivar.classList.add("button-activate_add");
            BtnActivar.disabled = false;
    
            BtnCancel.classList.add("disabled");
            BtnCancel.classList.remove("button-activate_add");
            BtnCancel.disabled = true;
    
            BtnEditar.classList.add("disabled");
            BtnEditar.classList.remove("button-activate_add");
            BtnEditar.disabled = true;
        });
    }


}
customElements.define("taskadd-form",AddTaskForm)