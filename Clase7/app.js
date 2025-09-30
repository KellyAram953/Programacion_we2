//Inicamos con un arreglo para almacenar tareas
let tareas = [];

// funcion para mostrar el menu de opciones
function mostrarMenu(){
    return parseInt( prompt(`
        Opciones Disponibles:
        1.- Agregar tarea.
        2.-Ver todas las tareas.
        3.-Marcar tarea como completada.
        4.-Eliminar tarea
        5.-Salir.
        "Elige una opcion"
        `));
}

//Funcion para agregar tarea 
function agregarTarea(){
    let nombre = prompt("Introduce  el nombre de la tarea");
    if(nombre){
        //agregar una tarea
        let tarea = {
            nombre: nombre,
            completado: false 
        };

        tareas.push(tarea);
        alert("¡La tarea se agrego de manera exitosa!")

    }else{
        alert("El nombre de la tarea no puede estar vacio");
    }
}

//Funcion para ver todas las tareas

function verTareas(){
    if( tareas.length === 0){
        alert("No hay tareas en la lista ") /n;
    }else{
        let mensaje = "Lista de tareas";
        tareas.forEach((tarea,index)=>{
            mensaje+=`${index + 1}.- ${tarea.nombre} [${tarea.completado ? "Completada" :"Pendiente"}]\n`;
        });
        alert(mensaje);
    }
}

//Function para mostra tarea marcada
function tareaCompletada(){
    /* if(tareas.length === 0){         
        alert("No hay tareas disponibles para completar.");     
        return;     
    }      

    let indice = parseInt(prompt("Introduce el número de la tarea que quieres marcar como completada:"));      

    if(indice > 0 && indice <= tareas.length){         
        tareas[indice - 1].completado = true;         
        alert(`La tarea "${tareas[indice - 1].nombre}" ha sido marcada como completada.`);     
    }else{         
        alert("Número de tarea inválido.");     
    } */
   if (tareas.length === 0) {
        alert("No hay tareas en la lista.");
        return;
    }

    // Filtrar solo las tareas pendientes
    let pendientes = tareas.filter(t => !t.completado);

    if (pendientes.length === 0) {
        alert("Todas las tareas ya están completadas 🎉");
        return;
    }

    // Crear el mensaje con las tareas pendientes
    let mensaje = "Tareas pendientes:\n";
    pendientes.forEach((tarea, index) => {
        mensaje += `${index + 1}.- ${tarea.nombre}\n`;
    });

    // Pedir al usuario cuál quiere marcar
    let numero = parseInt(prompt(mensaje + "\nIntroduce el número de la tarea a completar:"));

    if (numero > 0 && numero <= pendientes.length) {
        // Buscar la tarea real en el arreglo original
        let tareaSeleccionada = pendientes[numero - 1];
        let indiceReal = tareas.indexOf(tareaSeleccionada);

        tareas[indiceReal].completado = true;
        alert(`La tarea "${tareaSeleccionada.nombre}" ha sido marcada como completada .`);
    } else {
        alert("Número de tarea inválido.");
    }
}

//Function eliminar tarea
function eliminarTarea(){
   /* function eliminarTarea() {
    if (tareas.length === 0) {
        alert("No hay tareas disponibles para eliminar.");
        return;
    }

    let listaEliminar = "Seleccione la tarea a eliminar:\n\n";
    tareas.forEach((t, i) => {
        listaEliminar += `${i + 1}. ${t.nombre} [${t.completado ? "Completada" : "Pendiente"}]\n`;
    });

    let idxEliminar = parseInt(prompt(listaEliminar)) - 1;

    if (tareas[idxEliminar]) {
        alert(`La tarea "${tareas[idxEliminar].nombre}" fue eliminada.`);
        // sin splice, usando filter:
        tareas = tareas.filter((_, i) => i !== idxEliminar);
    } else {
        alert("Número de tarea inválido.");
    }
}*/

//muestra las tareas  diferencia del primero 
if (tareas.length === 0) {
        alert("No hay tareas disponibles para eliminar.");
        return;
    }

    let listaEliminar = "Seleccione la tarea a eliminar:\n\n";
    tareas.forEach((t, i) => {
        listaEliminar += `${i + 1}. ${t.nombre} [${t.completado ? "Completada" : "Pendiente"}]\n`;
    });

    let idxEliminar = parseInt(prompt(listaEliminar)) - 1;

    if (idxEliminar >= 0 && idxEliminar < tareas.length) {
        let eliminada = tareas[idxEliminar].nombre;
        tareas.splice(idxEliminar, 1); // 🔹 Aquí sí conviene usar splice
        alert(`La tarea "${eliminada}" fue eliminada.`);
    } else {
        alert("Número de tarea inválido.");
    }

}

// funcion para manejar el flujo de nuestro programa
function iniciarPrograma(){
    let continuar = true;

    while(continuar){
            let opcion= mostrarMenu();

            switch(opcion){
                case 1: 
                    agregarTarea();
                    break;
                case 2:
                    verTareas();
                    break;
                case 3:
                    tareaCompletada();
                    break;

                case 4:
                    eliminarTarea();
                    break;

                case 5:
                    alert("Saliendo del programa");
                    continuar = false;
                    break
                default:
                    alert("Opcion no valida. Intenta de nuevo");
            }
    }
    alert("Programa finalizado")


}

//Iniciar programa
iniciarPrograma();