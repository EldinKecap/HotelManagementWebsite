const roomModel = require("../models/roomModel");

let roomController = {};

roomController.readAll = ( req, res ) => {
    roomModel.readAll( (result) => {
        res.status(200).json(result);
    } );
}

roomController.readOne = ( req, res ) => {
    roomModel.readOne( req.params.id, ( result ) => {
        res.status(200).json(result)
    } )
}

roomController.create = ( req, res ) => {
    roomModel.create(req.body,()=>{})
}

module.exports = roomController;
