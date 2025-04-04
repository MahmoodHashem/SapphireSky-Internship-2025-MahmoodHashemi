
function binarySearch(arr, target, left, right) {
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        
        if (arr[mid] === target) {
            return mid;
        }
        
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

function exponentialSearch(arr, target) {
    const n = arr.length;
    
    if (n === 0) {
        return -1;
    }
    
    if (arr[0] === target) {
        return 0;
    }
    
    let bound = 1;
    while (bound < n && arr[bound] < target) {
        bound *= 2;
    }
    
    return binarySearch(
        arr, 
        target, 
        Math.floor(bound / 2), 
        Math.min(bound, n - 1)     );
}

// Example usage
const sortedArray = [2, 3, 4, 10, 40, 50, 60, 70, 80, 90, 100, 110, 120];
const target = 60;
const result = exponentialSearch(sortedArray, target);

console.log(`Element ${target} found at index: ${result}`);
