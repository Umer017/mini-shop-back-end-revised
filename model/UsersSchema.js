const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    UserId: { type: Number, required: true },
    UserName: { type: String, required: true },
    UserEmail: { type: String, required: true },
    UserPassword: { type: String, required: true },
    UserContact: { type: String, required: true },
    UserAddress: { type: String, required: true }
})

module.exports = mongoose.model('User',UsersSchema)