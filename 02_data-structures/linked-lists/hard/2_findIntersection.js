class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function findIntersection(headA, headB) {
  if (!headA || !headB) return null;

  let pointerA = headA;
  let pointerB = headB;

  while (pointerA !== pointerB) {
    pointerA = pointerA ? pointerA.next : headB;
    pointerB = pointerB ? pointerB.next : headA;
  }

  return pointerA;
}


// Test cases for findIntersection function

function runTests() {
    console.log("Running findIntersection tests...");
    
    // Test 1: Basic intersection
    const test1 = createIntersectingLists([1, 2, 3, 4], [9, 8], 3);
    const result1 = findIntersection(test1.listA, test1.listB);
    console.log('Test 1:', result1 === test1.intersectionNode ? 'PASS' : 'FAIL');
    
    // Test 2: Intersection at the beginning
    const test2 = createIntersectingLists([1, 2, 3], [4, 5], 1);
    const result2 = findIntersection(test2.listA, test2.listB);
    console.log('Test 2:', result2 === test2.intersectionNode ? 'PASS' : 'FAIL');
    
    // Test 3: No intersection
    const listA3 = createLinkedList([1, 2, 3]);
    const listB3 = createLinkedList([4, 5, 6]);
    const result3 = findIntersection(listA3, listB3);
    console.log('Test 3:', result3 === null ? 'PASS' : 'FAIL');
    
    // Test 4: One empty list
    const listA4 = createLinkedList([1, 2, 3]);
    const result4 = findIntersection(listA4, null);
    console.log('Test 4:', result4 === null ? 'PASS' : 'FAIL');
    
    // Test 5: Both empty lists
    const result5 = findIntersection(null, null);
    console.log('Test 5:', result5 === null ? 'PASS' : 'FAIL');
    
    // Test 6: Lists of different lengths
    const test6 = createIntersectingLists([1, 2, 3, 4, 5, 6], [7, 8], 4);
    const result6 = findIntersection(test6.listA, test6.listB);
    console.log('Test 6:', result6 === test6.intersectionNode ? 'PASS' : 'FAIL');
}

// Helper function to create a linked list from an array of values
function createLinkedList(values) {
    if (!values || values.length === 0) return null;
    
    const head = new Node(values[0]);
    let current = head;
    
    for (let i = 1; i < values.length; i++) {
        current.next = new Node(values[i]);
        current = current.next;
    }
    
    return head;
}

// Helper function to create two lists that intersect
function createIntersectingLists(valuesA, valuesB, intersectionIndex) {
    if (!valuesA || valuesA.length === 0 || intersectionIndex >= valuesA.length) {
        return { listA: null, listB: null, intersectionNode: null };
    }
    
    // Create first list
    const listA = createLinkedList(valuesA);
    
    // Find the intersection node in list A
    let intersectionNode = listA;
    for (let i = 0; i < intersectionIndex; i++) {
        intersectionNode = intersectionNode.next;
    }
    
    // Create second list up to the intersection point
    let listB = null;
    if (valuesB && valuesB.length > 0) {
        listB = createLinkedList(valuesB);
        
        // Find the tail of list B
        let tailB = listB;
        while (tailB.next) {
            tailB = tailB.next;
        }
        
        // Connect list B to the intersection point
        tailB.next = intersectionNode;
    } else {
        listB = intersectionNode;
    }
    
    return { listA, listB, intersectionNode };
}

// Helper function to print a linked list (for debugging)
function printList(head) {
    const values = [];
    let current = head;
    while (current !== null) {
        values.push(current.value);
        current = current.next;
    }
    return values.join(' -> ');
}

// Run the tests
runTests();

