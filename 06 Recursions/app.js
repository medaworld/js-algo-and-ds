function countDown(num) {
  // Base Case
  if (num <= 0) {
    console.log('All Done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// Iterative approach
function countDown(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log('All Done!');
}

// countDown(5);

function sumRange(num) {
  if (num === 1) return 1; // Base Case
  return num + sumRange(num - 1);
}

// console.log(sumRange(3));
// return 3 + sumRange(3 - 1)
// return 2 + sumRange(2 - 1)
// return 1
// return 2 + 1
// return 3 + 3 // 6

// Iterative way
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(4));

// Helper Method Recursion

function outer(input) {
  var outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }
  helper(input);

  return outerScopedVariable;
}

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

// Pure Recursion
function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log(collectOddValues([1, 2, 3, 4]));
