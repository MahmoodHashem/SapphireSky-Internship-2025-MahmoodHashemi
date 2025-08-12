function longestPalindrome(s) {
    if (!s || s.length === 0) return "";

    let start = 0, maxLength = 0;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1; // Length of palindrome
    }

    for (let i = 0; i < s.length; i++) {
        let oddLength = expandAroundCenter(i, i);      
        let evenLength = expandAroundCenter(i, i + 1);
        let length = Math.max(oddLength, evenLength);

        if (length > maxLength) {
            maxLength = length;
            start = i - Math.floor((length - 1) / 2);
        }
    }

    return s.substring(start, start + maxLength);
}


// Test cases for longestPalindrome function
function runTests() {
    // Test 1: Basic palindrome
    console.log('Test 1:', longestPalindrome('babad') === 'bab' ? 'PASS' : 'FAIL');

    // Test 2: Even length palindrome
    console.log('Test 2:', longestPalindrome('cbbd') === 'bb' ? 'PASS' : 'FAIL');

    // Test 3: Single character
    console.log('Test 3:', longestPalindrome('a') === 'a' ? 'PASS' : 'FAIL');

    // Test 4: Empty string
    console.log('Test 4:', longestPalindrome('') === '' ? 'PASS' : 'FAIL');

    // Test 5: All same characters
    console.log('Test 5:', longestPalindrome('aaaa') === 'aaaa' ? 'PASS' : 'FAIL');

    // Test 6: No palindrome longer than 1
    console.log('Test 6:', longestPalindrome('abcd') === 'a' ? 'PASS' : 'FAIL');
}


runTests();

