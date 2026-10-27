const Transaction = require('../models/Transaction')
async function getTransactions(req, res) {
    try{
        let transactions = await Transaction.find({})
        console.log(transactions)
        res.status(200).send({data: transactions})
    } catch(err) {
        res.status(400).send({message: 'cannot get data'})
    }
}
module.exports = {
    getTransactions
}