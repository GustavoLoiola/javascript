function adicionar() {
    const txtnum = document.querySelector('input#num')
     if (txtnum.value.length == 0) {
        alert('Por Favor digite um número válido!')
    }
    else {
        const num = Number(txtnum.value)
        const campo = document.querySelector('select#num')
        const option = document.createElement('option')
        option.text = `Valor ${num} adicionado à lista`
        campo.appendChild(option)
    }
}

function calcular() {
    const txtnumero = document.querySelector('input#num')
    if (txtnumero.value.length == 0) {
        alert('Não foi possível realizar os cálculos! Por favor preencha todos os campos.')
    }
    else {
        let listanum = []
        const numero = Number(txtnumero.value)

    }
}