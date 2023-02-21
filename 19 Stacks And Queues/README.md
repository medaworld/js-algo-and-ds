# Stacks And Queues

## What Is A Stack?

- A LIFO data structure - last element added to the stack will be the first element removed from the stack

## Where Stacks Are Used

- Managing function invocations
- Undo / Redo
- Routing (the history object) is treated like a stack

## Creating A Stack With Array

- You can push and pop or unshift and shift
- Push and pop is the better option, because it doesn't require re-indexing the array

## Stack Class

```
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}
```

## Stack Push Pseudocode

- The function should accept a value
- Create a new node with that value
- If there are no nodes in the stack, set the first and last property to be the newly created node
- If there is at least one node, create a variable that stores the current first property on the stack
- Reset the first property to be the newly created node
- Set the next property on the node to be the previously created variable
- Increment the size of the stack by 1

```
  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
```

## Stack Pop Pseudocode

- If there are no nodes in the stack, return null
- Create a temporary variable to store the first property on the stack
- If there is only 1 node, set the first and last property to be null
- If there is more than one node, set the first property to be the next property on the current first
- Decrement the size by 1
- Return the value of the node removed

```
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
```

## Big O of Stacks

- Insertion - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(N)

## What Is A Queue?

- A FIFO data structure - first in first out

## Where Queues Are Used

- Background tasks
- Uploading resources
- Printing processing

## Creating A Queue With Array

- You can push and shift or unshift and pop
- There is no way around avoiding re-indexing using an array, so it is better to create a Queue class if performance is important

## Queue Class

```
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}
```

## Enqueue Pseudocode

- This function accepts some value
- Create a new node using that value passed to the function
- If there are no nodes in the queue, set this node to be the first and last property of the queue
- Otherwise, set the next property on the current last to be that node, and then set the alst property of the queue to be that node
- Increment the size of the queue by 1

```
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
```

## Dequeue Pseudocode

- If there is no first property, just return null
- Store the first property in a variable
- See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
- If there is more than 1 node, set the first property to be the next proeprty of first
- Decrement the size by 1
- Return the value of the node dequeued

```
  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
```

## Big O of Queues

- Insertion - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(N)
