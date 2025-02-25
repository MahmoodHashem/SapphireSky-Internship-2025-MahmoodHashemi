

function smallest(arr){

    let min = 0; 

    for (let i = 0; i < arr.length; i++) {
      
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min

}



//or 

const smallest = (arr)=> Math.min(...arr)


console.log(smallest([1,2,3,4,5, 0]))