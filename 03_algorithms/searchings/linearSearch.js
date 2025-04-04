

function linearSearch(arr, val) {

    if(arr.length === 0) return -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;

}