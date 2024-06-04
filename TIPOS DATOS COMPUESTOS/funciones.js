console.log("FUNCIONES");

// // Estructura de la función
// function nombreDeLaFuncion(parametro1, parametro2, etc) {
//     // Cuerpo de la función
//     // Aquí van las instrucciones que realiza la función
//     // Puede utilizar los parámetros recibidos
//     return resultado; // Opcional: la función puede devolver un resultado
// };

// // Función simple de suma:
// function sumar(a, b) {
//     return a + b;
// }
// let resultado = sumar(3, 5);
// console.log(resultado);


// 1

// Calcular área de un rectangulo

let base = parseInt(prompt("Ingresa la base"));
let altura = parseInt(prompt("Ingresa la altura"));

function areaRectangulo(b, a) {
    // Devolver área calculada
    return b * a;
}
console.log("El area del rectangulo es: " + areaRectangulo(base, altura));

// 2

// Crear una función saludar, que tome como parámetro el nombre:

let nombre = prompt("Inngresa tu nombre");

function saludar(nombre) {
    return "¿Hola, " + nombre + "! ¿como estas?";

}
console.log(saludar(nombre));