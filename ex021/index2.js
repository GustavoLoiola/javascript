/*const lista_de_coisas = [1, 2, 2, 3, 'Gustavo', 'Gustavo', 'Gabriela', 'Cleide', 'Gabriela']

const naoRepetir = (lista) => {
    let novaLista =[]
    for(let c =0; c < lista.length; c++) {
        if(novaLista.includes(lista[c]) === false) {
            novaLista.push(lista[c])
        }
    }
    return novaLista
}
*/

const lista_de_coisas = [1, 2, 2, 3, 'Gustavo', 'Gustavo', 'Gabriela', 'Cleide', 'Gabriela'];

const naoRepetir = (lista) => [...new Set(lista)];


const res = naoRepetir(lista_de_coisas)
console.log(res)
