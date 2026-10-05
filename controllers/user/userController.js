const User = require('../../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
async function addUser(req, res ) {
    try {
        console.log(req.body)
        let user = await User.findOne({ email: req.body.email, userType: 'user'})
        if(user) {
            res.status(400).send({ message: 'user already exist'})   
        } 
        else {
            let password = bcrypt.hashSync(req.body.password, 10)
            let user = new User(req.body)
            user.password = password
            await user.save()
            res.status(200).send( { success: true, message: 'Welcome to our platform. Please Login'})

        }
    } catch(err) {
        console.log(err);
        res.status(400).send( { success: false})
    }
}
async function doUserLogin(req, res) {
    try {
        console.log(req.body)

        let user = await User.findOne({ email: req.body.email })

        if (!user) {
            return res.status(400).send({
                message: 'invalid user/password'
            })
        }

        let validUser = await bcrypt.compare(
            req.body.password,
            user.password
        )

        if (!validUser) {
            return res.status(400).send({
                message: 'invalid user/password'
            })
        }

        user.lastLogin = new Date()
        await user.save()

        let secret_key = 'b2Vfb3ZlcnRoZXJlX29yX3NvbWV0aGluZ19lbHNld2hlcmU'

        let token = jwt.sign(
            { _id: user.id, email: user.email},secret_key, { expiresIn: '3hr' }
        )

        console.log(token, 'token')

        let data = {
            email: user.email,
            name: user.firstName,
            token: token
        }

        return res.status(200).send({
            data: data
        })

    } catch (err) {
        console.log(err)

        return res.status(400).send({
            message: 'something went wrong...'
        })
    }
}
module.exports = {
    addUser,
    doUserLogin
}
