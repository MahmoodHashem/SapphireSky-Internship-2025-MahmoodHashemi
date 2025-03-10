import sort from "./1_removeDuplicate.js";

function isEquale(a, b) {

  if (a.length !== b.length) return false;
  a = sort(a);
  b = sort(b);
  for (let i = 0; i < a.length; i++)
      if (a[i] !== b[i])
          return false;


  return true;
}


// Test cases for isEquale function
function runTests() {
  // Test 1: Same elements, different order
  console.log('Test 1:', isEquale([1, 2, 3], [3, 1, 2]) === true ? 'PASS' : 'FAIL');

  // Test 2: Different elements
  console.log('Test 2:', isEquale([1, 2, 3], [1, 2, 4]) === false ? 'PASS' : 'FAIL');

  // Test 3: Empty arrays
  console.log('Test 3:', isEquale([], []) === true ? 'PASS' : 'FAIL');

  // Test 4: Different length arrays
  console.log('Test 4:', isEquale([1, 2, 3], [1, 2]) === false ? 'PASS' : 'FAIL');

  // Test 5: Duplicate elements
  console.log('Test 5:', isEquale([1, 1, 2], [1, 2, 1]) === true ? 'PASS' : 'FAIL');

  // Test 6: Negative numbers
  console.log('Test 6:', isEquale([-3, -1, -2], [-1, -2, -3]) === true ? 'PASS' : 'FAIL');
}

runTests();




