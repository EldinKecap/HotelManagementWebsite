const roomModel = require("../models/roomModel");

let roomController = {};

roomController.readAll = ( req, res ) => {
    roomModel.readAll( (result) => {
        res.status(200).json(result);
    } );
}


module.exports = roomController;
