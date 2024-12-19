//2217-로프
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let n = +input[0];

// let arr = input.slice(1).map(Number);

// arr.sort((a, b) => b - a);

// let max = 0;

// for (let i = 0; i < n; i++) {
//   max = Math.max(max, arr[i] * (i + 1));
// }

// console.log(max);

//2752-세수정렬
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// const arr = input[0].split(' ').map(Number);
// console.log(arr.sort((a, b) => a - b).join(' '));

//3273-두 수의 합
const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n');

let n = +input[0];
let arr = input[1].split(' ').map(Number);
let x = +input[2];

arr.sort((a, b) => a - b); // 배열 정렬

let left = 0;
let right = n - 1;
let count = 0;

while (left < right) {
  let sum = arr[left] + arr[right];

  if (sum === x) {
    left++;
    right--;
    count++;
  } else if (sum < x) {
    left++;
  } else {
    right--;
  }
}

console.log(count);
