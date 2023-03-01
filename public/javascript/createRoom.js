function getAllRoomTypes() {
    let roomTypeSelect = document.getElementById('roomTypeSelect');
    fetch('http://localhost:5000/room/allTypes', {
        mode: "no-cors",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        data.forEach(element => {
            let roomType = document.createElement('option');
            roomType.innerText = element.type_of_room;
            roomType.value = element.id;
            roomTypeSelect.appendChild(roomType);
        });
    })
}

getAllRoomTypes();

// let uploadFile = document.getElementById('imageUpload');
// uploadFile.addEventListener('change', () => {
//     let selected = [...uploadFile.files]

//     console.log(selected);
// })

let form = document.getElementById('createRoomForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    let name = formData.get('roomNumber');
    let description = formData.get('description');
    let image = formData.get('image');
    let roomTypeSelect = formData.get('roomTypeId');
    if (!(name && description && image && roomTypeSelect)) {
        console.log('nope');
        return
    }

    // formData.get('roomNumber')
    // formData.get('description')
    // formData.get('image')
    // formData.get('roomTypeId')
/////FORMA RELOADA A NE BIT TREBALA
    fetch('http://localhost:5000/room/create', {
        method: 'POST',
        body: formData,
        mode: 'cors'
    }).then(res => {
        return res.json();
    }).then(data => {
        console.log(data);
        if (data.msg == 'success') {
            window.location.href = 'http://localhost:5000/admin.html';
        }else{
            let formTitle = document.getElementById('formTitle');
            formTitle.innerText = 'Room already exists';
        }
    })

})