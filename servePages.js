let express = require('express');
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter')
const cors = require('cors')
let app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use('/createNewAccount',userRouter);
app.use('/login',loginRouter);

app.get((req,res)=>{
    res.sendFile('/index.html');
})



app.listen(5000,()=>{
    console.log("app listening on port 5000");
})