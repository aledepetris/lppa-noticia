console.log("***********************");
console.log("***** Ejercicio 3 *****");
console.log("***********************");

// Ejercicio a
console.log("***** Apartado A ******");
var arrayMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Los meses 5 y 11 son: " + arrayMeses[4] + " y " + arrayMeses[10] + " respectivamente");

// Ejercicio b
console.log("***** Apartado B ******");
console.log("Meses ordenados alfabeticamente: " + arrayMeses.sort());

// Ejercicio c
console.log("***** Apartado C ******");
arrayMeses.unshift("Mes0");
arrayMeses.push("Mes13");
console.log("Meses (Agregando uno al final y otro al principio): " + arrayMeses);



// Ejercicio d
console.log("***** Apartado D ******");
arrayMeses.shift();
arrayMeses.pop();
console.log("Meses (quitando uno al final y otro al principio): " + arrayMeses);


// Ejercicio e
console.log("***** Apartado E ******");
console.log("Meses Reverse: " + arrayMeses.reverse());


// Ejercicio f
console.log("***** Apartado F ******")
console.log("Meses unidos por '-' : " + arrayMeses.join(" - "));


// Ejercicio g
console.log("***** Apartado F ******")
arrayMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var mesesCopiaRecortada = arrayMeses.slice(4,12);
console.log("Meses recortados: " + mesesCopiaRecortada)