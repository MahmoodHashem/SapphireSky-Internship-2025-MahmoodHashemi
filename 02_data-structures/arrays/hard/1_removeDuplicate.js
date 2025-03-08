


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


function sort(arr){

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            
            
        }
        
    }
}

