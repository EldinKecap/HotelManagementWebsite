const userModel  = require('../models/userModel');
const { getUser } = require('../utils/getUser');
let userController = {};

userController.create = ( req, res )=>{
    let { createAccountInformation } = req.body;
    console.log( createAccountInformation );
    userModel.create( createAccountInformation, ( result )=>{
        if ( result ) {
        getUser( result, (user)=>{
                user.success = true;
                user.logged_in = 1;
                res.send( user );
            });
        }else{
            res.send({ success: false, msg:'Account already exists'});
        }
    })
}

userController.delete = ( req, res ) => {
    console.log(req.body);
    res.send({success: true})
    //let { userAccountInformation } = req.body; // Nije jos implementirano da salje sa front-enda
}

module.exports = userController;