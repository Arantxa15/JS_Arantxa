// function cambiarColor() {
//     let selecColor = this.value;
//     console.log('Color seleccionado:', selecColor);
//   }

//  document.getElementById('seleColor').addEventListener('change', cambiarColor);


//  1 - Formulario en el que ingresar el nombre. Que cuando ingreses el nombre y clickes fuera aparezca en una p.

//  Texto de la p al principio → Aquí aparecerá tu nombre

let parrafo = document.getElementById('parrafo');
let nombre = document.getElementById('nombre');
function aparecerTexto () {
    parrafo.textContent = this.value;

}
nombre.addEventListener('change', aparecerTexto);




//  2 - Crear una web con una lista desplegable con cuatro opciones (blanco, rojo, verde y azul) y un cuadro de texto. Al elegir una de las tres opciones cambiará el color de fondo del cuadro de texto al color seleccionado y aparecerá escrito en él el nombre del color.

let colores = document.getElementById('colores');
let color = document.getElementById('color');

// let color = document.getElementById('color')
function sleccionarColor() {
   color.style.backgroundColor = this.value;
   color.textContent = this.value;
    
}
document.getElementById('colores').addEventListener('change', sleccionarColor);
