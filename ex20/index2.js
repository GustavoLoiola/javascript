const paliíndromo = (palavra) => {
    palavra = palavra.toUpperCase().replaceAll(/[^A-Z]/g, '')
    let aoContrario = ''
    for(let c = palavra.length-1 ; c >= 0; c--) {
        aoContrario += (palavra[c])
    }
    

   return aoContrario === palavra
}

const res = paliíndromo('A gorda ama a droga')
console.log(res)