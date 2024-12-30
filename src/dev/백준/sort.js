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
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let n = +input[0];
// let m = new Map();

// for (let i = 1; i <= n; i++) {
//   let name = input[i].trim();
//   m.set(name, (m.get(name) || 0) + 1);
// }

// let newArr = [...m];

// newArr.sort((a, b) => {
//   if (b[1] === a[1]) {
//     return a[0].localeCompare(b[0]);
//   }
//   return b[1] - a[1];
// });

// console.log(newArr[0][0]);

//1744-수 묶기
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let n = +input[0];
// let arr = input.slice(1).map(Number);

// let positives = [];
// let negatives = [];
// let result = 0;

// arr.forEach((num) => {
//   if (num > 1) positives.push(num);
//   else if (num <= 0) negatives.push(num);
//   else result += 1;
// });

// positives.sort((a, b) => b - a);
// negatives.sort((a, b) => a - b);

// for (let i = 0; i < positives.length; i += 2) {
//   if (i + 1 < positives.length) result += positives[i] * positives[i + 1];
//   else result += positives[i];
// }

// for (let i = 0; i < negatives.length; i += 2) {
//   if (i + 1 < negatives.length) result += negatives[i] * negatives[i + 1];
//   else result += negatives[i];
// }

// console.log(result);

//1940-주몽
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let n = +input[0];
// let m = +input[1];
// let arr = input[2].split(' ').map(Number);

// arr.sort((a, b) => a - b);

// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === m) {
//       count += 1;
//     }
//   }
// }

// console.log(count);

//11000-강의실 배정
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// input.shift();

// let times = [];

// input.forEach((v) => {
//   v = v.split(' ').map(Number);
//   times.push([v[0], 1]);
//   times.push([v[1], -1]);
// });

// times.sort((a, b) => {
//   if (a[0] === b[0]) return a[1] - b[1];
//   return a[0] - b[0];
// });

// let answer = 0;
// let result = 0;

// for (let i = 0; i < times.length; i++) {
//   result += times[i][1];
//   answer = Math.max(answer, result);
// }

// console.log(answer);

//10867-중복 빼고 정렬하기
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let arr = input[1].split(' ').map(Number);
// let newArr = new Set([...arr]);
// console.log([...newArr].sort((a, b) => a - b).join(' '));

//2693-n번째 큰수
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let n = +input[0];

// for (let i = 1; i <= n; i++) {
//   let arr = input[i]
//     .split(' ')
//     .map(Number)
//     .sort((a, b) => b - a);
//   console.log(arr[2]);
// }

//2075-n번째 큰수
// class MinHeap {
//   constructor() {
//     this.heap = [null];
//   }

//   push(value) {
//     let cur = this.heap.length;
//     let parent;
//     while (cur > 1) {
//       parent = Math.floor(cur / 2);
//       if (value < this.heap[parent]) {
//         this.heap[cur] = this.heap[parent];
//         cur = parent;
//       } else break;
//     }
//     this.heap[cur] = value;
//   }

//   pop() {
//     if (this.heap.length === 1) return null;
//     if (this.heap.length === 2) return this.heap.pop();
//     const popValue = this.heap[1];
//     this.heap[1] = this.heap.pop();
//     let cur = 1;
//     let left = cur * 2;
//     let right = cur * 2 + 1;
//     while (this.heap[left]) {
//       let childIdx = left;
//       if (this.heap[right] && this.heap[left] > this.heap[right]) childIdx = right;
//       if (this.heap[cur] > this.heap[childIdx]) {
//         [this.heap[cur], this.heap[childIdx]] = [this.heap[childIdx], this.heap[cur]];
//         cur = childIdx;
//         left = cur * 2;
//         right = cur * 2 + 1;
//       } else break;
//     }
//     return popValue;
//   }

