const db = require('../db/db')
const Sequelize = require('sequelize');

var Todo = db.define( 'todos', {
    message: Sequelize.TEXT,
    completion: Sequelize.STRING,
})

Todo.sync()

module.exports = Todo