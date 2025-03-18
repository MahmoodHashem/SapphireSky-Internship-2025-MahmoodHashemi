function postFixCalc(expression) {
    //create new stack
    let stack = []; 
    
    //loop through each character in provided expression
    for (let i = 0; i < expression.length; i++) {
        //store each character
        let token = expression[i];

        //if it's a number, push to stack
        //else pop right side and left side, perform operation and push to stack
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            let num1 = stack.pop();
            let num2 = stack.pop();
            //if right or left side is not available
            if (num2 === "UnderFlow" || num1 === "UnderFlow" ) {
                return "Can't perform postfix calculation";
            }
            switch (token) {
                case '+':
                    stack.push(num1 + num2);
                    break;
                case '-':
                    stack.push(num1 - num2);
                    break;
                case '*':
                    stack.push(num1 * num2);
                    break;
                case '/':
                    stack.push(num1 / num2);
                    break;
                case '%':
                    stack.push(num1 % num2);
                    break;
            }
        }

    };
   //return result of calculation
    return stack.pop();
}



// Test cases for postFixCalc and toPostfix functions
function runTests() {
    console.log("Running postfix calculation and conversion tests...");
    
    // PART 1: Testing postFixCalc function
    console.log("\nTesting postFixCalc function:");
    
    // Test 1: Basic addition
    console.log('Test 1:', postFixCalc('23+') === 5 ? 'PASS' : 'FAIL');
    
    // Test 2: Basic subtraction
    console.log('Test 2:', postFixCalc('23-') === -1 ? 'PASS' : 'FAIL');
    
    // Test 3: Basic multiplication
    console.log('Test 3:', postFixCalc('23*') === 6 ? 'PASS' : 'FAIL');
    
    // Test 4: Basic division
    console.log('Test 4:', postFixCalc('82/') === 4 ? 'PASS' : 'FAIL');
    
    // Test 5: Complex expression
    console.log('Test 5:', postFixCalc('23+4*') === 20 ? 'PASS' : 'FAIL');
    
    // Test 6: More complex expression
    console.log('Test 6:', postFixCalc('234+*') === 14 ? 'PASS' : 'FAIL');
    
    // Test 7: Expression with modulo
    console.log('Test 7:', postFixCalc('53%') === 2 ? 'PASS' : 'FAIL');
    
    // Test 8: Longer complex expression
    console.log('Test 8:', postFixCalc('523+*7+') === 32 ? 'PASS' : 'FAIL');
}

// Run the tests
runTests();

