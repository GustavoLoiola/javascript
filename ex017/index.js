let valores = []
function adicionar() {
    const txtnum = document.querySelector('input#num')
    const num = Number(txtnum.value)
    const campo = document.querySelector('select#lista')

    if (txtnum.value.length == 0) {
        alert('Por Favor digite um número válido!')
    }
    else if (valores.includes(num)) {
        alert('Valor já registrado!')
    }
    else if (num > 100 || num < 1) {
            alert('O número digitado não está entre 1 e 100, Por Favor digite novamente.')
    }
    else {
        valores.push(num)
        const option = document.createElement('option')
        option.text = `Valor ${num} adicionado à lista`
        campo.appendChild(option)
    }
}

function calcular() {
    const txtnumero = document.querySelector('input#num')
    const calculos = document.querySelector('main')
    if (txtnumero.value.length == 0) {
        alert('Não foi possível realizar os cálculos! Por favor preencha todos os campos.')
    }
    else {
        let soma = 0
        for (c=0;c < valores.length;c++)
            soma += valores[c]
        const total = valores.length
        const maior = Math.max(...valores)
        const menor = Math.min(...valores)
        const media = soma / total
        calculos.innerHTML = `
        <p>Ao todo foram informados ${total} números.</p>
        <p>A soma entre todos os números é igual a: ${soma}</p>
        <p>O maior valor informado foi ${maior}</p>
        <p>O menor valor informado foi ${menor}</p>
        <p>A média entre todos os números informados é de: ${media}</p>
        `
    }
}