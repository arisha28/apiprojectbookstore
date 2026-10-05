const express = require('express')
const router = express.Router();
const discountController = require('../controllers/discountController')
router.get('/books/for/discount' , (req, res)=> {
    discountController.getBooks(req, res)
})
router.post('/add/discount', (req, res) => {
    discountController.addDiscount(req, res)
})
router.get('/discounts' , (req, res) => {
    discountController.getDiscounts(req, res)
})
router.get('/discount/for/edit/:id', (req, res) => {
    discountController.getDiscountForEdit(req, res)
})
router.put('/edit/discount:id' , (req, res) => {
    discountController.editDiscount(req, res)
})
module.exports = router