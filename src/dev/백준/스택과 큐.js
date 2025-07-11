// 스택 - (Last In First Out)LIFO
// 큐 - (First In First Out)FIFO

// class Stack {
//   constructor(){
//     this.arr = [];
//   }

//   push(data){
//     this.arr.push(data)
//   }

//   pop(index){
//     if(index === this.arr.length-1){
//       return this.arr.pop();
//     }

//     let result = this.arr.splice(index, 1);
//     return result
//   }

//   empty(){
//     if(this.arr.length===0){
//       return true;
//     }else{
//       return false;
//     }
//   }

//   top(){
//     return this.arr[this.arr.length-1]
//   }

//   bottom(){
//     return this.arr[0];
//   }

// }

// let s = new Stack();
// s.push(10);
// s.push(20);
// s.push(30);
// s.push(100);
// s.push(200);
// s.push(300);
// let popValue = s.pop(2)
// console.log(s);
// console.log(popValue)

//10773-제로
// class Zero {
//   constructor() {
//     this.arr = [];
//   }

//   push(data) {
//     return this.arr.push(data);
//   }

//   pop() {
//     return this.arr.pop();
//   }
// }

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
// const [n, ...arr] = input.map(Number);

// let array = new Zero();

// arr.forEach(v => {
//   if (v === 0) {
//     array.pop();
//   } else {
//     array.push(v);
//   }
// });

// let sum = array.arr.reduce((a, c) => a + c, 0);
// console.log(sum);

//10799-쇠막대기
// class Stack {
//   constructor() {
//     this.arr = [];
//   }

//   push(data) {
//     return this.arr.push(data);
//   }

//   pop() {
//     return this.arr.pop();
//   }

//   length() {
//     return this.arr.length;
//   }
// }

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = require('fs').readFileSync(filePath).toString().trim().split('');

// let stack = new Stack();
// let answer =0;

// input.forEach((v, i)=>{
//   if(v==='('){
//     stack.push(v);
//   }else{
//     if(input[i-1]==='('){
//       stack.pop();
//       answer+=stack.length();
//     }else{
//       stack.pop();
//       answer++;
//     }
//   }
// })

// console.log(answer)

//17413-단어 뒤집기2
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = require('fs').readFileSync(filePath).toString().trim().split('');

// let word = '';
// let ans ='';
// //공백이 문자내 공백인지 괄호안 공백인지 구분위함
// let isTag=false;

// //forin은 객체, forof는 문자열이나 배열
// for(let str of input){
//   if(str === '<'){
//     //괄호가 열림
//     isTag=true;

//     //괄호 전까지 나온 것 뒤집기+괄호
//     ans+=word.split('').reverse().join('')+str;

//     word='';
//   }else if(str === '>'){
//     //괄호가 닫힘
//     isTag = false;

//     //괄호안은 뒤집기x
//     ans+=word+str;

//     word=''
//   }else if(str ===' '){
//     //괄호안 빈칸인지 구분
//     ans+=(!isTag ? word.split('').reverse().join('') : word) + ' ';
//     word = '';
//   }else{
//     //아무 조건에 해당되지 않으면 그냥 넣음
//     word+=str;
//   }
// }
// // 만약 ">" 기호로 태그가 닫히는 것으로 끝나는게 아니라,
// // 문자로 끝나는 경우에는 word에 넣어진 상태로 for문이 종료된다.
// // 양 끝에는 공백이 없기 때문에 분기처리가 안되고 else문만 실행되고 종료되기 때문이다.
// // 따라서 출력 전에 word를 뒤집어서 바꿔줄 필요가 있다.
// ans+=word.split('').reverse().join('')
// console.log(ans)

//3986-좋은 단어
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
// const [n, ...arr]=input;

// let count =0;

// for(let word of arr){
//   let stack = [];
//   for(let letter of word){
//     if(stack.length && stack[stack.length-1] === letter){
//       stack.pop();
//     }else{
//       stack.push(letter);
//     }
//   }

//   if(stack.length === 0) count++;
// }

// console.log(count)

//12605-단어순서 뒤집기
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
// const [n, ...arr] = input;

// arr.forEach((v, i)=>{
//   console.log(`Case #${i+1}: `+v.trim().split(' ').reverse().join(' '))
// })

//11899-괄호끼워넣기
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = require('fs').readFileSync(filePath).toString().trim().split('');

// let balance = 0;  // 현재 균형을 나타내는 변수
// let additions = 0; // 추가해야 할 괄호의 개수를 저장하는 변수

// for(let str of input){
//   if(str === '('){
//     balance++;
//   }else{
//     balance--;
//   }

//   if(balance<0){
//     balance++;
//     additions++;
//   }
// }

// console.log(balance+additions)

