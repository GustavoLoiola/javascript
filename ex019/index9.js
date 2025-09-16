let Fibonacci = () => {
    let n = document.querySelector("input#txtnumero")
    let resposta = document.querySelector("p#resposta")
    let num = Number(n.value)
    /*Pega os elementos do HTML*/


    if(num <= 0) {
        alert('Número inválido!')
    }
    else if(num == 1) {
        resposta.innerHTML = '0'
    }
    else if(num == 2) {
        resposta.innerHTML = '0 > 1'
    }
    /*Faz uma validação de números inválidos, sendo 0 ou menor inválido, e 1 ou 2 o caso base */

    else {
    let sequencia = [0,1]

    for(let pos=1; pos < num - 1; pos++) {
        sequencia.push(sequencia[pos] + sequencia[pos-1])
    }
    /*Usa o laço para adicionar números a sequência de acordo com a soma dos dois números anteriores. */
    
    resposta.innerHTML = ""
    /*Limpa o Parágrafo caso o usuário queira ver o resultado várias vezes. */

    resposta.innerHTML = sequencia.slice(0, num).join(" > ")
    /*Adiciona cada elemento da sequência com o slice e usa o join " > " entre cada um deles. */
}
}