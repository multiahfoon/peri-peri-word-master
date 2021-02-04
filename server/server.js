const path = require('path')
const express = require('express')

const routes = require('./routes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

// when this route is hit then run code in routes
server.use('/api/v1/words', routes)

module.exports = server
