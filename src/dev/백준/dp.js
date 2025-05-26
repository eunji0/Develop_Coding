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
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((v) => v.trim());

// let n = +input[0];
// let arr = input.slice(1).map((v) => v.split(' ').map(Number));
// let dp = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));

// dp[0][0] = arr[0][0];

// for (let i = 1; i < n; i++) {
//   for (let j = 0; j <= i; j++) {
//     if (j === 0) {
//       dp[i][j] = dp[i - 1][j] + arr[i][j];
//     } else if (j === i) {
//       dp[i][j] = dp[i - 1][j - 1] + arr[i][j];
//     } else {
//       dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1]) + arr[i][j];
//     }
//   }
// }

// console.log(Math.max(...dp[n - 1]));

//1010-다리 놓기
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((v) => v.trim());

// let t = +input[0];
// let arr = input.slice(1).map((v) => v.split(' ').map(Number));

// function factorial(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) result *= i;
//   return result;
// }

// function combination(n, r) {
//   return Math.round(factorial(n) / (factorial(r) * factorial(n - r)));
// }

// for (let [n, m] of arr) {
//   console.log(combination(m, n));
// }

//9461-파도반 수열
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((v) => v.trim());

// let t = +input[0];
// let arr = input.slice(1).map(Number);

// let dp = Array(101).fill(0);

// dp[1] = 1;
// dp[2] = 1;
// dp[3] = 1;

// for (let i = 4; i < 101; i++) {
//   dp[i] = dp[i - 2] + dp[i - 3];
// }

// arr.forEach((v) => console.log(dp[v]));

//11727-2×n 타일링 2
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

// for (let i = 2; i < 1001; i++) {
//   dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
// }

// console.log(dp[n]);

//14501-퇴사
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((v) => v.trim());

// let n = +input[0];
// let arr = input.slice(1).map((v) => v.split(' ').map(Number));
// let dp = Array(n + 1).fill(0);

// for (let i = n - 1; i >= 0; i--) {
//   let [t, p] = arr[i];

//   if (i + t <= n) {
//     dp[i] = Math.max(p + dp[i + t], dp[i + 1]);
//   } else {
//     dp[i] = dp[i + 1];
//   }
// }

// console.log(dp[0]);

//2747-피보나치 수
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((v) => v.trim());

// let n = +input[0];
// let dp = Array(45).fill(0);
// dp[0] = 0;
// dp[1] = 1;

// for (let i = 2; i <= 45; i++) {
//   dp[i] = dp[i - 1] + dp[i - 2];
// }

// console.log(dp[n]);

//9465-스티커
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// let T = +input[0];
// let idx = 1;

// for (let t = 0; t < T; t++) {
//   let n = +input[idx++];
//   let top = input[idx++].split(' ').map(Number);
//   let bottom = input[idx++].split(' ').map(Number);

//   let dp = Array.from({ length: 2 }, () => Array(n).fill(0));
//   dp[0][0] = top[0];
//   dp[1][0] = bottom[0];

//   if (n > 1) {
//     dp[0][1] = bottom[0] + top[1];
//     dp[1][1] = top[0] + bottom[1];
//   }

//   for (let i = 2; i < n; i++) {
//     dp[0][i] = Math.max(dp[1][i - 1], dp[1][i - 2]) + top[i];
//     dp[1][i] = Math.max(dp[0][i - 1], dp[0][i - 2]) + bottom[i];
//   }

//   console.log(Math.max(dp[0][n - 1], dp[1][n - 1]));
// }

//11052-카드 구매하기
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let arr = input[1].split(' ').map(Number);

// let dp = Array(n + 1).fill(0);

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     dp[i] = Math.max(dp[i], dp[i - j] + arr[j - 1]);
//   }
// }

// console.log(dp[n])

//11054-가장 긴 바이토닉 부분 수열
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let arr = input[1].split(' ').map(Number);

// let dp = Array(n).fill(1);
// let rDp = Array(n).fill(1);

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < i; j++) {
//     if (arr[j] < arr[i]) {
//       dp[i] = Math.max(dp[i], dp[j] + 1);
//     }
//   }
// }

// for (let i = n - 1; i >= 0; i--) {
//   for (let j = n - 1; j > i; j--) {
//     if (arr[j] < arr[i]) {
//       rDp[i] = Math.max(rDp[i], rDp[j] + 1);
//     }
//   }
// }

// let maxLength = 0;
// for (let i = 0; i < n; i++) {
//   maxLength = Math.max(maxLength, dp[i] + rDp[i] - 1);
// }

// console.log(maxLength);

//9655-돌 게임
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];

