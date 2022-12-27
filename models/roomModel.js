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



roomModel.create = function ( user, cb ){
    for (const key in user) {
       insertFields = key + ',';
    }
    
    insertFields = insertFields.replace(/,$/g, '');


    conn.execute('SELECT id FROM roomType WHERE name = ? ', [user.type], ( error, result, fields ) => {
        console.log(result);
    })
}

module.exports = roomModel;