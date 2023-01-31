import checkComplete from "./componentes/checkComplete.js"; /*necesita un servidor, o viola CORS*/ 
import deleteIcon from "./componentes/deleteIcon.js";

const boton = document.querySelector('[data-form-btn]');

const creartask = (evento) => {
  //no refresques
  evento.preventDefault();
  
  //declaraciones
  const entrada = document.querySelector('[data-form-input]');
  const listaTareas = document.querySelector('[data-list]');
  const valorEntrada = entrada.value;
  const task = document.createElement('li');
  const taskContent = document.createElement("div");
  const titleTask = document.createElement("span");

  //estilos
  task.classList.add('card');
  titleTask.classList.add("task");
  
  //comportamiento
  entrada.value = "";
  titleTask.innerText = valorEntrada;
  taskContent.appendChild(checkComplete());  // div ap <i>
  taskContent.appendChild(titleTask);        // div ap span, c/innerText
  task.appendChild(taskContent);             // li ap la estructura anterior
  task.appendChild(deleteIcon());            // li ap <i>
  listaTareas.appendChild(task);             // <ul data-list> ap li
}

//evento
boton.addEventListener('click', creartask);

//})(); //IIFE para agregar después.