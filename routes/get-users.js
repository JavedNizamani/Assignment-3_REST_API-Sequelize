const express = require('express')
const route = express.Router();
const getUsers = require('../controller/getAll');

route.get('/get-users/:id', getUsers.getAllUsers);
                // get-users route      for getting users from postgres database, 
                //                      here I use id as parameter by getting users through their id
module.exports = route;
