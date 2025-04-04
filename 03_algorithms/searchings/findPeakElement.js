
/**
 * A peak element in an array is an element that is greater than or equal to its neighbors.
 *  For an array, a peak element satisfies one of these conditions:
 *  - It's greater than or equal to both of its neighbors
 *  - It's at the beginning of the array and greater than or equal to the next element 
 *  - It's at the end of the array and greater than or equal to the previous element
 */

function findPeakElement(nums) {
    const n = nums.length;
    
    if (n === 0) return -1;
    if (n === 1) return 0;
    
    if (nums[0] >= nums[1]) return 0;
    
    if (nums[n-1] >= nums[n-2]) return n-1;
    
    for (let i = 1; i < n-1; i++) {
        if (nums[i] >= nums[i-1] && nums[i] >= nums[i+1]) {
            return i;
        }
    }
    
    return -1;
}

// Example usage
const array1 = [1, 3, 20, 4, 1, 0];
console.log(`Peak element index: ${findPeakElement(array1)}`); 

const array2 = [5, 10, 20, 15];
console.log(`Peak element index: ${findPeakElement(array2)}`); 

const array3 = [10, 20, 15, 2, 23, 90, 67];
console.log(`Peak element index: ${findPeakElement(array3)}`); 
