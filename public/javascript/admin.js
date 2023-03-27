function Room(number, description, imageLink) {
    let roomCard = document.createElement('div');
    let roomImg = document.createElement('img');
    let roomTitle = document.createElement('h3');
    let roomDescription = document.createElement('p');
    roomCard.className = 'roomsCard';
    roomImg.setAttribute('alt', number);
    roomImg.setAttribute('src', imageLink);
    roomTitle.className = 'roomTitle';
    roomTitle.innerText = number;
    roomDescription.className = 'roomsDescription';
    roomDescription.innerText = description;
    roomCard.appendChild(roomImg);
    roomCard.appendChild(roomTitle);
    roomCard.appendChild(roomDescription);
    roomCard.addEventListener('click', () => {
        window.location.href = window.location.origin + '/roomEdit.html?roomNumber=' + roomTitle.innerText;
    })
    return roomCard;
}


function getAllRooms() {
    fetch(window.location.origin + '/room/readAll/', {
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
        roomsContainer.innerHTML = '';
        data.forEach(element => {
            roomsContainer.appendChild(Room(element.room_number,
                element.description,
                element.image
            ));
            // console.log(element);
        });
    })
}
getAllRooms();
let roomsContainer = document.querySelector('.roomsContainerGrid');
console.log(roomsContainer);
let rooms = roomsContainer.children;
console.log(rooms);
for (let i = 0; i < rooms.length; i++) {
    const element = rooms[i];
    element.addEventListener('click', e => {
        console.log(e.children);
    })
}

function removeActiveClassOnAdminMenu() {
    let adminMenuList = document.getElementById('adminMenuList');
    let menuItems = adminMenuList.children;
    for (let index = 0; index < menuItems.length; index++) {
        const element = menuItems[index];
        element.classList.remove('active');
    }
}

let roomMenuSelect = document.getElementById('roomMenu');

roomMenuSelect.addEventListener('click', () => {
    getAllRooms();
    removeActiveClassOnAdminMenu();
    roomMenuSelect.className = 'active';
})

let customerMenuSelect = document.getElementById('customerMenu')

customerMenuSelect.addEventListener('click', () => {
    removeActiveClassOnAdminMenu();
    customerMenuSelect.classList.add('active');
    getAllCustomers();
})

function getAllCustomers() {
    fetch(window.location.origin + '/user/readAll/', {
        method: "GET",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    ).then((res) => {
        return res.json();
    }).then((data) => {
        let customersContainer = document.querySelector('.roomsContainerGrid');
        customersContainer.innerHTML = '';
        data.forEach((element) => {
            let customerCard = document.createElement('div');
            customerCard.classList.add('customerCard');
            let customerImage = document.createElement('img');
            customerImage.setAttribute('alt', 'User Avatar');
            let customerInfo = document.createElement('div');
            customerInfo.classList.add('customerInfo');
            let customerName = document.createElement('div');
            customerName.classList.add('name');
            let customerRoomNumber = document.createElement('div');
            customerRoomNumber.classList.add('roomId');
            customerImage.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnLeGaStHdFyPwr1yxrbh06y6oED_Em89jLQ&usqp=CAU');
            customerName.innerText = element.username;
            customerRoomNumber.innerText = 'Room no:';


            customerInfo.appendChild(customerName);
            customerInfo.appendChild(customerRoomNumber);
            customerCard.appendChild(customerImage);
            customerCard.appendChild(customerInfo);
            customersContainer.appendChild(customerCard)
        })

        //      <div class="customerCard">
        //         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnLeGaStHdFyPwr1yxrbh06y6oED_Em89jLQ&usqp=CAU"
        //             alt="User Avatar">
        //         <div class="customerInfo">
        //             <div class="name">Eldin Kecap</div>
        //             <div class="roomId">Room Num: 1</div>
        //         </div>
        //     </div>
        console.log(data);
    })
}

function showRoomOptions() {
    console.log(this.children);
}