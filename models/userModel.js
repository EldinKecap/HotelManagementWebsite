const conn = require('./database');
let userModel = {};

userModel.create = function (createAccountInformation,cb) {
    conn.execute('INSERT INTO customer(first_name,last_name) VALUES(?,?)',
    [createAccountInformation.firstName,createAccountInformation.lastName],
    (err,res,field)=>{
        console.log(res);
        conn.execute('INSERT INTO user(username,password,customer_id,logged_in) VALUES(?,?,?,?)',
        [createAccountInformation.username,createAccountInformation.password,res.insertId,1],
        (err,result,field)=>{
            console.log(result);
            // console.log(field);
            cb(result);
        })
        // console.log(field);
    });
}

userModel.update = (updateAccountInformation,cb) => {
    
}

module.exports = userModel;