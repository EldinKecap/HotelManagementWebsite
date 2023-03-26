let conn = require('./database');

let typeOfRoomModel = {};

typeOfRoomModel.create = (typeOfRoomData, cb) => {
    let type_of_room = typeOfRoomData.type_of_room;
    let price = typeOfRoomData.price;
    console.log(typeOfRoomData);
    let sql = "INSERT INTO types_of_room(type_of_room, price_of_room) VALUES (?, ?)";
    try {
        conn.execute(sql, [type_of_room, price], (error, result, fields) => {
            console.log(result);
            if (result) {
                cb({ msg: 'Success', result })
            } else {
                cb({ msg: 'error', error });
            }
        })
    } catch (err) {
        cb({ msg: 'error', err });
    }
}

module.exports = typeOfRoomModel;