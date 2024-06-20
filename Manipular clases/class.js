let parrafo = document.getElementById('parrafo');
let addClassButton= document.getElementById('mas'); 
let removeClassButton= document.getElementById('menos');
let toggleClassButton= document.getElementById('alternar');

addClassButton.addEventListener('click', function() {
    parrafo.classList.add('color');
});

removeClassButton.addEventListener('click', function() {
    parrafo.classList.remove('color');
});

toggleClassButton.addEventListener('click', function() {
    parrafo.classList.toggle('color');
});
