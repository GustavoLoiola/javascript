const palavraEscada = (palavra) => {
    let escada = ''
    for(let c=0; c < palavra.length; c++) {
        escada += palavra[c]
        console.log(escada)
    }
} 


palavraEscada('Gustavo')