// let mensaje = "Hola Mundo";
// let mensajeMayusculas = mensaje.toUpperCase(); // toLowerCase() minusculas 
// console.log(mensajeMayusculas); // Resultado: "HOLA MUNDO"


// // ----------------------------index of()--------------------

// //me devuelve el  primer valor que encuentra , de acuerdo el caracter que yo puse para la busqueda.

// // cuando me devuelve -1 es por que no encuentra ese valor 

// let mensaje1 = "Hola Mundo";
// let posicionO = mensaje1.indexOf("o");
// console.log(posicionO); // Resultado: 1

// //---------------------split----------------------------

// // Me corta la cadena de texto -por donde yo le diga y me devuelve cortes de la frase y lo que no esta declarado en el corte me lo borra

// let mensaje3 = "Hola, Mundo";
// let palabras = mensaje3.split(", ");
// console.log(palabras); // Resultado: ["Hola", "Mundo"]


//------------inciso------------------------------

//En JavaScript, puedes acceder a los caracteres individuales de una cadena de texto utilizando corchetes [] y especificando el índice del carácter que deseas obtener.


// let frase1 = "Hola mundo";

// console.log(frase1[0]);  // Esto imprimirá "H", el primer carácter de la cadena
// console.log(frase1[1]);  // Esto imprimirá "o", el segundo carácter de la cadena

// //------------------------------------- Ejercicio 15 ---------------------------


// let frase = prompt("Ingresa una frase");

// let palabra='gato';

// if (frase.indexOf(palabra)>=0){

//     console.log ('La palabra '+palabra + " está en la frase");

// }
// else{

//     console.log ('La palabra '+ palabra + " no está en la frase");

// }


// // -------------------ejercicio 15.2 -----------------------

// let frasi= prompt('Ingresa una frase').toLocaleLowerCase();

// let letra = prompt("Ingresa una letra").toLocaleLowerCase();

// let contador = 0;


//  for (let i = 0; i < frasi.length; i++){

//     if (frasi[i] === letra){
//         contador++;

//     }

// }

console.log(' la letra '+ letra+ ' aparece '+ contador+' vez/veces en la frase ');

// 16
// Contador de consonantes: Solicita al usuario una frase y cuenta cuántas consonantes contiene.

// let frase = prompt("Ingresa una frase").toLowerCase();
// let contador = 0;
// let consonantes = "bcdfghjklmnpqrstvwxyz";

// for (let i = 0; i < frase.length; i++) {
//     if (consonantes.indexOf(frase[i])>= 0) {
//         contador++;
//     }
// }
// console.log("La frase tiene " + contador + " consonante(s).");


// frase = prompt("Ingresa una frase").toLowerCase();
// contador = 0;
// consonantes = "r"

// for (let i = 0; i < frase.length; i++) {
//     if (frase[i] === consonantes) {
//         contador++;
//     }
// }
// console.log("La frase tiene  " + contador + " R");

// frase = prompt("Ingresa una frase").toLowerCase();
// contador = 0;
// let vocales = "aeiouAEIOU";

// for (let i = 0; i < frase.length; i++) {
//     if (vocales.indexOf(frase[i])>= 0) {
//         contador++
//     }
// }
// console.log("La frase tiene  "+ contador + " vocales");



// 17

// 1
// let numerosPares = 0;
// let continuar = true;

// // Bucle for con una condición siempre verdadera
// for (let i = 0; continuar == true; i++) {
//     let numero = prompt("Ingresa un numero (o escribe parar para detener");

//     if (numero.toLowerCase() === "parar") {
//     continuar = false;
//     } else {
//         if(numero % 2 === 0) {
//             numerosPares ++;
//         }

//     }
// }
// console.log("Numeros pares: " + numerosPares);

// 2

// let numeroPP = 0;
// let numeroPN = 0;
// continuar = true;


// for (let i = 0; continuar == true; i++) {
//     let numero = prompt("Ingresa un numero (o escribe parar para detener");

//     if (numero.toLowerCase() === "parar") {
//     continuar = false;
//     } else {
//         if((numero % 2 == 0) && (numero >= 0)){
//             numeroPP ++;
//         }else if ((numero % 2 == 0) && (numero < 0)) {
//             numeroPN ++;
//         }

//     }

// };
// console.log("Números pares y positivos " + numeroPP);
// console.log("Números impares y negativos " + numeroPN);

// 17.1

// 1

let numero = parseInt(prompt("Ingresa un número"));
let numeroPrimo = true;

for (let i = 2; i <= ( numero / 2); i++) {
    // si el número dividido entre algún otro número que no sea ni el 1 ni el mismo da 0
    // El resto, entonces pasamos numeroPrimo a false
    if (numero % i === 0) {
        numeroPrimo = false;
    } 
    }
    if (numeroPrimo === true) {
        console.log("El numero es primo");

    } else{
        console.log("El numero no es primo");
    }
