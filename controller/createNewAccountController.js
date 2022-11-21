const { createNewAccountModel } = require('../models/createAccountModel');
const { getUser } = require('../services/getUser');

const createNewAccount = (req,res,next)=>{
    let { createAccountInformation } = req.body;
    console.log(createAccountInformation);
    createNewAccountModel(createAccountInformation,(result)=>{
        if (result) {
        getUser(result,(user)=>{
                user.success = true;
                user.logged_in = 1;
                res.send(user);
            });
        }else{
            res.send({ success: false, msg:'Account already exists'});
        }
    })
}

module.exports = createNewAccount;