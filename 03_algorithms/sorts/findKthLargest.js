
import bubbleSort from "./descendingSort.js";

function findKthLargest(nums, k) {
    nums =  bubbleSort(nums);
    
    return nums[k - 1];
}

// Example usage
const array = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(`The ${k}th largest element is:`, findKthLargest(array, k));
