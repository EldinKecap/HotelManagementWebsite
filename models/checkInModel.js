const conn = require("./database");


let checkInModel = {};

checkInModel.readAll = (cb) => {
    let sql = "SELECT * FROM user_room;"
    let result = conn.execute(sql,(error, result, fields)=>{
        cb(result);
    });
    console.log(result);
}

checkInModel.create = (checkInData)=>{
    let sql = 'INSERT INTO user_room(room_id,user_id,time_of_arrival,paid) VALUES (?,?,?,?)';
    let result = conn.execute(sql,[],(error,result,fields)=>{
        console.log(result);
    })
    console.log(result);
    //WORK IN PROGRESS
}


module.exports = checkInModel ;