# Javascript Algorithms and Data Structures

## Big O Notation

- Used to analyze the performance of an algorithm.
- Big O Notation can give us a high level understanding of the time or space complexity of an algorithm.
- Big O Notation doesn't care about precision, only about general trends.
- The time or space complexity depends only on the algorithm, not the hardware used.

## Arrays and Objects

- If being inserted or removed at the end, it is O(1)
- If the index/keys have to shift because of an insertion or removal, it is O(N)

## Problem Solving Approach

- Understand the Problem
- Explore Concrete Examples
- Break It Down
- Solve/Simplify
- Look Back and Refactor

## Problem Solving Patterns

- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking

## Recursions

- Recursion is a process (or function) that calls itself
- It's sometimes a cleaner alternative to iteration
- Invoke the same function with a different input until you reach your base case

## Searching Algorithms

- Linear Search - Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want.
- Binary Search - Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
- Naive String Search - A straightforward approach involves checking pairs of characters individually

## Bubble Sort

- A sorting algorithm where the largest values bubble up to the top
- Start looping from with a variable called i the end of the array towards the beginning
- Start an inner loop with a variable called j from the beginning until i-1
- If arr[j] is greater than arr[j+1], swap those two values

```
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      noSwaps = true;
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
```

## Selection Sort

- Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position
- Store the first element as the smallest value you've seen so far
- Compare this item to the next item in the array until you find a smaller number
- If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array

```
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      swap(arr, i, lowest);
    }
  }
  return arr;
}
```

## Insertion Sort

- Builds up the sort by gradually creating a larger left half which is always sorted
- Start by picking the second element in the array
- Now compare the second element with the one before it and swap if necessary
- Continue to the next element and if its in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
  -Repeat until the array is sorted

```
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
```

## Comparing Bubble, Selection, and Insertion Sort

| Algorithm      | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| :------------- | :--------------------- | :------------------------ | :---------------------- | :--------------- |
| Bubble Sort    | O(n)                   | O(n<sup>2</sup>)          | O(n<sup>2</sup>)        | O(1)             |
| Insertion Sort | O(n)                   | O(n<sup>2</sup>)          | O(n<sup>2</sup>)        | O(1)             |
| Selection Sort | O(n<sup>2</sup>)       | O(n<sup>2</sup>)          | O(n<sup>2</sup>)        | O(1)             |

## Merge Sort

- It's a combination of two things - merging and sorting
- Exploits the fact that arrays of 0 or 1 element are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

```
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
```

```
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
```

## Quick Sort

- Like merge sort, exploits the fact that arrays of 0 or 1 elements are always sorted
- Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array

```
function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start of the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}
```

```
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
```

## Radix Sort

- Radix sort is a special sorting algorithm that works on lists of numbers
- It exploits the fact that information about the size of a number is encoded in the number of digits (more digits means a bigger number)
- In order to implement radix sort, it's helpful to build a few helper functions first:
- getDigit(num, place) - Returns the digit in num at the given place value // getDigit(12345, 1); // 4

```
function getDigit(num, i) {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}
```

- digitCount(num) - Returns the number of digits in num // digitCount(223) // 3

```
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
```

- mostDigits(nums) - Given an array of numbers, retuns the number of digits in the alrgest numbers in the list // mostDigits([1234, 56, 7]) // 4

```
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
```

```
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
```

## Data Structures Introduction

- Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data
- Different data structures excel at different things. Some are highly specialized, while others (like arrays) are more generally used
- The more time you spend as a developer, the more likely you'll need to use one of these data structures
- A blueprint for creating objects with pre-defined properties and methods
- We're going to implement data structures as classes

```
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    static enrollStudents(...students) {
        // maybe send an email here
    }
}

let firstStudent = new Student("Meda", "World")
firstStudent.fullName() // "Your full name is Meda World"
Student.enrollStudents() // sends email
```

## Singly Linked Lists

- Excellent alternative to arrays when insertion and deletion at the beginning are frequently required
- Arrays contain a built in index wheras Linked Lists do not
- The idea of a list data structure that consists of nodes is the foundation for other data structures like Stacks and Queues

## Doubly Linked Lists

- Doubly Linked Lists are almost identical to Singly Linked Lists except there is an additional pointer to previous nodes
- Better than Singly Linked Lists for finding nodes and can be done in half the time
- However, they do take up more memory considering the extra pointer

## Stacks & Queues

- Stacks are a LIFO data structure where the last value in is always the first one out
- Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember pages you have visited and go back/forward) and much more
- Stacks are not a built in data structure in JavaScript, but are relatively simple to implement
- Queues are a FIFO data structure, all elements are first in first out
- Queues are useful for processing tasks and are foundational for more complex data structures
- Both stacks and queues are for simplicity of insertion and removal at O(1), other structures are better for searching and access

## Binary Search Trees

- A data structure that consists of nodes in a parent/child relationship
- Every node to the left of a parent node is always less than the parent
- Every node to the right of a parent node is always greater than the parent
- Makes things easy to find

## Tree Traversal

- Breadth-first Search - Top to Bottom; Left to Right Each Layer
- Depth-first Search
  - Depth-First Search PreOrder - Top to Bottom; Left to Right Each Branch
  - Depth-First Search PostOrder - Bottom to Top; Left to Right Each Layer
  - Depth-First Search InOrder - Bottom to Top; Left to Right Each Branch

## Binary Heaps

- Binary Heaps are very useful data structures for sorting, and implementing other data structures like priority queues
- Binary Heaps are either MaxBinaryHeaps or MinBinaryHeaps with parents either being smaller or larger than their children
- With just a little bit of math, we can represent heaps using arrays
