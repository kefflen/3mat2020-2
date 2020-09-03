let comp = 0
const nomes = require("./dados/lista-nomes")


function buscaBin(lista, valor, fncomp) {
    let inicio = 0
    let fim = lista.length - 1

    while (fim >= inicio) {
        let meio = Math.floor((inicio + fim)/2)

        let res = fncomp(lista[meio], valor)
        if (res === 0) {
            comp++
            return meio
        }
        else if (res < 0) {
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

let res = buscaBin(nomes, "FAUSTO", (obj, busca) => {
    if (obj.first_name == busca) return 0
    else if (busca < obj.first_name) return -1
    else return 1
})
console.log(res)
console.log(comp)