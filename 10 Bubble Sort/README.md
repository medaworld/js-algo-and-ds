# Bubble Sorting

## What is sorting?

- Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.
- Sorting is an incredibly common task, so it's good to know how it works
- There are many ways to sort, and different techniques have their own advantages and disadvantages

## Built-in JavaScript Sorting

- The default sort order is according to string Unicode code points, therefore it's converted to a string and sorted based on Unicode
- You can tell JavaScript how to sort, as it accepts an optional comparator function
- The comparator looks at pairs of elements (a and b), determines their sort order based on the return value

```
function numberCompare(num1, num2) {
    return num1 - num2;
}

[6, 4, 15, 10].sort(numberCompare);
// [4, 6, 10, 15]
```

## Bubble Sort

- A sorting algorithm where the largest values bubble up to the top
- Start looping from with a variable called i the end of the array towards the beginning
- Start an inner loop with a variable called j from the beginning until i-1
- If arr[j] is greater than arr[j+1], swap those two values
- Return the sorted array
- A good alternative if array is nearly sorted

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
