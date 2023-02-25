const conn = require('./database');
let userModel = {};

userModel.create = function (createAccountInformation, cb) {
    console.log(createAccountInformation);
    conn.execute('INSERT INTO user(username,password,logged_in,first_name,last_name) VALUES(?,?,?,?,?)',
        [createAccountInformation.username, createAccountInformation.password, true, createAccountInformation.firstName, createAccountInformation.lastName],
        (err, result, field) => {
            console.log(err);
            cb(result);
        });
}

userModel.update = (updateAccountInformation, id, cb) => {
    let fieldsToUpdate = '';
    let valuesToUpdate = [...Object.values(updateAccountInformation)];

    for (const key in updateAccountInformation) {
        fieldsToUpdate += key + '= ? ,';
    }

    fieldsToUpdate = fieldsToUpdate.replace(/,$/g, '');
    valuesToUpdate.push(id);

    conn.execute('UPDATE user SET ' + fieldsToUpdate + 'WHERE id = ?;', valuesToUpdate, (err, res, field) => {
        cb(res)
    });
}

userModel.delete = (deleteAccountInformation, cb) => {
    conn.execute('DELETE FROM user WHERE id = ?', [deleteAccountInformation.id], (err, res, field) => {
        cb(res);
    })
}

userModel.readAll = (cb) => {
    conn.execute('SELECT * FROM user', (err, res, field) => {
        cb(res);
    })
}

userModel.readOne = (id, cb) => {
    conn.execute('SELECT * FROM user WHERE id = ?', [id], (err, res, field) => {
        console.log(res);
        cb(res);
    })
}

module.exports = userModel;