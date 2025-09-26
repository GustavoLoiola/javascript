const numeros = [2, 67, -12, 541, 349]

/*const maxArray = (arrayNumeros) => {
    const maior = Math.max(...numeros)
    return maior
} (Método fácil e simplificado)*/

const maxArray = (arrayNumeros) => {
    let maior = arrayNumeros[0]
    for(let c =0; c <= arrayNumeros.length; c++) {
        if(arrayNumeros[c] > maior) {
           maior = arrayNumeros[c]
        }
    }
    return maior
}
/*Método tradicional com For e If */


const res = maxArray(numeros)
console.log(`O maior número da lista é: ${res}`)
