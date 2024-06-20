// 2 Icono de hamburguesa que al clicar en él muestra el menú.

let menU = document.getElementById('menu');
let iconO = document.getElementById('hamburguesa');
// iconO.addEventListener('click', function (){
//     menU.classList.toggle('desplegar');
// }) 

function verMenu () {
    menU.classList.toggle('desplegar');
}
iconO.addEventListener('click', verMenu);