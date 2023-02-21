# Binary Search Trees

![BinarySearchTree](/Images/binarySearchTree.png)

## What Is A Tree?

- A data structure that consists of nodes in a parent/child relationship
- A node can only point in a parent-child relationship, not sibling

## Tree Terminology

- Root - The top node in a tree
- Child - A node directly connected to another node when moving away from the Root
- Parent - The converse notion of a child
- Siblings - A group of nodes with the same parent

## Uses For Trees

- HTML DOM
- Network Routing
- Abstract Syntax Tree
- Artifical Intelligence
- Folders in Operating System
- Computer File Systems
- JSON

## Binary Trees

- Each node can have at most 2 children

## Binary Search Trees

- Every node to the left of a parent node is always less than the parent
- Every node to the right of a parent node is always greater than the parent
- Makes things easy to find

## The BinarySearchTree Class

```
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}
```

## Insert Pseudocode

- Create a new node
- Starting at the root
  - Check if there is a root, if not - the root now becomes that new node
  - If there is a root, check if the value of the new node is greater than or less than the value of the root
  - If it is greater
    - Check to see if there is a node to the right
      - If there is, move to that node and repeat these steps
      - If there is not, add that node as the right property
  - If it is less
    - Check to see if there is a node to the left
      - If there is, move to that node and repeat these steps
      - If there is not, add that node as the left property
- Return tree

```
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
```

## Find Pseudocode

- Starting at the roots
  - Check if there is a root, if not - we're done searching
  - If there is a root, check if the value of the newnode is the value we are looking for. If we found it, we're done
  - If not, check to see if the value is greater than or less than the value of the root
  - If it is greater
    - Check to see if there is a node to the right
      - If there is, move to that node and repeat these steps
      - If there is not, we're done searching
  - If it is less
    - Check to see if ther eis a node to the left
      - If there is, move to that node and repeat these steps
      - If there is not, we're done searching

```
  find(value) {
    if (this.root === null) return undefined;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
```

## Big O of Binary Search Trees

- Insertion - O(log n)
- Searching - O(log n)
- Not guaranteed as if we insert only numbers that are less (or more) than the previous parent, it would become O(N)
