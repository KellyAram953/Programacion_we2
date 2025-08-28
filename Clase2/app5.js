let clave = parseInt(prompt("Ingresa el numero"));
let clave2 = parseInt(prompt("Ingresa el numero"));
let clave3 = parseInt(prompt("Ingresa el numero"));

let mayor = Math.max(clave, clave2, clave3);
let menor = Math.min(clave, clave2, clave3);
let mensaje = "";

if (clave === clave2 && clave2 === clave3) {
    mensaje = "Los tres números son iguales.";
} else if (clave === clave2 || clave === clave3 || clave2 === clave3) {
    mensaje = "Hay dos números iguales.";
} else {
    mensaje = "Ninguno es igual.";
}

alert(mensaje + "\nMayor: " + mayor + "\nMenor: " + menor);

