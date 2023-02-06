function add(num1, num2) {
  return num1 + num2;
}

// Write a function which takes in a string and returns counts of each character in the string.

charCount('aaaa'); // {a: 4}
charCount('hello'); // {h: 1, e: 1, l: 2, o: 1}

('My phone number is 111');

// Does it count spaces and numbers? Uppercase?

charCount(''); // What if it's empty

function charCount(str) {
  // do something
  // return an object with keys that are lowercase alphanumeric in the string
}

// Write steps
function charCount(str) {
  // make object to return at end
  // loop over string, for each character
  // if the char is alphanumeric AND is a key in object, add one to count
  // if the char is alphanumeric AND not in object, add it and set value to 1
  // if the char is something else, ignore
  // return object at end
}

function charCount(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

function charCount(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] ? obj[char]++ : (obj[char] = 1);
    }
  }
  return obj;
}

function charCount(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (isAlphaNumeric(char)) {
      obj[char] ? obj[char]++ : (obj[char] = 1);
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

// console.log('Z'.charCodeAt(0));
console.log(charCount('hello Whats Up man!!!'));
