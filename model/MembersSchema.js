const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const MembersSchema = new Schema({
    SellerId: { type: Number, required: true },
    SellerName: { type: String, required: true },
    SellerEmail: { type: String, required: true },
    SellerPassword: { type: String, required: true },
    SellerContact: { type: String, required: true },
    SellerAddress: { type: String, required: true }
},{timestamps:true})

module.exports = mongoose.model('Member',MembersSchema);