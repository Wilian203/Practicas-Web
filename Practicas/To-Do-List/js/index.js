
// Referencia al Dom
let btnAgregar = document.getElementById('agregar');
let btnEliminar =  document.getElementById('eliminar');

const agregarTarea = ()=>{
    let nuevaTareaTexto =  document.getElementById('nuevaTarea').value;
    if(nuevaTareaTexto === ""){
        alert('Debe agregar una tarea')
        return;
    }

    // Creamos el elemnento li
    let nuevaTarea =  document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto;

    let lista =  document.getElementById('lista');

    lista.appendChild(nuevaTarea);

    document.getElementById('nuevaTarea').value = '';
   
}


const elimitarTareas  = () =>{
    let lista =  document.getElementById('lista');
    lista.innerHTML = ' ';
}


btnAgregar.addEventListener('click', ()=>{
    agregarTarea();
    
})

btnEliminar.addEventListener('click', ()=>{
   elimitarTareas();
})