import express from 'express'
/* importando a biblioteca express*/

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
/* fazendo com que a variável app seja a biblioteca express*/

app.use(express.json())
/*informando o express que ele usará o formato json */


/*MONGO DB
  USUÁRIO: loiola
  SENHA: 27Novembro21 */

app.post('/users', async (req, res) => {

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age


        }
    })


    res.status(201).json(req.body)
    /*status 201 para indicar o sucesso e o meu json cadastra o que for escrito na parte do body dele*/
    res.send("boa")

})

app.get('/users', async (req, res) => {

    const users = await prisma.user.findMany()
    
    res.status(200).json(users)
})
/*  1) indicar o tipo de rota / método HTTP
    2) indicar o endereço da rota
*/

app.put('/users/:id', async (req, res) => {

       console.log(req)

    await prisma.user.update({
     
        where: {
            id: req.params.id
        },

        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age


        }
    })


    res.status(201).json(req.body)
    /*status 201 para indicar o sucesso e o meu json cadastra o que for escrito na parte do body dele*/
   
})

app.delete('/users/:id', async (req,res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({message: "user deleted"})
})

app.listen(4000)
/*indica em qual porta a nossa api funcionará*/

