let inventario = [];

function mostrarMenu(){
    return parseInt(prompt(
        `Opciones disponibles
        1.- Agregar producto
        2.- Mostrar producto
        3.- Buscar producto por nombre
        4.- salir
        Elige una opcion:
        `
    ));
}

function agregarProducto(){
    let nombre = prompt("Ingresa el nombre del producto");
    let cantidad = parseInt(prompt("Ingrese la cantidad del producto"));
    let precio = parseFloat(prompt("Ingresa el precio del producto"));

    if (cantidad > 0 && precio > 0) {
        let producto = {
            nombre: nombre,
            cantidad: cantidad,
            precio: precio
        };

       inventario.push(producto);
       alert("Producto agregado");
    } else {
        alert("La cantidad y precio deben ser numeros positivos")
    }
}

function mostrarProducto(){
    if(inventario.length === 0){
        alert("Inventario vacio");
    } else {
        let mensaje = "Producto del inventario: \n";
        for (let i = 0; i < inventario.length; i++){
            mensaje+= `Producto: ${i + 1}\n` +
                `Nombre: ${inventario[i].nombre} \n` +
                `Precio: ${inventario[i].precio}\n` +
                `Cantidad: ${inventario[i].cantidad}\n` +
            "-----------------------------------------"
        }
            alert (mensaje);
    }
}

function buscarProducto(){
   let nombreBusqueda = prompt("Ingresa el nombre del producto a buscar");
  let encontrado = false;
  let mensaje = "Resultados de la búsqueda: \n";

  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].nombre === nombreBusqueda) {
      mensaje+= `Producto: ${i + 1}\n` +
                `Nombre: ${inventario[i].nombre} \n` +
                `Precio: ${inventario[i].precio}\n` +
                `Cantidad: ${inventario[i].cantidad}\n` +
            "-----------------------------------------"
      encontrado = true;
    }
  }

  if (!encontrado) {
    alert("No se encontraron productos con ese nombre");
  } else {
    alert(mensaje);
  }
}


function iniciarPrograma(){
    let continuar = true;

    while(continuar){
            let opcion= mostrarMenu();

            switch(opcion){
                case 1: 
                    agregarProducto();
                    break;
                case 2:
                    mostrarProducto();
                    break;
                case 3:
                    buscarProducto();
                    break;

                case 4:
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