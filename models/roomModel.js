const conn = require('./database');
const fs = require('fs');
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
roomModel.readOneByRoomNumber = function (roomNumber, cb) {
    conn.execute('SELECT * FROM room WHERE room_number = ?', [roomNumber], (error, result, fields) => {
        cb(result);
    });
}



roomModel.create = function (room, cb) {
    console.log([room.roomNumber, room.roomTypeId, room.imageLocation, room.description]);
    conn.execute('INSERT INTO room (room_number, types_of_room_id, image, description) VALUES (?,?,?,?)',
        [room.roomNumber, room.roomTypeId, room.imageLocation, room.description], (error, result) => {
            if (result) {
                cb(result);
            } else {
                cb(error);
            }
        })
}

roomModel.update = function (room, cb) {
    let fieldsToUpdate = '';
    let valuesToUpdate = [...Object.values(room)];

    for (const key in room) {
        if (key == 'room_number') {
            continue;
        }

        fieldsToUpdate += key + ' = ? ,';
    }

    fieldsToUpdate = fieldsToUpdate.replace(/,$/g, '');
    valuesToUpdate.push(Number(room.roomNumber));
    valuesToUpdate = valuesToUpdate.filter((a) => a)
    // console.log(valuesToUpdate);
    console.log('UPDATE room SET ' + fieldsToUpdate + ' WHERE room_number = ?;', valuesToUpdate);
    conn.execute('UPDATE room SET ' + fieldsToUpdate + ' WHERE room_number = ?;',
        valuesToUpdate, (error, result) => {
            if (result) {
                cb(result);
            } else {
                console.log(error);
                cb(error);
            }
        })
};

roomModel.delete = function (roomNumber, cb) {
    conn.execute('DELETE FROM room WHERE room_number = ?', [roomNumber], (error, result, fields) => {
        try {
            fs.rmSync('./public/roomImages/' + roomNumber + '.jpg')
        } catch (error) {
            console.log(error);
        }
        cb(result);
    })
}

roomModel.getRoomTypes = function (cb) {
    conn.execute('SELECT * FROM types_of_room', (error, result, fields) => {
        cb(result);
    })
}

module.exports = roomModel;