//objetos es una conexion de propiedas, una propiedas. en lugar de indices se inserta por medio de sus propiedades
/*
var miCarro = new Object();
miCarro.marca = `Toyota`;
miCarro.modelo = `Supra`;
miCarro.color = `Rojo`;

console.log(miCarro);*/

/*
//Ejemplo de arreglo no es lo  mismo que un obejto
let frutas = [`Bananas`,`Fresa`];
console.log(frutas);*/
/*
var miCarro = {
    marca: `Toyota`,
    modelo: `Supra`,
    color: `Rojo`
}
console.log(miCarro);*/

var perro = {
    nombre: `Gudy`,
    color: `Negro`,
    edad: `101`,
    talla: `Mediano`,
    enemigos: ["gatos","perra paulina"]
}

console.log(perro);
// console.log(perro.color);
// console.log(perro.enemigos[1]);
// console.log(perro.nombre);
//agregar
perro.raza = `Schnuzer`;
console.log(perro);

//leer
console.log(perro.edad);

//actualizar
perro.edad = 35;
console.log(perro);

//eliminar
delete perro.edad;
console.log(perro);