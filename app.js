const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const adminAddRoutes = require('./routes/add-users');
app.use(bodyParser.json());

app.use('/admin',adminAddRoutes);

module.exports = app;

