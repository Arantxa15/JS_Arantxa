// 1 Crear un script que informe al usuario en qué zona de la pantalla ha pulsado el ratón. Las zonas definidas son las siguientes: izquierda arriba, izquierda abajo, derecha arriba y derecha abajo. 

// function contendeor(mensaje) {
//     alert('Has pulsado ' + mensaje);
// }


// 2 Al hacer clic en un botón, incrementar un contador y mostrar el valor actual en la página.

 let contador = 0;
 function incrementarContador() {
     contador++;
    document.getElementById('contador').textContent = contador;
 }


// 3 Al hacer clic en un botón, mostrar la fecha y hora actual en un párrafo.
// let ahora = new Date;
