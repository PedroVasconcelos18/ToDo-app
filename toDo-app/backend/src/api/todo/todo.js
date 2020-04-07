const restful = require('node-restful')
const moongose = restful.moongose

const todoSchema = new moongose.Schema({
    description: { type: String, require: true },
    done: { type: Boolean, require: true, default: false },
    creatAt: { type: Date, default: Date.now }
})
 

module.exports = moongose.model('Todo', todoSchema)