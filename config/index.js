const Sequelize = require('sequelize')

module.exports = new Sequelize('mysql://root:@localhost:3306/recipe_db')
