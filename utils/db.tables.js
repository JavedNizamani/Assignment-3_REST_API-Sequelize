const {Sequelize, Model} = require('sequelize');
const sequelize = require('./db');


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.signUp = require('../model/signUp.model')(sequelize, Sequelize)
db.logIn = require('../model/login.model')(sequelize, Sequelize, Model)
db.sequelize.sync();
module.exports = db;

