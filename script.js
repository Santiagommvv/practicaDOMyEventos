//declaración de la función que quiero pasarle al listener
const crearTarea = (evento) => {
  evento.preventDefault();
  const entrada = document.querySelector('[data-form-input]');
  const valorEntrada = entrada.value;
  entrada.value = "";
  const tarea = document.querySelector('[data-tarea]');
const nuevaTarea = `<div>
                     <i class="far fa-check-square icon"></i>
                     <span class="task">${valorEntrada}</span>
                    </div>
                    <i class="fas fa-trash-alt trashIcon icon"></i>`
  tarea.innerHTML = nuevaTarea;                    
 //console.log(nuevaTarea);
}

//var que apunta al HTML que genera el botón 
const boton = document.querySelector('[data-form-btn]');

//funcionalidad del botón
boton.addEventListener('click', crearTarea);

