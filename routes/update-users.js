const express = require('express');
const route = express.Router();

const update= require('../controller/updateUsers');

route.patch('/update-users/:id',update.updateSignUp);
                        // update-users     route       this route update record in table
                        //                  here I use id as parameter by updating record through their id
module.exports = route;