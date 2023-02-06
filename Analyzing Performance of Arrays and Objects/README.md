# Analyzing Performance of Arrays and Objects

## The Big O of Objects

- Insertion O(1)
- Removal O(1)
- Searching O(N)
- Access O(1)

## Big O of Object Methods

- Object.keys O(N)
- Object.values O(N)
- Object.entries O(N)
- hasOwnProperty O(1)

## The Big O of Arrays

- Insertion - it depends where it is being inserted, at the end it is O(1), in the beginning it will re-index the array.
- Removal - it depends where it is being removed
- Searching O(N)
- Access O(1)

## Big O of Array Methods

- push O(1)
- pop O(1)
- shift O(N)
- unshift O(N)
- concat O(N)
- slice O(N)
- splice O(N)
- sort O(N \* log N)
- forEach/map/filter/reduce O(N)
