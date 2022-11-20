let express = require('express');
const createNewAccountRouter = require('../routes/createNewAccountRouter');
let app = express();

app.use(express.json());
// app.use(cors());
app.use(express.static('public'));
app.use('/createNewAccount',createNewAccountRouter);

app.get((req,res)=>{
    res.sendFile('/index.html');
})



app.listen(5000,()=>{
    console.log("app listening on port 5000");
})