let mysql = require('mysql2');
// console.log(mysql);

let conn = mysql.createConnection({
    database:'sql7608905',
    host:'sql7.freesqldatabase.com',
    user:'sql7608905',
    password: process.env.DB_PASSWORD ,
    port:3306
})

// console.log(conn);

module.exports = conn;
