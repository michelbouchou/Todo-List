const db = require('../db/db')
const Sequelize = require('sequelize');

var todos = db.define( 'todos', {
    message: Sequelize.TEXT,
    completion: Sequelize.STRING,
})

module.exports = todos