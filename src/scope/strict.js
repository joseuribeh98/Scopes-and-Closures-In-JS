'use strict'
//Modo estricto fue incorporado en ES5 y permite ejecutar de forma estricta unas reglas particulares para tener mejor control sobre la asignacion de las variables y otros elementos en JS

//Sin usar modo estricto
//pi = 3.1416 //No declaro la variable, la asigno directamente y funciona
//Lo declara automaticamente como variable global

//Usando modo estricto
pi = 3.1416 //Asigno la variable sin declarar
//console.log(pi) //Esto no funciona y lanza error porque en modo estricto si o si debo declarar la variable primero


function myFunction() {
    'use strict' //Tambien lo puedo usar dentro de una funcion
    return pi = 3.1416
}

console.log(myFunction()) //Pasa lo mismo, va a dar error porque no declare la variable pi

