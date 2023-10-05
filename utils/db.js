const Sequelize = require('sequelize');

const sequelize = new Sequelize('api','postgres','admin123',{
    dialect : 'postgres',
    HOST    : 'localhost'
});

module.exports = sequelize;