const OrdersSchema = require('../model/OrdersSchema')

const GetAllOrders = async (req, res, next) => {
    try {
        const AllOrders = await OrdersSchema.find({})
        if (!AllOrders) {
            res.status(404).json({ message: "No Records found" })
        }
        res.status(200).json({ AllOrders })
    } catch (err) {
        res.status(400).json({ message: "Somthing went Wrong", err })
    }
}


const GetOrderForUser = async (req, res, next) => {
    const id = req.params.id;
    try {
        const FoundedOrder = await OrdersSchema.findById(id)
        if (!FoundedOrder) {
            res.status(404).json({ message: "No Order Found" })
        }
        res.status(200).json({ FoundedOrder })
    } catch (err) {
        res.status(400).json({ message: "Somthing went Wrong while fetching", err })
        return next(err)
    }
}



const PlaceOrder = async (req,res,next) => {

    // const OderId = req.params.oderId;
    // const UserId = req.params.userId;
    const {
        UserId,
        OrderId,
        OrderItemName,
        OderItemPrice,
        ShippingAddress,
        City,
        State,
        Pincode,
        ContactNumber
    } = req.body

    try{
         const PlacedOrder = await OrdersSchema.create({
            UserId,
            OrderId,
            OrderItemName,
            OderItemPrice,
            ShippingAddress,
            City,
            State,
            Pincode,
            ContactNumber,
            Status:"Order PLaced"
         })
         res.status(200).json({PlacedOrder})     
    }catch(err){
        res.status(400).json({message:"Something Went Wrong",err})
        return next(err)
    }
}

const DeletePlacedOrder = async (req,res,next) =>{
    const id = req.params.id
    try{
        const DeletedPlace = await OrdersSchema.findOneAndDelete({_id:id})
        if(!DeletedPlace){
            res.status(200).json({message:"Nothing to Delete"})
        }
        res.status(200).json({DeletedPlace,message:"Successfully Deleted User"})
    }catch(err){
        res.status(404).json({message:"Something went Wrong With Deleting user"})
        return next(err)
    }
}

exports.GetAllOrders = GetAllOrders;
exports.PlaceOrder = PlaceOrder;
exports.DeletePlacedOrder = DeletePlacedOrder;
exports.GetOrderForUser = GetOrderForUser; //not emplemented