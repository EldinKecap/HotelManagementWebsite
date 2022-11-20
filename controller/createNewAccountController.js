let conn = require('../models/database');
const createNewAccount = (req,res,next)=>{
    let { createAccountInformation } = req.body;
    console.log(createAccountInformation);
    conn.execute('INSERT INTO customer(first_name,last_name) VALUES(?,?)',[createAccountInformation.firstName,createAccountInformation.lastName],(err,res,field)=>{
        console.log(res);
        conn.execute('INSERT INTO user(username,password,customer_id) VALUES(?,?,?)',[createAccountInformation.username,createAccountInformation.password,res.insertId],(err,res)=>{
            console.log(res);
        })
        // console.log(field);
    });
    res.json({ success : true })
}

module.exports = createNewAccount;