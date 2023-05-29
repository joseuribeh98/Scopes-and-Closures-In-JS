//Function Scope
function greeting() {
    let username = 'Jose' //Esta variable solo puede ser usada en esta funcion
    console.log(username)
    
    if (username === 'Jose') {
    console.log(`Hey ${username}!`)
}
}

greeting()

console.log(username) //Lanza error porque la variable no está definida, no la puedo usar por fuera de la funcion