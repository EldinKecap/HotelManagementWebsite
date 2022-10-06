let mysql = require('mysql');
// console.log(mysql);

let conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    port:3307
})

module.exports = conn;
