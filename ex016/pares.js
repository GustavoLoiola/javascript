function Pares(num) {
    if (num % 2 == 1) {
        num -=1
    }
    
    for(num; num >= 0; num -= 2) {
        console.log(num)
    }
}

Pares(77)