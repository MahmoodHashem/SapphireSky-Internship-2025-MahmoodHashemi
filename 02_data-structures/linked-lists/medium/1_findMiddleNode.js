class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  findMiddleNode() {
    // The idea is that if the fast pointer goes as twice as quickly as the slow pointer,
    //  when the fast pointer reaches the end of the list, the slow pointer will be at
    //  the middle of the list.

    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
}

// Test cases for LinkedList findMiddleNode method

function runTests() {
  console.log("Running LinkedList findMiddleNode tests...");

  // Test 1: Odd number of nodes
  const list1 = new LinkedList(1);
  list1.append(2);
  list1.append(3);
  list1.append(4);
  list1.append(5);
  const result1 = list1.findMiddleNode();
  console.log("Test 1:", result1.value === 3 ? "PASS" : "FAIL");

  // Test 2: Even number of nodes (should return second middle node)
  const list2 = new LinkedList(1);
  list2.append(2);
  list2.append(3);
  list2.append(4);
  const result2 = list2.findMiddleNode();
  console.log("Test 2:", result2.value === 3 ? "PASS" : "FAIL");

  // Test 3: Single node
  const list3 = new LinkedList(42);
  const result3 = list3.findMiddleNode();
  console.log("Test 3:", result3.value === 42 ? "PASS" : "FAIL");

  // Test 4: Two nodes
  const list4 = new LinkedList(1);
  list4.append(2);
  const result4 = list4.findMiddleNode();
  console.log("Test 4:", result4.value === 2 ? "PASS" : "FAIL");

  // Test 5: Large list with odd number of nodes
  const list5 = createLargeList(9); // 1->2->3->4->5->6->7->8->9
  const result5 = list5.findMiddleNode();
  console.log("Test 5:", result5.value === 5 ? "PASS" : "FAIL");

  // Test 6: Large list with even number of nodes
  const list6 = createLargeList(8); // 1->2->3->4->5->6->7->8
  const result6 = list6.findMiddleNode();
  console.log("Test 6:", result6.value === 5 ? "PASS" : "FAIL");
}

// Helper function to create a linked list with n nodes (values 1 to n)
function createLargeList(n) {
  if (n <= 0) return null;

  const list = new LinkedList(1);
  for (let i = 2; i <= n; i++) {
    list.append(i);
  }

  return list;
}

// Run the tests
runTests();
