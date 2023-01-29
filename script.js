const boton = document.querySelector('[data-form-btn]');

const checkComplete = () => {
  const i = document.createElement("i");
  i.classList.add("far");
  i.classList.add("fa-check-square");
  i.classList.add("icon");

  return i;
}


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
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);  // <div> append: <i fontawesome></i> 
                                       // append: <span>innerText=valorEntrada</span>
  task.appendChild(taskContent);       // <li> recibe taskContent            
  listaTareas.appendChild(task);       // <ul data-list> recibe task
}

//evento
boton.addEventListener('click', creartask);
/*agregar diferentes eventos*/ 

