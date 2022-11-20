function checkUserInput(...args){
    let accountInformation = {}
    for (const key of args) {
        if(isEmpty(key)){
            accountInformation[key.name] = key.value;
        }  
    }
    return accountInformation
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

export { checkUserInput };