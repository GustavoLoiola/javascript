let numeros = [20, 34, 2, 3, 555, 0]
/*Lista vazia para por os números*/

const paresDobro = (num) => {
    let pares = num.filter(n => n % 2 == 0 && n != 0)
    /*Filtra os números pares do array*/
    let dobro = pares.map(n => n * 2)
    /*Faz uma nova array dobrando os elementos*/
    return dobro
    /*Retorna a última array feita*/
}

const res = paresDobro(numeros)
console.log(res)
/*Saída de dados*/