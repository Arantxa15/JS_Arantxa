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



// 5- Tengo una imagen de 300px ancho, cuando pase el ratón por encima la imagen se cambiara por otro diferente, al quitar el ratón la imagen volverá a aparecer.
let imagen = document.getElementById('perro')
let imagenOriginal = "../EVENTOS EN JS/imagenes/pastor_belga.jpg"
let imagenNueva = "../EVENTOS EN JS/imagenes/golden.jpg"

function cambiarImagen() {
imagen.src = imagenNueva;
    
}
imagen.addEventListener("mouseover", cambiarImagen);

function restaurarImagen(){
    imagen.src = imagenOriginal;
 
}
imagen.addEventListener("mouseout", restaurarImagen);
