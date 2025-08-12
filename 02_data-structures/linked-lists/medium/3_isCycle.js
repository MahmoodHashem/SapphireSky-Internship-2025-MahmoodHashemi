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
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  isCycle() {

    // Floyd's Cycle Detection Algorithm (Tortoise and Hare Algorithm)
    // This algorithm uses two pointers, a slow pointer and a fast pointer,
    // to traverse the linked list. The slow pointer moves one step at a time,
    // while the fast pointer moves two steps at a time. If there's a cycle in
    // the linked list, the fast pointer will eventually catch up to the slow pointer,
    // and they will meet at the same node. If there's no cycle, the fast pointer will
    // reach the end of the list first.

    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return true;
      }
    }
    return false;
  }
}

// Test cases for LinkedList isCycle method

function runTests() {
  console.log("Running LinkedList cycle detection tests...");

  // Test 1: No cycle
  const list1 = new LinkedList(1);
  list1.append(2);
  list1.append(3);
  console.log("Test 1:", list1.isCycle() === false ? "PASS" : "FAIL");

  // Test 2: Simple cycle (tail points to head)
  const list2 = new LinkedList(1);
  list2.append(2);
  list2.append(3);
  // Create cycle by pointing tail to head
  list2.tail.next = list2.head;
  console.log("Test 2:", list2.isCycle() === true ? "PASS" : "FAIL");

  // Test 3: Cycle in the middle
  const list3 = new LinkedList(1);
  list3.append(2);
  list3.append(3);
  list3.append(4);
  list3.append(5);
  // Create cycle by pointing node 5 to node 2
  let secondNode = list3.head.next;
  list3.tail.next = secondNode;
  console.log("Test 3:", list3.isCycle() === true ? "PASS" : "FAIL");

  // Test 4: Single node with no cycle
  const list4 = new LinkedList(1);
  console.log("Test 4:", list4.isCycle() === false ? "PASS" : "FAIL");

  // Test 5: Single node with self-cycle
  const list5 = new LinkedList(1);
  list5.head.next = list5.head;
  console.log("Test 5:", list5.isCycle() === true ? "PASS" : "FAIL");

  // Test 6: Empty list (edge case)
  const list6 = new LinkedList(1);
  list6.head = null;
  list6.tail = null;
  console.log("Test 6:", list6.isCycle() === false ? "PASS" : "FAIL");
}



runTests();
