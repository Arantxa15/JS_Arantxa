// Contraseña
let contraseñaAlmacenada = "abc";
let contraseñaIngresada = prompt("Ingresa contraseña");
let igualdad = contraseñaAlmacenada === contraseñaIngresada;

console.log("La contraseña es: " + igualdad);





// Verificación de credenciales
let llueve = true; //Si llueve
let haceSol = false; //No hace sol

console.log(llueve && haceSol); // false
console.log(llueve || haceSol); // true	

// Almacenadas
let usuario = "arantxa";
let contraseña = 152003;

// Ingresado
let inicio = prompt("Ingresar usuario")
let pass = prompt("Ingresar contraseña")

// Comparación
let igual = (usuario == inicio) && (contraseña == pass);

console.log("Los datos introducidos son: " + igual)

// Verificación de rango de edad /5.2
// Edad del usuario
let edad = prompt("Ingresar edad");
let comprobación = (edad >= 18) && (edad <= 65);

// Comprobación
console.log("Tiene la edad permitida: " + comprobación);

// 5.3
let años = prompt("introduce tu edad");
let cuentaActiva = true;
let edadPermitida = (años >=18) && cuentaActiva;


console.log("La verificación es: " + edadPermitida);




