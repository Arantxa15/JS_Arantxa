// IF ELSE

let Edad = 18;

if (Edad >= 18) {
    console.log("Eres mayor de edad");
    // si se cumple la condición
} else {
    console.log("Eres menor de edad");
    // no se cumple la condición
}

// Verificación de número positivo o negativo

let ingresarNumero = prompt("Ingresar número");

if (ingresarNumero >= 0) {
    console.log("El número es positivo");
} else {
    console.log("El número es negativo");
}

// Verificación de número par o impar
 
let numero = prompt("Introducir número");

if ((numero % 2) == 0 ){
    console.log("El numero es par");
} else {
    console.log("El mumero es impar");
}


// Verificación de contraseña

let contraseña = prompt("Ingrese una contraseña");
let contraseñaAlmacenada = 190598;

if (contraseñaAlmacenada == contraseña) {
    console.log("La contraseña es correcta");
} else {
    console.log("La contraseña es incorrecta");
}

// VARIAS CONDICIONES
let hora = 14;

if (hora < 12) {
    console.log("Buenos días");// si cumple la primera
    
} else if (hora < 18) {
    console.log("Buenas tardes");// si cumple la segunda
   
} else if (hora > 18){
    console.log("Buenas noches"); // si cumple la tercera
} else {
    // si no cumple ninguna
}