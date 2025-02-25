


// simplest way with built-in functions 😀
function merge(arr1, arr2){
   return [...arr1, ...arr2].sort() 
}


// The hard way with Algorithm 


function merge(arr1, arr2){
    
    let result = []
    let i = 0
    let j = 0

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        }else{
            result.push(arr2[j])
            j++
        }
    }

    while(i < arr1.length){
        result.push(arr1[i])
        i++
    }

    while(j < arr2.length){
        result.push(arr2[j])
        j++
    }

    return result
}


console.log(merge([1, 10, 50], [2, 14, 99, 100]))

