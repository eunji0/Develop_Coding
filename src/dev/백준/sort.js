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
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let t = +input[0];
// let result = [];
// let idx = 1;

// for (let tt = 0; tt < t; tt++) {
//   let n = +input[idx++];
//   let phones = [];

//   for (let i = 0; i < n; i++) {
//     phones.push(input[idx++]);
//   }

//   phones.sort();

//   let isC = true;
//   for (let i = 0; i < phones.length - 1; i++) {
//     if (phones[i + 1].startsWith(phones[i])) {
//       isC = false;
//       break;
//     }
//   }
//   result.push(isC ? 'YES' : 'NO');
// }

// console.log(result.join('\n'));

//1449-수리공 항승
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let [n, l] = input[0].split(' ').map(Number);
// let arr = input[1].split(' ').map(Number);
// let count = 1;
// l -= 0.5;
// let e = l;
// arr.sort((a, b) => b - a);
// //l-=0.5
// //sort로 내림차순 정렬
// //for문으로 순차적으로 돔
// //i - i+1 가 l보다 크다면 stop, count+=1

// for (let i = 0; i < n - 1; i++) {
//   let m = arr[i] - arr[i + 1];
//   if (m < e) {
//     e -= m;
//   } else {
//     count += 1;
//     e = l;
//   }
// }

// console.log(count);

//24479-알고리즘 수업 - 깊이 우선 탐색 1
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let [n, m, r] = input[0].split(' ').map(Number);
// let arr = input.slice(1).map((v) => v.split(' ').map(Number));
// let graph = Array.from({ length: n + 1 }, () => []);

// arr.forEach(([u, v]) => {
//   graph[u].push(v);
//   graph[v].push(u);
// });

// graph.forEach((neighbors) => neighbors.sort((a, b) => a - b));

// let visited = Array(n + 1).fill(false);
// let result = Array(n + 1).fill(0);
// let order = 1;

// const dfs = (start) => {
//   visited[start] = true;
//   result[start] = order++;

//   for (const next of graph[start]) {
//     if (!visited[next]) {
//       dfs(next);
//     }
//   }
// };

// dfs(r);

// console.log(result.slice(1).join('\n'));

//8979-올림픽
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let [n, k] = input[0].split(' ').map(Number);
// let arr = input.slice(1).map((v) => v.split(' ').map(Number));

// arr.sort((a, b) => {
//   if (b[1] !== a[1]) return b[1] - a[1];
//   if (b[2] !== a[2]) return b[2] - a[2];
//   return b[3] - a[3];
// });

// let ranks = Array(n + 1).fill(0);
// let rank = 1;

// for (let i = 0; i < n; i++) {
//   if (i > 0 && arr[i][1] === arr[i - 1][1] && arr[i][2] === arr[i - 1][2] && arr[i][3] === arr[i - 1][3]) {
//     ranks[arr[i][0]] = rank;
//   } else {
//     ranks[arr[i][0]] = rank = i + 1;
//   }
// }

// console.log(ranks[k]);

//20920-영단어 암기는 괴로워
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let [n, m] = input[0].split(' ').map(Number);
// let arr = input.slice(1).map((v) => v.trim());
// let graph = new Map();

// arr.map((v) => {
//   graph.set(v, (graph.get(v) || 0) + 1);
// });

// graph = [...graph].filter((v) => v[0].length > m - 1);
// graph.map((v) => v.push(v[0].length));
// graph.sort((a, b) => {
//   if (a[1] === b[1]) {
//     if (a[2] === b[2]) {
//       return a[0].localeCompare(b[0]);
//     }
//     return b[2] - a[2];
//   }
//   return b[1] - a[1];
// });
// console.log(graph.map((v) => v[0]).join('\n'));

//1431-시리얼 번호
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let n = +input[0];
// let arr = input.slice(1).map((v) => v.trim());
// let newArr = [];

// arr.map((v) =>
//   newArr.push([
//     v,
//     v
//       .split('')
//       .map(Number)
//       .filter((v) => isNaN(v) === false)
//       .reduce((a, c) => a + c, 0),
//   ]),
// );

// newArr.sort((a, b) => {
//   if (a[0].length === b[0].length) {
//     if (a[1] === b[1]) {
//       return a[0].localeCompare(b[0]);
//     }
//     return a[1] - b[1];
//   }
//   return a[0].length - b[0].length;
// });

