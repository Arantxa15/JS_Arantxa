let imagen = document.getElementById('perro');
let imagenOriginalSrc = imagen.src;
let imagenNuevaSrc = "../EVENTOS EN JS/imagenes/golden.jpg";

function cambiarImagen() {
    imagen.src =imagenNuevaSrc;
}

function restaurarImagen() {
    imagen.src =imagenOriginalSrc;
}
function actualizarFechaHora() {
    let ahora = new Date();
    let opciones = {
        weekday: 'long', // Nombre completo de dia de la semana
        year: 'numeric', // Año con cuatro dígitos
        month: 'long', //Nombre completo del mes
        day: 'numeric', // Día del mes como número
        hour: 'numeric', //hora
        minute : 'numeric', // minutos
        second: 'numeric' //AParezcan los segundos

    };

    let fechaHora = ahora.toLocaleDateString('es-ES', opciones);
    document.getElementById('hora').textContent = fechaHora;

}
// setInterval me actualiza la hora
setInterval(actualizarFechaHora, 1000);

imagen.addEventListener("mouseover", cambiarImagen);
imagen.addEventListener("mouseout", restaurarImagen);
