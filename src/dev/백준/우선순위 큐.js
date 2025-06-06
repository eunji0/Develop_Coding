//1927-최소힙
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// class MinHeap {
//   constructor() {
//     this.nodes = [];
//   }

//   insert(data) {
//     this.nodes.push(data);
//     this.bubbleUp();
//   }

//   bubbleUp(index = this.nodes.length - 1) {
//     if (index < 1) return;
//     let currentNode = this.nodes[index];
//     let parentIndex = Math.floor((index - 1) / 2);
//     let parentNode = this.nodes[parentIndex];

//     if (parentNode <= currentNode) return;

//     this.nodes[parentIndex] = currentNode;
//     this.nodes[index] = parentNode;
//     index = parentIndex;
//     this.bubbleUp(index);
//   }

//   extract() {
//     const min = this.nodes[0];

//     if (this.nodes.length === 1) {
//       this.nodes.pop();
//       return min;
//     }

//     this.nodes[0] = this.nodes.pop();
//     this.trickleDown();
//     return min;
//   }

//   trickleDown(index = 0) {
//     let leftChildIndex = index * 2 + 1;
//     let rightChildIndex = index * 2 + 2;
//     let length = this.nodes.length;
//     let minimum = index;

//     if (!this.nodes[leftChildIndex] && !this.nodes[rightChildIndex]) return;

//     if (!this.nodes[rightChildIndex]) {
//       if (this.nodes[leftChildIndex] < this.nodes[minimum]) {
//         minimum = leftChildIndex;
//       }
//     }

//     if (this.nodes[leftChildIndex] < this.nodes[rightChildIndex]) {
//       if (leftChildIndex < length && this.nodes[leftChildIndex] < this.nodes[minimum]) {
//         minimum = leftChildIndex;
//       }
//     } else {
//       if (rightChildIndex < length && this.nodes[rightChildIndex] < this.nodes[minimum]) {
//         minimum = rightChildIndex;
//       }
//     }

//     if (minimum !== index) {
//       let t = this.nodes[minimum];
//       this.nodes[minimum] = this.nodes[index];
//       this.nodes[index] = t;
//       this.trickleDown(minimum);
//     }
//   }
// }

// let operations = [];

// for (let i = 1; i < input.length; i++) {
//   operations.push(+input[i]);
// }

// const heap = new MinHeap();
// let extracts = '';

// operations.forEach((operation, index) => {
//   if (operation !== 0) {
//     heap.insert(operation);
//   } else {
//     if (heap.nodes.length === 0) {
//       extracts += '0' + '\n';
//     } else {
//       let t = heap.extract();
//       extracts += t + '\n';
//     }
//   }
// });

// console.log(extracts.trim());

//11279-최대힙
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");

// class maxHeap {
//     constructor() {
//         this.nodes = []
//     }

//     insert(data) {
//         this.nodes.push(data)
//         //push된 가장 마지막 원소를 부모노드와 비교
//         this.bubbleUp()
//     }

//     //삽입된 노드를 위로 올려 부모와 비교하여 위치를 조정하는 메서드
//     bubbleUp(index = this.nodes.length - 1) {
//         if (index < 1) return
//         //현재노드
//         let currentNode = this.nodes[index]
//         //부모인덱스
//         let parentIndex = Math.floor((index - 1) / 2)
//         //부모노드
//         let parentNode = this.nodes[parentIndex]

//         //현재 노드와 부모 노드를 비교하여 부모 노드가 크다면 return.
//         if (parentNode >= currentNode) return

//         //현재 노드가 크다면 swap
//         this.nodes[parentIndex] = currentNode
//         this.nodes[index] = parentNode
//         index = parentIndex
//         //제자리를 찾을때까지 swap
//         this.bubbleUp(index)
//     }

//     //최대 힙에서 최댓값(루트 노드)을 추출
//     extract() {
//       //최댓값 정의
//         const max = this.nodes[0]

//         //힙의 길이가 1이면 pop하고 해당원소를 return
//         if (this.nodes.length === 1) {
//             this.nodes.pop()
//             return max
//         }

