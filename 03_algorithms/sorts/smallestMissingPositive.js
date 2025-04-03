
import descendingSort from "./descendingSort.js";

function findSmallestMissingPositive(nums) {
    
    
    nums = descendingSort(nums);

    let expectedPositive = 1;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= 0 || (i > 0 && nums[i] === nums[i-1])) {
            continue;
        }
        
        if (nums[i] > expectedPositive) {
            return expectedPositive;
        }
        
        expectedPositive = nums[i] + 1;
    }
    
    return expectedPositive;
}

// Example usage
console.log(findSmallestMissingPositive([3, 4, -1, 1])); // Output: 2
console.log(findSmallestMissingPositive([1, 2, 0])); // Output: 3
console.log(findSmallestMissingPositive([7, 8, 9, 11, 12])); // Output: 1
console.log(findSmallestMissingPositive([1, 2, 3])); // Output: 4
console.log(findSmallestMissingPositive([-5, -3, -1])); // Output: 1
