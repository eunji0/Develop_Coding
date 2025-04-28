//1463-1로 만들기
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((v) => v.trim());

// let n = +input[0];

// let dp = Array(n + 1).fill(0);

// for (let i = 2; i <= n; i++) {
//   dp[i] = dp[i - 1] + 1;

//   if (i % 2 === 0) {
//     dp[i] = Math.min(dp[i], dp[i / 2] + 1);
//   }
//   if (i % 3 === 0) {
//     dp[i] = Math.min(dp[i], dp[i / 3] + 1);
//   }
// }

// console.log(dp[n]);

//9095-1,2,3 더하기
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((v) => v.trim());

// let t = +input[0];

// for (let i = 1; i <= t; i++) {
//   let n = +input[i];

//   let dp = Array(n + 1).fill(0);

//   dp[0] = 1;
//   dp[1] = 1;
//   dp[2] = 2;

//   for (let j = 3; j <= n; j++) {
//     dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];
//   }

//   console.log(dp[n]);
// }

//1003-피보나치 함수
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.trim());

let t = +input[0];
let dp = Array(41)
  .fill()
  .map((v) => [0, 0]);
dp[0] = [1, 0];
dp[1] = [0, 1];

for (let i = 2; i <= 40; i++) {
  dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
  dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
}

for (let i = 1; i <= t; i++) {
  let n = +input[i];
  console.log(dp[n][0], dp[n][1]);
}
