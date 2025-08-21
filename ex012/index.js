function idade () {
    let data = new Date()
    let hoje = data.getFullYear()
    let nas = document.getElementById('nascimento')
    let idade = hoje - Number(nas.value)
    let resposta = document.querySelector('p#res')
    let genero = ''
    let fundo = document.querySelector('form')
    let imagem = document.querySelector('div#imagem')
    if (idade > 130 || idade < 0 || nas === '') {
        alert('Idade inválida! Por favor preencha o campo corretamente!')
    }

    else {
    let sexo = document.getElementsByName('sex')
    imagem.style.display = 'block'
    fundo.style.height = '450px'

    if (sexo[0].checked) {
      genero = 'masculino'
      if (idade >= 0 && idade <= 15) {
        imagem.style.backgroundImage = ' url(imagens/homem-crianca.webp)'
      }
      if (idade > 15 && idade <= 35) {
        imagem.style.backgroundImage = 'url(imagens/homem-jovem.webp)'
      }
      if (idade > 35 && idade <= 55) {
        imagem.style.backgroundImage = 'url(imagens/homem-adulto.png)'
      }
      if (idade > 55 && idade <= 71) {
        imagem.style.backgroundImage = 'url(imagens/homem-velho.avif)'
      }
      if (idade > 71) {
        imagem.style.backgroundImage = 'url(imagens/homem-idoso.webp)'
      }
    }
    else if (sexo[1].checked) {
      genero = 'Feminino'

      if (idade >= 0 && idade <= 15) {
        imagem.style.backgroundImage = ' url(imagens/mulher-crianca.webp)'
      } 
      if (idade > 15 && idade <= 35) {
        imagem.style.backgroundImage = 'url(imagens/mulher-jovem.webp)'
      }
      if (idade > 35 && idade <= 60) {
        imagem.style.backgroundImage = 'url(imagens/mulher-adulta.webp)'
      }
      if (idade > 61) {
        imagem.style.backgroundImage = 'url(imagens/mulher-idosa.webp)'
      }
    }
    resposta.innerHTML = `Detectamos uma pessoa do gênero ${genero} com ${idade} anos!`
  }
}
