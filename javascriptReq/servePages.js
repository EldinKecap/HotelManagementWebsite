let express = require('express');
let conn = require('./database');
let app = express();
//went to work on creating an account
app.use(express.static('../'));

app.get('/',(req,res)=>{
    res.send()
})