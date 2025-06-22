class MultiLevelQueue {
  constructor(levels = 3) {
    this.queues = Array(levels).fill().map(() => []);
    this.levels = levels;
  }
 enqueue(element, priority) {
    if (priority < 0 || priority >= this.levels) {
      console.error(`Invalid priority level: ${priority}. Must be between 0 and ${this.levels - 1}`);
      return false;
    }
    
    this.queues[priority].push(element);
    return true;
  }
 dequeue() {
    for (let i = 0; i < this.levels; i++) {
      if (this.queues[i].length > 0) {
        return this.queues[i].shift();
      }
    }
    
    return null;
  }
 dequeueFrom(priority) {
    if (priority < 0 || priority >= this.levels) {
      console.error(`Invalid priority level: ${priority}. Must be between 0 and ${this.levels - 1}`);
      return null;
    }
    
    if (this.queues[priority].length === 0) {
      return null;
    }
    
    return this.queues[priority].shift();
  }
 peek() {
    for (let i = 0; i < this.levels; i++) {
      if (this.queues[i].length > 0) {
        return this.queues[i][0];
      }
    }
    return null;
  }
 isEmpty() {
    return this.queues.every(queue => queue.length === 0);
  }

 size() {
    return this.queues.reduce((total, queue) => total + queue.length, 0);
  }

 sizeOfPriority(priority) {
    if (priority < 0 || priority >= this.levels) {
      console.error(`Invalid priority level: ${priority}. Must be between 0 and ${this.levels - 1}`);
      return -1;
    }
    return this.queues[priority].length;
  }
 toString() {
    let result = "";
    for (let i = 0; i < this.levels; i++) {
      result += `Priority ${i}: [${this.queues[i].join(', ')}]\n`;
    }
    return result;
  }
}

function demonstrateMultiLevelQueue() {
  const mlq = new MultiLevelQueue(3); // Create a queue with 3 priority levels
  
  console.log("Initial state:");
  console.log(mlq.toString());
  
  // Add elements with different priorities
  mlq.enqueue("Critical Task", 0);  // Highest priority
  mlq.enqueue("Normal Task 1", 1);
  mlq.enqueue("Normal Task 2", 1);
  mlq.enqueue("Low Priority Task 1", 2);
  mlq.enqueue("Low Priority Task 2", 2);
  mlq.enqueue("Low Priority Task 3", 2);
  
  console.log("After adding tasks:");
  console.log(mlq.toString());
  
  // Dequeue elements (should get highest priority first)
  console.log("Dequeuing elements in priority order:");
  while (!mlq.isEmpty()) {
    const element = mlq.dequeue();
    console.log(`Dequeued: ${element}`);
    console.log("Current state:");
    console.log(mlq.toString());
  }
  
  // Demonstrate dequeuing from specific priority levels
  console.log("\nDemonstrating dequeueFrom:");
  mlq.enqueue("Critical Task", 0);
  mlq.enqueue("Normal Task", 1);
  mlq.enqueue("Low Priority Task", 2);
  
  console.log("Current state:");
  console.log(mlq.toString());
  
  console.log("Dequeue from priority 1:");
  console.log(`Dequeued: ${mlq.dequeueFrom(1)}`);
  console.log("Current state:");
  console.log(mlq.toString());
}

demonstrateMultiLevelQueue();
