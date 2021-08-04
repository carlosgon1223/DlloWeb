function Sumar (numero1, numero2){

    resultado = numero1 + numero2

    return resultado
    console.log("La suma entre",+numero1+ " y " ,+numero2+ "da como resultado", resultado)
}

function Restar (numero1, numero2){

    resultado = numero1 - numero2

    return resultado
    console.log("La Resta entre",+numero1+ " y " ,+numero2+ "da como resultado", resultado);
}

function Multiplicar (numero1, numero2){

    resultado = numero1 * numero2 
    
    return resultado
    console.log("La multiplicacion entre",+numero1+ " y " ,+numero2+ "da como resultado", resultado);
}

function Dividir (numero1, numero2){

    if (numero2 == 0) {
        console.log("La operación no se puede realizar, por favor cambie los valores");
    }
    else{
        resultado = numero1 / numero2
        
        return resultado
        console.log("La division entre",+numero1+ " y " ,+numero2+ "da como resultado", resultado);
    }
    
}