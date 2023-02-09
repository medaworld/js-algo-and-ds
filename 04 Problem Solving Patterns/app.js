function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2); // the indexOf makes it a nested loop as it is looping over an array that is within the loop of an array
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
// This is the naive approach

// Refactored

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // two separate loops is better than a nested loop
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
// This is O(N) compared to O(N^2) in the previous example

// Anagrams
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function anagram(str1, str2) {
  let str1Lower = str1.toLowerCase();
  let str2Lower = str2.toLowerCase();
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (let val of str1Lower) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of str2Lower) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!key in frequencyCounter2) {
      return false;
    }
  }
  return true;
}

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero thne it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

// console.log(validAnagram('Cools', 'loosc'));

// Multiple Pointers Pattern
// Write a function called sumZero which accepts a sorted array of integers. The fucntion should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
// sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and count the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
// countUniqueValues([1,1,1,1,1,1,2]) // 2

function countUniqueValues(arr) {
  let i = 0;
  let j = 1;
  if (arr.length) {
    while (j < arr.length) {
      if (arr[i] === arr[j]) {
        j++;
      } else {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  } else {
    return 0;
  }
}

function countUniqueValues(arr) {
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));

// Sliding Window
// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
// maxSubarraySum([1,2,5,2,8,1,5], 2) // 10 because 2 + 8 are consecutive numbers with the highest sum

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// Divide and Conquer
// Given a sorted array of integers, write a function called search, that accepts a value and return the index where the value passed to the function is located. If the value is not found, return -1
// search([1,2,3,4,5,6], 4) // 3

function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];
    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
