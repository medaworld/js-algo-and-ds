// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[lowest]) {
//         lowest = j;
//       }
//     }
//     if (i !== lowest) {
//       let temp = arr[i];
//       arr[i] = arr[lowest];
//       arr[lowest] = temp;
//     }
//   }
//   return arr;
// }

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

// 0 1
// 0 2
// 0 3
// 0 4
// 1 2
// 1 3
// 1 4
// 2 3
// 2 4
// 3 4

// [ 32, 24, 10, 19, 17 ]
// SWAP
// [ 10, 24, 32, 19, 17 ]
// [ 10, 24, 32, 19, 17 ]
// SWAP
// [ 10, 17, 32, 19, 24 ]
// [ 10, 17, 32, 19, 24 ]
// SWAP
// [ 10, 17, 19, 32, 24 ]
// [ 10, 17, 19, 32, 24 ]
// SWAP
// [ 10, 17, 19, 24, 32 ]
// [ 10, 17, 19, 24, 32 ]
// SWAP
// [ 10, 17, 19, 24, 32 ]
// [ 10, 17, 19, 24, 32 ]
console.log(selectionSort([32, 24, 10, 19, 17]));
