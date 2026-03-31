const fizzBuzzArray = (num) => {
    return num % 15 === 0 ? 'FizzBuzz' :
    num % 3 === 0 ? 'Fizz' :
    num % 5 === 0 ? 'Buzz' :
    num
}

const numeros = [1,2,3,4,5,10,15,18,30,35,38,99,100]

const res = numeros.map(fizzBuzzArray)

console.log(res)