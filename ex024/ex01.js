/*A senha gerada deve ter no mínimo 7 caracteres contendo letras, números e símbolos especiais. */

let novaSenha = []


const quantidadeCaracteres = 7
const caracteres = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const especiais = ['!', '@', '#', '$', '%', '&', "*"]


for(let c=0; c < quantidadeCaracteres -2; c++){
    const sorteio = Math.floor(Math.random() * caracteres.length)
    novaSenha.push(caracteres[sorteio])
}

const numero = numeros[Math.floor(Math.random() * numeros.length)]

const especial = especiais[Math.floor(Math.random() * especiais.length)]



novaSenha.push(numero)
novaSenha.push(especial)

novaSenha = novaSenha.sort(()=> Math.random()- 0.5)

console.log(novaSenha.join(''))
