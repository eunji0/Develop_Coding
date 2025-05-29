//1927-최소힙
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

class MinHeap {
  constructor() {
    this.nodes = [];
  }

  insert(data) {
    this.nodes.push(data);
    this.bubbleUp();
  }

  bubbleUp(index = this.nodes.length - 1) {
    if (index < 1) return;
    let currentNode = this.nodes[index];
    let parentIndex = Math.floor((index - 1) / 2);
    let parentNode = this.nodes[parentIndex];

    if (parentNode <= currentNode) return;

    this.nodes[parentIndex] = currentNode;
    this.nodes[index] = parentNode;
    index = parentIndex;
    this.bubbleUp(index);
  }

  extract() {
    const min = this.nodes[0];

    if (this.nodes.length === 1) {
      this.nodes.pop();
      return min;
    }

    this.nodes[0] = this.nodes.pop();
    this.trickleDown();
    return min;
  }

  trickleDown(index = 0) {
    let leftChildIndex = index * 2 + 1;
    let rightChildIndex = index * 2 + 2;
    let length = this.nodes.length;
    let minimum = index;

    if (!this.nodes[leftChildIndex] && !this.nodes[rightChildIndex]) return;

    if (!this.nodes[rightChildIndex]) {
      if (this.nodes[leftChildIndex] < this.nodes[minimum]) {
        minimum = leftChildIndex;
      }
    }

    if (this.nodes[leftChildIndex] < this.nodes[rightChildIndex]) {
      if (leftChildIndex < length && this.nodes[leftChildIndex] < this.nodes[minimum]) {
        minimum = leftChildIndex;
      }
    } else {
      if (rightChildIndex < length && this.nodes[rightChildIndex] < this.nodes[minimum]) {
        minimum = rightChildIndex;
      }
    }

    if (minimum !== index) {
      let t = this.nodes[minimum];
      this.nodes[minimum] = this.nodes[index];
      this.nodes[index] = t;
      this.trickleDown(minimum);
    }
  }
}

let operations = [];

for (let i = 1; i < input.length; i++) {
  operations.push(+input[i]);
}

const heap = new MinHeap();
let extracts = '';

operations.forEach((operation, index) => {
  if (operation !== 0) {
    heap.insert(operation);
  } else {
    if (heap.nodes.length === 0) {
      extracts += '0' + '\n';
    } else {
      let t = heap.extract();
      extracts += t + '\n';
    }
  }
});

console.log(extracts.trim());
