const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Olá mundo!')
})

app.get('/teste', (req, res) => {
    res.send('Testando uma nova rota!!!')
})

app.listen(4000, () => {
    console.log('Servidor rodando com sucesso na porta 4000...')
})