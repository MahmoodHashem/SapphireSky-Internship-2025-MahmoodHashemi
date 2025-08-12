/*
    Print Simulation

                   ┌───────────────┐
                   │  Print Jobs   │
                   └───────┬───────┘
                           │
                           ▼
                   ┌───────────────┐
                   │ Check Priority│
                   └───────┬───────┘
                           │
               ┌───────────┴───────────┐
               │                       │
               ▼                       ▼
      ┌─────────────────┐     ┌─────────────────┐
      │  High Priority  │     │ Normal Priority │ 
      └────────┬────────┘     └────────┬────────┘
               │                       │
               │                       │
               │       ┌───────────────┘
               │       │
               ▼       ▼
      ┌─────────────────────┐
      │   Printer Process   │
      └─────────────────────┘
*/

class PrintJob {
  constructor(name, pages, priority) {
    this.name = name;
    this.pages = pages;
    this.priority = priority;
    this.id = Math.floor(Math.random() * 1000);
  }

  toString() {
    const priorityNames = ["High", "Normal", "Low"];
    return `Job #${this.id}: "${this.name}" (${this.pages} pages, ${
      priorityNames[this.priority]
    } priority)`;
  }
}


class PrinterQueue {
  constructor() {
    this.highPriorityQueue = [];
    this.normalPriorityQueue = [];
    this.lowPriorityQueue = [];

    this.printing = false;
    this.jobsPrinted = 0;
  }

  addJob(job) {
    switch (job.priority) {
      case 0:
        this.highPriorityQueue.push(job);
        console.log(`Added to High priority queue: ${job.toString()}`);
        break;
      case 1:
        this.normalPriorityQueue.push(job);
        console.log(`Added to Normal priority queue: ${job.toString()}`);
        break;
      case 2:
        this.lowPriorityQueue.push(job);
        console.log(`Added to Low priority queue: ${job.toString()}`);
        break;
      default:
        console.error(`Invalid priority: ${job.priority}`);
        return false;
    }

    if (!this.printing) {
      this.processNextJob();
    }

    return true;
  }

  /**
   * When processing the next job:
   * The printer checks the high priority queue first
   * If that's empty, it checks the normal priority queue
   * If that's also empty, it checks the low priority queue
   * The selected job is removed from its queue and "printed"
   * After the simulated print time, it processes the next job
   */
  processNextJob() {
    if (this.printing) {
      return;
    }

    let nextJob = null;

    if (this.highPriorityQueue.length > 0) {
      nextJob = this.highPriorityQueue.shift();
    } else if (this.normalPriorityQueue.length > 0) {
      nextJob = this.normalPriorityQueue.shift();
    } else if (this.lowPriorityQueue.length > 0) {
      nextJob = this.lowPriorityQueue.shift();
    }

    if (nextJob) {
      this.printing = true;

      const printTime = nextJob.pages * 100; // milliseconds

      console.log(`Started printing: ${nextJob.toString()}`);

      setTimeout(() => {
        console.log(`Finished printing: ${nextJob.toString()}`);
        this.jobsPrinted++;
        this.printing = false;

        if (this.getTotalQueueSize() > 0) {
          this.processNextJob();
        } else {
          console.log("No more jobs in queue. Printer is idle.");
        }
      }, printTime);
    }
  }

  getTotalQueueSize() {
    return (
      this.highPriorityQueue.length +
      this.normalPriorityQueue.length +
      this.lowPriorityQueue.length
    );
  }

  displayStatus() {
    console.log("\n===== PRINTER QUEUE STATUS =====");
    console.log(`High Priority Jobs (${this.highPriorityQueue.length}):`);
    this.highPriorityQueue.forEach((job, i) =>
      console.log(`  ${i + 1}. ${job.toString()}`)
    );
    if (this.highPriorityQueue.length === 0) console.log("  (Empty)");

    console.log(`Normal Priority Jobs (${this.normalPriorityQueue.length}):`);
    this.normalPriorityQueue.forEach((job, i) =>
      console.log(`  ${i + 1}. ${job.toString()}`)
    );
    if (this.normalPriorityQueue.length === 0) console.log("  (Empty)");

    console.log(`Low Priority Jobs (${this.lowPriorityQueue.length}):`);
    this.lowPriorityQueue.forEach((job, i) =>
      console.log(`  ${i + 1}. ${job.toString()}`)
    );
    if (this.lowPriorityQueue.length === 0) console.log("  (Empty)");

    console.log(`Total Jobs in Queue: ${this.getTotalQueueSize()}`);
    console.log(`Jobs Printed: ${this.jobsPrinted}`);
    console.log("================================\n");
  }
}

function simplePrinterDemo() {
  console.log("Starting Printer Queue Simulation...\n");

  const printerQueue = new PrinterQueue();

  printerQueue.addJob(new PrintJob("Quarterly Report", 5, 0));
  printerQueue.addJob(new PrintJob("Meeting Notes", 2, 1));
  printerQueue.addJob(new PrintJob("Product Catalog", 3, 2)); 

  printerQueue.displayStatus();

  setTimeout(() => {
    console.log("\nAdding more jobs...");
    printerQueue.addJob(new PrintJob("Contract", 1, 0)); 
    printerQueue.addJob(new PrintJob("Newsletter", 2, 1)); 

    setTimeout(() => printerQueue.displayStatus(), 500);
  }, 2000);

  setTimeout(() => {
    console.log("\nAdding final job...");
    printerQueue.addJob(new PrintJob("Research Paper", 4, 2)); // Low priority

    setTimeout(() => {
      printerQueue.displayStatus();
      console.log("Simulation complete.");
    }, 15000);
  }, 5000);
}

simplePrinterDemo();
