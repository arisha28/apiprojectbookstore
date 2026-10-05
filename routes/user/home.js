const express = require('express')
const router = express.Router();
const homeController = require('../../controllers/user/homeController')
router.get('/user/books', (req, res) => {
    homeController.getBooks(req, res)
})
router.get('/user/book/:id' , (req, res) => {
    homeController.getBookForUser(req, res)
})
router.get('/user/discounts' , (req, res)=> {
    homeController.getDiscounts(req, res)
})
module.exports = router