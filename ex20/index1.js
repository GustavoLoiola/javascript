let aoContrario = (palavra) => {
    let invertido = ''
    for(let c = palavra.length -1 ; c >= 0 ; c--) {
       invertido += palavra[c]
    }
    return invertido
}

let res = aoContrario('O Gustavo é um ótimo programador!')
console.log(res)