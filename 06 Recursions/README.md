# Recursions

## Why Use Recursion?

- Recursion is a process (or function) that calls itself
- We will see it with more complex data structures
- It's sometimes a cleaner alternative to iteration

## The Call Stack

- Any time a function is invoked, it is placed on the top of the call stack
- When JavaScript sees the return keyword or when the function ends, the compiler will remove
- When we write recursive functions, we keep pushing new functions onto the call stack

## How Recursive Functions Work

- Invoke the same function with a different input until you reach your base case
- Base case is when the recursion ends
- Each time you call the function, you want to input a different input

## Common Pitfalls

- Node Base Case
- Forgetting to return or returning the wrong thing
- Stack overflow

```
function sumRange(num) {
  if (num === 1) return 1; // Base Case
  return num + sumRange(num - 1);
}
```

## Helper Method

```
function collectOdds(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}
```

## Pure Recursion

- For arrays, use methods liek slice, the spread operator, and concat that make copies of arrays so you do not mutate them
- Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
- To make copies of objects use Object.assign, or the spread opperator
