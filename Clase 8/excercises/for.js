console.log("***********************")
console.log("***** Ejercicio 5 *****")
console.log("***********************")


// Ejercicio a
console.log("***** Apartado A ******")
console.log("Se itera el arreglo:")
var array = ["enero", "febrero", "marzo", "abril", "mayo"]
for ( var i = 0; i < array.length; i++ ) {
    console.log(array[i]);    
}

// Ejercicio b
console.log("***** Apartado B ******")
for (var i = 0; i < array.length; i++) {        
    console.log("Se cambio a mayuscula la letra: '" + array[i].substring(0,1) + "' de la palabra: '" + array[i] + "'");
    console.log(array[i].substring(0,1).toUpperCase() + array[i].substring(1, array[i].length));
}

// Ejercicio c
console.log("***** Apartado C ******")
var sentence = "";
for (var i = 0; i < array.length; i++) {        
    sentence = sentence + array[i];
}
console.log(sentence);

// Ejercicio d
console.log("***** Apartado D ******")
var emptyArray = [];
for (let i = 0; i < 10; i++) {        
    emptyArray.push(i);
}
console.log("Array: ")
console.log(emptyArray);