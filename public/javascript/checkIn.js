async function getAllUsers() {
    let data = await fetch('http://localhost:5000/user/readAll')
    let users = await data.json();
    let userSelect = document.getElementById('username');
    console.log(users);
    users.forEach(user => {
        let userOption = document.createElement('option');
        userOption.value = user.id;
        userOption.textContent = user.username;
        userSelect.appendChild(userOption);
    });
}

async function getAllRooms() {
    let data = await fetch('http://localhost:5000/room/readAll')
    let rooms = await data.json();
    let roomSelect = document.getElementById('roomNumber');
    console.log(rooms);
    rooms.forEach(room => {
        let roomOption = document.createElement('option');
        roomOption.value = room.id;
        roomOption.textContent = room.room_number;
        roomSelect.appendChild(roomOption);
    });
}

let checkInForm = document.getElementById('checkInForm');

function getFormData() {
    // console.log('yo');
    let roomSelect = document.getElementById('roomNumber');
    let userSelect = document.getElementById('username');
    currentDate = new Date();
    // console.log(currentDate);
    let month = +currentDate.getMonth() + 1;
    let date = currentDate.getFullYear() + '-' + month + '-' + currentDate.getDate();

    let formData = {
        user_id: userSelect.value,
        room_id: roomSelect.value,
        time_of_arrival: date
    };
    return formData;
    // console.log(new Date(date));
    // console.log(formData);
}
checkInForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    let formData = getFormData()
    let response = await fetch('http://localhost:5000/checkIn/create', {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    let data = await response.json();
    console.log(data);
});
getAllUsers();
getAllRooms();



