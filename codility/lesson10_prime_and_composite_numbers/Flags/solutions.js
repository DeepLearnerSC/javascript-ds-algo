// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Detected time complexity: O(N)
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length <= 2) return 0;
  let peaks = [];
  let size = 0;
  for (let i = 1; i < A.length - 1; ++i) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peaks[size] = i;
      ++size;
    }
  }

  if (size <= 2) return size;

  let maxFlag = parseInt(Math.sqrt(peaks[size - 1] - peaks[0]) + 1);

  for (let i = maxFlag; i >= 2; --i) {
    let count = 1;
    let curPos = peaks[0];
    for (let j = 1; j < size; ++j) {
      if (curPos + i <= peaks[j]) {
        curPos = peaks[j];
        ++count;
      }
    }
    if (count >= i) return i;
  }

  return 2;
}
console.log(solution([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2])); // 1,3,5,10
