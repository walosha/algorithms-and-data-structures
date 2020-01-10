// Sample Input

// 5 4
// 1 2 3 4 5
// Sample Output

// 5 1 2 3 4
// Explanation

// When we perform  left rotations, the array undergoes the following sequence of changes:

// Complete the rotLeft function below.
function rotLeft(a, d) {
  return [...a, a.slice(0, d)];
}
