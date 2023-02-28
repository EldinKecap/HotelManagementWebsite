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
    // console.log(room);
  
    // for (const key in room) {
    //     insertFields = key + ',';
    // }

    // insertFields = insertFields.replace(/,$/g, '');

    // console.log(room);

    // conn.execute('INSERT INTO room (room_number, types_of_room_id, image, description) VALUES (?,?,?,?)', []) //Nastaviti ovdje
}

roomModel.getRoomTypes = function (cb) {
    conn.execute('SELECT * FROM types_of_room', (error, result, fields) => {
        cb(result);
    })
}

module.exports = roomModel;