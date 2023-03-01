function Room(number, description, imageLink) {
    let roomCard = document.createElement('div');
    let roomImg = document.createElement('img');
    let roomTitle = document.createElement('h3');
    let roomDescription = document.createElement('p');
    roomCard.className = 'roomsCard';
    roomImg.setAttribute('alt', number);
    roomImg.setAttribute('src', imageLink);
    roomTitle.className = 'roomTitle';
    roomTitle.innerText = number ;
    roomDescription.className = 'roomsDescription';
    roomDescription.innerText = description;
    roomCard.appendChild(roomImg);
    roomCard.appendChild(roomTitle);
    roomCard.appendChild(roomDescription);
    return roomCard;
}


fetch('http://localhost:5000/room/readAll/', {
    method: "GET",
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    }
}
).then((res) => {
    return res.json();
}).then((data) => {
    let roomsContainer = document.querySelector('.roomsContainerGrid');
    data.forEach(element => {
        roomsContainer.appendChild(Room(element.room_number,
            element.description,
            element.image  
            ));
            console.log(element);
    });
})