const maiorIdade = (idade) => {
    if (idade >= 18) {
        return('Maior de Idade!')
    }
    else if (idade < 0 || idade > 150) {
        return('Idade inválida!')
    }
    else {
        return('Menor de idade!')
    }
}

let idade = maiorIdade(100)
console.log(idade)