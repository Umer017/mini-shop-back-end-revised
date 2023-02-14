const express = require('express')
const OrdersController = require('../controller/OrdersController')
const route = express.Router();

route.get('/',OrdersController.GetAllOrders)

route.post('/',OrdersController.PlaceOrder)

route.delete('/:id',OrdersController.DeletePlacedOrder)

module.exports = route