const conn = require('../models/database');

function createNewAccountModel(createAccountInformation) {
    conn.execute('INSERT INTO customer(first_name,last_name) VALUES(?,?)',[createAccountInformation.firstName,createAccountInformation.lastName],(err,res,field)=>{
        console.log(res);
        conn.execute('INSERT INTO user(username,password,customer_id) VALUES(?,?,?)',[createAccountInformation.username,createAccountInformation.password,res.insertId],(err,res)=>{
            console.log(res);
        })
        // console.log(field);
    });
}

module.exports = { createNewAccountModel };