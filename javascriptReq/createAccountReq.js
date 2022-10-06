let conn = require('./database');


conn.connect(function(err){
    if (err) {
        throw err;
    }
    console.log('connected');
})