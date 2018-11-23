const mysql = require('mysql');
let dbSettings;

try {
    dbSettings = require('./database');
} catch (e) {
    console.error(e);
    console.log('Used database-sample.js');
    dbSettings = require('./database-sample');
}

const db = mysql.createConnection(dbSettings);

module.exports = db;