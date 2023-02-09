# Big O Notation

## The need for something like Big O Notation

- To determine which implementation of a function is best.
- Useful to discuss trade-offs between different approaches.
- It helps to know when your code slows down or crashes, to find which parts of the code are inefficient.

## The Problem with Time

- Different machines will record different times.
- The same machine will record different times.
- For fast algorithms, speed measurements may not be precise enough.

## Counting Operations

Count the number of simple operations the computer has to perform.

## Big O

- Big O Notation is a way to formalize fuzzy counting.
- It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow.

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n<sup>2</sup>)
- f(n) could be constant (f(n) = 1)

## Simplifying Big O

- Constants don't matter
- O(2n + 10) can be simplified as O(n)
- O(500) can be O(1)

## Big O Shorthands

1. Arithmetic operations are constant
2. Variable assignments is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens in the loop

## Space Complexity

- Space complexity is how much additional memory we need to allocate in order to run the code in our algorithm.
- Most primitive (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O(n), where n is the length/key (for arrays and objects)

## Logarithms

- Logarithm is the inverse of exponent
- O(log n) is better than O(n)
- Searching algorithms have logarithmic time complexity.
- Efficient sorting algorithms involve logarithms.
- Recursion sometimes involves logarithmic space complexity.
