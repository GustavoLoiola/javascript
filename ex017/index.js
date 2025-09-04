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
    else if (num > 100 || num < 0) {
            alert('O número digitado não está entre 0 e 100, Por Favor digite novamente.')
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
        const resultado = document.createElement('p')
        let soma = 0
        for (c=0;c < valores.length;c++)
            soma += valores[c]
        maior = Math.max(...valores)
        menor = Math.min(...valores)
        resultado.innerHTML = `Ao todo foram informados ${valores.length} números`
        resultado.innerHTML += `<br> A soma entre todos os números é igual a: ${soma}`
        resultado.innerHTML += `<br> O maior valor informado foi ${maior}`
        resultado.innerHTML += `<br> O menor valor informado foi ${menor}`
        resultado.innerHTML += `<br> A média entre todos os números informados é de: ${soma / valores.length}`
        calculos.appendChild(resultado)
    }
}