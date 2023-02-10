const checkComplete = (id) => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener('click', (event) => completeTask(event, id));
  
    return i;
  };

  const completeTask = (event, id) => {
    const elemento = event.target;
    elemento.classList.toggle("fas");
    elemento.classList.toggle("completeIcon");
    elemento.classList.toggle("far");
    console.log("checkeando id", id);
  };

  export default checkComplete;