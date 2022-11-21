const conn = require('./database');

function createNewAccountModel(createAccountInformation,cb) {
    conn.execute('INSERT INTO customer(first_name,last_name) VALUES(?,?)',
    [createAccountInformation.firstName,createAccountInformation.lastName],
    (err,res,field)=>{
        console.log(res);
        conn.execute('INSERT INTO user(username,password,customer_id) VALUES(?,?,?)',
        [createAccountInformation.username,createAccountInformation.password,res.insertId],
        (err,result,field)=>{
            console.log(result);
            // console.log(field);
            cb(result);
        })
        // console.log(field);
    });
}

module.exports = { createNewAccountModel };