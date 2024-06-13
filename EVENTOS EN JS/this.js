// 4- Tengo 4 divs, cuando pase por encima de alguno de ellos el color de fondo del body cambiará a él de ese div.

let fondo = document.getElementById('fondo');
let divs = document.querySelectorAll('.miDiv');

function cambiarColor() {
    fondo.style.backgroundColor = this.style.backgroundColor;
}

divs[0].addEventListener("mouseover", cambiarColor);
divs[1].addEventListener("mouseover", cambiarColor);
divs[2].addEventListener("mouseover", cambiarColor);
divs[3].addEventListener("mouseover", cambiarColor);
