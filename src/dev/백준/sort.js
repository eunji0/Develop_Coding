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
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let n = +input[0];
// let arr = input.slice(1).map((v) => v.split(' ').map(Number));

// arr.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

// let totalLength = 0;
// let [start, end] = arr[0];

// for (let i = 1; i < n; i++) {
//   let [nStart, nEnd] = arr[i];

//   if (nStart <= end) {
//     end = Math.max(end, nEnd);
//   } else {
//     totalLength += end - start;
//     start = nStart;
//     end = nEnd;
//   }
// }

// totalLength += end - start;

// console.log(totalLength);

//2776-암기왕
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let t = +input[0];
// let index = 1;
// let result = [];

// for (let i = 0; i < t; i++) {
//   let n = +input[index];
//   let no = new Set(input[index + 1].split(' ').map(Number));
//   let m = +input[index + 2];
//   let mo = input[index + 3].split(' ').map(Number);

//   mo.forEach((v) => {
//     if (no.has(v)) {
//       result.push(1);
//     } else {
//       result.push(0);
//     }
//   });

//   index += 4;
// }

// console.log(result.join('\n'));

//17140-이차원 배열과 연산
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let [r, c, k] = input[0].split(' ').map(Number);
// let arr = input.slice(1).map((v) => v.split(' ').map(Number));

// const calculateR = (arr, rLength, cLength) => {
//   let newArr = [];
//   let maxL = 0;

//   for (let i = 0; i < rLength; i++) {
//     let countMap = new Map();

//     arr[i].forEach((v) => {
//       if (v !== 0) countMap.set(v, (countMap.get(v) || 0) + 1);
//     });

//     let sorted = [...countMap].sort((a, b) => {
//       if (a[1] === b[1]) return a[0] - b[0];
//       return a[1] - b[1];
//     });

//     let flattened = sorted.flat();
//     newArr.push(flattened);
//     maxL = Math.max(maxL, flattened.length);
//   }

//   return newArr.map((row) => {
//     while (row.length < maxL) row.push(0);
//     return row.slice(0, 100);
//   });
// };

// const calculateC = (arr, rLength, cLength) => {
//   let newArr = [];
//   let maxL = 0;

//   for (let col = 0; col < cLength; col++) {
//     let countMap = new Map();

//     for (let row = 0; row < rLength; row++) {
//       if (arr[row][col] !== 0) countMap.set(arr[row][col], (countMap.get(arr[row][col]) || 0) + 1);
//     }

//     let sorted = [...countMap].sort((a, b) => {
//       if (a[1] === b[1]) return a[0] - b[0];
//       return a[1] - b[1];
//     });

//     let flattened = sorted.flat();
//     newArr.push(flattened);
//     maxL = Math.max(maxL, flattened.length);
//   }

//   let paddedArr = Array.from({ length: maxL }, () => Array(cLength).fill(0));
//   newArr.forEach((col, colIndex) => {
//     for (let rowIndex = 0; rowIndex < col.length; rowIndex++) {
//       paddedArr[rowIndex][colIndex] = col[rowIndex];
//     }
//   });

//   return paddedArr.slice(0, 100);
// };

// let count = 0;

// while (true) {
//   if (arr[r - 1]?.[c - 1] === k) {
//     console.log(count);
//     return;
//   }
//   if (count > 100) {
//     console.log(-1);
//     return;
//   }

//   let rLength = arr.length;
//   let cLength = arr[0].length;

//   if (rLength >= cLength) {
//     arr = calculateR(arr, rLength, cLength);
//   } else {
//     arr = calculateC(arr, rLength, cLength);
//   }

//   count++;
// }

//24060-알고리즘 수업 - 병합 정렬 1
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let [n, k] = input[0].split(' ').map(Number);
// let arr = input[1].split(' ').map(Number);

// let count = 0;
// let result = -1;

// function mergeSort(array, left, right) {
//   if (left < right) {
//     const mid = Math.floor((left + right) / 2);
//     mergeSort(array, left, mid);
//     mergeSort(array, mid + 1, right);
//     merge(array, left, mid, right);
//   }
// }

// function merge(array, left, mid, right) {
//   let i = left;
//   let j = mid + 1;
//   let temp = [];

