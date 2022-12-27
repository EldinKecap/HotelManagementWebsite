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



roomModel.create = function ( room, cb ){
    for (const key in room) {
       insertFields = key + ',';
    }
    
    insertFields = insertFields.replace( /,$/g, '' );

    console.log(room);
    conn.execute('SELECT id FROM types_of_room WHERE type_of_room = ? ', [room.type], ( error, result, fields ) => {
        room.type = result[0].id
        conn.execute('INSERT INTO room VALUES (?,?,?)', [Object.values(user)]) //Nastaviti ovdje
    })
}

module.exports = roomModel;