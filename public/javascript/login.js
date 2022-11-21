// const { checkUserInput } = require('textValidation.js')
import {checkUserInput} from './textValidation.js';
let submitLogin = document.getElementById('login');
console.log(submitLogin);
submitLogin.addEventListener('click', () => {
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    console.log(checkUserInput);
    let loginInfo = checkUserInput(username, password);
    console.log(loginInfo);
    if (Object.keys(loginInfo).length === 2) {
        fetch('http://localhost:5000/login', {
            method: "POST",
            body: JSON.stringify({loginInfo}),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            if (data.success) {
                localStorage.setItem('user',JSON.stringify(data));
                // console.log(window.location.href);
                window.location.href = 'index.html';
            }else{
                username.classList.add('wrongInput');
                password.classList.add('wrongInput');
            }

        });
    }
})
