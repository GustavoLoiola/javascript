numeros = [97, 34, 2, 0, -3, 2006, 800]

let Maior = (listaNumeros) => {
    let maiorNum = listaNumeros.reduce((max, n) => n > max ? n : max)
    return maiorNum
}


let res = Maior(numeros)
console.log(res)