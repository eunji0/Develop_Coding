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
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs
//   .readFileSync(filePath)
//   .toString()
//   .split('\n')
//   .map((v) => v.trim());

// let [n, m] = input[0].split(' ').map(Number);
// let arr = input[1].split(' ').map(Number);

// let min = 0;
// let max = Math.max(...arr);
// let bestH = 0;
// let mid = 0;

// while (min <= max) {
//   mid = Math.floor((min + max) / 2);
//   let sum = 0;

//   arr.map((v) => {
//     if (v - mid > 0) {
//       sum += v - mid;
//     }
//   });

//   if (sum >= m) {
//     if (mid > bestH) bestH = mid;
//     min = mid + 1;
//   } else {
//     max = mid - 1;
//   }
// }

// console.log(bestH);

//1654-랜선자르기
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs
//   .readFileSync(filePath)
//   .toString()
//   .split('\n')
//   .map((v) => v.trim());

// let [k, n] = input[0].split(' ').map(Number);
// let arr = input.slice(1).map(Number);

// let min = 1;
// let max = Math.max(...arr);
// let result = 0;

// while (min <= max) {
//   let mid = Math.floor((min + max) / 2);
//   let sum = arr.reduce((a, c) => a + Math.floor(c / mid), 0);

//   if (sum >= n) {
//     result = mid;
//     min = mid + 1;
//   } else {
//     max = mid - 1;
//   }
// }

// console.log(result);

//10815-숫자카드
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs
//   .readFileSync(filePath)
//   .toString()
//   .split('\n')
//   .map((v) => v.trim());

// let n = +input[0];
// let nArr = input[1]
//   .split(' ')
//   .map(Number)
//   .sort((a, b) => a - b);
// let m = +input[2];
// let mArr = input[3].split(' ').map(Number);

// const checkArr = (target) => {
//   let left = 0;
//   let right = nArr.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (nArr[mid] === target) {
//       return 1;
//     } else if (nArr[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return 0;
// };

// let result = mArr.map((v) => checkArr(v));

// console.log(result.join(' '));

//2110-공유기 설치
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

let start = 1;
let end = arr[arr.length - 1];

while (start <= end) {
  let mid = Math.floor((start + end) / 2);

  let count = 1;
  let prev = arr[0];
  for (let cur of arr) {
    if (cur - prev < mid) continue;
    prev = cur;
    count += 1;
  }

  if (count < m) end = mid - 1;
  else start = mid + 1;
}

console.log(end);
