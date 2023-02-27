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

let uploadFile = document.getElementById('imageUpload');
uploadFile.addEventListener('change', () => {
    let selected = [...uploadFile.files]
    
    console.log(selected);
})