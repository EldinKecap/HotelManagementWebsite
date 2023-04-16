let roomNumberDiv = document.getElementById('roomNumber');
let pricePerDayDiv = document.getElementById('pricePerDay');
let totalPriceDiv = document.getElementById('totalPrice');

function getUserData() {
    let user = JSON.parse(localStorage.getItem('user'));
    try{

        fetch(window.location.origin + '/checkin/readOne/' + user.id)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data[0]) {
                fetch(window.location.origin + '/room/readOne/' + data[0].room_id)
                .then(roomResponse => roomResponse.json())
                .then(roomData => {
                        roomNumberDiv.innerText = 'You are staying at room: ' + roomData[0].room_number;
                    })
                }
            })
        }catch(err){
            roomNumberDiv.innerText = 'You are not checked in';
        }

}

getUserData();