// if (n % 2 === 1) {
//   console.log('SK');
// } else {
//   console.log('CY');
// }

//11722-가장 긴 감소하는 부분 수열
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let arr = input[1].split(' ').map(Number);

// let dp = Array(n).fill(1);
// for (let i = n - 1; i >= 0; i--) {
//   for (let j = n - 1; j > i; j--) {
//     if (arr[j] < arr[i]) {
//       dp[i] = Math.max(dp[i], dp[j] + 1);
//     }
//   }
// }

// console.log(Math.max(...dp));

//11047-이동하기
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let [n, m] = input[0].split(' ').map(Number);
// let arr = input.slice(1).map((v) => v.split(' ').map(Number));

// let dp = Array.from({ length: n }, () => Array(m).fill(0));

// dp[0][0] = arr[0][0];

// for (let i = 1; i < n; i++) {
//   dp[i][0] = dp[i - 1][0] + arr[i][0];
// }

// for (let j = 1; j < m; j++) {
//   dp[0][j] = dp[0][j - 1] + arr[0][j];
// }

// for (let i = 1; i < n; i++) {
//   for (let j = 1; j < m; j++) {
//     dp[i][j] = arr[i][j] + Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
//   }
// }

// console.log(dp[n - 1][m - 1]);

//24416-알고리즘 수업 - 피보나치 수 1
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];

// let fibCount = 0;
// let fibonacciCount = 0;

// function fib(n) {
//   if (n === 1 || n === 2) {
//     fibCount++;
//     return 1;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// function fibonacci(n) {
//   let f = Array(n + 1).fill(0);
//   f[1] = f[2] = 1;
//   for (let i = 3; i <= n; i++) {
//     f[i] = f[i - 1] + f[i - 2];
//     fibonacciCount++;
//   }
//   return f[n];
// }

// fib(n);
// fibonacci(n);

// console.log(fibCount);
// console.log(fibonacciCount);

//12852-1로 만들기 2
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];

// const dp = Array(n + 1).fill(0);
// const path = Array(n + 1).fill(0);

// dp[1] = 0;
// path[1] = -1;

// for (let i = 2; i <= n; i++) {
//   dp[i] = dp[i - 1] + 1;
//   path[i] = i - 1;

//   if (i % 2 === 0 && dp[i] > dp[i / 2] + 1) {
//     dp[i] = dp[i / 2] + 1;
//     path[i] = i / 2;
//   }

//   if (i % 3 === 0 && dp[i] > dp[i / 3] + 1) {
//     dp[i] = dp[i / 3] + 1;
//     path[i] = i / 3;
//   }
// }

// console.log(dp[n]);
// let result = [];
// for (let i = n; i !== -1; i = path[i]) {
//   result.push(i);
// }
// console.log(result.join(' '));

//17404-RGB거리 2
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let arr = input.slice(1).map((v) => v.split(' ').map(Number));

// let result = Infinity;

// for (let first = 0; first < 3; first++) {
//   let dp = Array.from({ length: n }, () => [Infinity, Infinity, Infinity]);

//   dp[0][first] = arr[0][first];

//   for (let i = 1; i < n; i++) {
//     dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + arr[i][0];
//     dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + arr[i][1];
//     dp[i][2] = Math.min(dp[i - 1][1], dp[i - 1][0]) + arr[i][2];
//   }

//   for (let last = 0; last < 3; last++) {
//     if (last !== first) {
//       result = Math.min(result, dp[n - 1][last]);
//     }
//   }
// }

// console.log(result);

//15989-1,2,3 더하기 4
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let tc = Number(input.shift());

// let dp = Array.from(Array(10001), () => Array(4).fill(0));

// dp[1][1] = 1;
// dp[2][1] = 1;
// dp[2][2] = 1;
// dp[3][1] = 1;
// dp[3][2] = 1;
// dp[3][3] = 1;

// for (let i = 4; i <= 10000; i++) {
//   dp[i][1] = dp[i - 1][1];
//   dp[i][2] = dp[i - 2][1] + dp[i - 2][2];
//   dp[i][3] = dp[i - 3][1] + dp[i - 3][2] + dp[i - 3][3];
// }

// for (let t = 0; t < tc; t++) {
//   let n = Number(input.shift());

