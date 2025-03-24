


function reverseStr(str){

    let stack = [];
    let reversedStr = '';

    for(let i = 0; i < str.length; i++){
        stack.push(str[i]);
    }

    while(stack.length > 0){
        reversedStr += stack.pop();
    }

    return reversedStr;
}