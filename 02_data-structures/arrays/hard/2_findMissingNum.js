

function findMissing(arr) {


  if (arr.length === 0) return -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }

  return -1;

 
}



// Test cases for findMissing function
function runTests() {
  // Test 1: Basic sequence with missing number
  const test1 = [1, 2, 4, 5];
  console.log('Test 1:', findMissing(test1) === 3 ? 'PASS' : 'FAIL');

  // Test 2: Missing number at start
  const test2 = [2, 3, 4, 5];
  console.log('Test 2:', findMissing(test2) === 1 ? 'PASS' : 'FAIL');

  // Test 3: Longer sequence
  const test4 = [1, 2, 3, 4, 5, 6, 8, 9, 10];
  console.log('Test 4:', findMissing(test4) === 7 ? 'PASS' : 'FAIL');

  // Test 4: No missing number
  const test5 = [1, 2, 3];
  console.log('Test 5:', findMissing(test5) === -1 ? 'PASS' : 'FAIL');
}


runTests()
