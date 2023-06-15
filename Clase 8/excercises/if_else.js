console.log("***********************")
console.log("***** Ejercicio 4 *****")
console.log("***********************")


// Ejercicio a
console.log("***** Apartado A ******")
var random = Math.random(0,1);
console.log("Numero obtenido random: " + random)
if ( random > 0.5 ) {
    console.log("Greater than 0.5");
} else {
    console.log("Lower than 0.5");
}

// Ejercicio b
console.log("***** Apartado B ******")
var age = Math.floor( Math.random() * 100 )
console.log("Edad obtenida: " + age)
if ( age < 2 ) {
    console.log("Bebe");
} else {
    if ( age >= 2 && age <= 12 ) {
        console.log("Niño");
    } else {
        if ( age >= 13 && age <= 19 ) {
            console.log("Adolescente");
        } else {
            if ( age >= 20 && age <= 30 ) {
                console.log("Joven");
            } else {
                if ( age >= 31 && age <= 60 ) {
                    console.log("Adulto");
                } else {
                    if ( age >= 61 && age <= 75 ) {
                        console.log("Adulto mayor");
                    } else {
                        console.log("Anciano");
                    }
                }
            }
        }   
    }
}
