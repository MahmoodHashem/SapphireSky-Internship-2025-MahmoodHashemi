
function findFirstOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1; 
    
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        
        if (arr[mid] === target) {
            result = mid;
            right = mid - 1; 
        } 
        else if (target < arr[mid]) {
            right = mid - 1;
        } 
        else {
            left = mid + 1;
        }
    }
    
    return result;
}

// Example usage
const sortedArray = [0,9,9,9,9,9,9,9,9,9,9,9,9,9, 10];
const target = 9;
const result = findFirstOccurrence(sortedArray, target);

if (result !== -1) {
    console.log(`First occurrence of ${target} found at index ${result}`);
} else {
    console.log(`Element ${target} not found in the array`);
}