//1202-보석도둑
//우선순위 큐
// class PriorityQueue {
//   constructor() {
//     this.store = [];
//   }
//   //무게와 가격을 받아서 배열에 넣어준다.
//   enqueue(name, score) {
//     this.store.push([name, score]);
//   }
//   //제일 큰 값을 리턴
//   dequeue() {
//     let entry = 0;
//     this.store.forEach((item, index) => {
//       if (this.store[entry][1] < this.store[index][1]) {
//         entry = index;
//       }
//     });
//     return this.store.splice(entry, 1);
//   }
// }

// const solution = (k, priorityQueue, bag) => {
//   let cnt = 0;
//   //가방 개수 만큼
//   for (let i = 0; i < k; i++) {
//     //우선순위 큐에서 제일 큰 보석정보 가져옴
//     let value = priorityQueue.dequeue();

//     //가방을 순회하면서 보석 무게보다 크거가 같은 경우는 그 보석을 담았다고 가정하고
//     //담은 가방을 제외한 가방을 리턴함
//     bag = bag.map((el, index) => {
//       if (el >= value[0][0]) {
//         return;
//       } else {
//         return el;
//       }
//     });
//     cnt += value[0][1];
//   }
//   console.log(cnt);
// };

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];
// rl.on("line", function (line) {
//   //여러줄 입력
//   input.push(line);
// }).on("close", function () {
//   let [n, k] = input
//     .shift()
//     .split(" ")
//     .map((el) => Number(el));

//   //우선순위 큐 생성
//   const priorityQueue = new PriorityQueue();

//   for (let i = 0; i < n; i++) {
//     let [x, y] = input[i].split(" ").map((el) => Number(el));
//     //우선순위 큐에 보석 무게, 가격 담아줌
//     priorityQueue.enqueue(x, y);
//   }
//   let bag = [];
//   //가방넣어줌
//   for (let j = 0; j < k; j++) {
//     bag.push(Number(input[j]));
//   }
//   //가방 오름차순정렬
//   bag = bag.sort((a, b) => a - b);
//   solution(k, priorityQueue, bag);
//   process.exit();
// });

//1766-문제집
// const fs = require('fs');

// const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

// const strToNumArr = (str) => str.split(' ').map(Number);

// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   getLength = () => {
//     return this.heap.length;
//   };

//   push = (node) => {
//     this.heap.push(node);
//     let i = this.heap.length - 1;
//     let parentI = Math.floor((i - 1) / 2);
//     while (i > 0 && this.heap[parentI] > this.heap[i]) {
//       this.swap(i, parentI);
//       i = parentI;
//       parentI = Math.floor((i - 1) / 2);
//     }
//   };

//   pop = () => {
//     if (this.heap.length === 1) {
//       return this.heap.pop();
//     }

//     const result = this.heap[0];
//     this.heap[0] = this.heap.pop();
//     let i = 0;
//     while (true) {
//       const leftI = i * 2 + 1,
//         rightI = i * 2 + 2;
//       if (leftI >= this.heap.length) {
//         break;
//       }
//       let nextI = i;
//       if (this.heap[nextI] > this.heap[leftI]) {
//         nextI = leftI;
//       }
//       if (rightI < this.heap.length && this.heap[nextI] > this.heap[rightI]) {
//         nextI = rightI;
//       }
//       if (nextI === i) {
//         break;
//       }
//       this.swap(i, nextI);
//       i = nextI;
//     }
//     return result;
//   };

//   swap = (a, b) => {
//     const temp = this.heap[a];
//     this.heap[a] = this.heap[b];
//     this.heap[b] = temp;
//   };
// }

// const [N, M] = strToNumArr(input.shift());
// const graph = [];
// const inDegrees = Array(N + 1).fill(0);
// for (let i = 0; i <= N; i++) {
//   graph.push([]);
// }

// input.forEach((str) => {
//   const [prev, next] = strToNumArr(str);
//   graph[prev].push(next);
//   inDegrees[next] += 1;
// });

// const pq = new MinHeap();
// for (let n = 1; n <= N; n++) {
//   if (inDegrees[n] === 0) {
//     pq.push(n);
//   }
// }

// const result = [];
// while (pq.getLength()) {
//   const n = pq.pop();
//   result.push(n);
//   graph[n].forEach((v) => {
//     inDegrees[v] -= 1;
//     if (!inDegrees[v]) {
//       pq.push(v);
//     }
//   });
// }

// console.log(result.join(' '));

//11000-강의실배정
// const fs = require('fs');

// // 입력을 읽어들입니다.
// const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
// input.shift(); // 첫 번째 줄 제거

// const times = [];

// // 입력을 처리하여 times 배열에 시작 시간과 끝 시간을 저장합니다.
// input.forEach((v) => {
//   const [start, end] = v.split(' ').map(Number);
//   times.push([start, 1]);
//   times.push([end, -1]);
// });

// // times 배열을 정렬합니다.
// times.sort((a, b) => {
//   if (a[0] === b[0]) return a[1] - b[1];
//   return a[0] - b[0];
// });

