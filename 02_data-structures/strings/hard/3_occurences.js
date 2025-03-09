function countOccurrences(str) {
    let charCount = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    return charCount;
}


// Test cases for countOccurrences function
function runTests() {
    // Test 1: Basic string with mixed characters
    const test1 = countOccurrences('hello');
    console.log('Test 1:', test1['h'] === 1 && test1['e'] === 1 && test1['l'] === 2 && test1['o'] === 1 ? 'PASS' : 'FAIL');

    // Test 2: String with all same characters
    const test2 = countOccurrences('aaaaaa');
    console.log('Test 2:', test2['a'] === 6 ? 'PASS' : 'FAIL');

    // Test 3: Empty string
    const test3 = countOccurrences('');
    console.log('Test 3:', Object.keys(test3).length === 0 ? 'PASS' : 'FAIL');

    // Test 4: String with numbers
    const test4 = countOccurrences('12321');
    console.log('Test 4:', test4['1'] === 2 && test4['2'] === 2 && test4['3'] === 1 ? 'PASS' : 'FAIL');

    // Test 5: String with special characters
    const test5 = countOccurrences('!@#!@#!');
    console.log('Test 5:', test5['!'] === 3 && test5['@'] === 2 && test5['#'] === 2 ? 'PASS' : 'FAIL');
}


runTests();
