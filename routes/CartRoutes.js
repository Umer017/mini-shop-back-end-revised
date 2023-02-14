const express = require('express')
const CartController = require('../controller/CartController')
const router = express.Router()


router.get('/:userId', CartController.GetCartItemsForUser)

router.post('/', CartController.AddItemToCart)

router.delete('/:id',CartController.DeleteCartItem)


module.exports = router