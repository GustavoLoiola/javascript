function tabuada() {
    let txtnumero = document.querySelector('input#numero')
    let resulatdo = document.querySelector('select#num')

    if (txtnumero.value.length == 0) {
        alert('Por Favor digite um número!')
    }

    else {
        const num = Number(txtnumero.value)
        let c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            resulatdo.appendChild(item)
            c +=1
        }
    }
}