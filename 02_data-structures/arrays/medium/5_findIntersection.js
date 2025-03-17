


function findIntersection(arr1, arr2){

    const nums1 = new Set(arr1)

    let result = []

    for(let i = 0; i < arr2.length; i++){

        if(nums1.has(arr2[i])){
            result.push(arr2[i])
            nums1.delete(arr2[i])
        }
    }

    return result
}
