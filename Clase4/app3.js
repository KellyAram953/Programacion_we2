let frutas = []; // Carrito vacío al inicio
let continuar = true;

while (continuar) {
  let respuesta = prompt("¿Deseas agregar una fruta a tu carrito?");

  if (respuesta === "si" || respuesta === "SI" || respuesta === "Si") {
    let fruta = prompt("¿Qué fruta deseas agregar?");
    frutas.push(fruta); // Se agrega la fruta al final
    alert(fruta + " ha sido agregada al carrito.");

  } else if (respuesta === "no" || respuesta === "NO" || respuesta === "No") {
    continuar = false;
    alert("Ya no agregarás más frutas.");
  }
}


console.log("Las frutas en tu carrito son:", frutas);


