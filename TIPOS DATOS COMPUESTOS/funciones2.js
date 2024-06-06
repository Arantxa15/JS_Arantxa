// Ejercicio 18

let base=parseInt(prompt('Por favor, ingrese la base'))
let altura=parseInt(prompt('Por favor, ingrese la altura'))

function AreaRectangulo(ba,al) {

    // devolver el àera calculada

    return ba* al;
  
}
 

console.log('El area del rectángulo es : '+ AreaRectangulo(base,altura));
 



//Crea una función saludar, que tome como parámetro el nombre. Pide al usuario que ingrese su nombre.

//La consola mostrará → ¡Hola,_____ ! ¿Cómo estás?



function saludar(nombres){

    return 'hola,!'+ nombres+ ' ¿como estas?';


}

let n = prompt('Ingresa un nombre');
console.log (saludar(n));

//--------------------------------------------importante ---------

// Escribir el código de una función a la que se pasa como parámetro un número y devuelve como resultado si el número es par o impar. Mostrar en consola el resultado devuelto por la función.

let pars= parseInt(prompt('Ingresa un número-saber si es par'))

function par(numeri) {

    if (numeri%2===0) {
        return'par'
    }

    else{
       return 'impar'
    }
    
}

console.log('El resultado de la función es:'+ par(pars))


// 3 Escribe una función que imprima en la consola los números pares del 1 al 10
//No estoy usando parametros por que no quiero sustituir por nada 

function imprirmirPares() {
    for (let i = 2; i <= 10; i+=2) {
                  
            console.log(i);
        
    }
}
 

imprirmirPares();






// Ejercicio 19

// Crea una función saludar, que tome como parámetro el nombre y apellido. Pide al usuario que ingrese su nombre y apellido.

//La consola mostrará → Hola,_____ ______ 



function saludo(nombrep,apellido) {

    return'Hola, '+ nombrep+' '+ apellido;
    
}
let nomb = prompt("Por favor, ingresa un Nombre  ");
let apell = prompt("Por favor, ingresa un Apellido ");

console.log(saludo(nomb,apell))


// 2 Calcular el cuadrado de un número. Qué el nº lo ingrese el usuario y siempre sea tipo number.

let numeroIngresado=parseInt(prompt('Por favor, ingrese un número'))

let resultadp=numeroIngresado * numeroIngresado;

function cuadrado() {

    return 'El cuadrado de '+numeroIngresado + ' es '+ resultadp
}


console.log(cuadrado(resultadp))

// otra manera 


function cua(numeross) {

    return numeross * numeross
    
}

let nu=parseInt(prompt('Por favor, ingrese un número'))
console.log('el cuadrado de '+ nu + 'es'+ cua(n))


//3.Función para decir si el nº es positivo o negativo.

//En la consola se mostrará → El número es (lo que devuelve la función)



function signo(numerospn) {
    if (numerospn >=0){
        return'positivo';
    }
    else{
        return 'negativo';
    };
    
}

let na=parseInt(prompt('ingresa un número'));
console.log ('El número es '+ signo(na));


