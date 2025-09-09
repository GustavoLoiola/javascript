let numeros = [23, 19, 15, 60, 1999, 8]
let analisador = (listanum) => {
    const pares = listanum.filter(n => n %2 == 0 && n != 0)

    const geral = listanum.reduce((total, n) => total + n, 0)

    const dobro = listanum.map(n => n * 2)

    return {
    par: `Os números pares listados foram: ${pares}`,
    soma: `A soma geral de todos os números é igual a: ${geral}`,
    dobrado: `O dobro de cada número da lista é igual a: ${dobro}`
    }
}

let resultado = analisador(numeros)
console.log(resultado)