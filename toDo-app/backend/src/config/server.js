const port = 2500

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true}))  // sempre que chegar um requisição urlencoded o bodyparser vai ser ele. o extended é usado para suportar mais tipos de dados que o padrão
server.use(bodyParser.json())

server.listen(port, () => {
    console.log(`Backend executando na porta ${port}.`)
})

module.exports = server