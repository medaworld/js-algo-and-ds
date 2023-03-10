# Radix Sort

![RadixSort](/Images/radixSort.gif)

- Radix sort is a special sorting algorithm that works on lists of numbers
- It never makes comparison between elements
- It exploits the fact that information about the size of a number is encoded in the number of digits (more digits means a bigger number)

## Radix Sort Helpers

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

## Radix Sort Pseudocode

- Define a function that accepts list of numbers
- Figure out how many digits the largest number has
- Loop from k=0 up to this largest number of digits
- For each iteration of the loop:
  - Create buckets for each digit (0 to 9)
  - Place each number in the corresponding bucket based on its kth digit
- Replace our existing array with values in our buckets, starting with 0 and going up to 9
- Return list at the end

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

## Big O

| Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| :--------------------- | :------------------------ | :---------------------- | :--------------- |
| O(nk)                  | O(nk)                     | O(nk)                   | O(n+k)           |

- n - length of array
- k - number of digits (average)