// newArr.map((v) => console.log(v[0]));

//5635-생일
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let n = +input[0];
// let arr = input.slice(1).map((v) => v.split(' '));

// arr.sort((a, b) => {
//   if (Number(a[3]) === Number(b[3])) {
//     if (Number(a[2]) === Number(b[2])) {
//       return Number(a[1]) - Number(b[1]);
//     }
//     return Number(a[2]) - Number(b[2]);
//   }
//   return Number(a[3]) - Number(b[3]);
// });

// console.log(arr[n - 1][0]);
// console.log(arr[0][0]);

//11931-수 정렬하기4
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let arr = input
//   .slice(1)
//   .map(Number)
//   .sort((a, b) => b - a)
//   .join('\n');
// console.log(arr);

//2437-저울
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let n = +input[0];
// let arr = input[1]
//   .split(' ')
//   .map(Number)
//   .sort((a, b) => a - b);

// let cSum = 0;

// for (let a of arr) {
//   if (a > cSum + 1) {
//     break;
//   }
//   cSum += a;
// }

// console.log(cSum + 1);

//2473-세 용액
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let n = +input[0];
// let arr = input[1]
//   .split(' ')
//   .map(Number)
//   .sort((a, b) => a - b);

// let answer = Infinity;
// let result = [];

// for (let k = 0; k < n - 2; k++) {
//   let next = k + 1;
//   let nnext = n - 1;

//   while (next < nnext) {
//     let sum = arr[k] + arr[next] + arr[nnext];

//     if (Math.abs(sum) < answer) {
//       answer = Math.abs(sum);
//       result = [arr[k], arr[next], arr[nnext]];
//     }

//     if (sum < 0) {
//       next++;
//     } else if (sum > 0) {
//       nnext--;
//     } else {
//       console.log(result.join(' '));
//       return;
//     }
//   }
// }

// console.log(result.join(' '));

//11557-Yangjojang of The Year
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let t = +input[0];
// for (let i = 1; i < input.length; i++) {
//   let n = +input[i];
//   let arr = input.slice(i + 1, i + n + 1).map((v) => v.split(' '));
//   arr.map((v) => (v[1] = +v[1]));
//   arr.sort((a, b) => b[1] - a[1]);
//   console.log(arr[0][0]);
//   i = i + n;
// }

//2212-센서
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// const N = +input[0];
// const K = +input[1];
// const sensors = input[2]
//   .split(' ')
//   .map(Number)
//   .sort((a, b) => a - b);

// const distances = [];
// for (let i = 1; i < N; i++) {
//   distances.push(sensors[i] - sensors[i - 1]);
// }

// distances.sort((a, b) => b - a);
// const minSum = distances.slice(K - 1).reduce((sum, dist) => sum + dist, 0);

// console.log(minSum);

//24444-알고리즘 수업 - 너비 우선 탐색 1
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let [n, m, r] = input[0].split(' ').map(Number);
// let arr = input.slice(1).map((v) => v.split(' ').map(Number));
// let graph = Array.from({ length: n + 1 }, () => []);

// for (let [u, v] of arr) {
//   graph[u].push(v);
//   graph[v].push(u);
// }

// graph.forEach((adj) => adj.sort((a, b) => a - b));

// const bfs = (start) => {
//   let visited = Array(n + 1).fill(false);
//   let order = Array(n + 1).fill(0);
//   let count = 1;

//   visited[start] = true;
//   order[start] = count++;
//   let q = [start];

//   while (q.length) {
//     let node = q.shift();

//     for (let next of graph[node]) {
//       if (!visited[next]) {
//         visited[next] = true;
//         order[next] = count++;
//         q.push(next);
//       }
//     }
//   }

//   return order.slice(1);
// };

// console.log(bfs(r).join('\n'));

//2170-선긋기
const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n');

let n = +input[0];
let arr = input.slice(1).map((v) => v.split(' ').map(Number));

arr.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

let totalLength = 0;
let [start, end] = arr[0];

for (let i = 1; i < n; i++) {
  let [nStart, nEnd] = arr[i];

  if (nStart <= end) {
    end = Math.max(end, nEnd);
  } else {
    totalLength += end - start;
    start = nStart;
    end = nEnd;
  }
}

totalLength += end - start;

console.log(totalLength);
