function ParOuImpar(num) {
    if (num == 0) {
        console.log('O número 0 é NULO!')
    }
    else {
        if (num % 2 == 0) {
            console.log(`O número ${num} é PAR!`)
        }

        else {
            console.log(`O número ${num} é  ÍMPAR!`)
        }
    }
}

ParOuImpar(0)