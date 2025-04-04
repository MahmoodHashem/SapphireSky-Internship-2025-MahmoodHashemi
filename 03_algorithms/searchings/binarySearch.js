

function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (arr[middle] === val) {
            return middle;
        } else if (arr[middle] < val) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }

    }

    return -1; 
}



const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target =11;
const result = binarySearch(sortedArray, target);

if (result !== -1) {
    console.log(`Element ${target} found at index ${result}`);
} else {
    console.log(`Element ${target} not found in the array`);
}