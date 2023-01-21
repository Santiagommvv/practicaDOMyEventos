//var que apunta al HTML que genera el botón 
const boton = document.querySelector('[data-form-btn]');

//declaración de la función que quiero pasarle al listener
const crearTarea = (evento) => {
  evento.preventDefault();
  
  const entrada = document.querySelector('[data-form-input]');
  const listaTareas = document.querySelector('[data-list]');
  const valorEntrada = entrada.value;
    entrada.value = "";

  const tarea = document.createElement('li');
  const contenido = `<div>
                     <i class="far fa-check-square icon"></i>
                     <span class="task">${valorEntrada}</span>
                    </div>
                    <i class="fas fa-trash-alt trashIcon icon"></i>`;

   tarea.innerHTML = contenido;                    
   listaTareas.appendChild(tarea);
}

//funcionalidad del botón
boton.addEventListener('click', crearTarea);

