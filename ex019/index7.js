const fatorial = (num) => {
    if (num == 1 || num == 0) {
       return 1
       /*Se o número digitado for 0 ou 1, retorne 1 (Caso Base)*/
    }
    else {
        return num * fatorial(num -1)
        /*Se o número nao for 0 ou 1, retorne o número vezes ele mesmo menos 1 (Caso Recursivo) */
    }
}

const res = fatorial(8)
console.log(res)
