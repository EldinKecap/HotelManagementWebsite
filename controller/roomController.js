const roomModel = require("../models/roomModel");
const path = require('path');

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
    console.log(req.body);
    if (req.files) {
        roomModel.readOneByRoomNumber(req.body.roomNumber, (result) => {
            if (result.length > 0) {

                res.json({ msg: "already exists" })
            } else {
                console.log(result);
                roomModel.create(req.body, (result) => {
                    res.json({ msg: 'success', result });
                })
            }
        })
        let image = req.files.image;
        req.body.imageLocation = './roomImages/' + req.body.roomNumber + path.extname(image.name)
        image.mv('./public/roomImages/' + req.body.roomNumber + path.extname(image.name))
    } else {
        res.json({ msg: "No file uploaded" })
    }
}

roomController.update = (req, res) => {
    console.log(req.body);
    console.log(req.files);
    let room = req.body;
    if (req.files) {
        let image = req.files.image;
        console.log('yo');
        room.image = './roomImages/' + req.body.roomNumber + path.extname(image.name);
        image.mv('./public/roomImages/' + req.body.roomNumber + path.extname(image.name));
    }

    for (const key in room) {
        if (room[key] == '') {
            delete room[key];
        }
        if (key == 'roomNumber') {
            room['room_number'] = room[key];
            delete room[key];
        }
        if (key == 'roomTypeId') {
            room['types_of_room_id'] = room[key];
            delete room[key];
        }

    }
    roomModel.update(room, (result) => {
        res.send({ msg: 'success', result });
    })
}


roomController.getRoomTypes = (req, res) => {
    roomModel.getRoomTypes((result) => {
        res.status(200).json(result)
    })
}

module.exports = roomController;
