  /**
 * The key insight is that finding the median is equivalent to finding the (m+n)/2-th element 
 * in the sorted combined array. We can use binary search to find this element without actually 
 * merging the arrays.
 * 
 * Partitioning:
 * - We partition both arrays into left and right parts such that:
 * - All elements in the left part are less than or equal to all elements in the right part
 * - The left part has (m+n+1)/2 elements (for both odd and even total lengths)
 * 
 * Finding the Correct Partition:
 * - We use binary search on the smaller array to find the correct partition point
 * - For each partition in the first array, we can calculate the corresponding partition in the second array
 * 
 * Checking Partition Correctness: A partition is correct if:
 * - The maximum element in the left part of the first array is less than or equal to the minimum element 
 *   in the right part of the second array
 * - The maximum element in the left part of the second array is less than or equal to the minimum element 
 *   in the right part of the first array
 * 
 * Calculating the Median: Once we find the correct partition:
 * - If the total length is odd, the median is the maximum of the left parts
 * - If the total length is even, the median is the average of the maximum of the left parts and the 
 *   minimum of the right parts
 */


function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    
    const x = nums1.length;
    const y = nums2.length;
    const totalLength = x + y;
    
    let low = 0;
    let high = x;
    
    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((totalLength + 1) / 2) - partitionX;
        
        const maxX = partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
        const minX = partitionX === x ? Number.POSITIVE_INFINITY : nums1[partitionX];
        
        const maxY = partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
        const minY = partitionY === y ? Number.POSITIVE_INFINITY : nums2[partitionY];
        
        if (maxX <= minY && maxY <= minX) {
            
            if (totalLength % 2 === 1) {
                return Math.max(maxX, maxY);
            }
            
            return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
        } else if (maxX > minY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }
    
    throw new Error("Input arrays are not sorted");
}

// Example usage
console.log(findMedianSortedArrays([1, 3], [2])); 
console.log(findMedianSortedArrays([1, 2], [3, 4])); 
console.log(findMedianSortedArrays([0, 0], [0, 0])); 
console.log(findMedianSortedArrays([], [1])); 
console.log(findMedianSortedArrays([2], [])); 
