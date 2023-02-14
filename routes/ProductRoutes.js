const express = require('express')
const ProductsController = require('../controller/ProductsController')
const router = express.Router();

router.get('/', ProductsController.GetAllProducts)

router.get('/:id',ProductsController.GetOneProduct)

router.post('/',ProductsController.CreateNewProduct)
 
router.patch('/:id',ProductsController.UpdateProductDetails)

router.delete('/:id',ProductsController.DeleteProduct)

module.exports = router