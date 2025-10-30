document.getElementById(`calculadora`).addEventListener(`submit`,
    function(event){
    event.preventDefault();
        let numero1 = parseFloat(document.getElementById(`num1`).value);
        let numero2 = parseFloat(document.getElementById(`num2`).value);

        let operador  = document.getElementById(`operador`).value;
        let resultado;

            switch(operador){
                case `sum` : 
                    resultado = num1 +num2;
                    break;
                case `resta` : 
                    resultado = num1 - num2;
                    break;
                case `mult` : 
                    resultado = num1 * num2;
                    break;

                case `div` : 
                if(nume2 !== 0){
                    resultado = num1 / num2;
                }else{
                    resultado = "No se puede dividir entre cero";
                }
                    break;
                    default: 
                    resultado = "Operador no valido"
                    break;
            }
        document.getElementById(`resultado`).innerHTML = `El resultado es: ${resultado}`;
    }

);