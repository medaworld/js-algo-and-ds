// Frequency Counter
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// sameFrequency(182, 281) // true

function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  const frequencyCount = {};
  for (let val of strNum1) {
    frequencyCount[val] = (frequencyCount[val] || 0) + 1;
  }
  for (let val of strNum2) {
    if (!frequencyCount[val]) {
      return false;
    } else {
      frequencyCount[val] -= 1;
    }
  }
  return true;
}

// console.log(sameFrequency(182, 2831));

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// areThereDuplicates(1,2,3) // false

function areThereDuplicates(...args) {
  let frequencyCounter = {};
  for (let i = 0; i < args.length; i++) {
    if (frequencyCounter[args[i]]) {
      return true;
    } else {
      frequencyCounter[args[i]] = 1;
    }
  }
  return false;
}

function areThereDuplicates(...args) {
  args.sort();
  let start = 0;
  let end = 1;
  while (end < args.length) {
    if (args[start] === args[end]) {
      return true;
    }
    start++;
    end++;
  }
  return false;
}

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
// console.log(areThereDuplicates('a', 'b', 'c'));
// console.log(areThereDuplicates(1, 2, 2));

// Multiple Pointers
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
// averagePair([1,2,3],2.5) // true

function averagePair(arr, num) {
  let j = arr.length - 1;
  for (let i = 0; i < j; i++) {
    if ((arr[i] + arr[j]) / 2 === num) {
      return true;
    } else if ((arr[i] + arr[j]) / 2 > num) {
      j--;
    }
  }
  return false;
}

// Provided solution
function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}

// console.log(averagePair([], 4.1));

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
// isSubsequence('hello', 'hello world'); // true

function isSubsequence(str1, str2) {
  if (str1.length > str2) return false;
  let str1Pointer = 0;

  for (let char of str2) {
    if (str1[str1Pointer] === char) {
      str1Pointer++;
    }
    if (str1Pointer === str1.length - 1) {
      return true;
    }
  }
  return false;
}

// Provided solution
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// console.log(isSubsequence('sing', 'stng'));

// Sliding Window
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5

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

// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));

// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
