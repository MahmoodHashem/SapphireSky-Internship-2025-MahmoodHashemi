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
    this.tail = newNode;
    this.length = 1;
  }


  append(value){
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  detectCycleStart() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) break;
    }

    if (!fast || !fast.next) return null;

    fast = this.head;
    while (fast !== slow) {
      fast = fast.next;
      slow = slow.next;
    }

    return slow;
  }
}



// Test cases for LinkedList detectCycleStart method

function runTests() {
  console.log("Running LinkedList detectCycleStart tests...");
  
  // Test 1: No cycle
  const list1 = new LinkedList(1);
  list1.append(2);
  list1.append(3);
  list1.append(4);
  const result1 = list1.detectCycleStart();
  console.log('Test 1:', result1 === null ? 'PASS' : 'FAIL');
  
  // Test 2: Cycle at the beginning
  const list2 = new LinkedList(1);
  list2.append(2);
  list2.append(3);
  list2.append(4);
  // Create cycle by pointing last node to head
  createCycle(list2, 0);
  const result2 = list2.detectCycleStart();
  console.log('Test 2:', result2 === list2.head ? 'PASS' : 'FAIL');
  
  // Test 3: Cycle in the middle
  const list3 = new LinkedList(1);
  list3.append(2);
  list3.append(3);
  list3.append(4);
  list3.append(5);
  // Create cycle by pointing last node to the third node (value 3)
  const cycleNode3 = createCycle(list3, 2);
  const result3 = list3.detectCycleStart();
  console.log('Test 3:', result3 === cycleNode3 ? 'PASS' : 'FAIL');
  
  // Test 4: Single node with self-cycle
  const list4 = new LinkedList(1);
  // Create self-cycle
  list4.head.next = list4.head;
  const result4 = list4.detectCycleStart();
  console.log('Test 4:', result4 === list4.head ? 'PASS' : 'FAIL');
  
  // Test 5: Empty list (edge case)
  const list5 = new LinkedList(1);
  list5.head = null;
  list5.tail = null;
  const result5 = list5.detectCycleStart();
  console.log('Test 5:', result5 === null ? 'PASS' : 'FAIL');
  
  // Test 6: Cycle at the end (last node points to second-to-last)
  const list6 = new LinkedList(1);
  list6.append(2);
  list6.append(3);
  list6.append(4);
  list6.append(5);
  // Create cycle by pointing last node to the fourth node (value 4)
  const cycleNode6 = createCycle(list6, 3);
  const result6 = list6.detectCycleStart();
  console.log('Test 6:', result6 === cycleNode6 ? 'PASS' : 'FAIL');
}

// Helper function to create a cycle in a linked list
// Returns the node where the cycle starts
function createCycle(list, nodeIndex) {
  if (!list.head) return null;
  
  // Find the node at the specified index
  let cycleNode = list.head;
  for (let i = 0; i < nodeIndex && cycleNode.next; i++) {
      cycleNode = cycleNode.next;
  }
  
  // Find the last node
  let lastNode = list.head;
  while (lastNode.next) {
      lastNode = lastNode.next;
  }
  
  // Create the cycle
  lastNode.next = cycleNode;
  
  return cycleNode;
}


// Run the tests
runTests();

