const express = require('express');
const app = express();                                              // getting express framework 
const bodyParser = require('body-parser');

const adminAddRoutes = require('./routes/add-users');
const adminGetRoutes = require('./routes/get-users');
const updateSignUpRoute = require('./routes/update-users');           // calling programs from routes

app.use(bodyParser.json());
app.use('/admin',adminAddRoutes);
app.use('/admin',adminGetRoutes);
app.use('/admin',updateSignUpRoute);            // using middleware to run routes 

module.exports = app;

