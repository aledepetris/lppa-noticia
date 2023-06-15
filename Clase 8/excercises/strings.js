console.log("***********************");
console.log("***** Ejercicio 2 *****");
console.log("***********************");

// Ejercicio a
console.log("***** Apartado A ******");
var stringA = "string a convertir en uppercase";
console.log("Original: " + stringA);
console.log("Convertido a Upper: " + stringA.toLocaleUpperCase());

// Ejercicio b
console.log("***** Apartado B ******");
var stringB1 = "¿Como ha pasado?";
var stringB2 = stringB1.substring(0,5);
console.log("Original: " + stringB1);
console.log("Substring(5): " + stringB2);

// Ejercicio c
console.log("***** Apartado C ******");
var stringC1 = "Bailar de a dos";
var stringC2 = stringC1.substring(stringC1.length - 3, stringC1.length)
console.log("Original: " + stringC1);
console.log("Substring - Ultimos 3: " + stringC2);

// Ejercicio d
console.log("***** Apartado D ******");
var stringD1 = "texto a prueba";
var stringD2 = stringD1.substring(0,1).toUpperCase() + stringD1.substring(1, stringD1.length);
console.log("Original: " + stringD1);
console.log("Primera en Mayus: " + stringD2);

// Ejercicio e
console.log("***** Apartado E ******");
var stringE1 = "Espacio Strings";
var indexE1 = stringE1.indexOf(" ");
console.log("Original: " + stringE1);
console.log("Posición con el primer espacio: " + indexE1);

// Ejercicio f
console.log("***** Apartado F ******");
var stringF1 = "mandamiento reutilizable";
var indexF1 = stringF1.indexOf(" ");
var stringF2 = stringF1.substring(0,1).toUpperCase() 
               + stringF1.substring(1, indexF1 + 1) 
               + stringF1.substring(indexF1 + 1, indexF1 + 2).toUpperCase() 
               + stringF1.substring(indexF1 + 2, stringF1.length);
console.log("Original: " + stringF1);
console.log("Title Case: " + stringF2);