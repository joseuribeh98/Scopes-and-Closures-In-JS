//Variables

var a //Solo declaracion de la variable
var b = 'b' //Declaracion y asignacion a la variable
b = 'bb' //Reasignacion
var a = 'aa' //Redeclaracion

//Global scope

var fruit = 'Mango' //Variable global

function bestFruit() {
    console.log('The best fruit is: ' + fruit)
}

bestFruit()

//Si la variable no se declara si no que se asigna directamente pasa a ser una variable global por defecto

function countries() {
    country = 'Colombia' //Variable asignada pero no declarada
    console.log(country)
}

countries()
console.log(country) //Se puede acceder a la variable country afuera de la funcion