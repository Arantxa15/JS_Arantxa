// let formulario = document.getElementById('miFormulario');

// function validarFormulario(event) {
//   event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
  
//   let nombre = document.getElementById('nombre').value;
//   // Validar el nombre
//   if (nombre === "") { 
//     alert('Por favor ingresa un nombre válido.');
//   }else{
//     alert('Formulario enviado correctamente con el nombre: ' + nombre);
//     formulario.submit();
//   }
// }

// formulario.addEventListener('submit', validarFormulario);


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

  mostrarError(document.getElementById('nombre'), !validarNombre);
  mostrarError(document.getElementById('edad'), !validarEdad);
  mostrarError(document.getElementById('interes'), !validarInteres);


}

function mostrarError(id, mostrar) {
  let mensajeError = id.nextElementSibling;

  if (mostrar) {
    mensajeError.style.display = 'block'; //Mostrar el mensaje de error

  } else {
    mensajeError.style.display = 'none'; //Ocultar el mensaje de error
  }
}

formulario.addEventListener('submit', validarEnvío);