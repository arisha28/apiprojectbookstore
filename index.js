const express = require('express');
const cors = require('cors')
const connect = require('./connection')
const app = express();
const user = require('./routes/user')
const book = require('./routes/book')
const mobile = require('./routes/mobile')
const createAdmin = require('./createAdmin')
const discount = require('./routes/discount')
const home = require('./routes/user/home')
const frontUser = require('./routes/user/user')
const payment = require('./routes/user/payment')
const transaction = require('./routes/payment')
app.use(cors())
app.use(book)
app.use(mobile)
app.use(user)
app.use(discount)
app.use(home)
app.use(frontUser)
app.use(payment)
app.use(transaction)
connect();
createAdmin()
app.listen(3000, (err)=> {
    if(err){
        console.log(err)
    } else {
        console.log("port 3000 working..")
    }
})