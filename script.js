//var que apunta al HTML que genera el botón 
const boton = document.querySelector("[data-form-btn]");

//declaración de la función que quiero pasarle al listener
const crearTarea = (evento) => {
    evento.preventDefault();
    const entrada = document.querySelector("[data-form-input]");
    const valorEntrada = (entrada.value);
}

//funcionalidad del botón
boton.addEventListener('click', crearTarea);