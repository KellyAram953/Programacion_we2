var productos = [
  { nombre: 'Camisa', precio: 300 },
  { nombre: 'Pantalón', precio: 500 },
  { nombre: 'Tenis', precio: 250 },
  { nombre: 'Gorra', precio: 150 }
];

var carrito = [];

function mostrarMenu() {
  return prompt(
    "Seleccione un producto para agregar al carrito:\n" +
    "1. Camisa - $300\n" +
    "2. Pantalón - $500\n" +
    "3. Tenis - $250\n" +
    "4. Gorra - $150\n" +
    "5. Ver Carrito y Total\n" +
    "6. Salir"
  );
}

function verCarrito() {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }

  // Agrupar productos iguales 
  let resumen = {};
  carrito.forEach(p => {
    if (!resumen[p.nombre]) {
      resumen[p.nombre] = { precio: p.precio, cantidad: 1 };
    } else {
      resumen[p.nombre].cantidad++;
    }
  });

  let mensaje = "Carrito de compras:\n\n";
  let total = 0;
  let contador = 1;

  for (let nombre in resumen) {
    let precio = resumen[nombre].precio;
    let cantidad = resumen[nombre].cantidad;
    let subtotal = precio * cantidad;
    total += subtotal;
    mensaje += `${contador}. ${nombre}\n`;
    mensaje += ` Precio: $${precio} | Cantidad: ${cantidad} | Subtotal: $${subtotal}\n\n`;
    contador++;
  }

  mensaje += ` TOTAL A PAGAR: $${total}`;
  alert(mensaje);
}

function main() {
  let opcion;
  do {
    opcion = mostrarMenu();
    switch (opcion) {
      case "1":
      case "2":
      case "3":
      case "4":
        carrito.push(productos[parseInt(opcion)-1]);
        alert(productos[parseInt(opcion)-1].nombre + " agregado al carrito de compras");
        break;
      case "5":
        verCarrito();
        break;
      case "6":
        alert("Gracias por su compra.");
        break;
      default:
        alert("Opción no válida.");
    }
  } while (opcion !== "6");
}

main();