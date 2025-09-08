const ultimaLetra = (frase) => {
    return frase.trim().slice(-1)
}

let ultima = ultimaLetra('O Gustavo é lindo demais!   ')
console.log(ultima)