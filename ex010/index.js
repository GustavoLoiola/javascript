let idade = 4455

console.log('Verificador de obrigatoriedade para voto!')

if (idade < 16) {
    console.log('Não vota!')
}
else if (idade <= 17 || idade >= 70 ) {
    console.log('Voto opcional!')
    }
else {
        console.log('Voto obrigatório!')
    }
