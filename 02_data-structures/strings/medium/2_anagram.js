

function isAnagram(str1, str2) {


    str1 = str1.toLowerCase().replace(/\s/g, '');
    str2 = str2.toLowerCase().replace(/\s/g, '');

    if (str1.length !== str2.length) return false;
   
    let count = {}
    
    for (const char of str1) {
        count[char] = (count[char] || 0) + 1
    }

    for (const char of str2) {
        if (!count[char]) {
            return false
        }
        count[char]--
    }

    return true;
}

// Test cases for isAnagram function
function runTests() {
    // Test 1: Basic anagram
    console.log('Test 1:', isAnagram('listen', 'silent') === true ? 'PASS' : 'FAIL');

    // Test 2: Different lengths
    console.log('Test 2:', isAnagram('hello', 'world') === false ? 'PASS' : 'FAIL');

    // Test 3: Same characters, different counts
    console.log('Test 3:', isAnagram('hello', 'helo') === false ? 'PASS' : 'FAIL');

    // Test 4: Empty strings
    console.log('Test 4:', isAnagram('', '') === true ? 'PASS' : 'FAIL');

    // Test 5: Single character
    console.log('Test 5:', isAnagram('a', 'a') === true ? 'PASS' : 'FAIL');

    // Test 6: Case sensitivity
    console.log('Test 6:', isAnagram('Debit Card', 'Bad Credit') === true ? 'PASS' : 'FAIL');
}

// Run the tests
runTests();



