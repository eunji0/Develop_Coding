//2042-구간 합 구하기
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let [n, m, k] = input[0].split(' ').map(Number);
// let arr = input.slice(1, n + 1).map(BigInt);
// let abc = input.slice(n + 1).map((v) => v.split(' ').map(BigInt));

// class SegmentTree {
//   constructor(arr) {
//     this.n = arr.length;
//     this.tree = Array(this.n * 4).fill(0n);
//     this.arr = arr;
//     this.init(arr, 0, this.n - 1, 1);
//   }

//   init(arr, start, end, node) {
//     if (start === end) {
//       return (this.tree[node] = arr[start]);
//     }
//     const mid = Math.floor((start + end) / 2);
//     return (this.tree[node] = this.init(arr, start, mid, node * 2) + this.init(arr, mid + 1, end, node * 2 + 1));
//   }

//   query(left, right, node, start, end) {
//     if (right < start || left > end) return 0n;
//     if (left <= start && end <= right) return this.tree[node];

//     const mid = Math.floor((start + end) / 2);
//     return this.query(left, right, node * 2, start, mid) + this.query(left, right, node * 2 + 1, mid + 1, end);
//   }

//   update(index, newValue, node, start, end) {
//     if (index < start || index > end) return this.tree[node];

//     // 기존 값과의 차이 반영
//     const diff = newValue - this.arr[index];
//     this.tree[node] += diff;

//     // 리프 노드라면 배열도 갱신
//     if (start === end) {
//       this.arr[index] = newValue;
//       return this.tree[node];
//     }

//     const mid = Math.floor((start + end) / 2);
//     this.update(index, newValue, node * 2, start, mid);
//     this.update(index, newValue, node * 2 + 1, mid + 1, end);
//     return this.tree[node];
//   }
// }

// let tree = new SegmentTree(arr);
// let result = [];

// for (let [a, b, c] of abc) {
//   if (a === 1n) {
//     tree.update(Number(b - 1n), c, 1, 0, n - 1);
//   } else if (a === 2n) {
//     result.push(tree.query(Number(b - 1n), Number(c - 1n), 1, 0, n - 1).toString());
//   }
// }

// console.log(result.join('\n'));

//2357-최솟값과 최댓값
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const [n, m] = input[0].split(' ').map(Number);
// const arr = input.slice(1, n + 1).map(Number);
// const queries = input.slice(n + 1).map((line) => line.split(' ').map(Number));

// class SegmentTree {
//   constructor(arr) {
//     this.n = arr.length;
//     this.tree = Array(this.n * 4).fill([Infinity, -Infinity]);
//     this.init(arr, 0, this.n - 1, 1);
//   }

//   init(arr, start, end, node) {
//     if (start === end) {
//       return (this.tree[node] = [arr[start], arr[start]]);
//     }

//     const mid = Math.floor((start + end) / 2);
//     const left = this.init(arr, start, mid, node * 2);
//     const right = this.init(arr, mid + 1, end, node * 2 + 1);

//     this.tree[node] = [Math.min(left[0], right[0]), Math.max(left[1], right[1])];
//     return this.tree[node];
//   }

//   query(left, right, node, start, end) {
//     if (right < start || left > end) return [Infinity, -Infinity];
//     if (left <= start && end <= right) return this.tree[node];

//     const mid = Math.floor((start + end) / 2);
//     const lResult = this.query(left, right, node * 2, start, mid);
//     const rResult = this.query(left, right, node * 2 + 1, mid + 1, end);

//     return [Math.min(lResult[0], rResult[0]), Math.max(lResult[1], rResult[1])];
//   }
// }

// const tree = new SegmentTree(arr);
// const result = [];

// for (const [a, b] of queries) {
//   const [minVal, maxVal] = tree.query(a - 1, b - 1, 1, 0, n - 1);
//   result.push(`${minVal} ${maxVal}`);
// }

// console.log(result.join('\n'));

//10868-최솟값
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let arr = input.slice(1, n + 1).map(Number);
let ab = input.slice(n + 1).map((v) => v.split(' ').map(Number));

class SegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.tree = Array(this.n * 4).fill(Infinity);
    this.init(arr, 0, this.n - 1, 1);
  }

  init(arr, start, end, node) {
    if (start === end) return (this.tree[node] = arr[start]);

    const mid = Math.floor((start + end) / 2);
    const left = this.init(arr, start, mid, node * 2);
    const right = this.init(arr, mid + 1, end, node * 2 + 1);

    return (this.tree[node] = Math.min(left, right));
  }

  query(left, right, node, start, end) {
    if (right < start || left > end) return Infinity;
    if (left <= start && end <= right) return this.tree[node];

    const mid = Math.floor((start + end) / 2);
    return Math.min(this.query(left, right, node * 2, start, mid), this.query(left, right, node * 2 + 1, mid + 1, end));
  }
}

let tree = new SegmentTree(arr);

let result = [];

for (let [a, b] of ab) {
  result.push(tree.query(a - 1, b - 1, 1, 0, n - 1));
}

console.log(result.join('\n'));
