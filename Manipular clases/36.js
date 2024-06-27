
// function comprobar(event) {
//     event.preventDefault();
//     let empleados = ['juan', 'maría', 'carlos', 'ana', 'luis', 'sofía'];
//     let nombreUsuario = document.getElementById('usuario').value;
//     let resultado = document.getElementById('resultado');

//     if (empleados.includes(nombreUsuario.toLowercase())) {
//         resultado.textContent = "El empleado se encuentra en la lista";
//         resultado.style.color = "green";
//     } else {
//         resultado.textContent = "El empleado no se encuentra en la lista";
//         resultado.style.color = "red";
//     } 
// }
// document.getElementById('btn').addEventListener('click', comprobar);
function comprobar(event) {
    event.preventDefault();

    let empleados=[ 'juan','maría','carlos','ana','luis','sofía'];
    let nombreUsuario=document.getElementById('usuario').value;
    let resultado=document.getElementById('resultado');

    if (empleados.includes(nombreUsuario.toLowerCase())) {

        resultado.textContent='El empleado se encuentra en la lista.'
        resultado.style.color='green';

    }
    else{

         resultado.textContent='El empleado no se encuentra en la lista.';
         resultado.style.color='red';

    }
}

document.getElementById('btn').addEventListener('click',comprobar);