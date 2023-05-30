//En ES6 se agrego let y const con los cuales se introduce el block scope
function fruits() {
    //Variables definidas dentro de un bloque puede ser utilizadas solo en el bloque cuando son definidas con let o con const
    //Para variables globales se usa var pero se debe tener cuidado con ellas
    //Un bloque es casi cualquier cosa que este dentro de {}
    if (true) {
        var fruit1 = 'Mango'
        let fruit2 = 'Kiwi'
        const fruit3 = 'Watermelon'

        console.log(fruit2) //Funciona dentro del bloque
        console.log(fruit3) //Funciona dentro del bloque
    }
    console.log(fruit1) //Funciona
    //console.log(fruit2) //No funciona fuera del bloque
    //console.log(fruit3) //No funciona fuera del bloque
}
fruits()