const express = require('express')
const bodyParser = require('body-parser')
const route = express.Router()
const mobileController = require('../controllers/mobileController')
route.use(bodyParser.json())
route.use(bodyParser.urlencoded({
    extended: false
}));
route.post('/add/mobile', (req, res)=> [
    mobileController.addMobile(req, res)
])
route.get('/mobiles' , (req, res)=> {
    mobileController.getMobile(req, res)
})
route.delete('/delete/mobile/:id', (req, res)=> {
    mobileController.deleteMobile(req, res)
})
route.get('/mobile/for/edit/:id' , (req, res)=>{
    mobileController.getMobileForEdit(req, res)
})
route.put('/edit/mobile/:id' , (req, res)=> {
    mobileController.editMobile(req, res)
})
module.exports = route