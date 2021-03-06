// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  var sumsFromLeft = A.map((i) => 0);
  var sumsFromRight = A.map((i) => 0);

  //a fun opportunity to use a double condition and indexes in a for loop
  for (
    var indexLeft = 1, indexRight = A.length - 2;
    indexRight >= 2;
    indexLeft++, indexRight--
  ) {
    //verify with 0, minimum max sum is 0 anyway
    sumsFromLeft[indexLeft] = Math.max(
      0,
      sumsFromLeft[indexLeft - 1] + A[indexLeft]
    );
    sumsFromRight[indexRight] = Math.max(
      0,
      sumsFromRight[indexRight + 1] + A[indexRight]
    );
  }
  //initialize max with the first double slice sum
  var max = sumsFromLeft[0] + sumsFromRight[2];

  for (var i = 2; i < A.length - 1; i++) {
    max = Math.max(max, sumsFromLeft[i - 1] + sumsFromRight[i + 1]);
  }

  return max;
}
console.log(solution([3, 2, 6, -1, 4, 5, -1, 2])); //17
// console.log(solution([5, 5, 5])); //0
// console.log(solution([5, 17, 0, 3])); //17

function solution2(A) {
  const N = A.length;

  if (N === 3) return 0;

  let headSum = A.map((i) => 0);
  let tailSum = A.map((i) => 0);

  for (let i = 1; i < N - 1; i++) {
    headSum[i] = Math.max(0, headSum[i - 1] + A[i]);
  }

  for (let i = N - 2; i >= 1; i--) {
    tailSum[i] = Math.max(0, tailSum[i + 1] + A[i]);
  }

  let maxSum = 0;

  for (let i = 1; i < N - 1; i++) {
    maxSum = Math.max(maxSum, headSum[i - 1] + tailSum[i + 1]);
  }

  return maxSum;
}
