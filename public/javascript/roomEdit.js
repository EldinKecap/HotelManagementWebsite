
let url = new URL(window.location.href);
let roomNumber = url.searchParams.get('roomNumber');
let roomToUpdate = document.getElementById('roomToUpdate');
roomToUpdate.innerText += ' ' + roomNumber;

let form = document.getElementById('updateRoomForm');
let formData = new FormData(form);
formData.append('')
console.log(formData);
//////////////// Nastavit sa update functionality
