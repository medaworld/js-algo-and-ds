let stack1 = [];

stack1.push('google');
stack1.push('instagram');
stack1.push('youtube');

// console.log(stack1.pop()); // youtube

let stack2 = [];

stack2.unshift('google');
stack2.unshift('instagram');
stack2.unshift('youtube');

// console.log(stack2.shift()); // youtube
// stack2 requires to re-index each element

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
}

let stack = new Stack();
stack.push('second');
// stack.push('pop');

// console.log(stack.pop());

let queue = [];

queue.push('first');
queue.push('second');
queue.push('third');
// ['first', 'second', 'third']
queue.shift(); // first
queue.shift(); // second
queue.shift(); // third

queue.unshift('first');
queue.unshift('second');
queue.unshift('third');
// ['third', 'second', 'first']
queue.pop(); // first
queue.pop(); // second
queue.pop(); // third

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
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
}

const q = new Queue();

q.enqueue('first');
q.enqueue('second');

console.log(q.dequeue());
