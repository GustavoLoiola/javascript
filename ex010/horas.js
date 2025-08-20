let hoje = new Date()
let hora = hoje.getHours()
let minuto = hoje.getMinutes()

console.log(`Agora são exatamente ${hora}:${minuto.toString().padStart(2, '0')} horas!`)

if (hora < 12) {
    console.log('Bom dia!!!')
}
else if (hora <= 18) {
    console.log('Boa Tarde!!!')
}
else {
    console.log('Boa noite!!!')
}