# Selection Sort

- Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

## Selection Sort Pseudocode

- Store the first element as the smallest value you've seen so far
- Compare this item to the next item in the array until you find a smaller number
- If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array
- If the "minimum" is not the value (index) you initially began with, swap the two values
- Repeat this with the next elemnt until the array is sorted

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

## Big O

- O(N<sup>2</sup>)
- There is one scenario where selection sort is better than bubble sort, in a situation where you want to minimize the number of swaps
- Bubble sort swaps with the next number, while selection sort swap after going through remainder of the array each time
