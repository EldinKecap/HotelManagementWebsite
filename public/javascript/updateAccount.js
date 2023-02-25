
let updateButton = document.getElementById('updateAccount');

updateButton.addEventListener('click',()=>{
    console.log('yo');
    let updateInfoElements = document.getElementsByClassName('updateTextField');
    let updateAccountInformation = {};
    for (const element of updateInfoElements) {
        updateAccountInformation[element.name] = element.value;
    } 
    let user =JSON.parse(localStorage.getItem('user'));
    console.log(updateAccountInformation);
    fetch('http://localhost:5000/user/update/' + user.id, {
        method: "PUT",
        body: JSON.stringify({updateAccountInformation}),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }})
        .then((res)=>res.json())
        .then( data =>{
            console.log(data);
        })
})