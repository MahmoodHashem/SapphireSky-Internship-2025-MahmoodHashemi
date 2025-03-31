
import ArrayQueue from "../easy/2_arrayQueue.js";

function mergeQueuesAlternately(queue1, queue2) {

  const mergedQueue = new ArrayQueue();
  
  while (!queue1.isEmpty() || !queue2.isEmpty()) {
    if (!queue1.isEmpty()) {
      mergedQueue.enqueue(queue1.dequeue());
    }
    
    if (!queue2.isEmpty()) {
      mergedQueue.enqueue(queue2.dequeue());
    }
  }
  
  return mergedQueue;
}

// Example usage:
function demonstrateMerging() {
  const queue1 = new ArrayQueue();
  const queue2 = new ArrayQueue();
  
  // Add elements to first queue
  queue1.enqueue('A');
  queue1.enqueue('B');
  queue1.enqueue('C');
  
  // Add elements to second queue
  queue2.enqueue(1);
  queue2.enqueue(2);
  queue2.enqueue(3);
  queue2.enqueue(4);
  queue2.enqueue(5);
  
  console.log("Queue 1:", queue1.toString());
  console.log("Queue 2:", queue2.toString());
  
  const mergedQueue = mergeQueuesAlternately(queue1, queue2);
  
  console.log("Merged Queue:", mergedQueue.toString());
  // Expected output: ['A', 1, 'B', 2, 'C', 3, 4, 5]
}

demonstrateMerging();
