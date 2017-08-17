var express = require('express');
var bodyParser = require('body-parser');

var tasks = require('./routes/tasks');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/tasks', tasks);

module.exports = app;
