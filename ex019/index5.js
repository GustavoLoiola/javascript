let numeros = [45, 32, 3, -3, 1]

const numerosPositivos = (num) => {
    let positivos = num.filter(n => n>0)
    return positivos.length === num.length
}
/*Retorna verdadeiro ou Falso*/


const res = numerosPositivos(numeros)
console.log(res)