//control n+s
const frutas = ["bananas"];
frutas.push("sandia"); //FINAL
frutas.unshift("Fresa"); //INICIO
frutas.push("mango"); //FINAL
frutas.unshift("mandarina"); //INICIO
frutas.push("melon"); //FINAL
frutas.unshift("kiwi"); //INICIO
console.log(frutas);

//completo 
for(let fruta of frutas){
    console.log(fruta);
}

//eliminar
console.log("--------------------------------------------");
frutas.pop(); //elimnar
for(let fruta of frutas){
    console.log(fruta);
}
console.log("---------------------------------------------");
frutas.shift();
frutas.pop();
for(let fruta of frutas){
    console.log(fruta);
}

 /* MAL
const  puerto = 3306;
puerto =3308;
console.log(puerto);*/
