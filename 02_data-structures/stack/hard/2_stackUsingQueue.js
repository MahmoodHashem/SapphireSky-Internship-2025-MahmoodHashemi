class StackUsingQueue {
    constructor() {
        this.queue = [];
        this.size = 0;
    }

    push(value) {
        this.queue.push(value);
        this.size++;
        
        for (let i = 0; i < this.size - 1; i++) {
            this.queue.push(this.queue.shift());
        }
        
        return this.size;
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        
        this.size--;
        return this.queue.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        
        return this.queue[0];
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    printStack() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        
        return this.queue.join(' -> ');
    }
}

function runTests() {
    console.log("Running StackUsingQueue tests...");
    
    // Test 1: Push operation
    const stack1 = new StackUsingQueue();
    stack1.push(10);
    stack1.push(20);
    console.log('Test 1:', stack1.getSize() === 2 ? 'PASS' : 'FAIL');
    
    // Test 2: Pop operation
    const stack2 = new StackUsingQueue();
    stack2.push(10);
    stack2.push(20);
    console.log('Test 2:', stack2.pop() === 20 ? 'PASS' : 'FAIL');
    
    // Test 3: LIFO order
    const stack3 = new StackUsingQueue();
    stack3.push(10);
    stack3.push(20);
    stack3.push(30);
    const result3 = stack3.pop() === 30 && stack3.pop() === 20 && stack3.pop() === 10;
    console.log('Test 3:', result3 ? 'PASS' : 'FAIL');
    
    // Test 4: Peek operation
    const stack4 = new StackUsingQueue();
    stack4.push(10);
    stack4.push(20);
    console.log('Test 4:', stack4.peek() === 20 ? 'PASS' : 'FAIL');
    
    // Test 5: Empty check
    const stack5 = new StackUsingQueue();
    console.log('Test 5:', stack5.isEmpty() === true ? 'PASS' : 'FAIL');
    
    // Test 6: Pop on empty stack
    const stack6 = new StackUsingQueue();
    console.log('Test 6:', stack6.pop() === null ? 'PASS' : 'FAIL');
    
    // Test 7: Peek on empty stack
    const stack7 = new StackUsingQueue();
    console.log('Test 7:', stack7.peek() === null ? 'PASS' : 'FAIL');
    
    // Test 8: Stack after multiple operations
    const stack8 = new StackUsingQueue();
    stack8.push(5);
    stack8.push(10);
    stack8.pop();
    stack8.push(15);
    console.log('Test 8:', stack8.peek() === 15 ? 'PASS' : 'FAIL');
    
    // Test 9: Print stack
    const stack9 = new StackUsingQueue();
    stack9.push(10);
    stack9.push(20);
    stack9.push(30);
    console.log('Test 9:', stack9.printStack() === "30 -> 20 -> 10" ? 'PASS' : 'FAIL');
    
    // Test 10: Empty stack after popping all elements
    const stack10 = new StackUsingQueue();
    stack10.push(10);
    stack10.pop();
    console.log('Test 10:', stack10.isEmpty() === true ? 'PASS' : 'FAIL');
}

// Run the tests
runTests();

