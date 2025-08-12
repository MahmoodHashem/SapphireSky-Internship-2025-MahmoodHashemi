

import LinkedListQueue from "../easy/3_linkedListQueue.js";

function reverseQueue(queue) {

    
    const stack = [];
    
    while (!queue.isEmpty()) {
        stack.push(queue.dequeue());
    }
    
    while (stack.length > 0) {
        queue.enqueue(stack.pop());
    }
    
    return queue;
}




function runTests() {
    console.log("Running reverseQueue tests...");
    
    // Test 1: Reverse an empty queue
    const queue1 = new LinkedListQueue();
    reverseQueue(queue1);
    console.log('Test 1:', queue1.isEmpty() === true ? 'PASS' : 'FAIL');
    
    // Test 2: Reverse a queue with one element
    const queue2 = new LinkedListQueue();
    queue2.enqueue(10);
    reverseQueue(queue2);
    console.log('Test 2:', queue2.peek() === 10 ? 'PASS' : 'FAIL');
    
    // Test 3: Reverse a queue with multiple elements
    const queue3 = new LinkedListQueue();
    queue3.enqueue(10);
    queue3.enqueue(20);
    queue3.enqueue(30);
    reverseQueue(queue3);
    const result3 = queue3.dequeue() === 30 && 
                   queue3.dequeue() === 20 && 
                   queue3.dequeue() === 10;
    console.log('Test 3:', result3 ? 'PASS' : 'FAIL');
    
    // Test 4: Verify the queue is properly reversed
    const queue4 = new LinkedListQueue();
    queue4.enqueue('first');
    queue4.enqueue('second');
    queue4.enqueue('third');
    queue4.enqueue('fourth');
    reverseQueue(queue4);
    console.log('Test 4:', queue4.toString() === "fourth <- third <- second <- first" ? 'PASS' : 'FAIL');
    

}

runTests();