//   while (i <= mid && j <= right) {
//     if (array[i] <= array[j]) {
//       temp.push(array[i++]);
//     } else {
//       temp.push(array[j++]);
//     }
//   }

//   while (i <= mid) {
//     temp.push(array[i++]);
//   }

//   while (j <= right) {
//     temp.push(array[j++]);
//   }

//   for (let t = 0; t < temp.length; t++) {
//     array[left + t] = temp[t];
//     count++;
//     if (count === k) {
//       result = temp[t];
//     }
//   }
// }

// mergeSort(arr, 0, n - 1);

// console.log(result);

//24480-알고리즘 수업 - 깊이 우선 탐색 2
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// const [n, m, r] = input[0].split(' ').map(Number);
// let arr = input.slice(1).map((v) => v.split(' ').map(Number));
// let graph = Array.from({ length: n + 1 }, () => []);

// for (const [u, v] of arr) {
//   graph[u].push(v);
//   graph[v].push(u);
// }

// for (let i = 1; i <= n; i++) {
//   graph[i].sort((a, b) => b - a);
// }

// let count = 0;
// let order = Array(n + 1).fill(0);

// const dfs = (node) => {
//   order[node] = ++count;
//   for (const next of graph[node]) {
//     if (!order[next]) {
//       dfs(next);
//     }
//   }
// };

// dfs(r);

// console.log(order.slice(1).join('\n'));

//7795-먹을 것인가 먹힐 것인가
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let t = +input[0];
// let index = 1;

// const cal = (arr, target) => {
//   let left = 0;
//   let right = arr.length;

//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] < target) left = mid + 1;
//     else right = mid;
//   }

//   return left;
// };
// for (let i = 0; i < t; i++) {
//   let [n, m] = input[index++].split(' ').map(Number);
//   let Aarr = input[index++]
//     .split(' ')
//     .map(Number)
//     .sort((a, b) => a - b);
//   let Barr = input[index++]
//     .split(' ')
//     .map(Number)
//     .sort((a, b) => a - b);

//   let count = 0;
//   Aarr.forEach((v) => {
//     count += cal(Barr, v);
//   });

//   console.log(count);
// }

//1517-버블 소트
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// const N = +input[0];
// const arr = input[1].split(' ').map(Number);

// let swapCount = 0;

// const mergeSort = (array, start, end) => {
//   if (start >= end) return;

//   let mid = Math.floor((start + end) / 2);
//   mergeSort(array, start, mid);
//   mergeSort(array, mid + 1, end);

//   merge(array, start, mid, end);
// };

// const merge = (array, start, mid, end) => {
//   let temp = [];
//   let i = start;
//   let j = mid + 1;

//   while (i <= mid && j <= end) {
//     if (array[i] <= array[j]) {
//       temp.push(array[i++]);
//     } else {
//       temp.push(array[j++]);

//       swapCount += mid - i + 1;
//     }
//   }

//   while (i <= mid) temp.push(array[i++]);
//   while (j <= end) temp.push(array[j++]);

//   for (let k = start; k <= end; k++) {
//     array[k] = temp[k - start];
//   }
// };

// mergeSort(arr, 0, N - 1);
// console.log(swapCount);

//16435-스네이크버드
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let [n, l] = input[0].split(' ').map(Number);
// let arr = input[1].split(' ').map(Number);

// arr.sort((a, b) => a - b);

// arr.forEach((v) => {
//   if (v <= l) {
//     l += 1;
//   }
// });

// console.log(l);

//7453-합이 0인 네 정수
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// const n = +input[0];
// const A = [],
//   B = [],
//   C = [],
//   D = [];

// for (let i = 1; i <= n; i++) {
//   const [a, b, c, d] = input[i].split(' ').map(Number);
//   A.push(a);
//   B.push(b);
//   C.push(c);
//   D.push(d);
// }

// const mapAB = new Map();

// for (let a of A) {
//   for (let b of B) {
//     let sum = a + b;
//     mapAB.set(sum, (mapAB.get(sum) || 0) + 1);
//   }
// }

// let count = 0;

// for (let c of C) {
//   for (let d of D) {
//     let sum = c + d;
//     if (mapAB.has(-sum)) {
//       count += mapAB.get(-sum);
//     }
//   }
// }

// console.log(count);

//2230-수 고르기
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// const [N, M] = input[0].split(' ').map(Number);
// const arr = input.slice(1).map(Number);

