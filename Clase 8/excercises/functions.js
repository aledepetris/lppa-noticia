console.log("***********************")
console.log("***** Ejercicio 6 *****")
console.log("***********************")

// Ejercicio a
console.log("***** Apartado A ******")
console.log("Funcion Suma:")
function Suma(number1, number2) {
    console.log("n1: " + number1 + " n2: " + number2)
    return (number1 + number2);
}
console.log(Suma(20, 10));

// Ejercicio b
console.log("***** Apartado B ******")
console.log("Funcion Suma:")
function Suma(number1, number2) {
    console.log("n1: " + number1 + " n2: " + number2)
    if( typeof number1 !== "number" || typeof number2 !== "number" ) {
        return ("NaN");
    } else {
        return (number1 + number2);
    }
}
console.log(Suma(20, "hola"));

// Ejercicio c
console.log("***** Apartado C ******")
console.log("Funcion ValidateInteger:")
function ValidateInteger(number) {
    console.log("n1: " + number)
    if( Number.isInteger(number) ) {
        return true;
    } else {
        return false;
    }
}
console.log(ValidateInteger(Math.random()));

// Ejercicio d
console.log("***** Apartado D ******")
console.log("Funcion Suma:")
function Suma(number1, number2) {
    console.log("n1: " + number1 + " n2: " + number2)
    if ( typeof number1 !== "number" || typeof number2 !== "number" ) {
        return ("NaN");
    } else {
        if( Number.isInteger(number1) && Number.isInteger(number2) ) {
            return number1 + number2;
        } else {
            if ( number1 !== Math.floor(number1) || number2 !== Math.floor(number2) ) {
                var suma = number1 + number2;
                return "Se redondea el resultado: " +  Math.round(suma);
            }
        }  
    }
}
console.log(Suma(Math.random()*10, Math.random()*10));


// Ejercicio e
console.log("***** Apartado E ******")
console.log("Funcion Suma + ValidateIntegers:")

function ValidateIntegers (number1, number2) {
    
    if( Number.isInteger(number1) && Number.isInteger(number2) ) {
        return number1 + number2;
    } else {
        if ( number1 !== Math.floor(number1) || number2 !== Math.floor(number2) ) {
            var suma = number1 + number2;
            return "Se redondea el resultado: " +  Math.round(suma);
        }
    }  

}

function Suma(number1, number2) {
    console.log("n1: " + number1 + " n2: " + number2)
    if ( typeof number1 !== "number" || typeof number2 !== "number" ) {
        return ("NaN");
    } else {
        return ValidateIntegers (number1, number2)
    }
}

console.log(Suma(Math.random()*10, Math.random()*10));
