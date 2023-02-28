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

let form = document.getElementById('createRoomForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('name');
    let description = document.getElementById('description');
    let image = document.getElementById('imageUpload');
    let roomTypeSelect = document.getElementById('roomTypeSelect');
    image.files[0].name = name.value
    
    let formData = new FormData;
     formData.append('roomNumber','name.value')
     formData.append('description',description.value)
     formData.append('image',image.files[0])
     formData.append('roomTypeId',roomTypeSelect.value)
   


    fetch('http://localhost:5000/room/create', {
        method: 'POST',
        body: formData,
        // mode: 'cors',
        // headers: {
        //     "Content-Type": "multipart/form-data"
        // }
    }).then(res => {
        return res.json();
    }).then(data => {
        console.log(data);
    })


})