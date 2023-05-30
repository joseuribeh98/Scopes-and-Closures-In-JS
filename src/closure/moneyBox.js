//Declaramos la funcion sin hacer uso de closures
//function moneyBox(coins) {
//    let saveCoins = 0
//    saveCoins += coins
//    console.log(`MoneyBox: $${saveCoins}`)
//}

//moneyBox(5)
//moneyBox(7)

//Output
//MoneyBox: $5
//MoneyBox: $7

//No se suman los valores, porque no recuerda el valor modificado de saveCoins, cada que la ejecute va a establecer moneyBox en 0 y lo va a modificar con el parametro que le pase.


//Declaramos la funcion usando closures
function moneyBox () {
    let saveCoins = 0
    function countCoins(coins) {
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins
}

const myMoneyBox = moneyBox()
console.log("Mi MoneyBox")
myMoneyBox(5)
myMoneyBox(7)
myMoneyBox(12)

// Output
// MoneyBox: $5
// MoneyBox: $12
// MoneyBox: $24

//Ahora si lo recuerda y funciona la funcion como esperamos

const moneyBoxAna = moneyBox()
console.log ("MoneyBox de Ana")
moneyBoxAna(1)
moneyBoxAna(10)
