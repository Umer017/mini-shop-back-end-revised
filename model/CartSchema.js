const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CartItemSchema = new Schema({
    ProductId: { type: Number, required: true },
    CartItemName: { type: String, required: true },
    CartItemQty: { type: Number, required: true },
    CartItemPrice: { type: Number, required: true },
    UserId: { type: Number, required: true }
})

module.exports = mongoose.model('CartItem',CartItemSchema)