//   console.log(dp[n][1] + dp[n][2] + dp[n][3]);
// }

//13301-타일 장식물
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];

// let dp = Array(n + 2).fill(0);

// dp[1] = 1;
// dp[2] = 1;

// for (let i = 3; i <= n + 2; i++) {
//   dp[i] = dp[i - 1] + dp[i - 2];
// }

// console.log(2 * (dp[n + 1] + dp[n]));

//1562-계단수
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// const mod = 1000000000;
// const memo = Array.from(Array(n + 1), () => Array.from(Array(10), () => Array(1 << 10).fill(-1)));

// function solution(len, num, state) {
//   if (len == n) return state == (1 << 10) - 1 ? 1 : 0;
//   if (memo[len][num][state] > -1) return memo[len][num][state];

//   let cnt = 0;
//   if (num - 1 >= 0) cnt += solution(len + 1, num - 1, state | (1 << (num - 1)));
//   if (num + 1 < 10) cnt += solution(len + 1, num + 1, state | (1 << (num + 1)));

//   return (memo[len][num][state] = cnt % mod);
// }

// let result = 0;
// for (let i = 1; i < 10; i++) {
//   result += solution(1, i, 1 << i);
//   result %= mod;
// }

// console.log(result);

//2839-설탕 배달
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];

// let dp = Array(5001).fill(-1);

// dp[3] = 1;
// dp[5] = 1;

// for (let i = 6; i <= n; i++) {
//   if (dp[i - 3] !== -1) dp[i] = dp[i - 3] + 1;
//   if (dp[i - 5] !== -1) {
//     if (dp[i] === -1 || dp[i] > dp[i - 5] + 1) {
//       dp[i] = dp[i - 5] + 1;
//     }
//   }
// }

// console.log(dp[n]);

//1463-1로 만들기
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];

// let dp = Array(1000001).fill(0);

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

//9095-1, 2, 3 더하기
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let t = +input[0];
// let arr = input.slice(1).map(Number);

// let dp = Array(11).fill(0);

// dp[0] = 1;
// dp[1] = 1;
// dp[2] = 2;
// dp[3] = 4;

// for (let n of arr) {
//   for (let i = 4; i < 11; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
//   }
//   console.log(dp[n]);
// }

//1003-피보나치 함수
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let t = +input[0];
// let arr = input.slice(1).map(Number);

// let dp = Array.from({ length: 41 }, () => []);

// dp[0] = [1, 0];
// dp[1] = [0, 1];

// for (let i = 2; i < 41; i++) {
//   dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
//   dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
// }

// for (let n of arr) {
//   console.log(dp[n].join(' '));
// }

//11726-2×n 타일링
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];

// let dp = Array(n + 1).fill(0);

// dp[1] = 1;
// dp[2] = 2;

// for (let i = 3; i <= n; i++) {
//   dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
// }

// console.log(dp[n]);

//2579-계단 오르기
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let arr = input.slice(1).map(Number);

// let dp = Array(n).fill(0);

// dp[0] = arr[0]; //첫번째계단
// dp[1] = arr[0] + arr[1];
// dp[2] = Math.max(arr[0] + arr[2], arr[1] + arr[2]);

// for (let i = 3; i < n; i++) {
//   dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 3] + arr[i - 1] + arr[i]);
// }

// console.log(dp[n - 1]);

//2775-부녀회장이 될테야
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let t = +input[0];
// let idx = 1;

// //dp[a][b] = dp[a-1][0]+...+dp[a-1][b]
// while (t--) {
//   let k = +input[idx++];
//   let n = +input[idx++];

//   //k층에 n호에는 몇 명이 살고 있는지

//   let dp = Array.from({ length: k + 1 }, () => Array(n + 1).fill(0));

//   for (let j = 1; j <= n; j++) {
//     dp[0][j] = j;
//   }

//   for (let i = 1; i <= k; i++) {
//     for (let j = 1; j <= n; j++) {
//       for (let m = 1; m <= j; m++) {
//         dp[i][j] += dp[i - 1][m];
//       }
//     }
//   }

//   console.log(dp[k][n]);
// }

//1149-RGB거리
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let arr = input.slice(1).map((v) => v.split(' ').map(Number));

// let dp = Array.from({ length: n }, () => Array(3).fill(0));

// dp[0][0] = arr[0][0];
// dp[0][1] = arr[0][1];
// dp[0][2] = arr[0][2];

