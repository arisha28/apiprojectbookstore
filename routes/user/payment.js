const express = require('express')
const router = express.Router();
const PaymentController = require('../../controllers/user/paymentController')
router.post('/create-order', (req, res)=> {
    PaymentController.makePayment(req, res)
})
router.post('/verify-payment', (req, res)=> {
    PaymentController.verifyPayment(req, res)
})
module.exports = router