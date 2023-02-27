const express = require('express')

const server = express()


server.use(express.json())

const estoque = ['Feijão', 'Arroz', 'Macarrão', 'Farinha', "Açúcar"]

//CRUD Create, Read, Update, Delete

// Retorna um item presente no estoque.
server.get('/estoque/:index', (req, res) =>{
    const {index} = req.params
    
    return res.json(estoque[index])
})

// Retorna todos os itens presentes no estoque
server.get('/estoque', (req, res) => {
    return res.json(estoque)
})

// Cadrastrar um item no estoque
server.post('/estoque', (req, res) => {
    const {item} = req.body
    estoque.push(item)

    return res.json(estoque)
})

// Atualizar um item
server.put('/estoque/:index', (req, res) => {
    const { index} = req.params
    const {item} = req.body

    alunos[index] = nome

    return res.json(estoque)
})

// Apagar item
server.delete('/estoque/:index', (req, res) =>{
    const {index} = req.params

    estoque.splice(index, 1)
    return req.json({message: 'Item Excluído'})
})



server.listen(3000)