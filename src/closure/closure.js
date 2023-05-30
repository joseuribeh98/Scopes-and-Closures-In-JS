function greeting() {
    let username = 'Jose'

    function displayUsername() {
        return `Hey ${username}`
    }

    return displayUsername
}

const g = greeting()
console.log(g) //Retorna la definicion que tiene la variable g que en este caso es una funcion llamada displayUsername
console.log(g()) //Ejecuta la funcion displayUsername()