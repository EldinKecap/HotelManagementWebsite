let mysql = require('mysql2');
// console.log(mysql);

let conn = mysql.createConnection({
    database:'hotel_management_database',
    host:'localhost',
    user:'root',
    password:'root',
    port:3307
})

module.exports = conn;
