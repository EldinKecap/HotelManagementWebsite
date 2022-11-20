let submitLogin = document.getElementById('login');
console.log(submitLogin);
submitLogin.addEventListener('click',()=>{
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let createAccountInformation ;
    console.log(createAccountInformation);   
        fetch('http://localhost:5000/login',{method: "POST", 
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
})

function checkUserInput(...args){
    let accountInformation = {}
    for (const key of args) {
        if(isEmpty(key)){
            accountInformation[key.name] = key.value;
        }  
    }
    return accountInformation
}

function checkPass(password,confirmPassword){
    if (password.value == confirmPassword.value) {
        confirmPassword.classList.remove('wrongInput');
        return true;
    }
    confirmPassword.classList.add('wrongInput');
    return false;
}

function isEmpty(element) {
    console.log(element.value);
    if(element.value == ''){
        element.classList.add('wrongInput');
        return false;
    }
    console.log('yo');
    element.classList.remove('wrongInput');
    return true;
}

