// reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(string) {
  if (string.length === 1) return string;
  let lastLetter = string.slice(string.length - 1);
  let remaining = string.slice(0, string.length - 1);
  return lastLetter + reverse(remaining);
}

// Solution
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

// console.log(reverse('hello'));

// isPalindrome
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
function isPalindrome(string) {
  if (string.length === 0) return true;
  let lastLetter = string.slice(-1);
  let remaining = string.slice(1, -1);
  if (string[0] === lastLetter) return isPalindrome(remaining);
  return false;
}

// Solution
function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

// console.log(isPalindrome('racecar'));

// someRecursive
// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}

// flatten
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
function flatten(array) {
  let newArr = [];
  for (let val of array) {
    if (Array.isArray(val)) {
      newArr = newArr.concat(flatten(val));
    } else {
      newArr.push(val);
    }
  }
  return newArr;
}

// console.log(flatten([1, [2, [3, 4], [[5]]]]));

// capitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
function capitalizeFirst(array) {
  let newArr = [];
  if (typeof array === 'string') {
    return array.slice(0, 1).toUpperCase();
  }
  for (let val of array) {
    let firstLetter = capitalizeFirst(val);
    newArr.push(firstLetter + val.substring(1));
  }
  return newArr;
}

// console.log(capitalizeFirst(['wow', 'lets', 'go']));

// nestedEvenSum
// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

// nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10
function nestedEvenSum(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    }
    if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

// console.log(nestedEvenSum(obj1));

// capitalizeWords
// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
function capitalizeWords(array) {
  // Returns the first word in array in all caps
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  // Run recursion slicing last word in array
  let res = capitalizeWords(array.slice(0, -1));
  // Pushes last word in all capps to res
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}

// console.log(capitalizeWords(['wow', 'crazy', 'cool']));

// stringifyNumbers
// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!
let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

function stringifyNumbers(obj) {
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// console.log(stringifyNumbers(obj));

// collectStrings
// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
const objectSample = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};
// ["foo", "bar", "baz"])

function collectStrings(object) {
  let newArr = [];
  for (let key in object) {
    if (typeof object[key] === 'string') {
      newArr.push(object[key]);
    } else if (typeof object[key] === 'object') {
      newArr = newArr.concat(collectStrings(object[key]));
    }
  }
  return newArr;
}

console.log(collectStrings(objectSample));
