/**
 * The key insight is that the smallest missing positive integer must be in the range [1, n+1], 
 * where n is the array length.
 * 
 * Step 1: Replace negative numbers, zeros, and numbers greater than n with n+1
 * 
 * Step 2: Mark the presence of each positive integer
 * 
 * Step 3: Find the first index with a positive value
 */



function firstMissingPositive(nums) {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0 || nums[i] > n) {
            nums[i] = n + 1;
        }
    }


    for (let i = 0; i < n; i++) {
        const num = Math.abs(nums[i]);
        if (num <= n) {
            const idx = num - 1;
            if (nums[idx] > 0) {
                nums[idx] = -nums[idx];
            }
        }
    }


    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }

    return n + 1;
}




// Example usage
console.log(firstMissingPositive([10, 8, 4, 1])); 
