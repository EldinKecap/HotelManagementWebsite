const conn = require("./database");


let checkInModel = {};

checkInModel.readAll = (cb) => {
    let sql = "SELECT * FROM user_room;"
    let result = conn.execute(sql,(error, result, fields)=>{
        cb(result);
    });

}


module.exports = checkInModel ;