const conn = require('./database');

let roomModel = {};

roomModel.readAll = function (cb) {
    conn.execute('SELECT * FROM room', (error, result, fields) => {
        cb(result);
    });
}

roomModel.readOne = function (id, cb) {
    conn.execute('SELECT * FROM room WHERE id = ?', [id], (error, result, fields) => {
        cb(result);
    });
}



roomModel.create = function (room, cb) {
    conn.execute('INSERT INTO room (room_number, types_of_room_id, image, description) VALUES (?,?,?,?)',
        [room.roomNumber, room.roomTypeId, room.imageLocation, room.description], (error, result) => {
            if (result) {
                cb(result);
            } else {
                cb(error);
            }
        })
}

roomModel.getRoomTypes = function (cb) {
    conn.execute('SELECT * FROM types_of_room', (error, result, fields) => {
        cb(result);
    })
}

module.exports = roomModel;