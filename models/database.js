let mysql = require('mysql2');
// console.log(mysql);

let conn = mysql.createConnection({
    database: process.env.DB || 'hotel_management_database',
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    port: process.env.DB_PORT || 3307
})

// console.log(conn);

module.exports = conn;
