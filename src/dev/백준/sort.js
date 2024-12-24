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
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let n = +input[0];
// let arr = input[1].split(' ').map(Number);
// let x = +input[2];

// arr.sort((a, b) => a - b); // 배열 정렬

// let left = 0;
// let right = n - 1;
// let count = 0;

// while (left < right) {
//   let sum = arr[left] + arr[right];

//   if (sum === x) {
//     left++;
//     right--;
//     count++;
//   } else if (sum < x) {
//     left++;
//   } else {
//     right--;
//   }
// }

// console.log(count);

//1946-신입사원
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// const T = +input[0]; // 테스트 케이스 개수
// let index = 1;
// const results = [];

// for (let t = 0; t < T; t++) {
//   const N = +input[index++]; // 지원자 수
//   const candidates = [];

//   for (let i = 0; i < N; i++) {
//     const [paper, interview] = input[index++].split(' ').map(Number);
//     candidates.push([paper, interview]);
//   }

//   // 서류 심사 순위 기준 정렬
//   candidates.sort((a, b) => a[0] - b[0]);

//   let count = 1; // 첫 번째 지원자는 무조건 선발
//   let minInterviewRank = candidates[0][1]; // 최소 면접 순위

//   for (let i = 1; i < N; i++) {
//     if (candidates[i][1] < minInterviewRank) {
//       count++;
//       minInterviewRank = candidates[i][1]; // 최소 면접 순위 갱신
//     }
//   }

//   results.push(count);
// }

// console.log(results.join('\n'));

//10610-30
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let arr = input[0].split('').map(Number);
// let canTen = false;

// if (arr.includes(0)) canTen = true;
// let sum = arr.reduce((a, c) => a + c, 0);
// if (canTen && sum % 3 === 0) {
//   arr.sort((a, b) => b - a);
//   console.log(arr.join(''));
// } else {
//   console.log(-1);
// }

//11004-k번째수
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let [n, k] = input[0].split(' ').map(Number);
// let arr = input[1].split(' ').map(Number);

// arr.sort((a, b) => a - b);
// console.log(arr[k - 1]);

//11656-접미사 배열
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let arr = input[0].split('');
// let box = [];
// for (let i = 0; i < arr.length; i++) {
//   box.push(arr.slice(i).join(''));
// }

// console.log(box.sort().join('\n'));

//10825-국영수
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let n = +input[0];
// let arr = input.slice(1).map((v) => v.split(' '));

// arr.map((v) => {
//   v[1] = +v[1];
//   v[2] = +v[2];
//   v[3] = +v[3];
// });
// arr.sort((a, b) => {
//   if (a[1] === b[1]) {
//     if (a[2] === b[2]) {
//       if (a[3] === b[3]) {
//         return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
//       }
//       return b[3] - a[3];
//     }
//     return a[2] - b[2];
//   }
//   return b[1] - a[1];
// });

// console.log(arr.map((v) => v[0]).join('\n'));

//11728-배열 합치기
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let [n, m] = input[0].split(' ').map(Number);
// let arr = input
//   .slice(1)
//   .map((v) => v.split(' ').map(Number))
//   .flat();

// console.log(arr.sort((a, b) => a - b).join(' '));

//1302-베스트셀러
const [N, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let maxCount = 0;
let maxName = '';
const dict = {};
arr.forEach((name) => {
  if (dict[name]) dict[name]++;
  else dict[name] = 1;
  if (dict[name] === maxCount && name < maxName) maxName = name;
  else if (dict[name] > maxCount) {
    maxName = name;
    maxCount = dict[name];
  }
});
console.log(maxName);
