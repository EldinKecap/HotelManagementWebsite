const typeOfRoomModel = require("../models/typeOfRoomModel");


let typeOfRoomController = {};

typeOfRoomController.create = (req, res) => {
    
    typeOfRoomModel.create(req.body,()=>{
        console.log('callback');
        res.status(201).send('works')
    });

}


module.exports = typeOfRoomController;