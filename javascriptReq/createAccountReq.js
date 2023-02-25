const express = require('express');
const conn = require('../models/database');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(cors());

//  OVAJ DIO RADI AL

app.post('/createAccount',(req,res)=>{
    let { createAccountInformation } = req.body;
    console.log(createAccountInformation);
    conn.execute('INSERT INTO customer(first_name,last_name) VALUES(?,?)',[createAccountInformation.firstName,createAccountInformation.lastName],(err,res,field)=>{
        // console.log(res);
        conn.execute('INSERT INTO user(username,password,customer_id) VALUES(?,?,?)',[createAccountInformation.username,createAccountInformation.password,res.insertId],(err,res)=>{
            console.log(res);
        })
        // console.log(field);
    });
    res.json({ success : true })
})




    app.listen(5000,()=>{
        console.log('Server is listening on port 5000...');
    })