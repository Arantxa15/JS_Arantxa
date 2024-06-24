// 1 Pide al usuario una frase y determina si la frase empieza con un número, con una letra o con un carácter especial.

let frase = prompt('EScribe una frase');
let primerCa = frase[0];

if (primerCa >= '0' && primerCa <= '9') {
    console.log("La frase empieza con  un número.");
} else if((primerCa >= 'A' && primerCa <= 'Z') || primerCa >= 'a' && primerCa <= 'z') {
    console.log("La frase empieza con una letra")
} else {
    console.log("La frase empieza con un caracter especial");
}

// 2 Crea un array que contenga ["patata", "lechuga", "tomate", "berenjena", "batata", "maíz"]. Pide al usuario que escriba un ingrediente de ensalada y determina si se encuentra en el array o no.
let verduras = [
    "patata",
    "lechuga", 
    "tomate", 
    "berenjena", 
    "batata", 
    "maíz"
];
let ingrediente = prompt('Escribe un ingrediente de ensalada')

if (verduras.includes(ingrediente.toLowerCase())) {
console.log('El ingrediente se encuentra en el array');

} else {
    console.log("El ingrediente no se encuentra en el array");
}