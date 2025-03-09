function reverse(str){

    let chars = str.split("")

    let l = 0; 
    let r = str.length - 1

   while(l < r){
    
        [chars[l], chars[r]] = [chars[r], chars[l]]

        l++; 
        r--
   }

    return chars.join("")

}

// Test cases for reverse function
function runTests() {
    // Test 1: Basic word reversal
    console.log('Test 1:', reverse('hello') === 'olleh' ? 'PASS' : 'FAIL');

    // Test 2: Palindrome
    console.log('Test 2:', reverse('radar') === 'radar' ? 'PASS' : 'FAIL');

    // Test 3: Single character
    console.log('Test 3:', reverse('a') === 'a' ? 'PASS' : 'FAIL');

    // Test 4: Empty string
    console.log('Test 4:', reverse('') === '' ? 'PASS' : 'FAIL');

    // Test 5: Sentence with spaces
    console.log('Test 5:', reverse('hello world') === 'dlrow olleh' ? 'PASS' : 'FAIL');

    // Test 6: Numbers and special characters
    console.log('Test 6:', reverse('123!@#') === '#@!321' ? 'PASS' : 'FAIL');
}


runTests();
