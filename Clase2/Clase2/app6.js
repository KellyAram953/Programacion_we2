let clave = parseInt(prompt("Ingresa el numero"));
let clave2 = parseInt(prompt("Ingresa el numero"));
let clave3 = parseInt(prompt("Ingresa el numero"));

let mayor, menor;
let mensaje = "";

// Comparación de igualdad
if (clave === clave2 && clave2 === clave3) {
    mensaje = "Tres numeros son iguales.";
} else if (clave === clave2 || clave === clave3 || clave2 === clave3) {
    mensaje = "Dos números iguales.";
} else {
    mensaje = "Ninguno es igual.";
}

// Buscar mayor
if (clave >= clave2 && clave >= clave3) {
    mayor = clave;
} else if (clave2 >= clave && clave2 >= clave3) {
    mayor = clave2;
} else {
    mayor = clave3;
}

// Buscar menor
if (clave <= clave2 && clave <= clave3) {
    menor = clave;
} else if (clave2 <= clave && clave2 <= clave3) {
    menor = clave2;
} else {
    menor = clave3;
}

alert(mensaje + "\nMayor: " + mayor + "\nMenor: " + menor);