// arr.sort((a, b) => a - b);

// let i = 0,
//   j = 0;
// let min = Infinity;

// while (j < N) {
//   let dif = arr[j] - arr[i];

//   if (dif >= M) {
//     min = Math.min(min, dif);
//     i++;
//   } else {
//     j++;
//   }
// }

// console.log(min);

//1092-배
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let n = +input[0];
// let crain = input[1]
//   .split(' ')
//   .map(Number)
//   .sort((a, b) => b - a);
// let m = +input[2];
// let box = input[3]
//   .split(' ')
//   .map(Number)
//   .sort((a, b) => b - a);

// if (box[0] > crain[0]) {
//   console.log(-1);
//   return;
// }

// let time = 0;

// while (box.length > 0) {
//   time += 1;
//   for (let i = 0; i < crain.length; i++) {
//     for (let j = 0; j < box.length; j++) {
//       if (crain[i] >= box[j]) {
//         box.splice(j, 1);
//         break;
//       }
//     }
//   }
// }

// console.log(time);

//24445-알고리즘 수업 - 너비 우선 탐색 2
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let [n, m, r] = input[0].split(' ').map(Number);
// let arr = input.slice(1).map((v) => v.split(' ').map(Number));
// let graph = Array.from({ length: n + 1 }, () => []);

// for (let [a, b] of arr) {
//   graph[a].push(b);
//   graph[b].push(a);
// }

// graph.sort((v) => v.sort((a, b) => b - a));

// let visited = Array(n + 1).fill(0);
// let order = 1;
// let q = [r];
// visited[r] = order++;

// while (q.length) {
//   let node = q.shift();

//   for (const next of graph[node]) {
//     if (!visited[next]) {
//       visited[next] = order++;
//       q.push(next);
//     }
//   }
// }

// console.log(visited.slice(1).join('\n'));

//18310-안테나
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

// let c = Math.floor((n - 1) / 2);
// console.log(arr[c]);

//5800-성적 통계
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
//     .slice(1)
//     .sort((a, b) => b - a);

//   let max = arr[0];
//   let min = arr[arr.length - 1];

//   let m = 0;
//   for (let j = 0; j < arr.length - 1; j++) {
//     m = Math.max(m, arr[j] - arr[j + 1]);
//   }

//   console.log(`Class ${i}`);
//   console.log(`Max ${max}, Min ${min}, Largest gap ${m}`);
// }

//5576-콘테스트
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// const a = input
//   .slice(0, 10)
//   .map(Number)
//   .sort((a, b) => b - a)
//   .slice(0, 3);
// const b = input
//   .slice(10)
//   .map(Number)
//   .sort((a, b) => b - a)
//   .slice(0, 3);
// console.log(
//   a.reduce((a, c) => a + c, 0),
//   b.reduce((a, c) => a + c, 0),
// );

//1251-단어 나누기
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let word = input[0];
// let result = '';

// for (let i = 1; i < word.length - 1; i++) {
//   for (let j = i + 1; j < word.length; j++) {
//     let part1 = word.slice(0, i).split('').reverse().join('');
//     let part2 = word.slice(i, j).split('').reverse().join('');
//     let part3 = word.slice(j).split('').reverse().join('');
//     let combined = part1 + part2 + part3;

//     if (!result || combined < result) {
//       result = combined;
//     }
//   }
// }

// console.log(result);

//2628-종이 자르기
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let [n, m] = input[0].split(' ').map(Number);
// let count = +input[1];
// let arr = input.slice(2).map((v) => v.split(' ').map(Number));

// let h = [0, m];
// let v = [0, n];
// for (let [a, b] of arr) {
//   if (a === 0) {
//     h.push(b);
//   } else {
//     v.push(b);
//   }
// }

// h.sort((a, b) => a - b);
// v.sort((a, b) => a - b);

// let maxH = 0;
// let maxV = 0;

// for (let i = 1; i < h.length; i++) {
//   maxH = Math.max(maxH, h[i] - h[i - 1]);
// }

// for (let i = 1; i < v.length; i++) {
//   maxV = Math.max(maxV, v[i] - v[i - 1]);
// }

// console.log(maxH * maxV);

//2910-빈도정렬
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let [n, c] = input[0].split(' ').map(Number);
// let arr = input[1].split(' ').map(Number);
// let map = new Map();
// let sliceArr = new Set([...arr]);

