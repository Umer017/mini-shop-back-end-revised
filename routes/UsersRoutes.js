const express  = require('express')
const UserController = require('../controller/UsersController')
const router = express.Router();


router.get('/',UserController.GetAllUsers)

router.get('/:id',UserController.GetOneUserById)

router.post('/',UserController.CreateNewUser)

router.patch(`/:id`,UserController.UpdateUserData)

router.delete('/:id',UserController.DeleteUserById)

module.exports = router