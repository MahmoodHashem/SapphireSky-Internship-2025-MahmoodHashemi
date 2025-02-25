


function removeDuplicate(arr){
    
    arr.sort()

    let newArr = []
 
    for(let i = 0; i < arr.length; i++){
        if(i === 0 || arr[i] !== arr[i - 1]){
            newArr.push(arr[i])
        }
    }

    return newArr

}

