let nomes = ['Gustavo', 'Ana Beatriz', 'João Victor', 'Júlia', 'Marcos Leonardo']

const iniciais = (nomes) => {
    let primeiras = [] 
    for(let nome=0; nome < nomes.length; nome++) {
        let inicial = nomes[nome][0]
        let espaço = nomes[nome].indexOf(' ')
        if (espaço !== -1) {
            inicial += ('.')
            inicial += (nomes[nome][espaço+1])
        }
        primeiras.push(inicial)
   }
   return primeiras
}


const res = iniciais(nomes)
console.log(res)