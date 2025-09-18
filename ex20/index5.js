const opcao = document.querySelector("input#botaoTema")
let corpo = document.querySelector("body")


const mudarTema = () => {
    if(opcao.checked) {
        corpo.style.backgroundColor = 'black'
        corpo.style.color = 'white'
    }
    else {
    corpo.style.backgroundColor = "white"
    corpo.style.color = "black"
    }
}

opcao.addEventListener('change', mudarTema)