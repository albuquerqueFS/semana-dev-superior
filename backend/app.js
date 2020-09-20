const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const database = require('./service/database.service');

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({  extended: true }));
app.use(bodyParser.json());

module.exports = app;