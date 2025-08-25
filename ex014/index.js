function contador() {
    let txtinicio = document.querySelector('input#primeiro-num')
    let txtfim = document.querySelector('input#ultimo-num')
    let txtpasso = document.querySelector('input#passo')
    let resposta = document.querySelector('p#resposta')
    /*pegando variáveis do HTML*/
    if (txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0) {
        alert('Dados inválidos! Por favor preencha todos os campos!')
    }
    /*Verificando o preenchimento de todos os campos*/

    else {
        let inicio = Number(txtinicio.value)
        const fim = Number(txtfim.value)
        let passo = Number(txtpasso.value)
        /*passando os valores para Números*/
        if (passo <= 0) {
            alert('Passo inválido! Irei considerar o passo como 1.')
            passo ++
        }
        /*Verificando se passo == 0*/

        resposta.innerHTML = `${inicio} 👉 `

        if (fim > inicio) {
            while(inicio + passo <= fim) {
                inicio += passo
                resposta.innerHTML += `${inicio} 👉`
            }
        }
        /*Contagem Progressiva */
        else {
            while(inicio - passo >= fim) {
                inicio -= passo
                resposta.innerHTML += `${inicio} 👉`
        }
    }
    /*Contagem Regressiva*/
        resposta.innerHTML += '🏁'
    }
}