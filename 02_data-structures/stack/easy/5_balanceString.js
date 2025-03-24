
function isBalancedParentheses(str) {
    const stack = [];
    
    for (let char of str) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
    
    return stack.length === 0;
}



// Test cases for isBalancedParentheses function
function runTests() {
    console.log("Running isBalancedParentheses tests...");
    
    // Test 1: Basic balanced parentheses
    console.log('Test 1:', isBalancedParentheses('()') === true ? 'PASS' : 'FAIL');
    
    // Test 2: Nested balanced parentheses
    console.log('Test 2:', isBalancedParentheses('(())') === true ? 'PASS' : 'FAIL');
    
    // Test 3: Multiple balanced parentheses
    console.log('Test 3:', isBalancedParentheses('()()()') === true ? 'PASS' : 'FAIL');
    
    // Test 4: Complex balanced parentheses
    console.log('Test 4:', isBalancedParentheses('(()())') === true ? 'PASS' : 'FAIL');
    
    // Test 5: Unbalanced - more opening parentheses
    console.log('Test 5:', isBalancedParentheses('((()') === false ? 'PASS' : 'FAIL');
    
    // Test 6: Unbalanced - more closing parentheses
    console.log('Test 6:', isBalancedParentheses('())') === false ? 'PASS' : 'FAIL');
    
    // Test 7: Unbalanced - wrong order
    console.log('Test 7:', isBalancedParentheses(')(') === false ? 'PASS' : 'FAIL');
    
    // Test 8: Empty string
    console.log('Test 8:', isBalancedParentheses('') === true ? 'PASS' : 'FAIL');
    
    // Test 9: String with other characters
    console.log('Test 9:', isBalancedParentheses('a(b)c') === true ? 'PASS' : 'FAIL');
    
    // Test 10: Complex string with other characters
    console.log('Test 10:', isBalancedParentheses('(a(b)c(d))') === true ? 'PASS' : 'FAIL');
}

// Run the tests
runTests();
