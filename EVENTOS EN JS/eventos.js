let miElemento = document.getElementById("miElemento");
1
// Función que se ejecuta cuando ocurre el evento de clic
function handleClick() {
    console.log("¡Hiciste clic en el elemento!");
}
miElemento.addEventListener("click", handleClick);


2

// Función que se ejecuta cuando el ratón pasa sobre el elemento
function handleMouseOver() {
    console.log("El ratón está sobre el elemento.");
}

miElemento.addEventListener("mouseover", handleMouseOver);



3
// Función que se ejecuta cuando el ratón sale del elemento
function handleMouseOut() {
    console.log("El ratón salió del elemento.");
}

miElemento.addEventListener("mouseout", handleMouseOut);

