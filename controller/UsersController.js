const UsersSchema = require('../model/UsersSchema')


const GetAllUsers = async (req, res, next) => {
    try {
        const AllUsers = await UsersSchema.find({})
        if (!AllUsers) {
            res.status(404).json({ message: "No Records found" })
        }
        res.status(200).json({ AllUsers })
    } catch (err) {
        res.status(400).json({ message: "Somthing went Wrong", err })
    }
}

const GetOneUserById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const FoundedUser = await UsersSchema.findById(id)
        if (!FoundedUser) {
            res.status(404).json({ message: "No member Found" })
        }
        res.status(200).json({ FoundedUser })
    } catch (err) {
        res.status(400).json({ message: "Somthing went Wrong while fetching", err })
        return next(err)
    }
}

const CreateNewUser = async (req, res, next) => {
    const {
        UserId,
        UserName,
        UserEmail,
        UserPassword,
        UserContact,
        UserAddress
    } = req.body

    try {
        const CreatedUser = await UsersSchema.create({
            UserId,
            UserName,
            UserEmail,
            UserPassword,
            UserContact,
            UserAddress,
        })
        res.json({ CreatedUser, message: "Succesfully created !" })

    } catch (err) {
        res.json({ message: "Something Went Wrong User Not Created", err })
        return next(err)
    }
}

const UpdateUserData = async (req, res, next) => {
    const id = req.params.id
    const {
        UserId,
        UserName,
        UserEmail,
        UserPassword,
        UserContact,
        UserAddress,
    } = req.body

    try {
        const UpdatedUser = await UsersSchema.findOneAndUpdate({ _id: id }, {
            UserId,
            UserName,
            UserEmail,
            UserPassword,
            UserContact,
            UserAddress
        })
        res.status(200).json({UpdatedUser,message:"Successfully Updated User"})
    }catch(err){
        res.status(400).json({message:"Something went Wrong with Updating user"})
        return next(err)
    }
}

const DeleteUserById = async (req, res, next) => {
    const id = req.params.id
    try{
        const DeletedUser = await UsersSchema.findOneAndDelete({_id:id})
        if(!DeletedUser){
            res.status(200).json({DeletedUser,message:"No User Found to Delete"})
        }
        res.status(200).json({DeletedUser,message:"Successfully Deleted User"})
    }catch(err){
        res.status(404).json({message:"Something went Wrong With Deleting user"})
        return next(err)
    }
}

exports.GetAllUsers = GetAllUsers
exports.GetOneUserById = GetOneUserById
exports.CreateNewUser = CreateNewUser
exports.UpdateUserData = UpdateUserData
exports.DeleteUserById = DeleteUserById


// const GetJobById = async (req,res,next)=>{
//     const requiredJob = req.params.id;
//     try{
//         const GotJob = await UsersSchema.findById(id)
//         if(!GotJob){
//             res.status(404).json({message:"No Job Found"})
//         }
//         res.status(200).json({message:"Yahhhhh ! job found",FoundedUser})
//     }catch(err){
//         res.status(400).json({message:"Somthing went Wrong with your life",err})
//         return next(err)
//     }
// }