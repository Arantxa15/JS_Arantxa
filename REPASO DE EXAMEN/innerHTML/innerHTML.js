// Acceder al contenido HTML dentro del div con id "miDiv"
// let contenido = document.getElementById('miP').innerHTML;

// Modificar el contenido HTML dentro del div
// document.getElementById('miP').innerHTML  = 'Nuevo <strong>contenido</strong> para el párrafo';


// 1- Cambiar el contenido de un elemento utilizando innerHTML
let innerHTML = document.getElementById('miP').innerHTML;

document.getElementById('miP').innerHTML = 'Este es el nuevo contenido utilizando <strong>innerHTML</strong>.';

// 2- Cambiar el contenido de un elemento utilizando textContent
let textContent = document.getElementById('miP2').textContent;

document.getElementById('miP2').textContent = 'Este es el nuevo contenido utilizando textContent.'


// 3- Crea una página web con un botón y un div vacío. Utiliza JavaScript para que, al hacer clic en el botón, el contenido del div cambie a “Has hecho click en el botón”

let vacio = document.getElementById('div1');
let boton = document.getElementById('boton1');
function aparecer (){
    vacio.innerHTML = '<p>¡Has hecho click en el <a href="#">botón</a>!</p>'
}
boton.addEventListener('click', aparecer);