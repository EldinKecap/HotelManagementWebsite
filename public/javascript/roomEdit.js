function getAllRoomTypes() {
    let roomTypeSelect = document.getElementById('roomTypeSelect');
    fetch(window.location.origin + '/room/allTypes', {
        mode: "no-cors",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        data.forEach(element => {
            let roomType = document.createElement('option');
            roomType.innerText = element.type_of_room;
            roomType.value = element.id;
            roomTypeSelect.appendChild(roomType);
        });
    })
}

getAllRoomTypes();

let url = new URL(window.location.href);
let roomNumber = url.searchParams.get('roomNumber');
let roomToUpdate = document.getElementById('roomToUpdate');
roomToUpdate.innerText += ' ' + roomNumber;

let form = document.getElementById('updateRoomForm');
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let formData = new FormData(form);
    formData.append('roomNumber', roomNumber)

    fetch(window.location.origin + '/room/update', {
        method: 'PUT',
        body: formData,
        mode: 'cors'
    }).then(res => {
        return res.json();
    }).then(data => {
        console.log(data);
        if (data.msg == 'success') {
            window.location.href = window.location.origin + '/admin.html';
        } else {
            let formTitle = document.getElementById('formTitle');
            formTitle.innerText = 'Room already exists';
        }
    })
})

let deleteBtn = document.getElementById('delete');
deleteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(window.location.origin + '/room/delete/' + roomNumber, {
        method: 'DELETE',
        mode: 'cors'
    }).then(res => {
        return res.json();
    }).then(data => {
        console.log(data);
        if (data.msg == 'success') {
            window.location.href = window.location.origin + '/admin.html';
        } else {
            console.log('SERVER ERROR');
        }
    })
})

