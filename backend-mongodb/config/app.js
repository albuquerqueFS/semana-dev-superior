const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

var corsOptions = {
    origin: "http://localhost:8081"
}

var dbConnection = require('../service/database.service');

app.use(cors(corsOptions));
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/tutorial', require('../routes/tutorial.route'));

module.exports = app;