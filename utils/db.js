const Sequelize = require('sequelize');

const sequelize = new Sequelize('api','postgres','admin123',{
    dialect : 'postgres',
    logging: false,
    HOST    : 'localhost'
});                                             // Connecting postgres database with Sequelize ORM

module.exports = sequelize;