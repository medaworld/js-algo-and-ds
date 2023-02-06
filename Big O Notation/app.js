function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpto2(n) {
  return (n * (n + 1)) / 2;
}

// console.log(addUpTo(6), addUpto2(6));

// These are two working solutions. Which one is better?
// Better would be faster, less memory-intense, and more readable.

let t1 = performance.now();
// addUpTo(1000000000); // 1.086 seconds
addUpto2(1000000000); // 0.0000183 seconds
let t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);

// This shows how addUpTo2 is more time efficient

// Counting Operations
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i; // As n increases, more operations are included
  }
  return total;
}

function addUpto2(n) {
  return (n * (n + 1)) / 2; // This is 3 simple operations
}

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// console.log(printAllPairs(5));
// As n grows, the runtime grows at n^2 and exponentially

function logAtLeast5(n) {
  for (leti = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

function logAtMost5(n) {
  for (leti = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

// logAtLeast5 is O(n) because as n grows the operation grows
// logAtMost5 is O(1) because it stays static at 5

// Space complexity
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
// O(1) space because the variable total takes up a constant space no matter the size of the array

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
// O(n) space because as array increases the variable newArr inceases
