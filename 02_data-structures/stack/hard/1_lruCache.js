class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.cache = {}; 
        this.head = null; 
        this.tail = null; 
    }

   
    get(key) {
        if (!this.cache[key]) {
            return -1; 
        }
        
        
        const value = this.cache[key].value;
        
      
        if (this.cache[key] !== this.head) {
            this.remove(key);
            this.put(key, value);
        }
        
        return value;
    }

   
    put(key, value) {
        if (this.cache[key]) {
            this.remove(key);
        } 
        else if (this.size >= this.capacity) {
            const tailKey = this.tail.key;
            this.remove(tailKey);
        }
        
        const newNode = new Node(key, value);
        
        if (this.head) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        
        this.cache[key] = newNode;
        this.size++;
    }

    remove(key) {
        const node = this.cache[key];
        
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        else if (node === this.head) {
            this.head = this.head.next;
        }
        else {
            let current = this.head;
            while (current && current.next !== node) {
                current = current.next;
            }
            
            if (current) {
                if (node === this.tail) {
                    this.tail = current;
                }
                current.next = node.next;
            }
        }
        
        delete this.cache[key];
        this.size--;
    }

    printCache() {
        const result = [];
        let current = this.head;
        
        while (current) {
            result.push(`${current.key}:${current.value}`);
            current = current.next;
        }
        
        return result.join(' -> ');
    }
}

// Create a new LRU cache with capacity 3
const lruCache = new LRUCache(3);

// Add some items
lruCache.put(1, "one");
lruCache.put(2, "two");
lruCache.put(3, "three");

console.log("Initial cache:");
console.log(lruCache.printCache()); // Expected: 3:three -> 2:two -> 1:one

// Access an item (makes it most recently used)
console.log("Get key 1:", lruCache.get(1));
console.log("After accessing key 1:");
console.log(lruCache.printCache()); // Expected: 1:one -> 3:three -> 2:two

// Add a new item when at capacity (should evict least recently used)
lruCache.put(4, "four");
console.log("After adding key 4 (should evict key 2):");
console.log(lruCache.printCache()); // Expected: 4:four -> 1:one -> 3:three

// Try to access evicted item
console.log("Get key 2 (should be -1):", lruCache.get(2));

// Update an existing item
lruCache.put(3, "THREE");
console.log("After updating key 3:");
console.log(lruCache.printCache()); // Expected: 3:THREE -> 4:four -> 1:one

