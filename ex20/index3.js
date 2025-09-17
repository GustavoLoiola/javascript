let numeros = [1, 1, 1, 2, 3 ,4, 5, 5]

const naoRepetir = (listaNum) => {
    let novaLista = []
    for (let c =0; c <listaNum.length; c++) {
        if(!novaLista.includes(listaNum[c])) {
            novaLista.push(listaNum[c])
        }
    }
    return novaLista
}


const res = naoRepetir(numeros)
console.log(res)