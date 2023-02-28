let express = require('express');
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const roomRouter = require('./routes/roomRouter')
const cors = require('cors')
let app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/room', roomRouter);

app.get((req,res)=>{
    res.sendFile('/index.html');
})

console.log();

app.listen(5000,()=>{
    console.log("app listening on port 5000");
})