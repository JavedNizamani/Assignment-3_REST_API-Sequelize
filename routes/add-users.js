const express = require('express');
const router = express.Router();
const addUsers = require('../controller/addUsers');

router.post('/add-users',addUsers.createUsers);

module.exports = router;