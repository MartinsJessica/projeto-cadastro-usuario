import express, { query, request, response } from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())

const users = []

app.post('/usuarios', async (request, response) => {

    await prisma.user.create({
        data: {
            email: request.body.email,
            name: request.body.name,
            age: request.body.age
        }
    })
    response.status(201).json(request.body)
})

app.get('/usuarios', async (request, response) => {

    let users = []

    if (request.query) {

        users = await prisma.user.findMany({
            where: {
                name: request.query.name,
                email: request.query.email,
                age: request.query.age

            }
        })

    } else {

        const users = await prisma.user.findMany()

    }

    response.status(200).json(users)
})


app.put('/usuarios/:id', async (request, response) => {


    await prisma.user.update({
        where: {
            id: request.params.id
        },
        data: {
            email: request.body.email,
            name: request.body.name,
            age: request.body.age
        }



    })
    response.status(201).json(request.body)
})

app.delete('/usuarios/:id', async (request, response) => {


    await prisma.user.delete({
        where: {
            id: request.params.id
        }
    })
    response.status(201).json({ message: "Usuário deletado com sucesso" })
})


app.get('/', (_, response) => response.send('API Funcionando'))

const PORT = 3000

app.listen(PORT, () => console.log(`Rodando em http://localhost:${PORT}`))




//1)Tipo de rota / método HTTP
//2)Endereço

//banco de dados: Users
//usuario: jessica
//senha:rexNIn5fltdQ77z9
//ipadress:179.125.213.13