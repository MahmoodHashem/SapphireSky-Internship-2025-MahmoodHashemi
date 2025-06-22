
/**
 * Interpolation Search is an improved variant of binary search that works efficiently on uniformly distributed sorted arrays.
 *  While binary search always checks the middle element,
 *  interpolation search estimates the likely position of the target value based on its value relative to the values at the ends of the search interval.
 * 
 * 
 * The key insight behind interpolation search is that if the values in a sorted array are uniformly distributed,
 *  we can make a more informed guess about where a target value might be located, rather than always dividing the search space in half.
 */



function interpolationSearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    
    if (arr.length === 0 || target < arr[low] || target > arr[high]) {
        return -1;
    }
    
    while (low <= high && target >= arr[low] && target <= arr[high]) {
        if (arr[low] === arr[high]) {
            return arr[low] === target ? low : -1;
        }
        
        const pos = low + Math.floor(
            ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
        );
        
        if (arr[pos] === target) {
            return pos;
        }
        
        if (arr[pos] < target) {
            low = pos + 1;
        } 
        else {
            high = pos - 1;
        }
    }
    
    return -1;
}

// Example usage
const sortedArray = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47];
const target = 18;
const result = interpolationSearch(sortedArray, target);

console.log(`Element ${target} found at index: ${result}`);

// Test with a target that doesn't exist in the array
const missingTarget = 15;
const missingResult = interpolationSearch(sortedArray, missingTarget);

console.log(`Element ${missingTarget} found at index: ${missingResult}`);
