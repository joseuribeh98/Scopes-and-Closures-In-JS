//Hoisting

//var nameOfDog //JS automaticamente la define como undefined por eso el output es undefined
console.log(nameOfDog) //Output: undefined
var nameOfDog = 'Coffee' //Aqui la reasigno y por eso ya funciona el console.log como esperaba
console.log(nameOfDog) //Output: 'Coffee'

//Funciona de igual forma en las funciones
nameOfDog() //Output: El mejor perrito es undefined

function nameOfDog() {
    console.log(`El mejor perrito es ${pet}`)
}

var pet = 'Coffee' //Si yo no declaro la variable en ninguna parte, el output tendrá un error pues la variable no la encuentra en ningun ambito