//2042-구간 합 구하기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m, k] = input[0].split(' ').map(Number);
let arr = input.slice(1, n + 1).map(Number);
let abc = input.slice(n + 1).map((v) => v.split(' ').map(Number));

class SegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.tree = Array(this.n * 4).fill(0);
    this.init(arr, 0, this.n - 1, 1);
  }

  init(arr, start, end, node) {
    if (start === end) {
      return (this.tree[node] = arr[start]);
    }
    const mid = Math.floor((start + end) / 2);
    return (this.tree[node] = this.init(arr, start, mid, node * 2) + this.init(arr, mid + 1, end, node * 2 + 1));
  }

  query(left, right, node, start, end) {
    if (right < start || left > end) return 0;
    if (left <= start && end <= right) return this.tree[node];

    const mid = Math.floor((start + end) / 2);
    return this.query(left, right, node * 2, start, mid) + this.query(left, right, node * 2 + 1, mid + 1, end);
  }

  update(index, newValue, node, start, end) {
    if (index < start || index > end) return this.tree[node];
    if (start === end) return (this.tree[node] = newValue);

    const mid = Math.floor((start + end) / 2);
    return (this.tree[node] =
      this.update(index, newValue, node * 2, start, mid) + this.update(index, newValue, node * 2 + 1, mid + 1, end));
  }
}

let tree = new SegmentTree(arr);
let result = [];

for (let [a, b, c] of abc) {
  if (a === 1) {
    tree.update(b - 1, c, 1, 0, n - 1);
  } else if (a === 2) {
    result.push(tree.query(b - 1, c - 1, 1, 0, n - 1));
  }
}

console.log(result.join('\n'));
