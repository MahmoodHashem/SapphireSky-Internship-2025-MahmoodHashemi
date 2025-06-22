
function infixToPostfix(infix) {
    if (!infix || infix.trim() === '') {
        return '';
    }
    
    
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '%': 2,
        '^': 3  
    };
    
    const stack = [];
    let postfix = '';
    
    for (let i = 0; i < infix.length; i++) {
        const char = infix[i];
        
    
        if (char === ' ') {
            continue;
        }
        
        
        if (isAlphanumeric(char)) {
            let token = char;
            while (i + 1 < infix.length && (isAlphanumeric(infix[i + 1]) || infix[i + 1] === '.')) {
                token += infix[++i];
            }
            postfix += token + ' ';
        }
        else if (char === '(') {
            stack.push(char);
        }
        else if (char === ')') {
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                postfix += stack.pop() + ' ';
            }
            
            if (stack.length > 0 && stack[stack.length - 1] === '(') {
                stack.pop();
            } else {
                return "Invalid Expression: Unbalanced parentheses";
            }
        }
        else if (char in precedence) {
            while (
                stack.length > 0 && 
                stack[stack.length - 1] !== '(' && 
                precedence[stack[stack.length - 1]] >= precedence[char]
            ) {
                postfix += stack.pop() + ' ';
            }
            stack.push(char);
        }
        else {
            return `Invalid Expression: Unknown character '${char}'`;
        }
    }
    
    while (stack.length > 0) {
        if (stack[stack.length - 1] === '(') {
            return "Invalid Expression: Unbalanced parentheses";
        }
        postfix += stack.pop() + ' ';
    }
    
    return postfix.trim();
}

function isAlphanumeric(char) {
    return (char >= '0' && char <= '9') || 
           (char >= 'a' && char <= 'z') || 
           (char >= 'A' && char <= 'Z');
}


function runTests() {
    console.log("Running infixToPostfix tests...");
    
    // Test 1: Simple expression
    console.log('Test 1:', infixToPostfix('a+b') === 'a b +' ? 'PASS' : 'FAIL');
    
    // Test 2: Expression with precedence
    console.log('Test 2:', infixToPostfix('a+b*c') === 'a b c * +' ? 'PASS' : 'FAIL');
    
    // Test 3: Expression with parentheses
    console.log('Test 3:', infixToPostfix('(a+b)*c') === 'a b + c *' ? 'PASS' : 'FAIL');
    
    // Test 4: Complex expression
    console.log('Test 4:', infixToPostfix('a+b*(c^d-e)^(f+g*h)-i') === 'a b c d ^ e - f g h * + ^ * + i -' ? 'PASS' : 'FAIL');
    
    // Test 5: Expression with numbers
    console.log('Test 5:', infixToPostfix('3+4*2/(1-5)^2') === '3 4 2 * 1 5 - 2 ^ / +' ? 'PASS' : 'FAIL');
    
    // Test 6: Expression with multi-digit numbers
    console.log('Test 6:', infixToPostfix('32+41*25') === '32 41 25 * +' ? 'PASS' : 'FAIL');
    
    // Test 7: Expression with decimal numbers
    console.log('Test 7:', infixToPostfix('3.14+2.5*6') === '3.14 2.5 6 * +' ? 'PASS' : 'FAIL');
    
    // Test 8: Expression with spaces
    console.log('Test 8:', infixToPostfix('a + b * c') === 'a b c * +' ? 'PASS' : 'FAIL');
    
    // Test 9: Empty expression
    console.log('Test 9:', infixToPostfix('') === '' ? 'PASS' : 'FAIL');
    
    // Test 10: Expression with unbalanced parentheses
    const result10 = infixToPostfix('(a+b');
    console.log('Test 10:', result10.includes('Invalid Expression') ? 'PASS' : 'FAIL');
}

// Run the tests
runTests();

