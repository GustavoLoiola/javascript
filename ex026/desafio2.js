const verificaPalindromo = (palavra) => {
    const reverse = palavra.split('').reverse().join('').toUpperCase()
    return palavra.toUpperCase() === reverse
}

const res = verificaPalindromo('RAAr')
console.log(res)