const MembersSchema = require('../model/MembersSchema')

const GetAllMembers = async (req, res, next) => {
    try {
        const FoundedMembers = await MembersSchema.find({});
        if(!FoundedMembers){
            return res.status(404).json({message:"Members not found"})
        }
    } catch (err) {
        res.status(400).json({ message: "Something went wrong" })
        return next(err)
    }
    res.status(200).json({ FoundedMembers })
}

const GetMemberById = async (req, res, next) => {
    const id = req.params.id

    try {
        const FoundedMember = await MembersSchema.findById(id)
        res.status(200).json({ FoundedMember })
    } catch (err) {
        res.status(400).json({ message: "Members not found" })
        return next(err)
    }

}

const CreatedMember = async (req, res, next) => {

    const {
        SellerId,
        SellerName,
        SellerEmail,
        SellerPassword,
        SellerContact,
        SellerAddress
    } = req.body

    try {
        const CreatedMember = new MembersSchema({
            SellerId,
            SellerName,
            SellerEmail,
            SellerPassword,
            SellerContact,
            SellerAddress
        })

        await CreatedMember.save();

        res.status(200).json(CreatedMember)

    } catch (err) {
        res.status(400).json({ message: err.message })
        return next(err)
    }
}

const UpdateMemberDetails = async (req, res, next) => {
    const Id = req.params.id
    const {
        SellerId,
        SellerName,
        SellerEmail,
        SellerPassword,
        SellerContact,
        SellerAddress
    } = req.body

    try {
        const UpdatedMember = await MembersSchema.findOneAndUpdate({ _id: Id }, {
            SellerId: SellerId,
            SellerName: SellerName,
            SellerEmail: SellerEmail,
            SellerPassword: SellerPassword,
            SellerContact: SellerContact,
            SellerAddress: SellerAddress
        })
        res.status(200).json({ UpdatedMember })
    } catch (err) {
        res.status(400).json({ message: "Members not updated " })
        return next(err)
    }

}

const DeleteMemberDetailById = async (req, res, next) => {
    const id = req.params.id;
    try{
        const DeletedItem = await MembersSchema.findOneAndDelete({_id:id})
        if(!DeletedItem){
            res.status(400).json({meessage:"item not find"})
        }
        res.status(200).json({ DeletedItem,m:"sucsessfullt delted" })
    }catch(err){
        res.status(400).json({message:"somthing went wrong"})
    }
}


exports.CreatedMember = CreatedMember;
exports.GetAllMembers = GetAllMembers;
exports.GetMemberById = GetMemberById;
exports.UpdateMemberDetails = UpdateMemberDetails;
exports.DeleteMemberDetailById = DeleteMemberDetailById;