// for (let i = 0; i < arr.length; i++) {
//   map.set(arr[i], (map.get(arr[i]) || 0) + 1);
// }

// sliceArr = [...sliceArr];
// map = [...map];
// let result = '';

// map.sort((a, b) => {
//   if (a[1] === b[1]) {
//     //같을 경우 먼저 나온
//     return sliceArr[b[0]] - sliceArr[a[0]];
//   }
//   return b[1] - a[1];
// });

// for (let [a, b] of map) {
//   for (let i = 0; i < b; i++) {
//     result += a + ' ';
//   }
// }

// console.log(result);

//2012-등수 매기기
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let n = +input[0];
// let arr = input
//   .slice(1)
//   .map(Number)
//   .sort((a, b) => a - b);

// let sum = 0;
// for (let i = 0; i < n; i++) {
//   sum += Math.abs(arr[i] - (i + 1));
// }

// console.log(sum);

//1377-버블소트
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let n = +input[0];
// let arr = input
//   .slice(1)
//   .map((v, i) => {
//     return {
//       value: v,
//       index: i,
//     };
//   })
//   .sort((a, b) => a.value - b.value);

// let max = 0;

// for (let i = 0; i < n; i++) {
//   max = Math.max(max, arr[i].index - i);
// }

// console.log(max + 1);

//20291-파일 정리
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let n = +input[0];
// let arr = input.slice(1).map((v) => v.trim().split('.'));

// let newArr = new Map();

// arr.forEach((v) => {
//   newArr.set(v[1], (newArr.get(v[1]) || 0) + 1);
// });

// newArr = [...newArr].sort((a, b) => a[0].localeCompare(b[0]));

// console.log(newArr.map((v) => v.join(' ')).join('\n'));

// //11497통나무 건너뛰기
// // const fs = require('fs');
// // const input = fs
// //   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
// //   .toString()
// //   .trim()
// //   .split('\n');

// // let t = +input[0];
// // let idx = 1;
// // let result = [];

// // for (let i = 0; i < t; i++) {
// //   let n = +input[idx++];
// //   let arr = input[idx++]
// //     .split(' ')
// //     .map(Number)
// //     .sort((a, b) => a - b);

// //   let max = 0;

// //   for (let j = 0; j < n - 2; j++) {
// //     max = Math.max(max, Math.abs(arr[j] - arr[j + 2]));
// //   }

// //   result.push(max);
// // }

// // console.log(result.join('\n'));

//1461-도서관
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let [n, m] = input[0].split(' ').map(Number);
// let arr = input[1]
//   .split(' ')
//   .map(Number)
//   .sort((a, b) => a - b);

// let aBox = [];
// let bBox = [];

// arr.forEach((v) => {
//   if (v > 0) {
//     aBox.push(v);
//   } else {
//     bBox.push(-v);
//   }
// });
// aBox.sort((a, b) => b - a);
// bBox.sort((a, b) => b - a);

// let sum = 0;
// let max = 0;

// if (aBox.length > 0) max = Math.max(max, aBox[0]);
// if (bBox.length > 0) max = Math.max(max, bBox[0]);

// for (let i = 0; i < aBox.length; i += m) {
//   sum += aBox[i] * 2;
// }

// for (let i = 0; i < bBox.length; i += m) {
//   sum += bBox[i] * 2;
// }

// sum -= max;

// console.log(sum);

//1822-차집합
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let [n, m] = input[0].split(' ').map(Number);
// let a = input[1]
//   .split(' ')
//   .map(Number)
//   .sort((a, b) => a - b);
// let b = new Set(input[2].split(' ').map(Number));

// a = a.filter((v) => !b.has(v));

// console.log(a.length);
// if (a.length > 0) {
//   console.log(a.join(' '));
// }

//15688-수 정렬하기5
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let n = +input[0];
// let arr = input
//   .slice(1)
//   .map(Number)
//   .sort((a, b) => a - b);
// console.log(arr.join('\n'));

//13904-과제
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let n = +input[0];
// let arr = input.slice(1).map((v) => v.split(' ').map(Number));
// arr.sort((a, b) => b[1] - a[1]);

// let max = 0;

// arr.forEach((v) => {
//   max = Math.max(v[0], max);
// });

