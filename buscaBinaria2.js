let comp = 0



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