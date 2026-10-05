const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const route = express.Router()
const bookController = require('../controllers/bookController')
route.use(bodyParser.json())
route.use(bodyParser.urlencoded({
    extended: false
}));
const uploader = multer({
    storage: multer.diskStorage({}),
    limits: { fileSize: 10 * 1024 * 1024}
})
route.post('/add/book', uploader.single("file"), (req, res)=> {
    bookController.addBook(req, res)
})
route.get('/books', (req, res) => {
    bookController.getBooks(req, res)
})
route.delete('/delete/book/:id', (req, res) => {
    bookController.deleteBook(req, res)
})
route.get('/book/for/edit/:id', (req, res) => {
    bookController.getBookForEdit(req, res)
})
route.put('/edit/book/:id', (req, res) => {
    bookController.editBook(req, res)
})
module.exports = route
