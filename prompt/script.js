// Operadores de asignación
let x = 20;
let y = 10;
let z = 22;
let a = 60;


x += 6; //x = x + 6
y -= 5; //y = y - 5
z *= 2; //z = z * 2
a /= 2; //a = a / 2

console.log(x);
console.log(y);
console.log(z);
console.log(a);


//Comparación de valores(==)

let valor = 5;
console.log( valor != 5);
console.log( valor !== 10);

console.log(valor == 5);
console.log(valor === 5);
console.log(valor <= 5);
console.log(5 == "5");   // true

console.log(5 === "5");  // false


// PROMPT
let nombre = prompt("Por favor, ingresa tu nombre:"); //lo guardas en la variable
console.log("¡Hola, " + nombre + "!");

let apellido = prompt("Por favor ingresa tu apellido: ");
console.log("¡Hola, " + nombre + " " + apellido + "!");