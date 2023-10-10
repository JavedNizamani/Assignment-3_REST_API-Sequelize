const {Sequelize} = require('sequelize');
const sequelize = require('./db');


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.signUp = require('../model/signUp.model')(sequelize, Sequelize);
db.sequelize.sync();
module.exports = db;

