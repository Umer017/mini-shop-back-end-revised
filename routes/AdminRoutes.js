const express = require('express')
const AdminController = require('../controller/AdminController')

const route = express.Router();

route.get('/',AdminController.GetAllAdmins)

route.post('/',AdminController.CreateSuperAdmin)


module.exports = route