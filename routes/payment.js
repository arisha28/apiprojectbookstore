const express = require('express')
const route = express.Router()
const TransactionController = require('../controllers/paymentController')
route.get('/transactions', (req, res)=>{
    TransactionController.getTransactions(req, res)
})
module.exports = route