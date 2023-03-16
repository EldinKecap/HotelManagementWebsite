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

getAllUsers();

getAllRooms();