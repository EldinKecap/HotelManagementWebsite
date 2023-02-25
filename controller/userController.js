const userModel  = require('../models/userModel');
const { getUser } = require('../utils/getUser');
let userController = {};

userController.create = ( req, res )=>{
    let { createAccountInformation } = req.body;
    
    userModel.create( createAccountInformation, ( result )=>{
        if ( result ) {
        getUser( result, ( user )=>{
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
    let { user } = req.body; 
    userModel.delete( user, (res)=>{
        console.log(res);
    } )
    res.send({success: true});
}

userController.update = ( req, res ) => {
    console.log(req.body);
    if(Object.keys(req.body).length > 0){
        userModel.update( req.body, req.params.id, (res)=>{
            console.log(res);
        } );
        res.status(200).json({ success: true });
    }else{
        res.status(400).json({ success: false, message: 'No update object sent' })
    }
}

userController.readAll = ( req, res ) => {
    userModel.readAll((result)=>{
        console.log(result);
        res.send(result);
    })
}

userController.readOne = ( req, res ) => {
    console.log( req.params.id );
    userModel.readOne( req.params.id, (result) => {
        console.log(result);
        res.send(result);
    })
}

module.exports = userController;