const { loginModel,logoutModel } = require('../models/loginModel')

module.exports = {
    post : (req,res)=>{
        let { loginInfo } = req.body;
        loginModel(loginInfo,function getLoggedInUser(userObjOrFalse) {
            if (userObjOrFalse) {
                res.send(userObjOrFalse);
            }else{
                res.send({success : false, msg:"User is not in the database"});
            }
        });
        console.log(loginInfo);
        // res.send({status : 'Logged in'})
    },
    postLogout : (req,res)=>{
        let { user } = req.body;
        logoutModel(user);
        res.send({ success: true, msg:'User logged out' })
    }
}