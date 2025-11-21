import express from 'express'
/* importando a biblioteca express*/

const app = express()
/* fazendo com que a variável app seja a biblioteca express*/

app.use(express.json())
/*informando o express que ele usará o formato json */

const users = []
/*lista de usuários*/

app.post('/users', (req, res) => {
    users.push(req.body)
    /*adiciona o usuário cadastrado a minha lista users*/

    res.status(201).json(req.body)
    /*status 201 para indicar o sucesso e o meu json cadastra o que for escrito na parte do body dele*/

    res.send('funcionou!')
    /*apenas para ver se está tudo nos conformes.*/
})

app.get('/users', (req, res) => {
    res.status(200).json(users)
})
/*  1) indicar o tipo de rota / método HTTP
    2) indicar o endereço da rota
*/

app.listen(4000)
/*indica em qual porta a nossa api funcionará*/