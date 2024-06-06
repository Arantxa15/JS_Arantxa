// // 20
// // 1. Escribe una funciónque imprima en la consola los números pares de 'x' al 'y'
// function NumerosPares(inicio, fin) {
//     for (let i = inicio; i <= fin; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }

//     }
// }

// let x = parseInt(prompt("Ingresa el número inicial:"));
// let y = parseInt(prompt("Ingresa el número final:"));

// NumerosPares(x, y);

// // 2. Verificación de contraseña
// let contraseñaAlmacenada = 20030215
// let contraseña = prompt("Ingresar contraseña");

// function verificar(contraseña) {
//     if (contraseña === contraseñaAlmacenada) {
//         return "LA contraseña es correcta";
//     } else {
//         return "La contraseña es incorrecta"
//     }
// }
// console.log(verificar(contraseñaAlmacenada));

// 3. Determina el grupo de edad
let edad = parseInt(prompt("Ingresa tu edad"));
function determina(grupoEdad) {
    if (edad >= 0) {
        if (edad <= 12) {
            return "Es un niño";
        } else if (edad <= 17) {
            return "Es adolescente";

        } else if (edad <= 64) {
            return "Es un adulto";

        } else {
            return "Eres un anciano";
        }
    } else {
        return "Edad no válida"
    }
};

console.log(determina(edad));