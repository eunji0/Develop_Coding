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
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((v) => v.trim());

// let t = +input[0];
// let dp = Array(41)
//   .fill()
//   .map((v) => [0, 0]);
// dp[0] = [1, 0];
// dp[1] = [0, 1];

// for (let i = 2; i <= 40; i++) {
//   dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
//   dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
// }

// for (let i = 1; i <= t; i++) {
//   let n = +input[i];
//   console.log(dp[n][0], dp[n][1]);
// }

//11726-2×n 타일링
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((v) => v.trim());

// let n = +input[0];
// let dp = Array(1001).fill(0);

// dp[0] = 1;
// dp[1] = 1;
// dp[2] = 2;

// for (let i = 3; i <= n; i++) {
//   dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
// }

// console.log(dp[n]);

//2579-계단 오르기
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((v) => v.trim());

// let n = +input[0];
// let score = input.slice(1).map(Number);

// let dp = Array(n).fill(0);
// dp[0] = score[0];
// dp[1] = score[0] + score[1];
// dp[2] = Math.max(score[0] + score[2], score[1] + score[2]);

// for (let i = 3; i < n; i++) {
//   dp[i] = Math.max(dp[i - 2] + score[i], dp[i - 3] + score[i - 1] + score[i]);
// }

// console.log(dp[n - 1]);

//2775-부녀회장이 될테야
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((v) => v.trim());

// let t = +input[0];
// let idx = 1;

// const dp = Array.from({ length: 15 }, () => Array(15).fill(0));

// for (let i = 1; i <= 14; i++) {
//   dp[0][i] = i;
// }

// for (let k = 1; k <= 14; k++) {
//   for (let n = 1; n <= 14; n++) {
//     dp[k][n] = dp[k - 1][n] + dp[k][n - 1];
//   }
// }

// while (t--) {
//   let k = +input[idx++];
//   let n = +input[idx++];

//   console.log(dp[k][n]);
// }

//1149-RGB거리
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((v) => v.trim());

// let n = +input[0];
// let prices = input.slice(1).map((v) => v.split(' ').map(Number));
// const dp = Array.from({ length: n }, () => Array(3).fill(0));

// dp[0][0] = prices[0][0];
// dp[0][1] = prices[0][1];
// dp[0][2] = prices[0][2];

// for (let i = 1; i < n; i++) {
//   dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + prices[i][0];
//   dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + prices[i][1];
//   dp[i][2] = Math.min(dp[i - 1][1], dp[i - 1][0]) + prices[i][2];
// }

// console.log(Math.min(...dp[n - 1]));

//11053-가장 긴 증가하는 부분 수열
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((v) => v.trim());

// let n = +input[0];
// let arr = input[1].split(' ').map(Number);

// let dp = Array(n).fill(1);

// for (let i = 1; i < n; i++) {
//   for (let j = 0; j < i; j++) {
//     if (arr[j] < arr[i]) {
//       dp[i] = Math.max(dp[i], dp[j] + 1);
//     }
//   }
// }

// console.log(Math.max(...dp));

//1932-정수 삼각형
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.trim());

let n = +input[0];
let arr = input.slice(1).map((v) => v.split(' ').map(Number));
let dp = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));

dp[0][0] = arr[0][0];

for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][j] + arr[i][j];
    } else if (j === i) {
      dp[i][j] = dp[i - 1][j - 1] + arr[i][j];
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1]) + arr[i][j];
    }
  }
}

console.log(Math.max(...dp[n - 1]));