// for (let i = 1; i < n; i++) {
//   for (let j = 0; j < 3; j++) {
//     dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + arr[i][0];
//     dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + arr[i][1];
//     dp[i][2] = Math.min(dp[i - 1][1], dp[i - 1][0]) + arr[i][2];
//   }
// }

// console.log(Math.min(...dp[n - 1]));

//11053-가장 긴 증가하는 부분 수열
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

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
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let arr = input.slice(1).map((v) => v.split(' ').map(Number));
// let dp = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));

// dp[0][0] = arr[0][0];

// for (let i = 1; i < n; i++) {
//   for (let j = 0; j <= i; j++) {
//     if (j === 0) {
//       dp[i][j] += dp[i - 1][j] + arr[i][j];
//     } else if (j === i) {
//       dp[i][j] += dp[i - 1][j - 1] + arr[i][j];
//     } else {
//       dp[i][j] += Math.max(dp[i - 1][j], dp[i - 1][j - 1]) + arr[i][j];
//     }
//   }
// }
// console.log(Math.max(...dp[n - 1]));

//1010-다리놓기
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let MAX = 30;
// let dp = Array.from({ length: MAX + 1 }, () => Array(MAX + 1).fill(0));

// for (let n = 0; n <= MAX; n++) {
//   for (let r = 0; r <= n; r++) {
//     if (r === 0 || r === n) dp[n][r] = 1;
//     else dp[n][r] = dp[n - 1][r - 1] + dp[n - 1][r];
//   }
// }

// let t = +input[0];
// let idx = 1;

// while (t--) {
//   let [n, m] = input[idx++].split(' ').map(Number);
//   console.log(dp[m][n]); //m개중 n개 고르기
// }

//9461-파도반 수열
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let MAX = 100;
// let dp = Array(MAX + 1).fill(0);

// dp[1] = 1;
// dp[2] = 1;
// dp[3] = 1;
// dp[4] = 2;
// dp[5] = 2;

// for (let i = 6; i <= MAX; i++) {
//   dp[i] = dp[i - 2] + dp[i - 3];
// }

// let t = +input[0];
// let idx = 1;
// while (t--) {
//   let n = +input[idx++];
//   console.log(dp[n]);
// }

//1912-연속합
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let dp = Array(MAX + 1).fill(0);

// let n = +input[0];
// let arr = input[1].split(' ').map(Number);

// dp[0] = arr[0];
// let maxSum = dp[0];

// for (let i = 1; i < n; i++) {
//   dp[i] = Math.max(arr[i], dp[i - 1] + arr[i]);
//   maxSum = Math.max(maxSum, dp[i]);
// }

// console.log(maxSum);

//11727-2×n 타일링 2
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// const dp = Array(n + 1).fill(0);
// dp[1] = 1;
// dp[2] = 3;

// for (let i = 3; i <= n; i++) {
//   dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
// }

// console.log(dp[n]);

//2748-피보나치 수2
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let MAX = 90;
// let dp = Array(MAX + 1).fill(0n);

// dp[0] = 0n;
// dp[1] = 1n;

// for (let i = 2; i <= MAX; i++) {
//   dp[i] = dp[i - 1] + dp[i - 2];
// }

// console.log(dp[n].toString());

//2156-포도주 시식
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// const wine = [0, ...input.slice(1).map(Number)];

// let dp = Array(n + 1).fill(0);

// dp[1] = wine[1];
// if (n >= 2) dp[2] = wine[1] + wine[2];

// for (let i = 3; i <= n; i++) {
//   dp[i] = Math.max(
//     dp[i - 1], // i번째 잔을 안 마심
//     dp[i - 2] + wine[i], // i번째 잔 마시고, i-1 잔은 안 마심
//     dp[i - 3] + wine[i - 1] + wine[i], // i, i-1 잔 연속으로 마시고, i-2 잔은 안 마심
//   );
// }

// console.log(dp[n]);

//12865-평범한 배낭
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, k] = input[0].split(' ').map(Number); //n개의 물건, 버틸 수 있는 무게 K
let arr = input.slice(1).map((v) => v.split(' ').map(Number));

let dp = Array(k + 1).fill(0);

for (let i = 0; i < n; i++) {
  let [w, v] = arr[i];

  for (let j = k; j >= w; j--) {
    dp[j] = Math.max(dp[j], dp[j - w] + v);
  }
}

console.log(dp[k]);
