const express = require('express')
const router = express.Router()
const MembersController = require('../controller/MembersController')

router.get('/', MembersController.GetAllMembers)

router.get('/:id', MembersController.GetMemberById)

router.post('/', MembersController.CreatedMember)

router.patch('/:id', MembersController.UpdateMemberDetails)

router.delete('/:id', MembersController.DeleteMemberDetailById)


module.exports = router