// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

function linearSearch(arr, val) {
  let index;
  for (let i = 0; i < arr.length; i++) {
    if (val == arr[i]) {
      return (index = i);
    } else {
      index = -1;
    }
  }
  return index;
}

// Provided solution
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));

// Binary Search Pseudocode
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.
// binarySearch([1,2,3,4,5],2) // 1
// binarySearch([1,2,3,4,5],3) // 2

function binarySearch(arr, num) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let current = arr[middle];
    if (current < num) min = middle + 1;
    else if (current > num) max = middle - 1;
    else return middle;
  }
  return -1;
}

// Provided solution
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

// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     7
//   )
// );

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

console.log(naiveSearch('lorie loled', 'lol'));
