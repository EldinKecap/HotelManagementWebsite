const express = require('express');
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const roomRouter = require('./routes/roomRouter')
const cors = require('cors')
const upload = require('express-fileupload');
const checkInRouter = require('./routes/checkInRouter');
const typeOfRoomRouter = require('./routes/typeOfRoomRouter');
const app = express();


app.use(cors());
app.use(upload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/room', roomRouter);
app.use('/checkin', checkInRouter);
app.use('/typeOfRoom', typeOfRoomRouter);

app.get((req, res) => {
    res.sendFile('/index.html');
})


app.listen(5000, () => {
    console.log("app listening on port 5000");
})

module.exports = app ;