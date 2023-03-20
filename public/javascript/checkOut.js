async function getAllCheckedInUsers() {
    let response = await fetch('http://localhost:5000/checkIn/readAll');
    let checkedInUsersAndRooms = await response.json();
    console.log(checkedInUsersAndRooms);
    let userSelect = document.getElementById('username');
    checkedInUsersAndRooms.forEach(async checkedInUsersAndRoom => {
        let checkedInUserOption = document.createElement('option');
        let responseUser = await fetch('http://localhost:5000/user/readOne/' + checkedInUsersAndRoom.user_id);
        let user = await responseUser.json();
        let responseRoom = await fetch('http://localhost:5000/room/readOne/' + checkedInUsersAndRoom.room_id);
        let room = await responseRoom.json();
        console.log(user);
        checkedInUserOption.innerText = user[0].username + ' Room No.: ' + room[0].room_number;
        checkedInUserOption.setAttribute('name','user_room_id');
        checkedInUserOption.value= checkedInUsersAndRoom.id;
        userSelect.appendChild(checkedInUserOption);
    });
}

getAllCheckedInUsers();