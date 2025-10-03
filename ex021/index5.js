const lista = [5, 4, 7, 8, 10, 2, 0]

const aprovados = lista.map(function(elementos) {
    if(elementos >= 5) {
        return true
    }
    return false
    }
)

const listaAcrescimo = lista.map((elementos) => (elementos+1))


console.log(listaAcrescimo)