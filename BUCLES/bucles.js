// BUCLES
console.log('BUCLES');
// Queremos imprimir los números del 0 al 4:
console.log("EJEMPLO");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Inicialización:
let i = 0;

// Condición:
i < 5;
// Mientras i sea menor que 5, el bucle seguirá repitiendo.

// Actualización:
i++;
// Después de cada repetición, aumentamos i en 1 (i++ significa lo mismo que i = i + 1).

// Cuando i sea 5 o más el bucle se detendrá.

console.log("EJERCICIO 1");
// 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("EJERCICIO 2");
// 2
for (let i = 1; i <= 20; i++) {

    if ((i % 2) === 0) {
        console.log(i);
    }
}

console.log("EJERCICIO 3");
// 3
// Tabla de multiplicar del 5
for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

console.log("EJERCICIO 4");
// 4
for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log("EJERCICIO 5");
// 5
for (let i = 20; i >= 0; i -= 2) {
    console.log(i);
}
console.log("EJERCICIO 6");
// 6
for (let i = 1; i < 1000; i *= 2) {
    console.log("El valor de i es " + i);
}

