

function isPalindrome(str) {
    let reversed = ''

    for (let i = str.length - 1; i >= 0; i--) {
       reversed += str[i]
    }

    
    return  str === reversed
}

// Test cases for isPalindrome function
function runTests() {
    // Test 1: Basic palindrome
    console.log('Test 1:', isPalindrome('radar') === true ? 'PASS' : 'FAIL');

    // Test 2: Non-palindrome
    console.log('Test 2:', isPalindrome('hello') === false ? 'PASS' : 'FAIL');

    // Test 3: Single character
    console.log('Test 3:', isPalindrome('a') === true ? 'PASS' : 'FAIL');

    // Test 4: Empty string
    console.log('Test 4:', isPalindrome('') === true ? 'PASS' : 'FAIL');

    // Test 5: Even length palindrome
    console.log('Test 5:', isPalindrome('abba') === true ? 'PASS' : 'FAIL');

    // Test 6: Numbers as string
    console.log('Test 6:', isPalindrome('12321') === true ? 'PASS' : 'FAIL');
}


runTests();
