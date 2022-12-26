const conn = require('./database');

let roomModel = {};

roomModel.readAll = function (cb) {
    conn.execute('SELECT * FROM room', ( error, result, fields ) => {
        cb(result);
    });
}

module.exports = roomModel;