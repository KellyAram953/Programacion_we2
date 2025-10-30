let nombres =[];
function agregarNombre(){
    let nombre = prompt("Ingresa nombre: ");
    
    if(nombre){
        nombres.push(nombre);
     alert(`Nombre ${nombre} agregado exitosamente`);
    }
    else{
        alert(`vacio`);
    }
}
function mostarNombres(){
    if (nombres.length == 0) {
        alert(`No hay nombre almacenados`);
    } else {
        let mensaje = "Nombres almacenados:  \n";

       // for (let i = 0; i < nombres.length; i++) {
         //   mensaje += `${i + 1}. ${nombres[i]}\n`;

        nombres.forEach((nombre, index)=>{
        mensaje += `${index + 1}. ${nombre}\n`;
        });
        alert(mensaje);
    }
   /* function mostrarMenu(){
        let opcion;
        do{
            option = prompt
        }
    }*/
}