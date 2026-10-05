const Book = require('../../models/Book')
const Discount = require('../../models/Discount')
async function getBooks(req, res) {
    try {
        let books = await Book.find({})
        console.log(books)
        res.status(200).send({ data: books})
    } catch(err) {
        console.log(err)
        res.status(400).send({ message: "cannot get books"})
    }
}
async function getBookForUser(req, res) {
    try{
        let id = req.params.id;
        let book = await Book.findOne({_id:id})
        console.log(book)
        res.status(200).send({ data: book})
    } catch(err ) {
        console.log(err)
        res.status(400).send({ message: "cannot get book for user display"})   
         }
}
async function getDiscounts(req, res) {
    try {
        let discounts = await Discount.find({})
        console.log(discounts)
        res.status(200).send({ data: discounts})
    } catch(err) {
        console.log(err) 
        res.status(400).send({ message: "cannot get discount for book1"})
    }
}
module.exports = {
    getBooks,
    getBookForUser,
    getDiscounts
}