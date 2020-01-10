// -9 -9 -9  1 1 1
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
//  0  0  8  6 6 0
//  0  0  0 -2 0 0
//  0  0  1  2 4 0
let arrary = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

function hourglassSum(arr, column = 0, row = 0, newArray = [], temp = 0) {
  if (row >= 4) return Math.max(...newArray);
  for (let i = 0; i < 3; i++) {
    temp = temp + arr[row][column + i];
  }
  for (let i = 0; i < 3; i++) {
    temp = temp + arr[row + 2][column + i];
  }
  temp = temp + arr[row + 1][column + 1];
  newArray.push(temp);
  temp = 0;
  if (column <= 2) {
    return hourglassSum(arr, column + 1, row, newArray, temp);
  }
  column = 0;
  temp = 0;
  return hourglassSum(arr, column, row + 1, newArray, temp);
}

hourglassSum(arrary);
