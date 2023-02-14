const CartItemSchema = require('../model/CartSchema')

const GetCartItemsForUser = async (req,res,next) => {
    const id = req.params.userId

    try{
        const CartItems = await CartItemSchema.find({UserId:id})
        res.status(200).json({CartItems})
        if(!CartItems){
           res.status(404).json({message:"Items NOt Found"})
        }
    }catch(err){
        res.status(400).json({message:"Somthing Went Wrong"})
    }
    
}


const AddItemToCart = async (req,res,next) => {
     const {
        ProductId,
        CartItemName,
        CartItemQty,
        CartItemPrice,
        UserId,
    } = req.body

    try{
        const AddedItem = await CartItemSchema.create({
            ProductId,
            CartItemName,
            CartItemQty,
            CartItemPrice,
            UserId
        })

        res.status(200).json({AddedItem,message:"Item Added to cart"})

    }catch(err){
        res.status(400).json({message:"Somthing Wrong with adding",err})
        return next(err)

    }
    
}


const DeleteCartItem = async (req,res,next) => {
    const id = req.params.id;
    
    try{
        const DeletedItem = CartItemSchema.findOneAndDelete({_id:id})
        res.status(200).json({message:"Successfully deleted"})
    }catch(err){
        res.status(400).json({message:"Something Went Wrong !!"})
        return next(err)
    }

    
}

exports.GetCartItemsForUser = GetCartItemsForUser
exports.AddItemToCart = AddItemToCart
exports.DeleteCartItem = DeleteCartItem