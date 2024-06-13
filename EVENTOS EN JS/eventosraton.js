// 24
// 1
// 1- Cuando haga click en el button, me aparece una alerta (alert();) que dirá: ¡Hiciste click en el botón!

let boton = document.getElementById("boton");
function darClick() {
    alert("¡Hiciste clic en el botón!");
    }
    boton.addEventListener("click", darClick);



//  2- Cuando pase el ratón por encima del div, cambiará el color de fondo de ese div.

let color = document.getElementById("color");

function cambioColor() {
color.style.backgroundColor = 'lightblue';
}

function restaurarColor() {
    color.style.backgroundColor = '';
}

function alerta(){
    alert('Cambiaste el color');
}

color.addEventListener('mouseover', cambioColor);

color.addEventListener('mouseout', restaurarColor);

color.addEventListener('click', alerta);



// 3- Cuando salga el cursor del div, el div cambia de color de fondo.

let colorFondo = document.getElementById("fondo");

function cambiarFondo() {
    colorFondo.style.backgroundColor = 'purple';
}

function fondoDiferente() {
    colorFondo.style.backgroundColor = 'blue';
}
colorFondo.addEventListener('mouseover', cambiarFondo);

colorFondo.addEventListener('mouseout', fondoDiferente);




