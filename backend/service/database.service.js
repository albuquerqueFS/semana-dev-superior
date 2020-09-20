const mongoose = require('mongoose');

const connection_string = 'mongodb+srv://barreto:301440@cms-test.52sga.mongodb.net/CMS-Test?retryWrites=true&w=majority';

mongoose.connect(connection_string, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;

if (!db) {
    console.log('Não foi possível conectar ao mongodb');
} else {
    console.log('Mongodb: on');
}

exports.module = db;