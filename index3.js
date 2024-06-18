// Ejercicios con Funciones //

// Ejercicio 1 //
function saludar() {
    return "Hola, mundo!";
}

console.log(saludar());

// Ejercicio 2 //

function sumar(a, b) {
    return a + b;
}
let NUMERO1 = 5;
let NUMERO2 = 3;
let resultado = sumar(NUMERO1, NUMERO2);

console.log(`La suma de ${NUMERO1} y ${NUMERO2} es: ${resultado}`);

// Ejercicio 3 //

function multiplicar(a, b) {
    return a * b;
}
let NUMERO3 = 4;
let NUMERO4 = 7;
let resultados = multiplicar(NUMERO3, NUMERO4);

console.log( `La Multiplicacion de ${NUMERO3} y ${NUMERO4} es: ${resultados}`);

// Ejercicio 4 //

function restar(a, b) {
    return a - b;
}
let NUMERO5 = 10;
let NUMERO6 = 3;
let resultados4 = restar(NUMERO5, NUMERO6);

console.log(`La Resta entre ${NUMERO5} y ${NUMERO6} es: ${resultados4}`);

// Ejercicio 5 //

function dividir(a, b) {
    if (b === 0) {
        return [0];
    }
    return a / b;
}

let NUMERO7 = 10;
let NUMERO8 = 2;
let resultado5 = dividir(NUMERO7, NUMERO8);

console.log(`El cociente de ${NUMERO7} dividido por ${NUMERO8} es: ${resultado5}`);



