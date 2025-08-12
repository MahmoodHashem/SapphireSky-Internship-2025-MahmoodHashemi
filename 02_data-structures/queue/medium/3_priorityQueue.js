/**
 * A priority queue is a specialized queue data structure where:
 * Each element has an associated priority
 * Elements with higher priority are dequeued before elements with lower priority
 * If elements have the same priority, they are served according to their order in the queue (FIFO)
 */

class PriorityQueue {
  constructor() {
    this.items = [];
  }
  
  enqueue(element, priority) {
    const queueElement = { element, priority };
    let added = false;
    
    for (let i = 0; i < this.items.length; i++) {
      if (queueElement.priority > this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }
    
    if (!added) {
      this.items.push(queueElement);
    }
  }
  
  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift().element;
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
  
  front() {
    if (this.isEmpty()) return null;
    return this.items[0].element;
  }
}
