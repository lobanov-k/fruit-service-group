const db = require('../db/db-connection');

class Order {
    static create(name, phone, message) {
        const sql = 'INSERT INTO `order` SET ?';
        db.query(sql, {name, phone, message, date: new Date}, function (error, results, fields) {
            if (error) {
                throw error;
            } else {
                console.log(results.insertId);
            }
        });
        db.end();
    }
}

module.exports = Order;