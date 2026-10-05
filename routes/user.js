const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
router.post('/admin/login', (req, res) => {
    userController.doAdminLogin(req, res)
})
router.get('/users', (req, res) =>{
    userController.getUsers(req, res)
})
module.exports = router