const Order = require('./order-model');

exports.createOrder = (req) => {
    const { name, phone, message } = req.body;
    Order.create( name, phone, message);
};