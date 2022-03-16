// Tipo de dato entero
var num01;
num01 = 4;

var num02;
num02 = 2;

console.log(num01);
console.log("Número 1: " + num01 + " Número 2: " + num02);

// Tipo de dato string
var frase01 = "Ejemplo comillas dobles";
var frase02 = 'Ejemplo comillas simples';
var frase03 = `Ejemplo comillas ${num02} invertidas`;

console.log(frase01 + "\n" + frase02 + "\n" + frase03);

// Condicionales
console.log(num01 > num02);
console.log(num01 < num02);
console.log(num01 != num02);

// == revisa igualdad de valor 
// === revisa igualdad de valor y de tipo de dato

// Operadores lógicos
// Ambas condicionales deben ser TRUE
console.log(true && false);
// Solo una condicional debe dar TRUE, para FALSE ambos deben estar en FALSE
console.log(true || false);

// Variables
// Usar let para bloques de código
// Usar var para variables globales
// Usar const si queremos que el valor nunca cambie

// ARREGLOS O VECTORES

// Arreglos de números
let listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(listaDeNumeros[0]);

// Agregar valores al arreglo
listaDeNumeros.push(11);
console.log(listaDeNumeros);

// Arreglos de strings
let listaDePalabras = ["Facebook", "Amazon", "Apple", "Netflix", "Google"];
console.log(listaDePalabras);

// Las cadenas de caracteres también funcionan como arreglos 
let palabra = "Explorer";
console.log(palabra[2]);

// Conocer número de caracteres de un string o array
console.log(palabra.length);

// OBJETOS
let explorer = {
    nombre : "Nombre del Explorer",
    email : "email@innovaccion.mx",
    numReg : 1234,
    mision : "FrontEnd",
    proyectos : ["Abogabot", "Taquería", "Pastelería", "Vacunación"],
    proyectoPer : {
        escolar : "Tareas",
        profesional : "Trabajo",
        personal : "Negocio"
    }
};

console.log(explorer);

console.log(explorer.email);

// JSON - JavaScript Object Notation
// En un arreglo los datos deben ser del mismo tipo
// En un objeto puedes tener datos de diferente tipo

// Flujo condicional
let num03 = 2;
let num04 = 8;

if(num03 > num04 && num04 < 2){
    console.log("El primer número es mayor que el segundo");
}
else if(num03 == num04 || num03 == 8){
    console.log("Los números son iguales");
}
else{
    console.log("El segundo número es mayor que el primero");
}

// Ciclo condicional
let numberWhile = 0;

while(numberWhile <= 12) {
    console.log(numberWhile);
    numberWhile = numberWhile + 2;
}

console.log("Aquí ya salió del while " + numberWhile);

// Ciclo condicional de una iteración mínimo 
let numeroDoWhile = 10;

do {
    numeroDoWhile = numeroDoWhile + 2;
    console.log(numeroDoWhile);
} while(numeroDoWhile < 20);

console.log("Aquí sale del Do While " + numeroDoWhile);

// Ciclo for con iteración controlada
let numeroFor = 0;
for(numeroFor; numeroFor <= 12; numeroFor = numeroFor + 1) {
    console.log(numeroFor);
}
console.log("Aquí salimos del for " + numeroFor);

// Switch, para evitar anidar condicionales
switch (prompt("¿Cómo está el clima?")) {
    case "lluvioso":
        console.log("No te vayas a mojar");
        break;
    case "soleado":
        console.log("Ponte bloqueador");
        break;
    case "nublado":
        console.log("Tápate bien");
        break;
    default:
        console.log("No sé cómo está el clima");
        break;
}

// expresión regular
// "lluvioso" || "Lluvioso"
console.log("Aquí salimos del switch");


// While - si el ciclo se debe de detener cumpliendo una condición
// Do while - si necesitas que se ejecute algo y después se cumpla la condición
// For - si tienes el parámetro para frenar el ciclo
