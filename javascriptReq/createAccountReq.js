///
// let createAcc = document.getElementById('createAcc')
// createAcc.addEventListener('click',(e)=>{
//     let createAccObj = {
//         firstNameVal:firstName.value,
//         lastNameVal:lastName.value,
//         usernameVal:username.value,
//         passwordVal:password.value,
//         confirmPasswordVal:confirmPassword.value
//     };
//     console.log(createAccObj);
//     e.preventDefault();
// })

///


let conn = require('./database');


conn.connect(function(err){
    if (err) {
        throw err;
    }
    console.log('connected');
})