const conn = require('./database');

let roomModel = {};

roomModel.readAll = function ( cb ) {
    conn.execute('SELECT * FROM room', ( error, result, fields ) => {
        cb(result);
    });
}

roomModel.readOne = function ( id, cb ) {
    conn.execute('SELECT * FROM room WHERE id = ?', [id], ( error, result, fields ) => {
        cb(result);
    } );
}

module.exports = roomModel;