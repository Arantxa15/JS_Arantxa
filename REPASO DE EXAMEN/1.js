console.log("EJERCICIO 1, BUCLE");
// Mostrar en la consola los números de X a 1 disminuyendo de 1 en 1. X lo ingresa el usuario en un prompt.

let numeroX = parseInt(prompt("Ingresa un número"));

for (let i = numeroX; i >= 1; i--) {
    console.log(i);
};



console.log("EJERCICIO 2 ");
// Ejercicio que me pida números mientras no le diga que pare y me muestre solo los pares.

let contadorPares = 0;
let continuar = true;

// condición siempre verdadera
for (let i = 0; continuar == true; i++) {
let numero = prompt("Ingresa un NÚMERO o escribe parar");

    if (numero.toLowerCase() === "parar") {
        continuar = false;
    } else {
        if (numero % 2 === 0) {
            contadorPares++;
        }
    }

}
console.log("Números pares: " + contadorPares);



console.log("EJERCICIO 3");
// Programa que nos diga si un número es primo (no es divisible por ninguno otro número que no sea él mismo o 1)

// let numeroY = parseInt(prompt("Ingrese Número"));
// let numerosPrimo = true;


console.log("EJERCICIO 4");
// Programa que pida una frase y muestre en la consola cuantas veces aparece la letra o.

let frase = prompt("Ingresa una frase");
let letra = 'o';
let contador = 0;

for (let i = 0; i < frase.length; i++){
     if (frase[i] === letra){
        contador++
     }

}
console.log("La letra " + letra +  " aparece" + contador + " veces en la frase")



console.log("EJERCICIO 5");
// Función → El usuario ingresa un nº y nos tiene que aparecer en la consola si es par o impar.

let n = prompt();
function Pares( nuumero) {
    if (nuumero % 2 === 0){
        return "par";

    } else {
        return "impar";
    }
}
console.log(Pares(n));




// Preguntas de repaso
// ¿Para que se utiliza split()?


// ¿Que hace document.write()?
// Escribe lo que haya dentro del parentesis en el documento.

// ¿Que hacemnos con ?continue? en un bucle?


// ¿Que significan las siglas BOM?
// Browser Object Model.

// ¿Que se emplea para añadir un elemento hijo?
// appendChild().

// ¿La etiqueta <noscript> para que se utiliza?
// Este contenido se muestra solo si el navegador no soporta scripting.

// ¿Para que sirve windows.open?
// Para abrir una ventana nueva del navegador.


// ¿Para que se utiliza removeChild()?
// Para eliminar un hijo de DOM.

// ¿PAra que se utiliza getElementById()?


// ¿Diferencia entre Java y JS?
// No son correctas las preguntas que hay en el examen


