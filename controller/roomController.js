const roomModel = require("../models/roomModel");

let roomController = {};

roomController.readAll = (req, res) => {
    roomModel.readAll((result) => {
        res.status(200).json(result);
    });
}

roomController.readOne = (req, res) => {
    roomModel.readOne(req.params.id, (result) => {
        res.status(200).json(result)
    })
}

roomController.create = (req, res) => {
    // console.log(req.body);
    // console.log(req.body.roomNumber);
    // console.log('--------------------');
    roomModel.readOneByRoomNumber(req.body.roomNumber, (result) => {
        if (result.length > 0) {
            res.json({ msg: "already exists" })
        } else {
            roomModel.create(req.body, (result) => {
                res.json({ msg: 'success', result });
            })
        }
    })
}

roomController.update = (req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.send({msg:'success'});
}


roomController.getRoomTypes = (req, res) => {
    roomModel.getRoomTypes((result) => {
        res.status(200).json(result)
    })
}

module.exports = roomController;
