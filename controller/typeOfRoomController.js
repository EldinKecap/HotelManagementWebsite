const typeOfRoomModel = require("../models/typeOfRoomModel");


let typeOfRoomController = {};

typeOfRoomController.create = (req, res) => {
    
    typeOfRoomModel.create(req.body,(result)=>{
        console.log('callback');
        res.status(201).json(result)
    });

}


module.exports = typeOfRoomController;