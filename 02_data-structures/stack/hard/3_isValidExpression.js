
function isValidArithmeticExpression(expression) {
    if (!expression || expression.trim() === '') {
        return false;
    }
    
    const stack = [];
    const operators = ['+', '-', '*', '/', '%'];
    let lastChar = null;
    
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        
      
        if (char === ' ') {
            continue;
        }
        
        
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0 || stack.pop() !== '(') {
                return false; 
            }
            
     
            if (lastChar === '(' && char === ')') {
                return false; 
            }
        }
        
        
        if (!(char >= '0' && char <= '9') && 
            !operators.includes(char) && 
            char !== '(' && 
            char !== ')' && 
            char !== '.') {
            return false; 
        }
        
        if (operators.includes(char) && operators.includes(lastChar)) {
            return false;
        }
        
        if (operators.includes(char) && (i === 0 || i === expression.length - 1)) {
            return false;        }
        
        if ((operators.includes(char) && lastChar === '(') || 
            (operators.includes(lastChar) && char === ')')) {
            return false; 
        }
        
        lastChar = char;
    }
    
    if (stack.length > 0) {
        return false; 
    }
    
    return true;
}


function runTests() {
    console.log("Running isValidArithmeticExpression tests...");
    
    // Test 1: Simple valid expression
    console.log('Test 1:', isValidArithmeticExpression('3+4') === true ? 'PASS' : 'FAIL');
    
    // Test 2: Expression with parentheses
    console.log('Test 2:', isValidArithmeticExpression('(2+3)*4') === true ? 'PASS' : 'FAIL');
    
    // Test 3: Expression with nested parentheses
    console.log('Test 3:', isValidArithmeticExpression('((2+3)*(4-1))') === true ? 'PASS' : 'FAIL');
    
    // Test 4: Expression with decimal numbers
    console.log('Test 4:', isValidArithmeticExpression('3.14*2.5') === true ? 'PASS' : 'FAIL');
    
    // Test 5: Expression with spaces
    console.log('Test 5:', isValidArithmeticExpression('2 + 3 * 4') === true ? 'PASS' : 'FAIL');
    
    // Test 6: Empty expression
    console.log('Test 6:', isValidArithmeticExpression('') === false ? 'PASS' : 'FAIL');
    
    // Test 7: Unbalanced parentheses (opening)
    console.log('Test 7:', isValidArithmeticExpression('(2+3') === false ? 'PASS' : 'FAIL');
    
    // Test 8: Unbalanced parentheses (closing)
    console.log('Test 8:', isValidArithmeticExpression('2+3)') === false ? 'PASS' : 'FAIL');
    
    // Test 9: Consecutive operators
    console.log('Test 9:', isValidArithmeticExpression('2++3') === false ? 'PASS' : 'FAIL');
    
    // Test 10: Operator at beginning
    console.log('Test 10:', isValidArithmeticExpression('+2+3') === false ? 'PASS' : 'FAIL');
    
    // Test 11: Operator at end
    console.log('Test 11:', isValidArithmeticExpression('2+3+') === false ? 'PASS' : 'FAIL');
    
    // Test 12: Invalid characters
    console.log('Test 12:', isValidArithmeticExpression('2+3$5') === false ? 'PASS' : 'FAIL');
    
    // Test 13: Empty parentheses
    console.log('Test 13:', isValidArithmeticExpression('2+()') === false ? 'PASS' : 'FAIL');
    
    // Test 14: Operator after opening parenthesis
    console.log('Test 14:', isValidArithmeticExpression('(+2)') === false ? 'PASS' : 'FAIL');
    
    // Test 15: Operator before closing parenthesis
    console.log('Test 15:', isValidArithmeticExpression('(2+)') === false ? 'PASS' : 'FAIL');
}

// Run the tests
runTests();

