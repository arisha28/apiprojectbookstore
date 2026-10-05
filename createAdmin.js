const User = require('./models/User')
const bcrypt = require('bcrypt')
async function createAdmin() {
    try{
        let user = await User.findOne({ email: 'arishaali1107@gmail.com'})
        if(user) {
            console.log("user updated successfully.....");
            
        } else {
            user = new User();
            user.firstName = 'Arisha';
            user.lastName = 'Ali';
            user.mobileNo = '8595010154';
            user.email = 'arishaali1107@gmail.com';
            let password = bcrypt.hashSync('arisha123', 10);
            user.password = password;
            user.userType = 'admin';
            await user.save();
            console.log("user crreated successfully...");
            
        }
    } catch(err) {
        console.log(err)
    }
}
module.exports = createAdmin