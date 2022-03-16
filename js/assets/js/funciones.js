// Funciones
// Bloques de código reutilizables

// Calcular el cuadrado de un número
const cuadrado = function(x) {
    return x * x;
}

console.log(cuadrado(12));

// Calcular el cubo de un número
const cubo = function(y) {
    return y * y * y;
}

let medida = 5;
console.log(cubo(medida));

// Hacer que un señor turco le maulle a un huevo
const turkishManYellingAtAnEgg = function() {
    console.log("MEOW");
}

turkishManYellingAtAnEgg();

// Función exponencial
const exponencial = function(base, exponente) {
    let resultado = 1;
    for(let i = 0; i < exponente; i++){
        resultado *= base;
    }
    return resultado;
}

console.log(exponencial(2, 10));

// OTRA FORMA DE DECLARAR FUNCIONES
// No importa en qué parte del código mandes llamar a la función.

// Sumar dos números
console.log(sumar(2, 2));
function sumar(x, y) {
    return x + y;
}

// ARROW FUNCTION
const restar = (a, b) => { 
    return a - b;
}
console.log(restar(40, 8));

// Saludo
function saludar(quien) {
    console.log("Hola " + quien);
}
saludar("Explorer");
console.log("Bye");

// Es buena práctica poner las funciones hasta arriba del documento

// EXCEPCIONES
// Blindar puntos débiles del programa en caso de que se rompa durante su ejecución y lograr que siga funcionando
function preguntaDireccion(pregunta) {
    let result = prompt(pregunta);
    if(result.toLowerCase() == "izquierda") return "I";
    if(result.toLowerCase() == "derecha") return "D";
    throw new Error("Dirección inválida: " + result);
}

function mirar() {
    if(preguntaDireccion("¿A qué lado?") == "I") {
        return "una casa";
    } else {
        return "2 osos hambrientos";
    }
}

// Aquí entra la excepción, en cuanto el código se ejecute buscará un throw en caso de que no funcione de forma correcta
// En caso de que el throw no funcione, el throw se ejecutará en el catch
// Try - sale bien
// Catch - algo salió mal 
try {
    console.log("Mira a ", mirar());
} catch (error) {
    console.log("Hubo un error: " + error);
}