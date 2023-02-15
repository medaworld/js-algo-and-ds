# Searching Algorithms

## Linear Search

- Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want.
- JavaScript has search: indexOf, includes, find, findIndex
- Best case is O(1) and worst is O(N)

```
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}
```

## Binary Search

- Much faster form of search
- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
- Only works on sorted arrays
- Divide and Conquer
- Best case is O(1) and worst and average case O(logN)

```
function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== num && start <= end) {
    if (num < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === num ? middle : -1;
}
```

## Naive String Search

- A straightforward approach involves checking pairs of characters individually

```
function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}
```
