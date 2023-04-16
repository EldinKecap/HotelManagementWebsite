const conn = require("./database");


let checkInModel = {};

checkInModel.readAll = (cb) => {
    let sql = "SELECT * FROM user_room;"
    let result = conn.execute(sql, (error, result, fields) => {
        cb(result);
    });
    // console.log(result);
}

checkInModel.readOne = (userId, cb) => {
    let sql = "SELECT * FROM user_room WHERE user_id = ? AND occupied = 1;"
    let result = conn.execute(sql, [userId], (error, result, fields) => {
        cb(result);
    });
}

checkInModel.create = (checkInData, cb) => {

    checkIfRoomIsOccupied(checkInData.room_id, (occupiedStatus) => {
        if (occupiedStatus) {
            cb({ error: 'Room is occupied' });
            return;
        } else {
            let sql = 'INSERT INTO user_room(room_id,user_id,time_of_arrival,paid,occupied) VALUES (?,?,?,?,?)';
            // console.log(checkInData);

            let result = conn.execute(sql, [checkInData.room_id, checkInData.user_id, checkInData.time_of_arrival, false, true], (error, result, fields) => {
                cb(result);
                // console.log(error);
            });

        }
    });

}


checkInModel.checkOut = (checkOutData, cb) => {
    console.log(checkOutData);
    let getCheckInInfosql = 'SELECT * FROM user_room WHERE id = ?;';
    let message = 'This user arrived on ';
    try {
        conn.execute(getCheckInInfosql, [checkOutData.user_room_id], (error, result, fields) => {
            let getTypeOfRoomIdSql = 'SELECT types_of_room_id FROM room WHERE id = ?';
            let timeOfArrival = result[0].time_of_arrival;
            let userRoomCheckInInfo = result[0];
            console.log(userRoomCheckInInfo);
            conn.execute(getTypeOfRoomIdSql, [userRoomCheckInInfo.room_id], (error, result, fields) => {
                let typeOfRoomId = result[0].types_of_room_id
                let getPriceOfRoomType = 'SELECT price_of_room FROM types_of_room WHERE id = ?';
                conn.execute(getPriceOfRoomType, [typeOfRoomId], (error, result, fields) => {
                    console.log(result[0]);
                    let price = result[0].price_of_room;
                    let currentDate = new Date();
                    console.log(price, currentDate, timeOfArrival);
                    console.log(((currentDate - timeOfArrival) / (1000 * 60 * 60)) / 24);
                    priceToPay = Math.round(((currentDate - timeOfArrival) / (1000 * 60 * 60)) / 24) * price;
                    console.log(priceToPay);
                    let setPriceAndCheckOutSql = 'UPDATE user_room SET paid = ? , occupied = 0 WHERE id = ?';
                    conn.execute(setPriceAndCheckOutSql, [priceToPay, checkOutData.user_room_id], (error, result, fields) => {
                        console.log(result);
                        message += timeOfArrival.getDate() + '/' + (Number(timeOfArrival.getMonth()) + 1) + '/' + timeOfArrival.getFullYear();
                        message += ' and the price is ' + priceToPay + '.';
                        console.log(message);
                        cb({
                            message,
                            priceToPay
                        })
                    })
                })
            })
        })
    } catch (error) {
        cb(error)
    }
}

function checkIfRoomIsOccupied(roomId, cb) {
    let sql = "SELECT * FROM user_room WHERE room_id = ?;"
    let occupied = false;
    let result = conn.execute(sql, [roomId], (error, result, fields) => {
        result.forEach(roomEntry => {
            // console.log(roomEntry);
            // console.log(roomEntry.occupied);
            if (roomEntry.occupied == 1) {
                occupied = true;
            }
        })
        // console.log(occupied);
        cb(occupied);
    });
    // console.log(result);
}


module.exports = checkInModel;