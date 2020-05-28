const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../app/routes/routes');

const app = express();

app.use(bodyParser.json());
app.use(routes);

app.set('port', 3000);

module.exports = app;