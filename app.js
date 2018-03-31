const express = require('express')
const app = express()
const db = require('./db/db')
const todos = require('./models/todos')
const PORT = process.env.PORT || 8080;


app.get('/', (req, res) => {
    db.query('SELECT * FROM todos').then(allTableRows => {
        res.send(allTableRows)
    })
})

app.post('/todos', (req, res) => {
    db.sync().then( function () {
        todos.create( {
            message: req.message,
            completion: req.completion
        })
    })
})

app.use((req, res) => {
  res.send(404, 'Not Found')
})

app.listen(PORT, () => {
  console.log('Serveur sur port : ', PORT)
})
  