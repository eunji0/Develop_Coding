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
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let div = input[0].split('-');
// let front = div[0]
//   .split('+')
//   .map(Number)
//   .reduce((a, c) => a + c, 0);
// let end = div.slice(1).map((v) =>
//   v
//     .split('+')
//     .map(Number)
//     .reduce((a, c) => a + c, 0),
// );

// console.log(front - end.reduce((a, c) => a + c, 0));

//1026-보물
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let aArr = input[1]
//   .split(' ')
//   .map(Number)
//   .sort((a, b) => a - b);
// let bArr = input[2]
//   .split(' ')
//   .map(Number)
//   .sort((a, b) => b - a);

// let sum = 0;

// for (let i = 0; i < n; i++) {
//   sum += aArr[i] * bArr[i];
// }

// console.log(sum);

//2720-세탁소 사장 동혁
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let arr = input.slice(1).map(Number);
// const prices = [25, 10, 5, 1];

// arr.forEach((v) => {
//   let result = [0, 0, 0, 0];

//   for (let i = 0; i < 4; i++) {
//     result[i] = Math.floor(v / prices[i]);
//     v %= prices[i];
//   }

//   console.log(result.join(' '));
// });

//5585-거스름돈
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let prices = [500, 100, 50, 10, 5, 1];

// let num = 1000 - n;

// let count = 0;

// for (let i = 0; i < 6; i++) {
//   if (num >= prices[i]) {
//     count += Math.floor(num / prices[i]);
//     num %= prices[i];
//   }
// }

// console.log(count);

//2217-로프
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let arr = input
//   .slice(1)
//   .map(Number)
//   .sort((a, b) => b - a);

// let max = 0;
// for (let i = 0; i < n; i++) {
//   max = Math.max(max, (i + 1) * arr[i]);
// }

// console.log(max);

//1789-수들의 합
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let s = +input[0];
// let sum = 0;
// let n = 0;

// while (sum <= s) {
//   n++;
//   sum += n;
// }

// console.log(n - 1);

//13305-주유소
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let roads = input[1].split(' ').map(Number);
// let prices = input[2].split(' ').map(Number);

// let nowNum = prices[0];
// let sum = nowNum * roads[0];

// for (let i = 1; i < n - 1; i++) {
//   if (nowNum > prices[i]) {
//     nowNum = prices[i];
//   }
//   sum += nowNum * roads[i];
// }

// console.log(sum);
