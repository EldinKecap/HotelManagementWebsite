const conn = require('./database');

function loginModel(loginInfo,getLoggedInUser) {
    conn.execute('SELECT * FROM user WHERE username = ? AND password = ?',
    [loginInfo.username,loginInfo.password],
    (err,result,fields)=>{
        console.log(result);
        if (result.length == 1) {
            login(true,result[0]);
        } else {
            login(false,0)
        } 
    })
    function login(bool,user){
        if (bool) {
            conn.execute('UPDATE user SET logged_in = ?  WHERE id = ?',[1,user.id],(err,result,fields)=>{
                user.logged_in = 1; 
                user.success = true;
                delete user.password;
                getLoggedInUser(user);
            })
        } else getLoggedInUser(false);
    }
}

function logoutModel(user) {
    console.log(user);
    conn.execute('UPDATE user SET logged_in = ?  WHERE id = ?',[0,user.id],
    (err,result,fields)=>{
        console.log(result);
    })
}

module.exports = { loginModel, logoutModel };