// // 1
// let numeroUsuario = prompt("Ingresa un número")

// if (numeroUsuario > 0) {
//     console.log("El número ingresao es positivo");
// } else if (numeroUsuario < 0) {
//     console.log("El número ingresado es negativo");
// } else {
//     console.log("El numero ingresado es igual a cero")
// }

// // 2
// let rangoEdad = prompt("Ingrese su edad");

// if (rangoEdad < 18) {

//     console.log("Eres menor de edad");

// } else if (rangoEdad >=18 && rangoEdad <= 64) {

//     console.log("Tienes menos de 65");

// } else if (rangoEdad >= 65 && rangoEdad <= 99) {
//     console.log("Tienes menos de 100");
// } else {
//     console.log("Tienes 100 o más");
// }

// // 3
// let día = prompt("¿Qué día es?");

// if (día == 1 ) {
//     console.log(" El número ingresado corresponde a lunes.");

// } else if (día == 2){
//      console.log("El número ingresado corresponde a martes.");

// } else if (día == 3){
//     console.log("El número ingresado corresponde a miercoles.");

// } else if (día == 4){
//     console.log("El número ingresado corresponde a jueves.");

// } else if (día == 5){
//     console.log("El número ingresado corresponde a viernes.");

// } else if (día == 6){
//     console.log("El número ingresado corresponde a sabado.");

// } else if (día == 7){
//     console.log("El número ingresado corresponde a domingo.");

// } else {
//     console.log("El número ingresado no es válido. Por favor, ingresa un número del 1 al 7.")
// }


// 4
// let totalCompra = prompt("TOTAL");
// let descuento = 0

// if (totalCompra > 1000 + descuento){
//     console.log("El descuento es " + (totalCompra * 0.10) + "€");
// } else if (totalCompra > 500 + descuento) {
//     console.log("El descuento es " + (totalCompra * 0.05) + "€");
// } else (totalCompra <= 500 + descuento); {
//     console.log("No se aplica ningún descuento");
// } 



// 5
let nombreMes = prompt("Ingrese un mes en minúsculas");
let dias;

if (nombreMes === "enero" || nombreMes === "marzo" || nombreMes === "mayo" || nombreMes === "julio" || nombreMes === "agosto" || nombreMes === "octubre" || nombreMes === "diciembre") {
    dias = 31;
    console.log("El mes de" , nombreMes, "tiene", dias, "días.");
} else if (nombreMes === "febrero") {
    dias = 28;
    console.log("El mes de" , nombreMes, "tiene", dias, "días.")
} else if (nombreMes === "abril" || nombreMes === "junnio" ||nombreMes === "septiembre" || nombreMes === "noviembre") {
    dias = 30;
    console.log("El mes de" , nombreMes, "tiene", dias, "días.")
} else {
    console.log("El nombre del mes no es válido");
}
