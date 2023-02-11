import { addTask } from './componentes/addTask.js';
import { displayTasks } from './componentes/readTasks.js';

const btn = document.querySelector('[data-form-btn]');

//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);

displayTasks();