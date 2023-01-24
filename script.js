//var que apunta al HTML que genera el botón 
const boton = document.querySelector('[data-form-btn]');

const checkComplete = () => {
  const i = document.createElement("i");
  i.classList.add("far");
  i.classList.add("fa-check-square");
  i.classList.add("icon");

  return i;
}

//re-escrito
const creartask = (evento) => {
  evento.preventDefault();
  
  const entrada = document.querySelector('[data-form-input]');
  const listaTareas = document.querySelector('[data-list]');
  const valorEntrada = entrada.value;
    entrada.value = "";

  const task = document.createElement('li');
    task.classList.add('card');

    const taskContent = document.createElement("div");
    
    taskContent.appendChild(checkComplete());

    const titleTask = document.createElement("span");
    titleTask.classList.add("task");

    titleTask.innerText = value
    task.appendChild(taskContent);
    taskContent.appendChild(titleTask);


  const content = `<div>
                     ${checkComplete()};
                     <span class="task">${valorEntrada}</span>
                    </div>
                    <i class="fas fa-trash-alt trashIcon icon"></i>`;
   task.innerHTML = content;                    
   listatasks.appendChild(task);
}



//funcionalidad del botón
boton.addEventListener('click', creartask);

