const mongoose = require('mongoose')

const Schema = mongoose.Schema

const OrderSchema = new Schema({

    UserId: { type: Number, required: true },
    OrderId: { type: Number, required: true },
    OrderItemName: { type: String, required: true },
    OderItemPrice: { type: String, required: true },
    ShippingAddress: { type: String, required: true },
    City: { type: String, required: true },
    State: { type: String, required: true },
    ContactNumber: { type: String, required: true },
    Status: { type: String, required: true }
})

module.exports = mongoose.model('Order', OrderSchema)
