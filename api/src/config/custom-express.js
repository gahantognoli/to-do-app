const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../app/routes/routes');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*',
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.set('port', 3030);

module.exports = app;