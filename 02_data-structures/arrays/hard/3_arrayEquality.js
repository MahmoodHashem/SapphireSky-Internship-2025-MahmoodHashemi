function isEquale(arr1, arr2) {
  const sum1 = sumArray(arr1);
  const sum2 = sumArray(arr2);

  return sum1 === sum2;
}

function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}


// Test cases for isEquale function
function runTests() {
  // Test 1: Equal sum arrays with different elements
  const test1A = [1, 2, 3];
  const test1B = [2, 2, 2];
  console.log('Test 1:', isEquale(test1A, test1B) === true ? 'PASS' : 'FAIL');

  // Test 2: Different sum arrays
  const test2A = [1, 2, 3];
  const test2B = [1, 2, 4];
  console.log('Test 2:', isEquale(test2A, test2B) === false ? 'PASS' : 'FAIL');

  // Test 3: Arrays with negative numbers
  const test3A = [-1, 5, 2];
  const test3B = [6, 0, 0];
  console.log('Test 3:', isEquale(test3A, test3B) === true ? 'PASS' : 'FAIL');

  // Test 4: Empty arrays
  const test4A = [];
  const test4B = [];
  console.log('Test 4:', isEquale(test4A, test4B) === true ? 'PASS' : 'FAIL');

  // Test 5: Different length arrays with same sum
  const test5A = [5, 5];
  const test5B = [2, 2, 6];
  console.log('Test 5:', isEquale(test5A, test5B) === true ? 'PASS' : 'FAIL');
}

// Run the tests
runTests();


