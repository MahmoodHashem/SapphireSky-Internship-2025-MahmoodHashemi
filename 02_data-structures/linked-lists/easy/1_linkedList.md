### **🔹 What is a Linked List?**

A **Linked List** is a data structure where elements (nodes) are **linked together** using pointers. Each **node** contains:

1. **Data** (the actual value)
2. **A reference (pointer) to the next node**

#### **Example of a Singly Linked List**

[10 | 🡆] → [20 | 🡆] → [30 | 🡆] → [40 | null]

* Each box represents a  **node** .
* The **arrow (`🡆`)** is the pointer to the  **next node** .
* The last node has `null`, meaning  **end of the list** .

---

### **🔹 How is a Linked List Different from an Array?**

| Feature                      | **Array**🟢                           | **Linked List**🔵                                 |
| ---------------------------- | ------------------------------------------- | ------------------------------------------------------- |
| **Memory Allocation**  | **Contiguous (fixed size)**           | **Dynamic (grows/shrinks)**                       |
| **Access Time**        | **O(1) (direct indexing:`arr[i]`)** | **O(n) (need to traverse)**                       |
| **Insertion/Deletion** | **O(n) (shift elements)**             | **O(1) (adjust pointers)**                        |
| **Memory Efficiency**  | **No extra memory**                   | **Extra memory for pointers**                     |
| **Best Use Case**      | **When fast access is needed**        | **When frequent insertions/deletions are needed** |

---

### **🔹 When to Use a Linked List Over an Array?**

* **When insertions/deletions are frequent** → No shifting required.
* **When memory is fragmented** → Linked lists can be stored in **non-contiguous** locations.
* **When unknown data size** → No need to define a fixed size like an array.