// let answer = 0;
// let result = 0;

// // 각 시간점에서의 변화를 누적하여 최대 동시 사용자를 계산합니다.
// for (let i = 0; i < times.length; i++) {
//   result += times[i][1];
//   answer = Math.max(result, answer);
// }

// // 결과를 출력합니다.
// console.log(answer);

//17299-오등큰수
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const iter = Number(input[0]);

// input = input[1].split(" ").map((item) => Number(item));

// // -1로 채워진 ans 배열 생성
// let ans = new Array(iter).fill(-1);

// // count에는 중복되는 숫자의 개수를 넣어줄 것임. key - value 형태로.
// // 예를들어, 1이 3개면 "1" : 3 이런식.
// let count = {};

// // input에 있는 원소를 하나씩 돌리면서
// // count[x]가 존재한다면 value + 1
// // count[x]가 없다면 0 + 1
// input.forEach((x) => {
//   count[x] = (count[x] || 0) + 1;
// });

// let stack = [];

// for (let i = 0; i < iter; i++) {
//     while (
//         stack.length &&
//         count[input[stack[stack.length - 1]]] < count[input[i]]
//     ) {
//         ans[stack.pop()] = input[i];
//     }
//     stack.push(i);
// }

// console.log(ans.join(" "));

//1725-히스토그램
// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// const [input_N, ...input_blocks] = input.map(
//   (v) => v.trim().split("\n").map(Number)[0]
// );

// function solution(N, blocks) {
//   const calculate = (stack, len, MAX) => {
//     const [target, _] = stack.pop();
//     let width = 0;
//     if (stack.length === 0) width = len;
//     else width = len - stack[stack.length - 1][1] - 1;
//     MAX = Math.max(MAX, width * target);

//     return [stack, MAX];
//   };

//   let stack = [];
//   let MAX = 0;
//   blocks.forEach((block, idx) => {
//     while (stack.length !== 0 && stack[stack.length - 1][0] > block) {
//       [stack, MAX] = calculate(stack, idx, MAX);
//     }
//     stack.push([block, idx]);
//   });
//   while (stack.length !== 0) {
//     [stack, MAX] = calculate(stack, N, MAX);
//   }

//   return MAX;
// }

// console.log(solution(input_N, input_blocks));

//3015-오아시스 재결합
// const fs = require('fs');
// const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n').map(Number);
// const N = input.shift();
// let answer = 0;
// let s = [];
// for (let i = 0; i < N; i++) {
//   const now = input[i]

//   // console.log("========value: ", now,"==============")
//   let same = 1;
//   while (s.length > 0 && s[s.length - 1].value <= now) {
//     answer += s[s.length - 1].same;

//     if (s[s.length - 1].value == now) {
//       same = s[s.length - 1].same + 1;
//     } else {
//       same = 1;
//     }
//     s.pop();
//   }
//   if (s.length > 0) {
//     answer++;
//   }
//   s.push({ value: now, same })
// }

// console.log(answer)

//19598-최소 회의실 개수
// const fs = require('fs');
// let input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');
// const N = parseInt(input[0]);
// const meetings = [];

// for (let i = 1; i <= N; i++) {
//   const [start, end] = input[i].split(' ').map(Number);
//   meetings.push([start, end]);
// }

// meetings.sort((a, b) => a[0] - b[0]);

// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   peek() {
//     return this.heap.length ? this.heap[0] : null;
//   }

//   size() {
//     return this.heap.length;
//   }

//   push(value) {
//     this.heap.push(value);
//     this.heapifyUp();
//   }

//   heapifyUp() {
//     let index = this.heap.length - 1;

//     while (index > 0) {
//       let parentIndex = Math.floor((index - 1) / 2);
//       if (this.heap[parentIndex] <= this.heap[index]) break;
//       [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
//       index = parentIndex;
//     }
//   }

//   pop() {
//     if (this.heap.length === 1) return this.heap.pop();
//     let min = this.heap[0];
//     this.heap[0] = this.heap.pop();
//     this.heapifyDown();
//     return min;
//   }

//   heapifyDown() {
//     let index = 0;
//     let length = this.heap.length;

//     while (true) {
//       let leftChild = index * 2 + 1;
//       let rightChild = index * 2 + 2;
//       let smallest = index;

//       if (leftChild < length && this.heap[leftChild] < this.heap[smallest]) {
//         smallest = leftChild;
//       }
//       if (rightChild < length && this.heap[rightChild] < this.heap[smallest]) {
//         smallest = rightChild;
//       }
//       if (smallest === index) break;

//       [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
//       index = smallest;
//     }
//   }
// }

// let pq = new MinHeap();

// for (const [s, e] of meetings) {
//   if (pq.size() && pq.peek() <= s) {
//     pq.pop();
//   }
//   pq.push(e);
// }

// console.log(pq.size());
