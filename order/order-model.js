class Order {
    static create(name, phone, message) {
        console.log(...arguments);
    }
}

module.exports = Order;