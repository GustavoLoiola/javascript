let palavras = ['Oi', '   Tudo bem  ', 'Meu nome é Gustavo']

const contaLetras = (palavraOuFrase) => {
    for(let c=0; c < palavraOuFrase.length; c++) {
        palavraOuFrase[c] = palavraOuFrase[c].replaceAll(' ', '')
    }
    for(let c=0; c < palavraOuFrase.length; c++) {
        console.log(`A ${c+1}° palavra possui ${palavraOuFrase[c].length} Letras`)
    }
}

contaLetras(palavras)