let comp = 0
function buscaBin(lista, valor) {
    let inicio = 0
    let fim = lista.length - 1

    while (fim >= inicio) {
        let meio = Math.floor((inicio + fim)/2)
        if (lista[meio] === valor) {
            comp++
            return meio
        }
        else if (valor < lista[meio]) {
            comp += 2
            fim = meio - 1
        }
        else {
            comp += 2
            inicio = meio + 1
        }
    }
    return - 1
}
console.time("1°")
const primos = require("./dados/primo")
console.log(buscaBin(primos, 7723))
console.log(comp)
console.timeEnd("1°")

console.time("2°")
comp = 0
console.log(buscaBin(primos, 3359))
console.log(comp)
console.timeEnd("2°")

