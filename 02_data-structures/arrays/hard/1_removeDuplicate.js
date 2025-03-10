function removeDuplicate(arr) {
  arr = sort(arr);

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] !== arr[i - 1]) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

export default function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr; 
}


// Test cases for removeDuplicate function
function runTests() {
  // Test 1: Numbers with duplicates
  const test1 = [1, 1, 2, 2, 3, 3, 4, 4];
  console.log('Test 1a:', JSON.stringify(removeDuplicate(test1)) === JSON.stringify([1, 2, 3, 4]) ? 'PASS' : 'FAIL');

  // Test 2: Array already without duplicates
  const test2 = [1, 2, 3, 4, 5];
  console.log('Test 2:', JSON.stringify(removeDuplicate(test2)) === JSON.stringify([1, 2, 3, 4, 5]) ? 'PASS' : 'FAIL');

  // Test 3: Array with all same elements
  const test3 = [5, 5, 5, 5, 5];
  console.log('Test 3:', JSON.stringify(removeDuplicate(test3)) === JSON.stringify([5]) ? 'PASS' : 'FAIL');

  // Test 4: Array with negative numbers
  const test4 = [-2, -2, -1, 0, 0, 1, 1];
  console.log('Test 4:', JSON.stringify(removeDuplicate(test4)) === JSON.stringify([-2, -1, 0, 1]) ? 'PASS' : 'FAIL');

  // Test 5: Single element array
  const test5 = [42];
  console.log('Test 5:', JSON.stringify(removeDuplicate(test5)) === JSON.stringify([42]) ? 'PASS' : 'FAIL');
}