// let map = Array(max + 1).fill(false);

// let sum = 0;

// arr.forEach((v) => {
//   let [day, score] = v;

//   for (let i = day; i > 0; i--) {
//     if (!map[i]) {
//       map[i] = true;
//       sum += score;
//       break;
//     }
//   }
// });

// console.log(sum);

//9076-점수 집계
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let t = +input[0];
// let arr = input.slice(1).map((v) => v.split(' ').map(Number));

// for (let i = 0; i < t; i++) {
//   arr[i].sort((a, b) => a - b);
//   let newArr = [];

//   for (let j = 1; j < arr[i].length - 1; j++) {
//     newArr.push(arr[i][j]);
//   }

//   if (newArr[newArr.length - 1] - newArr[0] > 3) {
//     console.log('KIN');
//   } else {
//     let sum = newArr.reduce((a, c) => a + c, 0);
//     console.log(sum);
//   }
// }

// //1059-좋은 구간
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let l = +input[0];
// let arr = input[1].split(' ').map(Number);
// let n = +input[2];

// arr.sort((a, b) => a - b);

// let startPoint = 0;
// let endpoint = 0;
// for (let i = 0; i < l; i++) {
//   if (arr[i] > n) {
//     startPoint = i > 0 ? arr[i - 1] : 0;
//     endpoint = arr[i];
//     break;
//   }
// }

// if (n < arr[0]) {
//   startPoint = 0;
//   endpoint = arr[0];
// }

// if (n > arr[l - 1]) {
//   console.log(0);
//   return;
// }

// startPoint += 1;
// endpoint -= 1;

// let count = 0;
// for (let A = startPoint; A <= n; A++) {
//   for (let B = n; B <= endpoint; B++) {
//     if (A < B) {
//       count++;
//     }
//   }
// }

// console.log(count);

//2109-순회강연-//런타임에러ㅜㅜ
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let n = +input[0];
// let arr = input.slice(1).map((v) => v.split(' ').map(Number));
// arr.sort((a, b) => b[0] - a[0]);

// let max = Math.max(...arr.map((v) => v[1]));
// let map = Array(max + 1).fill(0);

// let total = 0;

// for (let [p, d] of arr) {
//   for (let i = d; i > 0; i--) {
//     if (!map[i]) {
//       map[i] = 1;
//       total += p;
//       break;
//     }
//   }
// }

// console.log(total);

//1781-컵라면
// class MaxHeap {
//   constructor() {
//     this.heap = [];
//   }
//   swap(a, b) {
//     [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
//   }

//   size() {
//     return this.heap.length;
//   }

//   push(value) {
//     this.heap.push(value);
//     let current = this.heap.length - 1;
//     let parent = Math.floor((current - 1) / 2);

//     while (this.heap[parent] < value) {
//       this.swap(parent, current);
//       current = parent;
//       parent = Math.floor((current - 1) / 2);
//     }
//   }

//   pop() {
//     const last = this.heap.length - 1;
//     let current = 0;
//     this.swap(current, last);
//     const value = this.heap.pop();

//     while (current < last) {
//       let left = current * 2 + 1;
//       let right = current * 2 + 2;

//       if (left >= last) {
//         break;
//       } else if (right >= last) {
//         if (this.heap[current] < this.heap[left]) {
//           this.swap(current, left);
//           current = left;
//         } else {
//           break;
//         }
//       } else {
//         if (this.heap[left] > this.heap[current] || this.heap[right] > this.heap[current]) {
//           let next = this.heap[left] > this.heap[right] ? left : right;
//           this.swap(current, next);
//           current = next;
//         } else {
//           break;
//         }
//       }
//     }
//     return value;
//   }
// }

// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n')
//   .map((v) => v.split(' ').map(Number));
// const [N] = input.shift();
// if (N == 0) {
//   process.exit(console.log(0));
// }

// let answer = 0;
// const problem = input.sort((a, b) => b[0] - a[0]);
// let day = problem[0][0];
// let pq = new MaxHeap();

// for (let i = 0; i < N; i++) {
//   if (day == problem[i][0]) {
//     pq.push(problem[i][1]);
//   } else {
//     while (problem[i][0] < day) {
//       if (pq.size()) answer += pq.pop();
//       day--;
//     }
//     pq.push(problem[i][1]);
//   }
// }

