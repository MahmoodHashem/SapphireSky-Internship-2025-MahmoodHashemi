function maxSubArray(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxEndingHere + arr[i]) {
      maxEndingHere = arr[i];
    } else {
      maxEndingHere = maxEndingHere + arr[i];
    }

    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
    }
  }

  return maxSoFar;
}

// Test cases for maxSubArray function
function runTests() {
  // Test 1: Basic positive and negative numbers
  const test1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  console.log("Test 1:", maxSubArray(test1) === 6 ? "PASS" : "FAIL");

  // Test 2: All positive numbers
  const test2 = [1, 2, 3, 4, 5];
  console.log("Test 2:", maxSubArray(test2) === 15 ? "PASS" : "FAIL");

  // Test 3: All negative numbers
  const test3 = [-1, -2, -3, -4, -5];
  console.log("Test 3:", maxSubArray(test3) === -1 ? "PASS" : "FAIL");

  // Test 4: Single element array
  const test4 = [42];
  console.log("Test 4:", maxSubArray(test4) === 42 ? "PASS" : "FAIL");

  // Test 5: Alternating positive and negative
  const test5 = [1, -1, 2, -2, 3, -3];
  console.log("Test 5:", maxSubArray(test5) === 3 ? "PASS" : "FAIL");

  // Test 6: Zero-sum subarrays
  const test6 = [-2, 0, 3, -1, 0, 2, -3];
  console.log("Test 6:", maxSubArray(test6) === 4 ? "PASS" : "FAIL");
}


runTests()