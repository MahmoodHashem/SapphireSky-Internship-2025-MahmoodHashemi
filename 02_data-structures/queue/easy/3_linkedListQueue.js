
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export default class LinkedListQueue {
    constructor() {
        this.first = null;  
        this.last = null;         this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        
        if (this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        
        return ++this.size;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        
        const value = this.first.value;
        
        if (this.first === this.last) {
            this.last = null;
        }
        
        this.first = this.first.next;
        this.size--;
        
        return value;
    }

   peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.first.value;
    }

         isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
   clear() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

  toString() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        
        let result = [];
        let current = this.first;
        
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        
        return result.join(' <- ');
    }
}


const queue = new LinkedListQueue();

queue.enqueue(10); 
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.toString()); // Output: 1 <- 2 <- 3


function runTests() {
    console.log("Running LinkedListQueue tests...");
    
    // Test 1: Enqueue operation
    const queue1 = new LinkedListQueue();
    console.log('Test 1:', queue1.enqueue(10) === 1 ? 'PASS' : 'FAIL');
    
    // Test 2: Multiple enqueue operations
    const queue2 = new LinkedListQueue();
    queue2.enqueue(10);
    queue2.enqueue(20);
    queue2.enqueue(30);
    console.log('Test 2:', queue2.getSize() === 3 ? 'PASS' : 'FAIL');
    
    // Test 3: Dequeue operation
    const queue3 = new LinkedListQueue();
    queue3.enqueue(10);
    queue3.enqueue(20);
    console.log('Test 3:', queue3.dequeue() === 10 ? 'PASS' : 'FAIL');
    
    // Test 4: FIFO order
    const queue4 = new LinkedListQueue();
    queue4.enqueue(10);
    queue4.enqueue(20);
    queue4.enqueue(30);
    const result4 = queue4.dequeue() === 10 && queue4.dequeue() === 20 && queue4.dequeue() === 30;
    console.log('Test 4:', result4 ? 'PASS' : 'FAIL');
    
    // Test 5: Peek operation
    const queue5 = new LinkedListQueue();
    queue5.enqueue(10);
    queue5.enqueue(20);
    console.log('Test 5:', queue5.peek() === 10 ? 'PASS' : 'FAIL');
    
    // Test 6: isEmpty check
    const queue6 = new LinkedListQueue();
    console.log('Test 6:', queue6.isEmpty() === true ? 'PASS' : 'FAIL');
    
    // Test 7: isEmpty after enqueue and dequeue
    const queue7 = new LinkedListQueue();
    queue7.enqueue(10);
    queue7.dequeue();
    console.log('Test 7:', queue7.isEmpty() === true ? 'PASS' : 'FAIL');
    
    // Test 8: Dequeue on empty queue
    const queue8 = new LinkedListQueue();
    console.log('Test 8:', queue8.dequeue() === null ? 'PASS' : 'FAIL');
    
    // Test 9: Clear operation
    const queue9 = new LinkedListQueue();
    queue9.enqueue(10);
    queue9.enqueue(20);
    queue9.clear();
    console.log('Test 9:', queue9.isEmpty() === true ? 'PASS' : 'FAIL');
    
    // Test 10: toString representation
    const queue10 = new LinkedListQueue();
    queue10.enqueue(10);
    queue10.enqueue(20);
    queue10.enqueue(30);
    console.log('Test 10:', queue10.toString() === "10 <- 20 <- 30" ? 'PASS' : 'FAIL');
}

// Run the tests
runTests();
