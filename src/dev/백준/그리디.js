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
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input[0];
let arr = input[1].split(' ').map(Number);

arr = arr.map((v, i) => (v = [i + 1, v]));

arr.sort((a, b) => a[1] - b[1]);

let count = 0;
let result = [];

arr.map((v) => result.push((count += v[1])));
console.log(result.reduce((a, c) => a + c, 0));
