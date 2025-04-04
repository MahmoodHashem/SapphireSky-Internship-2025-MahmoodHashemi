
/**  
 * Ternary Search is a divide-and-conquer search algorithm similar to Binary Search,
 *  but instead of dividing the search space into two parts, it divides it into three approximately equal parts.
 *  The algorithm determines which of the three parts the target value may lie in, and then recursively searches that part.
 * 
 * Time Complexity:
 *  - Binary Search: O(log₂ n)
 *  - Ternary Search: O(log₃ n)
*/


function ternarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid1 = left + Math.floor((right - left) / 3);
        const mid2 = right - Math.floor((right - left) / 3);
        
        if (arr[mid1] === target) {
            return mid1;
        }
        if (arr[mid2] === target) {
            return mid2;
        }
        
        if (target < arr[mid1]) {
            right = mid1 - 1;
        } else if (target > arr[mid2]) {
            left = mid2 + 1;
        } else {
            left = mid1 + 1;
            right = mid2 - 1;
        }
    }
    
    return -1;
}

// Example usage
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const target = 10;
const result = ternarySearch(sortedArray, target);

console.log(`Element ${target} found at index: ${result}`);

const missingTarget = 16;
const missingResult = ternarySearch(sortedArray, missingTarget);

console.log(`Element ${missingTarget} found at index: ${missingResult}`);
