function contador() {
    let txtinicio = document.querySelector('input#primeiro-num')
    let txtfim = document.querySelector('input#ultimo-num')
    let txtpasso = document.querySelector('input#passo')
    let resposta = document.querySelector('p#resposta')
    resposta.innerHTML = `${inicio} --> `
    
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        alert('Dados inválidos!')
    }

    let inicio = Number(txtinicio.value)
    const fim = Number(txtfim.value)
    const passo = Number(txtpasso.value)

    while(fim >= inicio) {
        inicio += passo
        resposta.innerHTML += `${inicio} --> `
        if (inicio + passo > fim) {
            break
        }
    }
    resposta.innerHTML += 'FIM'
    
}