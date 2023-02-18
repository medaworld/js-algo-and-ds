function numberCompare(num1, num2) {
  return num1 - num2;
}

[6, 4, 15, 10].sort(numberCompare);

// console.log([6, 4, 15, 10].sort(numberCompare));

function lengthCompare(str1, str2) {
  return str1.length - str2.length;
}

// console.log(['Steele', 'Colt', 'Algorithms'].sort(lengthCompare));

function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      noSwaps = true;
      console.log(arr);
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

console.log(bubbleSort([37, 45, 29, 8, -3]));
