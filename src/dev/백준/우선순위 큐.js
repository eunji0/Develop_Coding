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

//14235-크리스마스 선물
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
//     if (this.heap.length === 0) return -1;
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
//       let biggest = index;

//       if (left < length && this.heap[left] > this.heap[biggest]) {
//         biggest = left;
//       }
//       if (right < length && this.heap[right] > this.heap[biggest]) {
//         biggest = right;
//       }

//       if (biggest === index) break;

//       [this.heap[index], this.heap[biggest]] = [this.heap[biggest], this.heap[index]];
//       index = biggest;
//     }
//   }

//   top() {
//     return this.heap[0];
//   }
// }

// let n = +input[0];
// let arr = input.slice(1).map((v) => v.split(' ').map(Number));
// let result = [];
// let heap = new MaxHeap();

// arr.forEach((v) => {
//   let a = v[0];

//   if (a === 0) {
//     result.push(heap.pop());
//   } else {
//     for (let i = 1; i <= a; i++) {
//       heap.push(v[i]);
//     }
//   }
// });

// console.log(result.join('\n'));

//238432-콘센트
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

//       if (index === smallest) break;
//       [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
//       index = smallest;
//     }
//   }

//   getMax() {
//     return Math.max(...this.heap);
//   }
// }

// const [N, M] = input[0].split(' ').map(Number);
// const times = input[1]
//   .split(' ')
//   .map(Number)
//   .sort((a, b) => b - a);

// const heap = new MinHeap();
// for (let i = 0; i < M; i++) heap.push(0);

// for (let t of times) {
//   let minTime = heap.pop();
//   heap.push(minTime + t);
// }

// console.log(heap.getMax());

//5464-주차장
//비어있는 공간이 있는지 확인
//비어있지않다면 빈공간이 생길때까지 웨이팅
//차량이 나가 비어있다면 번호가 가장 작은 주차 공간에 주차
//대기장소는 큐, 먼저 대기한 차량부터 주차
//주차료는 차랑의 무게에다 주차 공간마다 따로 책정된 단위 무게당 요금을 곱한 가격

// 예제 1
// 1:200 2:100 3:300 4:800 차량 무게
// 1:2 2:3 3:5 주차자리 단위 무게

// 3이들어간다 빈자리2 2(1번자리)*300
// 2가들어간다 빈자리 1 2(1번자리)*300+3(2번자리)*100
// -3이 나온다 빈자리 2
// 1이 들어간다 빈자리 1 번호가 작은 자리에 넣기 위해 +2(1번자리)*200
// 4가 들어간다 빈자리 0 +5(3번자리)*800
// 4가 나온다 빈자리 1
// 2가 나온다 빈자리 2
// 1이 나온다 빈자리 3

// 예제2
// 1:100 2:500 3:1000 4:2000 차량 무게
// 1:5 2:2 주차자리 단위 무게

// 3이 들어간다. 1번자리 5*1000 1:5:true 2:2:false
// 1이 들어간다. 2번자리 +2*100 1:5:true 2:2:true
// 2 자리가 없어 큐에 삽입
// 4 큐에 삽입
// 1이 나온다 1:5:false 2:2:true
// 큐가 비어있지 않아 2가 들어간다. 2번자리 +2*500 1:5:true 2:2:true
// 3이 나온다. 1:5:false 2:2:true
// 4가 들어간다. 1:5:true 2:2:true 1번 자리 5*2000
// 2가 나온다
// 4가 나온다

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(v) {
    this.heap.push(v);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    let last = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (last >= this.heap[parentIndex]) break;
      this.heap[index] = this.heap[parentIndex];
      index = parentIndex;
    }

    this.heap[index] = last;
  }

  pop() {
    if (this.heap.length === 0) return 0;
    if (this.heap.length === 1) return this.heap.pop();

    let top = this.heap[0];
    let last = this.heap.pop();
    this.heap[0] = last;
    this.bubbleDown();
    return top;
  }

  bubbleDown() {
    let index = 0;
    let length = this.heap.length;

    while (true) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let smallest = index;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (index === smallest) break;
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
  size() {
    return this.heap.length;
  }
}

let [n, m] = input[0].split(' ').map(Number);
let prices = input.slice(1, n + 1).map(Number);
let weights = input.slice(n + 1, n + m + 1).map(Number);
let orders = input.slice(n + m + 1).map(Number);

let parking = Array(n).fill(null); // n개의 주차 공간을 null로 초기화 (빈자리 표시)
let carToParking = Array(m + 1).fill(null); // 각 차량의 주차 위치를 기록할 배열 (1번 차량부터 시작하므로 m+1 크기)
let heap = new MinHeap();
let queue = [];
for (let i = 0; i < n; i++) heap.push(i); //처음엔 모두가 빈자리
let total = 0;

for (let ord of orders) {
  if (ord > 0) {
    //차량이 들어가야 한다면
    if (heap.size() > 0) {
      //빈자리가 있다면
      let spot = heap.pop(); //제일 번호가 작은 자리를 꺼냄
      parking[spot] = ord; // 해당 공간에 차량 번호를 기록
      carToParking[ord] = spot; // 차량 번호에 해당하는 주차 위치 저장
      total += prices[spot] * weights[ord - 1]; //해당 자리 가격*차량 무게
    } else {
      //빈자리가 없다면 대기 큐에 넣기
      queue.push(ord);
    }
  } else {
    //차량이 나와야 한다면
    let car = -ord; //차량번호 양수화
    let spot = carToParking[car]; //해당 자리 가져오기
    parking[spot] = null; //빈자리로 표시
    heap.push(spot); //빈자리 힙에 넣기기

    if (queue.length > 0) {
      //대기하는 차가 있다면
      let waitingCar = queue.shift(); //제일 앞에 있는 차 꺼냄
      let newSpot = heap.pop(); //빈자리 꺼냄
      parking[spot] = waitingCar;
      carToParking[waitingCar] = newSpot;
      total += prices[newSpot] * weights[waitingCar - 1];
    }
  }
}

console.log(total);