//   size() {
//     return this.heap.length - 1;
//   }
// }

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let N = -1;
// let cnt;
// const que = new MinHeap();
// rl.on('line', (line) => {
//   if (N === -1) {
//     N = parseInt(line);
//     cnt = N;
//     idxCheck = new Array(N).fill(N - 1);
//     return;
//   }
//   const temp = line.split(' ').map(Number);
//   temp.forEach((num, idx) => {
//     que.push(num);
//     if (que.size() > N) que.pop();
//   });
//   cnt -= 1;
//   if (cnt === 0) {
//     rl.close();
//   }
// }).on('close', () => {
//   console.log(que.pop());
// });

//11652-카드
// const [n, ...arr] = require('fs')
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;

//   const mid = Math.floor(arr.length / 2);
//   const left = mergeSort(arr.slice(0, mid));
//   const right = mergeSort(arr.slice(mid));

//   let i = 0;
//   let j = 0;
//   const sorted = [];

//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       sorted.push(left[i]);
//       i++;
//     } else {
//       sorted.push(right[j]);
//       j++;
//     }
//   }

//   if (i < left.length) sorted.push(...left.slice(i));
//   if (j < right.length) sorted.push(...right.slice(j));

//   return sorted;
// }

// const sorted_arr = mergeSort(arr.map((v) => BigInt(v)));
// let maxCount = 0;
// let curCount = 0;
// let prevNumber = '';
// let largest = 2 ** 62;
// sorted_arr.forEach((v) => {
//   if (prevNumber !== v) {
//     prevNumber = v;
//     curCount = 0;
//   }
//   curCount++;
//   if (curCount > maxCount || (curCount === maxCount && largest > v)) {
//     maxCount = curCount;
//     largest = v;
//   }
// });
// console.log(String(largest));

//1253-좋다
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// const n = +input[0];
// const arr = input[1].split(' ').map(Number);

// arr.sort((a, b) => a - b);

// let count = 0;

// for (let k = 0; k < n; k++) {
//   let target = arr[k];
//   let i = 0;
//   let j = n - 1;

//   while (i < j) {
//     if (i === k) {
//       i++;
//       continue;
//     }
//     if (j === k) {
//       j--;
//       continue;
//     }

//     let sum = arr[i] + arr[j];

//     if (sum === target) {
//       count++;
//       break;
//     } else if (sum < target) {
//       i++;
//     } else {
//       j--;
//     }
//   }
// }

// console.log(count);

//2822-점수 계산
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let arr = input.map(Number);
// let graph = [];

// arr.map((v, i) => {
//   graph.push([v, i + 1]);
// });

// graph.sort((a, b) => b[0] - a[0]);

// let s = graph.slice(0, 5);

// let resultSum = 0;
// let result = [];

// s.map((v) => {
//   resultSum += v[0];
//   result.push(v[1]);
// });

// console.log(resultSum);
// console.log(result.sort((a, b) => a - b).join(' '));

//18110-solved.ac
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let n = +input[0];
// let arr = input.slice(1).map(Number);
// if (n === 0) {
//   console.log(0);
//   return;
// }

// arr.sort((a, b) => a - b);
// let minusNum = Math.round(n * 0.15);
// let m = [];
// for (let i = minusNum; i < n - minusNum; i++) {
//   m.push(arr[i]);
// }

// console.log(Math.round(m.reduce((a, c) => a + c, 0) / m.length));

//5052-전화번호 목록
const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n');

let t = +input[0];
let result = [];
let idx = 1;

for (let tt = 0; tt < t; tt++) {
  let n = +input[idx++];
  let phones = [];

  for (let i = 0; i < n; i++) {
    phones.push(input[idx++]);
  }

  phones.sort();

  let isC = true;
  for (let i = 0; i < phones.length - 1; i++) {
    if (phones[i + 1].startsWith(phones[i])) {
      isC = false;
      break;
    }
  }
  result.push(isC ? 'YES' : 'NO');
}

console.log(result.join('\n'));
