const mongoose = require('mongoose')

const Schema = mongoose.Schema


const AdminSchema = new Schema({
    AdminId:{type:Number,required:true},
    AdminUserName:{type:String,required:true},
    AdminPassword:{type:String,required:true},
    AdminRole:{type:String,required:true},
    AdminContact:{type:String,required:true},
    AdminAddress:{type:String,required:true}
})

module.exports = mongoose.model('Admin',AdminSchema)