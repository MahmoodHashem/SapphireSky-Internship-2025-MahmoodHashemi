export default class ArrayQueue {

  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
    return this.items.length;
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  toString() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.join(" <- ");
  }
}

function runTests() {
  console.log("Running ArrayQueue tests...");

  // Test 1: Enqueue operation
  const queue1 = new ArrayQueue();
  console.log("Test 1:", queue1.enqueue(10) === 1 ? "PASS" : "FAIL");

  // Test 2: Multiple enqueue operations
  const queue2 = new ArrayQueue();
  queue2.enqueue(10);
  queue2.enqueue(20);
  queue2.enqueue(30);
  console.log("Test 2:", queue2.size() === 3 ? "PASS" : "FAIL");

  // Test 3: Dequeue operation
  const queue3 = new ArrayQueue();
  queue3.enqueue(10);
  queue3.enqueue(20);
  console.log("Test 3:", queue3.dequeue() === 10 ? "PASS" : "FAIL");

  // Test 4: FIFO order
  const queue4 = new ArrayQueue();
  queue4.enqueue(10);
  queue4.enqueue(20);
  queue4.enqueue(30);
  const result4 =
    queue4.dequeue() === 10 &&
    queue4.dequeue() === 20 &&
    queue4.dequeue() === 30;
  console.log("Test 4:", result4 ? "PASS" : "FAIL");

  // Test 5: Peek operation
  const queue5 = new ArrayQueue();
  queue5.enqueue(10);
  queue5.enqueue(20);
  console.log("Test 5:", queue5.peek() === 10 ? "PASS" : "FAIL");

  // Test 6: isEmpty check
  const queue6 = new ArrayQueue();
  console.log("Test 6:", queue6.isEmpty() === true ? "PASS" : "FAIL");

  // Test 7: isEmpty after enqueue and dequeue
  const queue7 = new ArrayQueue();
  queue7.enqueue(10);
  queue7.dequeue();
  console.log("Test 7:", queue7.isEmpty() === true ? "PASS" : "FAIL");

  // Test 8: Dequeue on empty queue
  const queue8 = new ArrayQueue();
  console.log("Test 8:", queue8.dequeue() === null ? "PASS" : "FAIL");

  // Test 9: Clear operation
  const queue9 = new ArrayQueue();
  queue9.enqueue(10);
  queue9.enqueue(20);
  queue9.clear();
  console.log("Test 9:", queue9.isEmpty() === true ? "PASS" : "FAIL");

  // Test 10: toString representation
  const queue10 = new ArrayQueue();
  queue10.enqueue(10);
  queue10.enqueue(20);
  queue10.enqueue(30);
  console.log(
    "Test 10:",
    queue10.toString() === "10 <- 20 <- 30" ? "PASS" : "FAIL"
  );
}

// Run the tests
runTests();
