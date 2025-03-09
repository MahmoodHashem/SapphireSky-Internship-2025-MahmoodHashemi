
function uniqueChar(str) {
    const charCount = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of str) {
        if(charCount[char] === 1) {
            return char;
        }
    }

    return -1; 
}


// Test cases for uniqueChar function
function runTests() {
    // Test 1: Basic string with unique character
    console.log('Test 1:', uniqueChar('leetcode') === 'l' ? 'PASS' : 'FAIL');

    // Test 2: String with all repeating characters
    console.log('Test 2:', uniqueChar('aabbcc') === -1 ? 'PASS' : 'FAIL');

    // Test 3: Single character
    console.log('Test 3:', uniqueChar('a') === 'a' ? 'PASS' : 'FAIL');

    // Test 4: Empty string
    console.log('Test 4:', uniqueChar('') === -1 ? 'PASS' : 'FAIL');

    // Test 5: Complex string with spaces
    console.log('Test 5:', uniqueChar('hello world hi') === 'e' ? 'PASS' : 'FAIL');

    // Test 6: Case sensitive string
    console.log('Test 6:', uniqueChar('aAbbBcC') === 'a' ? 'PASS' : 'FAIL');
}



runTests();
