const val = document.querySelector('button#botao')
const numero = document.querySelector('input#num')
const res = document.querySelector('p#resultado')


const converterDolar = () => {
    const quantia =  +numero.value
    const emDolar = quantia / 5.45
    res.innerHTML = `US$${emDolar.toFixed(2)}`
}

val.addEventListener("click", converterDolar)

