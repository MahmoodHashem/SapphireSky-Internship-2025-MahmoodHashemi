


function isStrongPassword(password){
    if(password.length > 8 && password.match(/[A-Z]/) && password.match(/[a-z]/)){
        return false;
    }

    return false
}