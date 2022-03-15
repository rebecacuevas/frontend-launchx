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

