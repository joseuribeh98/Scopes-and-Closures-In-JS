//Reasignacion y Redeclaracion

//Usando var

var firstName //Declara la variable con un valor undefined
firstName = 'Jose' //Asignamos el valor a la variable

var lastName = 'Uribe' //Asignando y declarando en la misma linea
lastName = 'Holguin' //Redeclaramos el valor de la variable

var secondName = 'Luis' //Asignamos y declaramos en la misma linea con un valor especifico
var secondName = 'Ana' //Reasignamos y el valor cambia a Ana

//Usando let
let fruit = 'Apple' //Declaramos y asignamos la variable con let
fruit = 'Kiwi' //Reasignamos la variable

//Pero no se puede redeclarar
//let fruit = 'Banana' //No es posible redeclarar - Esto lanza error

//Usando const
const animal = 'dog' //Declaramos y asignamos usando const
//animal = 'cat' //Una constante no se puede reasignar la constante sigue siendo dog, esto lanza error
//const animal = 'snake' //Tampoco se puede redeclarar. Esto tambien lanza error

const vehicles = [] //Definimos un array con la constante vehicles
vehicles.push('Carro') //Añadimos un elemento al array y funciona
console.log(vehicles)

vehicles.pop() //Eliminamos el último elemento del array
console.log(vehicles) //Muestra el array vacio

//Esto no quiere decir que se esta reasignando, sobre el arreglo puedo usar metodos como push y pop que modifiquen ese arreglo

