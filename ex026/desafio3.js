const Anagramas = (str1, str2) => {
    const formatar = (str) => {
        return str
        .toUpperCase()
        .replaceAll(' ','')
        .split('')
        .sort()
        .join('')
    }

    return formatar(str1) === formatar(str2)
}


console.log(Anagramas('listen', 'silent'))
console.log(Anagramas('hello', 'world'))
console.log(Anagramas('A gentleman', 'Elegant man'))