const express = require('express')
const path = require('path')
const app = express()
const db = require('./db/db')
const Todo = require('./models/todos')
const PORT = process.env.PORT || 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

app.use(express.json());

app.get('/', (req, res) => {
})

app.get('/todos', (req, res) => {
    var fullListe = [];
    for (var i = 0; i < Todo.findAll.length; i++){
        var liste = {
        'message': Todo.findAll[i].message,
        'completion': Todo.findAll[i].completion,
        'created_at': Todo.findAll[i].created_at,
        'updated_at': Todo.findAll[i].updated_at
        }
        fullListe.push(liste)
    }
    
    res.render('liste', { liste: fullListe})
})

app.get('/todos/add', (req, res) => {
    res.render('todos')
})

app.post('/todos', (req, res) => {
    Todo.create( {
        message: req.body.message,
        completion: req.body.completion
    }).then(() => res.render('liste', {liste: Todo.findAll}))
})

app.use((req, res) => {
  res.send(404, 'Not Found')
})

app.listen(PORT, () => {
  console.log('Serveur sur port : ', PORT)
})
  