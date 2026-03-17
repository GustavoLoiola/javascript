// Teste com JSON

/*
const perus = {
    cidade: 'São Paulo',
    habitantes: 90000,
    zona: 'norte',
    area: ['recanto', 'russo', 'adelfiore']
}

let texto = JSON.stringify(perus)

document.getElementById('area').innerHTML = texto

let obj = JSON.parse(texto)

console.log(obj.area[1]) */

const btn = document.getElementById('btn')
const answer = document.getElementById('text')

function getCEP(){
   let userCEP = document.getElementById('cep').value
    
    const ajax = new XMLHttpRequest()
    ajax.open('GET', 'https://viacep.com.br/ws/' + userCEP + '/json/')
    ajax.send()


    ajax.onload = function () {

    let obj = JSON.parse(this.responseText)
    let rua = obj.logradouro
    let bairro = obj.bairro
    let localidade = obj.localidade
    let estado = obj.estado
    let ddd = obj.ddd

     answer.innerHTML = `Rua: ${rua} <br> Bairro: ${bairro} <br> Local: ${localidade} <br> Estado: ${estado} <br> ddd: ${ddd}`
}
}

btn.addEventListener('click', getCEP)
