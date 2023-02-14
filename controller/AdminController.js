const e = require('express')
const AdminSchema = require('../model/AdminSchema')



const GetAllAdmins = async (req,res,next) =>{
    try{
        const AllAdmins = await AdminSchema.find({})   
        res.status(200).json({AllAdmins})
    }catch(err){
        res.status(400).json({message:err})
        next(err)
    }
}

const CreateSuperAdmin = async (req,res,next) =>{

    const {
        AdminId,
        AdminUserName,
        AdminPassword,
        AdminRole,
        AdminContact,
        AdminAddress,
    } = req.body

    
    try{
        const CreatedAdmin = await AdminSchema.create({
        AdminId,
        AdminUserName,
        AdminPassword,
        AdminRole,
        AdminContact,
        AdminAddress
        })
        res.status(200).json({CreatedAdmin})
    }catch(err){
        res.status(400).json({message:err})
        return next(err)
    }
}


exports.GetAllAdmins = GetAllAdmins;
exports.CreateSuperAdmin = CreateSuperAdmin;