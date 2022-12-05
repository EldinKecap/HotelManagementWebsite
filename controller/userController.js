const userModel  = require('../models/userModel');
const { getUser } = require('../utils/getUser');
let userController = {};

userController.create = (req,res,next)=>{
    let { createAccountInformation } = req.body;
    console.log(createAccountInformation);
    userModel.create(createAccountInformation,(result)=>{
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

module.exports = userController;