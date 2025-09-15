const Fibonacci = (num) => {
    let sequencia = [0,1]
    for(let i =2; i <= num; i++) {
        sequencia[i] = sequencia[i-1] + sequencia[i-2]
    }
    return sequencia[num]
}

const res = Fibonacci(4)
console.log(res)