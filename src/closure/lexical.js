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

//En este desafío recibirás dos números aleatorios por parámetros.
//Usando las closures deberás crear una función a la cual se pueda llamar en primer lugar con un solo número y secuencialmente volver a llamarla para completar la suma con el siguiente número:
//La solución deberá tener un input y output como la siguiente, en algunos casos puede que no se mande el segundo número por lo que deberás pensar en como manejar ese tipo de casos.
//Input:
//sumWithClosure(2)(3);
//Output:
//5
//Input:
//sumWithClosure(90)();
//Output:
//90

//Solucion

function sumWithClosure(firstNum = 0) {
    return function (secondNum = 0) {
        return firstNum + secondNum
    }
}

sumWithClosure(2)(3)
sumWithClosure(90)()