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
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
// const [n, m] = input[0].split(' ').map(Number);
// const arr = input
//   .slice(1)
//   .map(Number)
//   .sort((a, b) => a - b);

// let start = 1;
// let end = arr[arr.length - 1];

// while (start <= end) {
//   let mid = Math.floor((start + end) / 2);

//   let count = 1;
//   let prev = arr[0];
//   for (let cur of arr) {
//     if (cur - prev < mid) continue;
//     prev = cur;
//     count += 1;
//   }

//   if (count < m) end = mid - 1;
//   else start = mid + 1;
// }

// console.log(end);

//2512-예산
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let arr = input[1].split(' ').map(Number);
// let m = +input[2];

// let left = 1;
// let right = Math.max(...arr);
// let maxSum = 0;

// while (left <= right) {
//   let mid = Math.floor((left + right) / 2);
//   let sum = 0;
//   let min = 0;
//   for (let i = 0; i < n; i++) {
//     sum += Math.min(mid, arr[i]);
//   }

//   if (sum <= m) {
//     maxSum = mid;
//     left = mid + 1;
//   } else {
//     right = mid - 1;
//   }
// }

// console.log(maxSum);

//12015-가장 긴 증가하는 부분 수열 2
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let arr = input[1].split(' ').map(Number);
// let dp = [];

// for (let num of arr) {
//   let left = 0;
//   let right = dp.length;

//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);
//     if (dp[mid] < num) {
//       left = mid + 1;
//     } else {
//       right = mid;
//     }
//   }

//   if (left === dp.length) {
//     dp.push(num);
//   } else {
//     dp[left] = num;
//   }
// }

// console.log(dp.length);

//2470-두 용액
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
// const N = +input[0];
// const liquids = input[1].split(' ').map(Number);

// liquids.sort((a, b) => a - b);

// let left = 0;
// let right = N - 1;
// let minDiff = Infinity;
// let result = [0, 0];

// while (left < right) {
//   const sum = liquids[left] + liquids[right];

//   if (Math.abs(sum) < minDiff) {
//     minDiff = Math.abs(sum);
//     result = [liquids[left], liquids[right]];
//   }

//   if (sum < 0) {
//     left++;
//   } else {
//     right--;
//   }
// }

// console.log(result[0], result[1]);

//2467-용액
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
// let n = +input[0];
// let arr = input[1]
//   .split(' ')
//   .map(Number)
//   .sort((a, b) => a - b);

// let left = 0;
// let right = arr.length - 1;
// let min = Infinity;
// let result = [0, 0];

// while (left < right) {
//   let sum = arr[left] + arr[right];

//   if (Math.abs(sum) < min) {
//     min = Math.abs(sum);
//     result = [arr[left], arr[right]];
//   }

//   if (sum < 0) {
//     left++;
//   } else {
//     right--;
//   }
// }

// console.log(result.join(' '));

//1300-k번째 수
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
// let n = +input[0];
// let m = +input[1];

// let left = 1;
// let right = n * n;
// let answer = 0;

// const countLessCal = (mid) => {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     count += Math.min(n, Math.floor(mid / i));
//   }
//   return count;
// };

// while (left <= right) {
//   let mid = Math.floor((left + right) / 2);

//   if (countLessCal(mid) >= m) {
//     answer = mid;
//     right = mid - 1;
//   } else {
//     left = mid + 1;
//   }
// }

// console.log(answer);

//1253-좋다
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
// let n = +input[0];
// let arr = input[1]
//   .split(' ')
//   .map(Number)
//   .sort((a, b) => a - b);
// let count = 0;

// for (let i = 0; i < n; i++) {
//   let left = 0;
//   let right = n - 1;
//   let target = arr[i];

//   while (left < right) {
//     if (left === i) {
//       left++;
//       continue;
//     }

//     if (right === i) {
//       right--;
//       continue;
//     }

//     let sum = arr[left] + arr[right];

//     if (sum === target) {
//       count++;
//       break;
//     } else if (sum < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }
// }

// console.log(count);

//2343-기타레슨
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
// let [n, m] = input[0].split(' ').map(Number);
// let arr = input[1].split(' ').map(Number);

// let left = Math.max(...arr);
// let right = arr.reduce((a, c) => a + c, 0);

// while (left <= right) {
//   let mid = Math.floor((left + right) / 2);
//   let sum = 0;
//   let count = 1;

//   for (let lec of arr) {
//     if (sum + lec > mid) {
//       count++;
//       sum = lec;
//     } else {
//       sum += lec;
//     }
//   }

//   if (count <= m) {
//     result = mid;
//     right = mid - 1;
//   } else {
//     left = mid + 1;
//   }
// }

// console.log(result);

//2473-세 용액
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
// let n = +input[0];
// let arr = input[1]
//   .split(' ')
//   .map(Number)
//   .sort((a, b) => a - b);

// let result = [];
// let closetSum = Infinity;
// for (let i = 0; i < n - 2; i++) {
//   let left = i + 1;
//   let right = n - 1;

//   while (left < right) {
//     let sum = arr[i] + arr[left] + arr[right];

//     if (Math.abs(sum) < Math.abs(closetSum)) {
//       closetSum = sum;
//       result = [arr[i], arr[left], arr[right]];
//     }
//     if (sum < 0) {
//       left++;
//     } else {
//       right--;
//     }
//   }
// }

// console.log(result.join(' '));

//2143-두 배열의 합
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let t = +input[0];
let n = +input[1];
let nArr = input[2].split(' ').map(Number);
let m = +input[3];
let mArr = input[4].split(' ').map(Number);

let nMap = new Map();

for (let i = 0; i < n; i++) {
  let sum = 0;

  for (let j = i; j < n; j++) {
    sum += nArr[j];
    nMap.set(sum, (nMap.get(sum) || 0) + 1);
  }
}

let count = 0;
for (let i = 0; i < m; i++) {
  let sum = 0;
  for (let j = i; j < m; j++) {
    sum += mArr[j];
    let target = t - sum;
    if (nMap.has(target)) {
      count += nMap.get(target);
    }
  }
}

console.log(count);
