import {checkUserInput} from './textValidation.js';


let submitCreateAccount = document.getElementById('createAccount');
console.log(submitCreateAccount);
submitCreateAccount.addEventListener('click',()=>{
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirmPassword');
    let createAccountInformation = checkUserInput(firstName,lastName,username,password,confirmPassword);
    console.log(createAccountInformation);
    if (Object.keys(createAccountInformation).length == 5 && checkPass(password,confirmPassword)) {
        fetch('http://localhost:5000/createNewAccount',{method: "POST", 
        body: JSON.stringify({ createAccountInformation }),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        }} )
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log(data);
        });
    }
})



function checkPass(password,confirmPassword){
    if (password.value == confirmPassword.value) {
        confirmPassword.classList.remove('wrongInput');
        return true;
    }
    confirmPassword.classList.add('wrongInput');
    return false;
}



