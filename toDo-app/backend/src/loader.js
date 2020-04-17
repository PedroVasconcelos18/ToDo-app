const server = require('./config/server')
require('./config/database')
require('./config/routes')(server) // chama a função do module.exports server no arquivo routes.js

