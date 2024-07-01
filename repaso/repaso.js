//  2 - Crear una web con una lista desplegable con cuatro opciones (blanco, rojo, verde y azul) y un cuadro de texto. Al elegir una de las tres opciones cambiará el color de fondo del cuadro de texto al color seleccionado y aparecerá escrito en él el nombre del color.
// SELECCIONA UN COLOR, RECUADRO DE ESE COLOR
let colores = document.getElementById('colores');
let color = document.getElementById('color');

// let color = document.getElementById('color')
function sleccionarColor() {
    color.style.backgroundColor = this.value;
    color.textContent = this.value;

}
document.getElementById('colores').addEventListener('change', sleccionarColor);

// CAJITAS DE COLOR AL PASAR EL RATÓN

// 4- Tengo 4 divs, cuando pase por encima de alguno de ellos el color de fondo del body cambiará a él de ese div.

let fondo = document.getElementById('fondo');
let divs = document.querySelectorAll('.miDiv');


// 1ª opción
function cambiarColor() {
    fondo.style.backgroundColor = this.style.backgroundColor;
}

// 2º opcion
// for(let i = 0; i < divs.length; i++){ divs[i].addEventListener("mosueover", cambiarColor)}

divs[0].addEventListener("mouseover", cambiarColor);
divs[1].addEventListener("mouseover", cambiarColor);
divs[2].addEventListener("mouseover", cambiarColor);
divs[3].addEventListener("mouseover", cambiarColor);


// IMAGEN ENCIMA
// 5- Tengo una imagen de 300px ancho, cuando pase el ratón por encima la imagen se cambiara por otro diferente, al quitar el ratón la imagen volverá a aparecer.
let imagen = document.getElementById('perro')
let imagenOriginal = "../EVENTOS EN JS/imagenes/pastor_belga.jpg"
let imagenNueva = "../EVENTOS EN JS/imagenes/golden.jpg"

function cambiarImagen() {
    imagen.src = imagenNueva;

}
imagen.addEventListener("mouseover", cambiarImagen);

function restaurarImagen() {
    imagen.src = imagenOriginal;

}
imagen.addEventListener("mouseout", restaurarImagen);


// CAJA QUE SE MUEVE

function aClase() {
    let div = document.querySelector('.caja');

    div.classList.toggle("mover");
}
document.getElementById('btn').addEventListener('click', aClase);

// FORMULARIO
let formulario = document.getElementById('formulario');

function validarEnvío(event) {
  event.preventDefault();

  let nombrE = document.getElementById('nombre').value;

  let edaD = document.getElementById('edad').value;

  let intereS = document.getElementById('interes').value;

  // Validar el nombre y el interés para que no quede vacío
  let validarNombre = nombrE !== "";

  let validarInteres = intereS !== "";

  let validarEdad = Number.isInteger(parseInt(edaD)) && parseInt(edaD) > 18;

  if (validarNombre && validarEdad && validarInteres) {
    formulario.submit();
  }

  mostrarError('errorr-nombre', validarNombre);
  mostrarError('errorr-edad', validarEdad);
  mostrarError('errorr-interes', validarInteres);


}

function mostrarError(id, mostrar) {
  let parrafo = document.getElementById(id);

  if (mostrar) {
    parrafo.style.display = 'none'; //Ocultar el mensaje de error

  } else {
    parrafo.style.display = 'block'; //Mostrar el mensaje de error
  }
}

formulario.addEventListener('submit', validarEnvío);