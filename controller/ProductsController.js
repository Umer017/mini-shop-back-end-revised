const ProductsSchema = require('../model/ProductsSchema')

const GetAllProducts = async (req,res,next) =>{
    try{
        const AllProducts = await ProductsSchema.find({})
        console.log(AllProducts)
        if(!AllProducts){
           return res.status(404).json({message:"No records Found"})
        }
        res.status(200).json({AllProducts,message:"Yahoooooo"})
    }catch(err){
        res.status(400).json({message:"Something Went Wrong"})
        return next(err)
    }

}

const GetOneProduct = async (req,res,next)=>{
    const id = req.params.id
    try{
        const Product = await ProductsSchema.findById(id)
        if(!Product){
            res.status(404).json({message:"Not Founded"})
        }
        console.log(Product)
        res.status(200).json({Product,message:"Yahooooo"})
    }catch(err){
        res.status(400).json({message:"Somthing went wrong"})
        return next(err)
    }
}

const CreateNewProduct = async (req,res,next) => {
    const {
        productId,
        productTitle,
        productImage,
        productDescription,
        productPrice,
        productCategory,
        productBrand,
        SellerId,
        SellerName
    } = req.body

    try{
        const CreatedProduct = new ProductsSchema({
            productId,
            productTitle,
            productImage,
            productDescription,
            productPrice,
            productCategory,
            productBrand,
            SellerId,
            SellerName
        })

        await CreatedProduct.save()
        res.status(200).json({CreatedProduct,message:"Successfully created product"})
    }catch(err){
        res.status(404).json({err,message:"Product not created"})
        return next(err)
    }
}

const UpdateProductDetails = async (req,res,next) =>{
    const id = req.params.id;
    const {
        productId,
        productTitle,
        productImage,
        productDescription,
        productPrice,
        productCategory,
        productBrand,
        SellerId,
        SellerName
    } = req.body

    try{
        const UpdatedProduct = await ProductsSchema.findOneAndUpdate({_id:id},{
            productId,
            productTitle,
            productImage,
            productDescription,
            productPrice,
            productCategory,
            productBrand,
            SellerId,
            SellerName
        })

        res.status(200).json({UpdatedProduct})
    }catch(err){
        res.status(400).json({message:"Something Went Wrong"})
        return next(err)
    }

    }

    const DeleteProduct = async (req,res,next)=>{
        const id = req.params.id
        try{
            const DeletedItem = await ProductsSchema.findOneAndDelete({_id:id})
            res.status(200).json({DeletedItem,message:"successfully deleted"})
        }catch(err){
            res.status(400).json({message:"not deleted product"})
        }
    }

    exports.GetAllProducts = GetAllProducts;
    exports.GetOneProduct = GetOneProduct;
    exports.CreateNewProduct = CreateNewProduct;
    exports.DeleteProduct = DeleteProduct;
    exports.UpdateProductDetails = UpdateProductDetails
