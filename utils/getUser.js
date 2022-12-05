const conn = require("../models/database");

function getUser(resultInsertId,cb) {
    // console.log(resultInsertId);
    conn.execute('SELECT * FROM user WHERE id = ?',[resultInsertId.insertId],(err,result,fields)=>{
        // console.log(resultInsertId);
        cb(result[0]);
    })
}

module.exports = { getUser }