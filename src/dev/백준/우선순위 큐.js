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
      if (this.heap[parentIndex] <= last) break;
      this.heap[index] = this.heap[parentIndex];
      index = parentIndex;
    }

    return (this.heap[index] = last);
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

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}

const n = +input[0];
const operations = input.slice(1).map(Number);
const heap = new MinHeap();
const result = [];

for (let x of operations) {
  if (x === 0) {
    result.push(heap.pop());
  } else {
    heap.push(x);
  }
}

console.log(result.join('\n'));
