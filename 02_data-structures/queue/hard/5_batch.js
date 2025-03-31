
/**
 * Batch processing is a technique where tasks are collected into groups (batches) 
 * and processed together, rather than individually.
 * Explained in detail in this video:
 * https://youtu.be/tNWetmyztII
 */


class Task {
  constructor(id, data) {
    this.id = id;
    this.data = data;
  }
}

class BatchProcessor {
  constructor(batchSize, processFunction) {
    this.queue = [];
    this.batchSize = batchSize;
    this.processFunction = processFunction;
    this.isProcessing = false;
    this.processed = 0;
  }

  addTask(task) {
    this.queue.push(task);
    console.log(
      `Task ${task.id} added to queue. Queue size: ${this.queue.length}`
    );

    if (!this.isProcessing) {
      this.processBatch();
    }
  }

  addTasks(tasks) {
    tasks.forEach((task) => this.addTask(task));
  }

  processBatch() {
    this.isProcessing = true;

    const batch = this.queue.splice(0, this.batchSize);

    if (batch.length === 0) {
      console.log("Queue empty. Processing complete.");
      this.isProcessing = false;
      return;
    }

    console.log(`Processing batch of ${batch.length} tasks...`);

    const processPromises = batch.map((task) => {
      return Promise.resolve()
        .then(() => this.processFunction(task))
        .then(() => {
          console.log(`Task ${task.id} processed successfully`);
          this.processed++;
        })
        .catch((error) => {
          console.error(`Error processing task ${task.id}:`, error);
        });
    });

    Promise.all(processPromises).then(() => {
      console.log(`Batch complete. Processed ${this.processed} tasks so far.`);

      if (this.queue.length > 0) {
        this.processBatch();
      } else {
        console.log("All tasks processed.");
        this.isProcessing = false;
      }
    });
  }

  getStatus() {
    return {
      queueSize: this.queue.length,
      isProcessing: this.isProcessing,
      processedCount: this.processed,
    };
  }
}









/**
 * Example usage
 */
function demoSimpleBatchProcessor() {
  // Create a simple processing function
  const processTask = (task) => {
    // Simulate processing time
    return new Promise((resolve) => {
      const processingTime = Math.random() * 500 + 100; // 100-600ms

      setTimeout(() => {
        console.log(`Processing task ${task.id} with data: ${task.data}`);

        resolve();
      }, processingTime);
    });
  };

  // Create a batch processor with batch size of 3
  const batchProcessor = new BatchProcessor(3, processTask);

  // Create some sample tasks
  const tasks = [
    new Task("A1", "First data"),
    new Task("A2", "Second data"),
    new Task("A3", "Third data"),
    new Task("B1", "Fourth data"),
    new Task("B2", "Fifth data"),
    new Task("B3", "Sixth data"),
    new Task("C1", "Seventh data"),
  ];

  // Add tasks to the processor
  batchProcessor.addTasks(tasks);

  // Add more tasks after a delay
  setTimeout(() => {
    console.log("\nAdding more tasks...");
    batchProcessor.addTasks([
      new Task("D1", "Eighth data"),
      new Task("D2", "Ninth data"),
    ]);
  }, 2000);
}

demoSimpleBatchProcessor();