// while (day > 0) {
//   if (pq.size()) answer += pq.pop();
//   day--;
// }

// console.log(answer);

//9237-이장님 초대
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
//   .sort((a, b) => b - a);

// let day = 0;

// for (let i = 0; i < n; i++) {
//   day = Math.max(day, arr[i] + i + 1);
// }

// console.log((day += 1));

//1758-알바생 강호
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let n = +input[0];
// let arr = input
//   .slice(1)
//   .map(Number)
//   .sort((a, b) => b - a)
//   .map((v, i) => (v = [v, i + 1]));

// let sum = 0;

// for (let [a, b] of arr) {
//   sum += a - (b - 1) > 0 ? a - (b - 1) : 0;
// }

// console.log(sum);

//13164-행복 유치원
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let [n, k] = input[0].split(' ').map(Number);
// let arr = input[1].split(' ').map(Number);

// let box = [];

// for (let i = 1; i < n; i++) {
//   box.push(arr[i] - arr[i - 1]);
// }

// box.sort((a, b) => b - a);

// box = box.slice(k - 1);
// console.log(box.reduce((a, c) => a + c, 0));

//11508-2+1세일
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const input = [];
// rl.on('line', (line) => {
//   input.push(line);
// }).on('close', () => {
//   let n = +input[0];
//   let arr = input
//     .slice(1)
//     .map(Number)
//     .sort((a, b) => a - b);

//   let sum = 0;

//   for (let i = n - 1; i >= 0; i -= 3) {
//     sum += arr[i];
//     if (i - 1 >= 0) sum += arr[i - 1];
//   }

//   console.log(sum);
// });

//2457-공주님의 정원
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let n = +input[0];
// let flowers = input
//   .slice(1)
//   .map((v) => {
//     let [a, b, c, d] = v.split(' ').map(Number);
//     return [a * 100 + b, c * 100 + d];
//   })
//   .sort((a, b) => {
//     if (a[0] === b[0]) {
//       return b[1] - a[1];
//     }
//     return a[0] - b[0];
//   });

// console.log(flowers);

//10431-줄세우기
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let p = +input[0];
// let results = [];

// for (let i = 1; i <= p; i++) {
//   let [t, ...students] = input[i].split(' ').map(Number);
//   let line = [];
//   let moves = 0;

//   for (let s of students) {
//     let insertIdx = line.findIndex((v) => v > s);
//     if (insertIdx === -1) {
//       line.push(s);
//     } else {
//       line.splice(insertIdx, 0, s);
//       moves += line.length - insertIdx - 1;
//     }
//   }
//   results.push(`${t} ${moves}`);
// }

// console.log(results.join('\n'));

//2870-수학숙제
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let t = +input[0];
// let result = [];

// for (let i = 1; i <= t; i++) {
//   let line = input[i];
//   let number = '';

//   for (let char of line) {
//     if (char >= '0' && char <= '9') {
//       number += char;
//     } else {
//       if (number.length > 0) {
//         result.push(BigInt(number));
//         number = '';
//       }
//     }
//   }

//   if (number.length > 0) {
//     result.push(BigInt(number));
//   }
// }

// console.log(result.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0)).join('\n'));

//6996-애너그램
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let t = +input[0];
// let arr = input.slice(1).map((v) => v.trim().split(' '));

// let result = [];

// for (let i = 0; i < t; i++) {
//   let [a, b] = arr[i];
//   let aSlice = a.split('').sort().join('');
//   let bSlice = b.split('').sort().join('');

//   if (aSlice === bSlice) {
//     result.push(`${a} & ${b} are anagrams.`);
//   } else {
//     result.push(`${a} & ${b} are NOT anagrams.`);
//   }
// }

// console.log(result.join('\n'));

//8980-택배
const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n');

let [n, c] = input[0].split(' ').map(Number);
let m = +input[1];
let arr = input
  .slice(2)
  .map((v) => v.split(' ').map(Number))
  .sort((a, b) => a[1] - b[1]);

let result = 0;
let truck = Array(n + 1).fill(0);

for (let [s, e, t] of arr) {
  let max = Math.max(...truck.slice(s, e));
  let min = Math.min(c - max, t);

  if (min > 0) {
    for (let i = s; i < e; i++) {
      truck[i] += min;
    }
  }

  result += min;
}

console.log(result);
