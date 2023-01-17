/*
    -tengo formulario
    -mi interés es agregarle li's
    -pruebo a mano
    -selector que me devuelve dicho HTML, a variable
    -llamo addEventListener a dicha variable
    -después programo la lógica, pero del input
*/

const entrada = document.querySelector("[data-form-input]");

const boton = document.querySelector("[data-form-btn]");
console.log(boton);
console.log(entrada);

boton.addEventListener("click", function (){
    console.log("prueba");
});