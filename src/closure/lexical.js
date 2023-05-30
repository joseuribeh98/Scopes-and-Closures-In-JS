//Los closures permiten acceder al ambito de una funcion exterior desde una funcion interior. Se crean cada vez que una funcion es creada
//Los closures no siempre son utilizados


//Closures lexicos
const myGlobal = 0 //Declaramos y definimos una variable global

function myFunction() { //Funcion externa
    const myNumber = 1 //Block scope
    console.log(myNumber)

    function parent () { //Funcion interna
        const inner = 2
        console.log(myNumber, myGlobal)
        
        function child() { //Otra funcion interna
            console.log(inner, myNumber, myGlobal)
        }
        return child()
    }
    return parent()
}

myFunction()
//Output
//1
//1 0
//2 1 0

//Todas las variables se muestran correctamente, aunque esten anidadas dentro de otras funciones
//En el ambito lexico la accesibilidad de las variables esta determinada por la posicion de las mismas dentro de los ambitos anidados