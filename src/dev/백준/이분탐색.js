//1920-수찾기
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs
//   .readFileSync(filePath)
//   .toString()
//   .split('\n')
//   .map((v) => v.trim());

// let n = input[0];
// let nArr = new Set(input[1].split(' ').map(Number));
// let m = input[2];
// let mArr = input[3].split(' ').map(Number);

// mArr.forEach((v) => {
//   if (nArr.has(v)) {
//     console.log(1);
//   } else {
//     console.log(0);
//   }
// });

//10816-숫자카드2
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs
//   .readFileSync(filePath)
//   .toString()
//   .split('\n')
//   .map((v) => v.trim());

// let n = +input[0];
// let nArr = input[1].split(' ').map(Number);
// let m = +input[2];
// let mArr = input[3].split(' ').map(Number);

// let nMap = new Map();

// nArr.forEach((v) => {
//   nMap.set(v, (nMap.get(v) || 0) + 1);
// });

// let result = [];
// mArr.forEach((v) => {
//   result.push(nMap.get(v) || 0);
// });

// console.log(result.join(' '));

//2805-나무 자르기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((v) => v.trim());

let [n, m] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let min = 0;
let max = Math.max(...arr);
let bestH = 0;
let mid = 0;

while (min <= max) {
  mid = Math.floor((min + max) / 2);
  let sum = 0;

  arr.map((v) => {
    if (v - mid > 0) {
      sum += v - mid;
    }
  });

  if (sum >= m) {
    if (mid > bestH) bestH = mid;
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(bestH);
