const { createNewAccountModel } = require('../models/createAccountModal')

const createNewAccount = (req,res,next)=>{
    let { createAccountInformation } = req.body;
    console.log(createAccountInformation);
    createNewAccountModel(createAccountInformation)
    res.json({ success : true })
}

module.exports = createNewAccount;