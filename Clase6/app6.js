var productos = [
  { nombre: 'Camisa', precio: 300 },
  { nombre: 'Pantalón', precio: 500 },
  { nombre: 'Tenis', precio: 250 },
  { nombre: 'Gorra', precio: 150 }
];

var carrito = [];

// ================= MENÚ PRINCIPAL =================
function mostrarMenu() {
  return prompt(
    "Seleccione una opción:\n" +
    "1. Comprar producto\n" +
    "2. Ver Carrito y Total a pagar\n" +
    "3. Eliminar producto del Carrito\n" +
    "4. Modo Administrador\n" +
    "5. Salir"
  );
}

// ================== ADMINISTRADOR =================
function menuAdministrador() {
  let pass = prompt("Ingrese la contraseña de administrador:");
  if (pass !== "admin") {
    alert("Contraseña incorrecta.");
    return;
  }

  let opcionAdmin;
  do {
    opcionAdmin = prompt(
      "=== MODO ADMINISTRADOR ===\n" +
      "1. Ver catálogo\n" +
      "2. Agregar producto\n" +
      "3. Modificar precio de producto\n" +
      "4. Eliminar producto del catálogo\n" +
      "5. Salir de administrador"
    );

    switch (opcionAdmin) {
      case "1": // Ver catálogo
        let catalogo = "Catálogo actual:\n\n";
        productos.forEach((p, i) => {
          catalogo += `${i + 1}. ${p.nombre} - $${p.precio}\n`;
        });
        alert(catalogo);
        break;

      case "2": // Agregar producto
        let nombre = prompt("Ingrese el nombre del nuevo producto:");
        let precio = parseFloat(prompt("Ingrese el precio del producto:"));
        if (!isNaN(precio) && nombre) {
          productos.push({ nombre, precio });
          alert("Producto agregado correctamente.");
        } else {
          alert("Datos inválidos.");
        }
        break;

      case "3": // Modificar precio
        let listaPrecios = "Seleccione el producto a modificar:\n\n";
        productos.forEach((p, i) => {
          listaPrecios += `${i + 1}. ${p.nombre} - $${p.precio}\n`;
        });
        let idxPrecio = parseInt(prompt(listaPrecios)) - 1;
        if (productos[idxPrecio]) {
          let nuevoPrecio = parseFloat(prompt("Ingrese el nuevo precio:"));
          if (!isNaN(nuevoPrecio)) {
            productos[idxPrecio].precio = nuevoPrecio;
            alert("Precio actualizado.");
          } else {
            alert("Precio inválido.");
          }
        } else {
          alert("Producto no válido.");
        }
        break;

      case "4": // Eliminar producto
        let listaEliminar = "Seleccione el producto a eliminar:\n\n";
        productos.forEach((p, i) => {
          listaEliminar += `${i + 1}. ${p.nombre} - $${p.precio}\n`;
        });
        let idxEliminar = parseInt(prompt(listaEliminar)) - 1;
        if (productos[idxEliminar]) {
          alert(`${productos[idxEliminar].nombre} eliminado del catálogo.`);
          productos.splice(idxEliminar, 1);
        } else {
          alert("Producto no válido.");
        }
        break;

      case "5":
        alert("Saliendo del modo administrador...");
        break;

      default:
        alert("Opción no válida.");
    }
  } while (opcionAdmin !== "5");
}

// ================= USUARIO =================

// Ver carrito
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

// Eliminar del carrito
function eliminarDelCarrito() {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }

  let lista = "Seleccione el producto a eliminar del carrito:\n\n";
  carrito.forEach((p, i) => {
    lista += `${i + 1}. ${p.nombre} - $${p.precio}\n`;
  });

  let idx = parseInt(prompt(lista)) - 1;
  if (carrito[idx]) {
    alert(`${carrito[idx].nombre} eliminado del carrito.`);
    carrito.splice(idx, 1);
  } else {
    alert("Selección no válida.");
  }
}

// Comprar
function comprarProducto() {
  let menuCompra = "Seleccione un producto para agregar al carrito:\n\n";
  productos.forEach((p, i) => {
    menuCompra += `${i + 1}. ${p.nombre} - $${p.precio}\n`;
  });

  let opcion = parseInt(prompt(menuCompra));
  if (productos[opcion - 1]) {
    carrito.push(productos[opcion - 1]);
    alert(productos[opcion - 1].nombre + " agregado al carrito de compras");
  } else {
    alert("Opción no válida.");
  }
}

// ================= MAIN =================
function main() {
  let opcion;
  do {
    opcion = mostrarMenu();
    switch (opcion) {
      case "1":
        comprarProducto();
        break;
      case "2":
        verCarrito();
        break;
      case "3":
        eliminarDelCarrito();
        break;
      case "4":
        menuAdministrador();
        break;
      case "5":
        alert("Gracias por su visita.");
        break;
      default:
        alert("Opción no válida.");
    }
  } while (opcion !== "5");
}

main();
