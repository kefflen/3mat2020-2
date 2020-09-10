let comp = 0
const nomes = require("./dados/lista-nomes")


function buscaBin(lista, valor, fncomp, inicio=0, fim=lista.length-1) {

    if (fim >= inicio) {
        let meio = Math.floor((inicio + fim)/2)

        let res = fncomp(lista[meio], valor)
        if (res === 0) {
            comp++
            return meio
        }
        else if (res < 0) {
            comp += 2
            /* fim = meio - 1 */
            return buscaBin(lista, valor, fncomp, inicio, meio -1)
        }
        else {
            comp += 2
            return buscaBin(lista, valor, fncomp, meio + 1, fim)
        }
    }
    return - 1
}
let nums = [4, 16, 22, 29, 35, 44, 52, 58, 66, 71, 80, 88, 94]
let res = buscaBin(nums, 66, (elPos, busca) => {
    if (busca ==elPos) return 0
    else if (busca < elPos) return -1
    else return 1
})
console.log(res)
console.log(comp)