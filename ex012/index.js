function idade () {
    let data = new Date()
    let hoje = data.getFullYear()
    let nas = document.getElementById('nascimento').value
    nas = Number.parseInt(nas)
    let idade = hoje - nas
    let resposta = document.querySelector('p#res')
    resposta.innerHTML = `A sua idade é de ${idade} anos`
    if (!nascimento.value) {
      alert('Dados inválidos! Por favor preencha todos os campos!')
    }
    else if (idade > 130 || idade < 0) {
        alert('Idade inválida! Por favor preencha o campo corretamente!')
    }
}