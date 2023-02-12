# Searching Algorithms

## Linear Search

- Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want.
- JavaScript has search: indexOf, includes, find, findIndex
- Best case is O(1) and worst is O(N)

## Binary Search

- Much faster form of search
- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
- Only works on sorted arrays
- Divide and Conquer
- Best case is O(1) and worst and average case O(logN)

## Naive String Search

- A straightforward approach involves checking pairs of characters individually
