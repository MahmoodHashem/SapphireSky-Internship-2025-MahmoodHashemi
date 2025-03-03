


function reverse(str){
    let strArr = str.split("")
    let newStr = []

    for (let i = str.length - 1; i >= 0; i--) {
        newStr.push(strArr[i])
    }

    return newStr.join("")
}


//Or Better Way 

function reverseStr(str){
    return str.split("").reverse().join('')
}
