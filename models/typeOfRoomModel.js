let conn = require('./database');

let typeOfRoomModel = {};

typeOfRoomModel.create = (typeOfRoomData, cb)=>{
    console.log(typeOfRoomData);
    cb();
}

module.exports = typeOfRoomModel;