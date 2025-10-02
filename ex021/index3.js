const primeira_palavra = 'rmao    '
const segunda_palavra = 'roma'

const verificaAnagrama = (palavra1, palavra2) => {
    const pal1 = palavra1.replaceAll(' ', '').toUpperCase()
    const pal2 = palavra2.replaceAll(' ', '').toUpperCase()
    let verificador1 = []
    let verificador2 = []
    if(pal1.length == pal2.length) {
        for(let c=0; c < pal1.length; c++) {
            verificador1 += pal1[c]
            verificador2 += pal2[c]
        }
        if(verificador1.includes(...verificador2)) {
            return true
        }
    }
    else {
        return false
    }
}

const res = verificaAnagrama(primeira_palavra, segunda_palavra)
console.log(res)