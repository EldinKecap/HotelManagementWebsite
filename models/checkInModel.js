const conn = require("./database");


let checkInModel = {};

checkInModel.readAll = (cb) => {
    let sql = "SELECT * FROM user_room;"
    let result = conn.execute(sql, (error, result, fields) => {
        cb(result);
    });
    console.log(result);
}

checkInModel.create = (checkInData, cb) => {
    let sql = 'INSERT INTO user_room(room_id,user_id,time_of_arrival,paid) VALUES (?,?,?,?)';
    console.log(checkInData);
    let result = conn.execute(sql, [checkInData.room_id, checkInData.user_id, checkInData.time_of_arrival, false], (error, result, fields) => {
        cb(result);
        console.log(error);
    });
}


module.exports = checkInModel;