//2839-설탕 배달
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let count = 0;

// while (n >= 0) {
//   if (n % 5 === 0) {
//     count += Math.floor(n / 5);
//     console.log(count);
//     return;
//   }

//   n -= 3;
//   count++;
// }

// console.log(-1);

//11399-ATM
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let arr = input[1].split(' ').map(Number);

// arr = arr.map((v, i) => (v = [i + 1, v]));

// arr.sort((a, b) => a[1] - b[1]);

// let count = 0;
// let result = [];

// arr.map((v) => result.push((count += v[1])));
// console.log(result.reduce((a, c) => a + c, 0));

//11047-동전 0
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let [n, k] = input[0].split(' ').map(Number);
// let coins = input.slice(1).map(Number).reverse(); //내림차순으로 정렬하는게 핵심

// let count = 0;
// for (let coin of coins) {
//   if (k >= coin) {
//     count += Math.floor(k / coin);
//     k %= coin;
//   }
// }

// console.log(count);

//1931-회의실 배정
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let arr = input.slice(1).map((v) => v.split(' ').map(Number));

// arr.sort((a, b) => {
//   if (a[1] === b[1]) return a[0] - b[0];
//   return a[1] - b[1];
// });

// let endNow = 0;
// let count = 0;

// for (let [start, end] of arr) {
//   if (start >= endNow) {
//     endNow = end;
//     count++;
//   }
// }

// console.log(count);

//1541-잃어버린 괄호
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let div = input[0].split('-');
let front = div[0]
  .split('+')
  .map(Number)
  .reduce((a, c) => a + c, 0);
let end = div.slice(1).map((v) =>
  v
    .split('+')
    .map(Number)
    .reduce((a, c) => a + c, 0),
);

console.log(front - end.reduce((a, c) => a + c, 0));
