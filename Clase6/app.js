//java cript se crean funciones anonimas solo se ejecutan cuando las mandan a llamar
//

//Funcion declarativa se evaluan ante las expresiones como condiciones 
 function numeroAleaotrio(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
    console.log(numeroAleaotrio(1,11));

//Funcion expresada estas no seran evaluadas hasta que el interprete no lo solicite
const miNumero = function numeroAleaotrio(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
console.log(miNumero(2,20));

//Funcion flecha 
