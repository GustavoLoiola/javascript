let idades = [3, 33, 65, 10, 11]
/*Array com as idades*/

const Maiores = (lista_idades) => {
    let maior = lista_idades.filter( n => n > 17)
    return maior
}
/*Filtra os números maiores ou iguais a 18 */

const res = Maiores(idades)
console.log(res)
/*Saída de dados*/