//         //현재 힙에 있는 가장 마지막 노드를 루트 자리에 놓는다.
//         this.nodes[0] = this.nodes.pop()
//         //최대 힙 속성을 다시 만족하도록 한다.
//         this.trickleDown()
//         return max
//     }

//     //부모자식 관계 재정리
//     trickleDown(index = 0) {
//       //왼쪽 자식 index: (현재 노드의 index × 2) + 1
//         let leftChildIndex = index * 2 + 1
//         //오른쪽 자식 index: (현재 노드의 index × 2) + 2
//         let rightChildIndex = index * 2 + 2
//         let length = this.nodes.length
//         let maximum = index

//         //자식이 둘 다 없으면? 마침내 제자리를 찾았다는 의미다. 재귀를 멈춘다.
//         if (!this.nodes[leftChildIndex] && !this.nodes[rightChildIndex]) return

//         //왼쪽 자식만 있으면?(=오른쪽 자식이 없다면) 왼쪽 자식과 비교한다.
//         if (!this.nodes[rightChildIndex]) {
//             if (this.nodes[leftChildIndex] > this.nodes[maximum]) {
//                 maximum = leftChildIndex
//             }
//         }

//         //자식이 둘 다 있으면? 두 자식 중 값이 더 큰 자식과 비교한다.
//         if (this.nodes[leftChildIndex] < this.nodes[rightChildIndex]) {
//             if (rightChildIndex <= length && this.nodes[rightChildIndex] > this.nodes[maximum]) {
//                 maximum = rightChildIndex
//             }
//         } else {
//             if (leftChildIndex <= length && this.nodes[leftChildIndex] > this.nodes[maximum]) {
//                 maximum = leftChildIndex
//             }
//         }

//         if (maximum !== index) {
//             let t = this.nodes[maximum]
//             this.nodes[maximum] = this.nodes[index]
//             this.nodes[index] = t
//             this.trickleDown(maximum)
//         }
//     }
// }

// let operations = []

// for (let i = 1; i < input.length; i++) {
//     operations.push(+input[i])
// }

// const heap = new maxHeap()
// let extracts = ''

// operations.forEach((operation, index) => {
//     if (operation !== 0) {
//         heap.insert(operation)
//     } else {
//       //힙의 노드 개수가 0이라면, 추출할 값이 없으므로 "0"을 extracts에 추가한다.
//         if (heap.nodes.length === 0) {
//             extracts += "0" + "\n"
//         } else {
//           //그렇지 않으면, heap.extract()를 호출하여 힙에서 최댓값을 추출하고, extracts에 추가한다.
//             let t = heap.extract()
//             extracts += t + "\n"
//         }
//     }
// })

// console.log(extracts.trim())

