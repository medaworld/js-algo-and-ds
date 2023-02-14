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
