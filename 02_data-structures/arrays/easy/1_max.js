

function max(arr){

    let max = 0; 

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max){
            max = arr[i]
        }
    }

    return max
}



// or


const  largest = arr => Math.max(...arr)