//1927-최소힙
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   push(v) {
//     this.heap.push(v);
//     this.bubbleUp();
//   }

//   bubbleUp() {
//     let index = this.heap.length - 1;
//     let last = this.heap[index];
//     while (index > 0) {
//       let parentIndex = Math.floor((index - 1) / 2);
//       if (this.heap[parentIndex] <= last) break;
//       this.heap[index] = this.heap[parentIndex];
//       index = parentIndex;
//     }

//     return (this.heap[index] = last);
//   }

//   pop() {
//     if (this.heap.length === 0) return 0;
//     if (this.heap.length === 1) return this.heap.pop();
//     let top = this.heap[0];
//     let last = this.heap.pop();
//     this.heap[0] = last;
//     this.bubbleDown();
//     return top;
//   }

//   bubbleDown() {
//     let index = 0;
//     let length = this.heap.length;

//     while (true) {
//       let left = index * 2 + 1;
//       let right = index * 2 + 2;
//       let smallest = index;

//       if (left < length && this.heap[left] < this.heap[smallest]) {
//         smallest = left;
//       }
//       if (right < length && this.heap[right] < this.heap[smallest]) {
//         smallest = right;
//       }

//       if (smallest === index) break;

//       [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
//       index = smallest;
//     }
//   }
// }

// const n = +input[0];
// const operations = input.slice(1).map(Number);
// const heap = new MinHeap();
// const result = [];

// for (let x of operations) {
//   if (x === 0) {
//     result.push(heap.pop());
//   } else {
//     heap.push(x);
//   }
// }

// console.log(result.join('\n'));

//11279-최대힙
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// class maxHeap {
//   constructor() {
//     this.heap = [];
//   }

//   push(v) {
//     this.heap.push(v);
//     this.bubbleUp();
//   }

//   bubbleUp() {
//     let index = this.heap.length - 1;
//     let last = this.heap[index];

//     while (index > 0) {
//       let parentIndex = Math.floor((index - 1) / 2);
//       if (last <= this.heap[parentIndex]) break;
//       this.heap[index] = this.heap[parentIndex];
//       index = parentIndex;
//     }

//     this.heap[index] = last;
//   }

//   pop() {
//     if (this.heap.length === 0) return 0;
//     if (this.heap.length === 1) return this.heap.pop();

//     let top = this.heap[0];
//     let last = this.heap.pop();
//     this.heap[0] = last;
//     this.bubbleDown();
//     return top;
//   }

//   bubbleDown() {
//     let index = 0;
//     let length = this.heap.length;
//     let element = this.heap[0];

//     while (true) {
//       let left = index * 2 + 1;
//       let right = index * 2 + 2;
//       let largest = index;

//       if (left < length && this.heap[left] > this.heap[largest]) {
//         largest = left;
//       }
//       if (right < length && this.heap[right] > this.heap[largest]) {
//         largest = right;
//       }

//       if (largest === index) break;

//       [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
//       index = largest;
//     }
//   }
// }

// let heap = new maxHeap();
// let result = [];
// let n = +input[0];
// let arr = input.slice(1).map(Number);

// for (let a of arr) {
//   if (a === 0) {
//     result.push(heap.pop());
//   } else {
//     heap.push(a);
//   }
// }

// console.log(result.join('\n'));

//11286-절댓값 힙
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// class AbsMinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   compare(a, b) {
//     // 절댓값이 작으면 우선
//     if (Math.abs(a) < Math.abs(b)) return true;
//     if (Math.abs(a) > Math.abs(b)) return false;
//     // 절댓값 같으면 실제 값이 작은 게 우선
//     return a < b;
//   }

//   push(v) {
//     this.heap.push(v);
//     this.bubbleUp();
//   }

//   bubbleUp() {
//     let index = this.heap.length - 1;
//     const element = this.heap[index];

//     while (index > 0) {
//       const parentIndex = Math.floor((index - 1) / 2);
//       const parent = this.heap[parentIndex];

//       if (this.compare(element, parent)) {
//         this.heap[index] = parent;
//         index = parentIndex;
//       } else {
//         break;
//       }
//     }

//     this.heap[index] = element;
//   }

//   pop() {
//     if (this.heap.length === 0) return 0;
//     if (this.heap.length === 1) return this.heap.pop();

//     const top = this.heap[0];
//     const end = this.heap.pop();
//     this.heap[0] = end;
//     this.bubbleDown();
//     return top;
//   }

//   bubbleDown() {
//     let index = 0;
//     const length = this.heap.length;
//     const element = this.heap[0];

//     while (true) {
//       let left = 2 * index + 1;
//       let right = 2 * index + 2;
//       let swap = null;

//       if (left < length) {
//         if (this.compare(this.heap[left], element)) {
//           swap = left;
//         }
//       }

//       if (right < length) {
//         if (
//           (swap === null && this.compare(this.heap[right], element)) ||
//           (swap !== null && this.compare(this.heap[right], this.heap[left]))
//         ) {
//           swap = right;
//         }
//       }

//       if (swap === null) break;
//       this.heap[index] = this.heap[swap];
//       index = swap;
//     }

//     this.heap[index] = element;
//   }
// }

// const heap = new AbsMinHeap();
// const result = [];
// const n = +input[0];
// const arr = input.slice(1).map(Number);

// for (let a of arr) {
//   if (a !== 0) {
//     heap.push(a);
//   } else {
//     result.push(heap.pop());
//   }
// }

// console.log(result.join('\n'));

//1715-카드 정렬하기
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   push(v) {
//     this.heap.push(v);
//     this.bubbleUp();
//   }

//   bubbleUp() {
//     let index = this.heap.length - 1;
//     let last = this.heap[index];

//     while (index > 0) {
//       let parentIndex = Math.floor((index - 1) / 2);
//       if (last >= this.heap[parentIndex]) break;
//       this.heap[index] = this.heap[parentIndex];
//       index = parentIndex;
//     }

//     this.heap[index] = last;
//   }

//   pop() {
//     if (this.heap.length === 0) return 0;
//     if (this.heap.length === 1) return this.heap.pop();

//     let top = this.heap[0];
//     let last = this.heap.pop();
//     this.heap[0] = last;
//     this.bubbleDown();
//     return top;
//   }

//   bubbleDown() {
//     let index = 0;
//     let length = this.heap.length;
//     while (true) {
//       let left = index * 2 + 1;
//       let right = index * 2 + 2;
//       let smallest = index;

//       if (left < length && this.heap[left] < this.heap[smallest]) {
//         smallest = left;
//       }
//       if (right < length && this.heap[right] < this.heap[smallest]) {
//         smallest = right;
//       }

//       if (smallest === index) break;

//       [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
//       index = smallest;
//     }
//   }
// }

// let n = +input[0];
// let arr = input.slice(1).map(Number);

// let heap = new MinHeap();
// let result = 0;

// arr.forEach((v) => heap.push(v));

// while (heap.heap.length > 1) {
//   let first = heap.pop();
//   let second = heap.pop();
//   const total = first + second;
//   result += total;
//   heap.push(total);
// }

// console.log(result);

//1655-가운데를 말해요
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   push(v) {
//     this.heap.push(v);
//     this.bubbleUp();
//   }

//   bubbleUp() {
//     let index = this.heap.length - 1;
//     let last = this.heap[index];

//     while (index > 0) {
//       let parentIndex = Math.floor((index - 1) / 2);
//       if (last >= this.heap[parentIndex]) break;
//       this.heap[index] = this.heap[parentIndex];
//       index = parentIndex;
//     }

//     this.heap[index] = last;
//   }

//   pop() {
//     if (this.heap.length === 0) return 0;
//     if (this.heap.length === 1) return this.heap.pop();

//     let top = this.heap[0];
//     let last = this.heap.pop();
//     this.heap[0] = last;
//     this.bubbleDown();
//     return top;
//   }

//   bubbleDown() {
//     let index = 0;
//     let length = this.heap.length;

//     while (true) {
//       let left = index * 2 + 1;
//       let right = index * 2 + 2;
//       let smallest = index;

//       if (left < length && this.heap[left] < this.heap[smallest]) {
//         smallest = left;
//       }

//       if (right < length && this.heap[right] < this.heap[smallest]) {
//         smallest = right;
//       }

//       if (smallest === index) break;

//       [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
//       index = smallest;
//     }
//   }

//   peek() {
//     return this.heap[0];
//   }

//   size() {
//     return this.heap.length;
//   }
// }

// class MaxHeap extends MinHeap {
//   push(val) {
//     super.push(-val);
//   }

//   pop() {
//     return -super.pop();
//   }

//   peek() {
//     return -super.peek();
//   }
// }

// let n = +input[0];
// let arr = input.slice(1).map(Number);
// let left = new MaxHeap(); // 중간값 이하
// let right = new MinHeap(); // 중간값 초과
// let result = [];

// for (let i = 0; i < n; i++) {
//   let num = arr[i];

//   if (left.size() === 0 || num <= left.peek()) {
//     left.push(num);
//   } else {
//     right.push(num);
//   }

//   // 균형 맞추기
//   if (left.size() > right.size() + 1) {
//     right.push(left.pop());
//   } else if (right.size() > left.size()) {
//     left.push(right.pop());
//   }

//   result.push(left.peek());
// }

// console.log(result.join('\n'));

//1202-보석 도둑
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// class MaxHeap {
//   constructor() {
//     this.heap = [];
//   }

//   push(v) {
//     this.heap.push(v);
//     this.bubbleUp();
//   }

//   bubbleUp() {
//     let index = this.heap.length - 1;
//     let last = this.heap[index];

//     while (index > 0) {
//       let parentIndex = Math.floor((index - 1) / 2);
//       if (last <= this.heap[parentIndex]) break;
//       this.heap[index] = this.heap[parentIndex];
//       index = parentIndex;
//     }

//     this.heap[index] = last;
//   }

//   pop() {
//     if (this.heap.length === 0) return 0;
//     if (this.heap.length === 1) return this.heap.pop();

//     let top = this.heap[0];
//     let last = this.heap.pop();
//     this.heap[0] = last;
//     this.bubbleDown();
//     return top;
//   }

//   bubbleDown() {
//     let index = 0;
//     let length = this.heap.length;
//     let element = this.heap[0];

//     while (true) {
//       let left = index * 2 + 1;
//       let right = index * 2 + 2;
//       let largest = index;

//       if (left < length && this.heap[left] > this.heap[largest]) {
//         largest = left;
//       }
//       if (right < length && this.heap[right] > this.heap[largest]) {
//         largest = right;
//       }

//       if (largest === index) break;

//       [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
//       index = largest;
//     }
//   }

//   size() {
//     return this.heap.length;
//   }
// }

// let [n, k] = input[0].split(' ').map(Number);
// let jewels = input.slice(1, n + 1).map((v) => v.split(' ').map(Number));
// let bags = input.slice(n + 1).map(Number);

// // 보석 무게 오름차순, 무게 같으면 가격 높은 순 정렬
// jewels.sort((a, b) => a[0] - b[0]);
// bags.sort((a, b) => a - b);

// let result = 0;
// let heap = new MaxHeap();
// let j = 0; //개수 체크용

// for (let i = 0; i < k; i++) {
//   let capacity = bags[i];

//   // 현재 가방보다 작거나 같은 무게의 보석을 heap에 가격 기준으로 넣음
//   while (j < n && jewels[j][0] <= capacity) {
//     heap.push(jewels[j][1]); // 가격만 힙에 넣기
//     j++;
//   }

//   if (heap.size() > 0) {
//     result += heap.pop(); // 가장 비싼 보석 꺼냄
//   }
// }

// console.log(result);

//1766-문제집
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   push(value) {
//     this.heap.push(value);
//     this._heapifyUp();
//   }

//   pop() {
//     if (this.heap.length === 1) return this.heap.pop();
//     const top = this.heap[0];
//     this.heap[0] = this.heap.pop();
//     this._heapifyDown();
//     return top;
//   }

//   _heapifyUp() {
//     let index = this.heap.length - 1;
//     while (index > 0) {
//       let parent = Math.floor((index - 1) / 2);
//       if (this.heap[parent] <= this.heap[index]) break;
//       [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
//       index = parent;
//     }
//   }

//   _heapifyDown() {
//     let index = 0;
//     const length = this.heap.length;

//     while (true) {
//       let left = index * 2 + 1;
//       let right = index * 2 + 2;
//       let smallest = index;

//       if (left < length && this.heap[left] < this.heap[smallest]) smallest = left;
//       if (right < length && this.heap[right] < this.heap[smallest]) smallest = right;
//       if (smallest === index) break;

//       [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
//       index = smallest;
//     }
//   }

//   size() {
//     return this.heap.length;
//   }
// }

// let [n, m] = input[0].split(' ').map(Number);
// let graph = Array.from({ length: n + 1 }, () => []);
// let inDegree = Array(n + 1).fill(0);

// const heap = new MinHeap();

// for (let i = 1; i <= m; i++) {
//   let [a, b] = input[i].split(' ').map(Number);
//   graph[a].push(b);
//   inDegree[b]++;
// }

// for (let i = 1; i <= n; i++) {
//   if (inDegree[i] === 0) {
//     heap.push(i);
//   }
// }

// const result = [];

// while (heap.size() > 0) {
//   const cur = heap.pop();
//   result.push(cur);

//   for (const next of graph[cur]) {
//     inDegree[next]--;
//     if (inDegree[next] === 0) {
//       heap.push(next);
//     }
//   }
// }

// console.log(result.join(' '));

//13904-과제
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

//d는 배열의 길이를 제한하는 키
//d의 길이를 넘게 되면 제일 작은 수를 뺌
//제일 작은 수를 빼야 하기 때문에 최소힙을 사용

// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   push(v) {
//     this.heap.push(v);
//     this.bubbleUp();
//   }

//   bubbleUp() {
//     let index = this.heap.length - 1;
//     let last = this.heap[index];

//     while (index > 0) {
//       let parentIndex = Math.floor((index - 1) / 2);

//       if (last >= this.heap[parentIndex]) break;
//       this.heap[index] = this.heap[parentIndex];
//       index = parentIndex;
//     }

//     this.heap[index] = last;
//   }

//   pop() {
//     if (this.heap.length === 0) return 0;
//     if (this.heap.length === 1) return this.heap.pop();

//     let top = this.heap[0];
//     let last = this.heap.pop();
//     this.heap[0] = last;
//     this.bubbleDown();
//     return top;
//   }

//   bubbleDown() {
//     let index = 0;
//     let length = this.heap.length;

//     while (true) {
//       let left = index * 2 + 1;
//       let right = index * 2 + 2;
//       let smallest = index;

//       if (left < length && this.heap[left] < this.heap[smallest]) {
//         smallest = left;
//       }
//       if (right < length && this.heap[right] < this.heap[smallest]) {
//         smallest = right;
//       }

//       if (index === smallest) break;
//       [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
//       index = smallest;
//     }
//   }

//   top() {
//     return this.heap[0];
//   }

//   size() {
//     return this.heap.length;
//   }
// }

// let n = +input[0];
// let dw = input.slice(1).map((v) => v.split(' ').map(Number));
// dw.sort((a, b) => a[0] - b[0]);
// let heap = new MinHeap();

// for (let [d, w] of dw) {
//   if (heap.size() < d) {
//     heap.push(w);
//   } else if (heap.top() < w) {
//     heap.pop();
//     heap.push(w);
//   }
// }

// console.log(heap.heap.reduce((a, c) => a + c, 0));

//2696-중앙값 구하기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//홀수이면 sort() 오름차순 정렬 후 중앙값 출력
//짝수이면 push()
//출력은 Math.floor(m/2)+1
//중앙값 출력

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this._bubbleUp();
  }

  pop() {
    const top = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length) {
      this.heap[0] = end;
      this._bubbleDown();
    }
    return top;
  }

  top() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  _bubbleUp() {
    let idx = this.heap.length - 1;
    const el = this.heap[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx] <= el) break;
      this.heap[idx] = this.heap[parentIdx];
      idx = parentIdx;
    }
    this.heap[idx] = el;
  }

  _bubbleDown() {
    let idx = 0;
    const length = this.heap.length;
    const el = this.heap[0];
    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let smallest = idx;

      if (leftIdx < length && this.heap[leftIdx] < this.heap[smallest]) {
        smallest = leftIdx;
      }
      if (rightIdx < length && this.heap[rightIdx] < this.heap[smallest]) {
        smallest = rightIdx;
      }

      if (smallest === idx) break;

      this.heap[idx] = this.heap[smallest];
      idx = smallest;
    }
    this.heap[idx] = el;
  }
}

class MaxHeap extends MinHeap {
  push(val) {
    super.push(-val);
  }

  pop() {
    return -super.pop();
  }

  top() {
    return -super.top();
  }
}

let idx = 0;
let t = +input[idx++];
let output = [];

while (t--) {
  let m = +input[idx++];
  let arr = [];

  while (arr.length < m) {
    arr = arr.concat(input[idx++].split(' ').map(Number));
  }

  let left = new MaxHeap(); // 작은 값 (왼쪽)
  let right = new MinHeap(); // 큰 값 (오른쪽)
  let medians = [];

  for (let i = 0; i < m; i++) {
    const num = arr[i];

    if (left.size() === right.size()) {
      left.push(num);
    } else {
      right.push(num);
    }

    // 균형 유지
    if (right.size() && left.top() > right.top()) {
      const l = left.pop();
      const r = right.pop();
      left.push(r);
      right.push(l);
    }

    if (i % 2 === 0) {
      medians.push(left.top());
    }
  }

  output.push(medians.length.toString());
  for (let i = 0; i < medians.length; i += 10) {
    output.push(medians.slice(i, i + 10).join(' '));
  }
}

console.log(output.join('\n'));
