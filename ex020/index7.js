const texto = document.querySelector("input#botaotexto")
const res = document.querySelector("p#resposta")
const resultado = document.querySelector("input#enviar")

const aoContrario = () => {
    let palavra = texto.value
    let tamanho = palavra.length -1
    let reverso = ''
    if (palavra.trim() == '') {
        alert('Dados inválidos!')
    }
    else {
    for(let i = tamanho; i >= 0; i--) {
        reverso += palavra[i]
    }

    res.innerHTML = `${reverso}`
    }
}

resultado.addEventListener('click', aoContrario)
