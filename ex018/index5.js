const numeros = (...num) => {
     let quadrado = num.map(num => num * num)
     return quadrado
}


let aoQuadrado = numeros(3, 5, 8, 10)
console.log(aoQuadrado)