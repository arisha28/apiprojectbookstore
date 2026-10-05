const Mobile = require('../models/Mobile')
async function addMobile(req , res) {
    try{
        console.log(req.body);
        let mobile = new Mobile(req.body)
        await mobile.save();
        console.log("Data Saved successfully...")
        res.status(200).send({message: 'Data has been saved successfully...'})
         
    } catch(err) {
        res.status(400).send({message: 'something went wrong...'})
        
    }
}
async function getMobile(req , res) {
    try{
        let totalMobiles = await Mobile.countDocuments({});
        console.log(totalMobiles)
        let mobile = await Mobile.find({ modelName: new RegExp(req.query.searchMobile, "i")}).skip((req.query.pageNo-1)*(req.query.mobilePerPage)).limit(req.query.mobilePerPage)
        res.status(200).send({ data: mobile})
    } catch(err) {
        console.log(err)
        res.status(400).send({ message: err})
    }
}
async function deleteMobile(req, res) {
    try{
        id = req.params.id;
        let mobile = await Mobile.deleteOne({_id: id})
        res.status(200).send({success: true})
    } catch(err) {
        res.status(400).send({ success: false})
    }
}
async function getMobileForEdit(req, res) {
    try {
        let id = req.params.id;
        let mobile = await Mobile.findOne({_id: id})
        res.status(200).send({data: mobile})
    } catch(err) {
        res.status(400).send({data: err})
    }
}
    
async function editMobile(req, res) {
    try{
        let id = req.params.id;
        let mobile = req.body
        await Mobile.updateOne({_id: id}, req.body)
        res.status(200).send({success: true})
    } catch(err) {
        res.status(400).send({success: false})
    }
}
module.exports = {
    addMobile,
    getMobile,
    deleteMobile,
    getMobileForEdit,
    editMobile
}