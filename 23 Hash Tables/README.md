# Hash Tables

- Hash tables are used to store key-value pairs
- They are like arrays, but the keys are not ordered
- Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values
- To implement a hash table, we'll be using an array
- We need a way to convert keys into valid array indices. A function that performs this task is called a hash function

## What Makes For A Good Hash?

- Fast
- Uniformly Distributes Values
- Deterministic

## Prime Numbers

- The prime number in the hash is helpful in spreading out the keys more uniformly
- It's also helpful if the array that you're putting values into has a prime length

## Dealing with Collisions

- Even with a large array and a great hash function, collisions are inevitable
- There are many strategies for dealing with collisions, but we'll focus on two:
  - Separate Chaining
    - With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. array or linked list)
  - Linear Probing
    - With linear probing, when we find a collision, we search through the array to find the next empty slot

## HashTable Class

```
class HashTable {
  constructor(size = 15) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
}
```

## Set Pseudocode

- Accepts a key and a value
- Hashes the key
- Stores the key-value pair in the hash table array via separate chaining

```
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
```

## Get Pseudocode

- Accepts a key
- Hashes the key
- Retrieves the key-value pair in the hash table
- If the key isn't found, returns undefined

```
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
```

## Keys

- Loops through the hash table array and returns an array of keys in the table

```
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
```

## Values

- Loops through the hash table array and returns an array of values in the table

```
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
```

## Big O of Hash Tables

- Insert: O(1)
- Deletion: O(1)
- Access: O(1)
