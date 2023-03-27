
function createTypeOfRoom() {
    let submitButton = document.getElementById('createTypeOfRoom');
    let data = {};
    let error = document.getElementById('error')
    console.log(submitButton.disabled);

    submitButton.addEventListener('click',async () => {
        data.type_of_room = document.getElementById('typeOfRoom').value;
        data.price = document.getElementById('price').value;
        console.log(data);
        if (data.type_of_room && data.price) {
            submitButton.disabled = true;
            let response = await fetch(window.location.origin + '/typeOfRoom/create', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let responseData = await response.json();
            console.log(responseData);
            if (responseData.msg == 'error') {
                error.innerText = 'Room type already exists';
            } else {
                error.innerText = responseData.msg;
            }
            submitButton.disabled = false;
        }else{
            error.innerText = 'Data cant be empty or 0';
        }
    })

}

createTypeOfRoom();