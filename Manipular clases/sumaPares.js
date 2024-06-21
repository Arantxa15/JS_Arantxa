// 1 Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.

let numeroN = parseInt(prompt('Ingresa un número'));
let numeroM = parseInt(prompt('Ingresa otro número'));

let sumaPares = 0;

for (let i = numeroN; i <= numeroM; i++) {
    if(i % 2 === 0) {
        sumaPares += i;
    }
}
console.log(sumaPares);


// 2 Crea una función para determinar si lo que ha ingresado el usuario en el prompt es una cadena de texto escrita solo en mayúsculas, solo en minúsculas o por una mezcla de ambas.

let frase = prompt('Ingresa una frase');

function comprobar(frase) {
    let mayusculas = frase.toUpperCase();
    let minusculas = frase.toLowerCase();

    if(frase === mayusculas) {
        console.log('Solo mayúsculas');
    } else if (frase === minusculas) {
        console.log('Solo minúsuculas');
    } else {
        console.log('mezcla de ambas');
    }
}
comprobar(frase);