import express from 'express'
/* importando a biblioteca express*/

const app = express()
/* fazendo com que a variável app seja a biblioteca express*/

app.get('/users', (req, res) => {
    res.send('tudo certo!')
})
/*  1) indicar o tipo de rota / método HTTP
    2) indicar o endereço da rota
*/

app.listen(4000)
/*indica em qual porta a nossa api funcionará*/