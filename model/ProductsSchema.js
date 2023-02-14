const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productId :{type:Number,required:true},
    productTitle :{type:String,required:true},
    productImage:{type:String,required:true},
    productDescription:{type:String,required:true},
    productPrice:{type:String,required:true},
    productCategory:{type:String,required:true},
    productBrand:{type:String,required:true},
    SellerId:{type:String,required:true},
    SellerName:{type:String,required:true}
})

module.exports = mongoose.model('Product',ProductSchema);