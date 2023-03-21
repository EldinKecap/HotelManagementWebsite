const conn = require("./database");


let checkInModel = {};

checkInModel.readAll = (cb) => {
    let sql = "SELECT * FROM user_room;"
    let result = conn.execute(sql, (error, result, fields) => {
        cb(result);
    });
    // console.log(result);
}

checkInModel.create = (checkInData, cb) => {

    checkIfRoomIsOccupied(checkInData.room_id, (occupiedStatus) => {
        if (occupiedStatus) {
            cb({ error: 'Room is occupied' });
            return;
        } else {
            let sql = 'INSERT INTO user_room(room_id,user_id,time_of_arrival,paid,occupied) VALUES (?,?,?,?,?)';
            // console.log(checkInData);

            let result = conn.execute(sql, [checkInData.room_id, checkInData.user_id, checkInData.time_of_arrival, false, true], (error, result, fields) => {
                cb(result);
                // console.log(error);
            });

        }
    });

}


checkInModel.checkOut = (checkOutData, cb) => {
    console.log(checkOutData);
}

function checkIfRoomIsOccupied(roomId, cb) {
    let sql = "SELECT * FROM user_room WHERE room_id = ?;"
    let occupied = false;
    let result = conn.execute(sql, [roomId], (error, result, fields) => {
        result.forEach(roomEntry => {
            // console.log(roomEntry);
            // console.log(roomEntry.occupied);
            if (roomEntry.occupied == 1) {
                occupied = true;
            }
        })
        // console.log(occupied);
        cb(occupied);
    });
    // console.log(result);
}


module.exports = checkInModel;