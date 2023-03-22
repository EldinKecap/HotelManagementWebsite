async function getAllCheckedInUsers() {
    let response = await fetch('http://localhost:5000/checkIn/readAll');
    let checkedInUsersAndRooms = await response.json();
    console.log(checkedInUsersAndRooms);
    let userSelect = document.getElementById('username');
    checkedInUsersAndRooms.forEach(async checkedInUsersAndRoom => {
        if (!checkedInUsersAndRoom.paid && checkedInUsersAndRoom.occupied == 1) {
            let checkedInUserOption = document.createElement('option');
            let responseUser = await fetch('http://localhost:5000/user/readOne/' + checkedInUsersAndRoom.user_id);
            let user = await responseUser.json();
            let responseRoom = await fetch('http://localhost:5000/room/readOne/' + checkedInUsersAndRoom.room_id);
            let room = await responseRoom.json();
            console.log(user);
            checkedInUserOption.innerText = user[0].username + ' Room No.: ' + room[0].room_number;
            checkedInUserOption.setAttribute('name', 'user_room_id');
            checkedInUserOption.value = checkedInUsersAndRoom.id;
            userSelect.appendChild(checkedInUserOption);
        }
    });
}

async function setUpForm() {
    await getAllCheckedInUsers();

    let form = document.getElementById('checkOutForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // console.log('yo');
        let formData = new FormData(form);

        if (formData.get('username')) {
            fetch('http://localhost:5000/checkIn/checkOut', {
                method: 'PUT',
                body: JSON.stringify({
                    user_room_id: formData.get('username')
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                return response.json();
            }).then(data => {
                if (data.result.message) {
                    document.getElementById('error').innerText = data.result.message;
                }else{
                    document.getElementById('error').innerText = data.result.error;
                }
                document.getElementById('username').innerHTML = '';
                getAllCheckedInUsers();
            })
        }
    });
}

setUpForm();