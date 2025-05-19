//2042-구간 합 구하기
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let [n, m, k] = input[0].split(' ').map(Number);
// let arr = input.slice(1, n + 1).map(BigInt);
// let abc = input.slice(n + 1).map((v) => v.split(' ').map(BigInt));

// class SegmentTree {
// constructor(arr) {
//   this.n = arr.length;
//   this.tree = Array(this.n * 4).fill(0n);
//   this.arr = arr;
//   this.init(arr, 0, this.n - 1, 1);
// }

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

// update(index, newValue, node, start, end) {
//   if (index < start || index > end) return this.tree[node];

//   // 기존 값과의 차이 반영
//   const diff = newValue - this.arr[index];
//   this.tree[node] += diff;

//   // 리프 노드라면 배열도 갱신
//   if (start === end) {
//     this.arr[index] = newValue;
//     return this.tree[node];
//   }

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
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let [n, m] = input[0].split(' ').map(Number);
// let arr = input.slice(1, n + 1).map(Number);
// let ab = input.slice(n + 1).map((v) => v.split(' ').map(Number));

// class SegmentTree {
//   constructor(arr) {
//     this.n = arr.length;
//     this.tree = Array(this.n * 4).fill(Infinity);
//     this.init(arr, 0, this.n - 1, 1);
//   }

//   init(arr, start, end, node) {
//     if (start === end) return (this.tree[node] = arr[start]);

//     const mid = Math.floor((start + end) / 2);
//     const left = this.init(arr, start, mid, node * 2);
//     const right = this.init(arr, mid + 1, end, node * 2 + 1);

//     return (this.tree[node] = Math.min(left, right));
//   }

//   query(left, right, node, start, end) {
//     if (right < start || left > end) return Infinity;
//     if (left <= start && end <= right) return this.tree[node];

//     const mid = Math.floor((start + end) / 2);
//     return Math.min(this.query(left, right, node * 2, start, mid), this.query(left, right, node * 2 + 1, mid + 1, end));
//   }
// }

// let tree = new SegmentTree(arr);

// let result = [];

// for (let [a, b] of ab) {
//   result.push(tree.query(a - 1, b - 1, 1, 0, n - 1));
// }

// console.log(result.join('\n'));

//14438-수열과 쿼리 17
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let arr = input[1].split(' ').map(Number);
// let m = +input[2];
// let q = input.slice(3).map((v) => v.split(' ').map(Number));

// class SegmentTree {
//   constructor(arr) {
//     this.n = arr.length;
//     this.tree = Array(this.n * 4).fill(Infinity);
//     this.init(arr, 0, this.n - 1, 1);
//   }

//   init(arr, start, end, node) {
//     if (start === end) return (this.tree[node] = arr[start]);

//     const mid = Math.floor((start + end) / 2);
//     const left = this.init(arr, start, mid, node * 2);
//     const right = this.init(arr, mid + 1, end, node * 2 + 1);

//     return (this.tree[node] = Math.min(left, right));
//   }

//   query(left, right, node, start, end) {
//     if (right < start || end < left) return Infinity;
//     if (left <= start && end <= right) return this.tree[node];

//     const mid = Math.floor((start + end) / 2);
//     return Math.min(this.query(left, right, node * 2, start, mid), this.query(left, right, node * 2 + 1, mid + 1, end));
//   }

//   update(index, newValue, node, start, end) {
//     if (index < start || index > end) return this.tree[node];
//     if (start === end) return (this.tree[node] = newValue);

//     const mid = Math.floor((start + end) / 2);
//     return (this.tree[node] = Math.min(
//       this.update(index, newValue, node * 2, start, mid),
//       this.update(index, newValue, node * 2 + 1, mid + 1, end),
//     ));
//   }
// }

// let tree = new SegmentTree(arr);
// let result = [];

// for (let [type, a, b] of q) {
//   if (type === 1) {
//     tree.update(a - 1, b, 1, 0, n - 1);
//   } else if (type === 2) {
//     result.push(tree.query(a - 1, b - 1, 1, 0, n - 1));
//   }
// }

// console.log(result.join('\n'));

//16975-수열과 쿼리 21
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const n = +input[0];
// const arr = input[1].split(' ').map(Number);
// const m = +input[2];
// const queries = input.slice(3).map((line) => line.split(' ').map(Number));

// class SegmentTree {
//   constructor(arr) {
//     this.n = arr.length;
//     this.tree = Array(this.n * 4).fill(0);
//     this.lazy = Array(this.n * 4).fill(0);
//     this.init(arr, 0, this.n - 1, 1);
//   }

//   init(arr, start, end, node) {
//     if (start === end) return (this.tree[node] = arr[start]);

//     const mid = Math.floor((start + end) / 2);
//     const left = this.init(arr, start, mid, node * 2);
//     const right = this.init(arr, mid + 1, end, node * 2 + 1);
//     return (this.tree[node] = left + right);
//   }

//   propagate(node, start, end) {
//     if (this.lazy[node] !== 0) {
//       this.tree[node] += (end - start + 1) * this.lazy[node];
//       if (start !== end) {
//         this.lazy[node * 2] += this.lazy[node];
//         this.lazy[node * 2 + 1] += this.lazy[node];
//       }
//       this.lazy[node] = 0;
//     }
//   }

//   updateRange(left, right, value, node, start, end) {
//     this.propagate(node, start, end);
//     if (right < start || end < left) return;
//     if (left <= start && end <= right) {
//       this.lazy[node] += value;
//       this.propagate(node, start, end);
//       return;
//     }

//     const mid = Math.floor((start + end) / 2);
//     this.updateRange(left, right, value, node * 2, start, mid);
//     this.updateRange(left, right, value, node * 2 + 1, mid + 1, end);
//     this.tree[node] = this.tree[node * 2] + this.tree[node * 2 + 1];
//   }

//   query(index, node, start, end) {
//     this.propagate(node, start, end);
//     if (start === end) return this.tree[node];

//     const mid = Math.floor((start + end) / 2);
//     if (index <= mid) {
//       return this.query(index, node * 2, start, mid);
//     } else {
//       return this.query(index, node * 2 + 1, mid + 1, end);
//     }
//   }
// }

// const tree = new SegmentTree(arr);
// let result = [];

// for (let [type, a, b, k] of queries) {
//   if (type === 1) {
//     // 구간 덧셈
//     tree.updateRange(a - 1, b - 1, k, 1, 0, n - 1);
//   } else if (type === 2) {
//     // 단일 값 조회
//     result.push(tree.query(a - 1, 1, 0, n - 1));
//   }
// }

// console.log(result.join('\n'));

//14427-수열과 쿼리 15
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let arr = input[1].split(' ').map(Number);
// let m = +input[2];
// let q = input.slice(3);

// class SegmentTree {
//   constructor(arr) {
//     this.n = arr.length;
//     this.tree = Array(this.n * 4).fill([Infinity, Infinity]);
//     this.init(arr, 1, 0, this.n - 1);
//   }

//   init(arr, node, start, end) {
//     if (start === end) return (this.tree[node] = [arr[start], start]);

//     const mid = Math.floor((start + end) / 2);
//     const left = this.init(arr, node * 2, start, mid);
//     const right = this.init(arr, node * 2 + 1, mid + 1, end);

//     return (this.tree[node] = this._compare(left, right));
//   }

//   _compare(a, b) {
//     if (a[0] < b[0]) return a;
//     if (a[0] > b[0]) return b;

//     return a[1] < b[1] ? a : b;
//   }

//   query(node, left, right, start, end) {
//     if (right < start || end < left) return [Infinity, Infinity];
//     if (left <= start && end <= right) return this.tree[node];

//     const mid = Math.floor((start + end) / 2);
//     const leftMin = this.query(node * 2, start, mid, left, right);
//     const rightMin = this.query(node * 2 + 1, mid + 1, end, left, right);

//     return this._compare(leftMin, rightMin);
//   }

//   update(index, newValue, node, start, end) {
//     if (index < start || index > end) return this.tree[node];
//     if (start === end) return (this.tree[node] = [newValue, start]);

//     const mid = Math.floor((start + end) / 2);
//     const left = this.update(index, newValue, node * 2, start, mid);
//     const right = this.update(index, newValue, node * 2 + 1, mid + 1, end);

//     return (this.tree[node] = this._compare(left, right));
//   }
// }

// const tree = new SegmentTree(arr);
// let result = [];

// for (let query of q) {
//   let [type, a, b] = query.split(' ').map(Number);

//   if (type === 1) {
//     tree.update(a - 1, b, 1, 0, n - 1);
//   } else if (type === 2) {
//     let [minValue, minIndex] = tree.query(1, 0, n - 1, 0, n - 1);
//     result.push(minIndex + 1);
//   }
// }

// console.log(result.join('\n'));

//18436-수열과 쿼리 37
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let arr = input[1].split(' ').map(Number);
// let m = +input[2];
// let q = input.slice(3).map((v) => v.split(' ').map(Number));

// class SegmentTree {
//   constructor(arr) {
//     this.n = arr.length;
//     this.tree = Array(this.n * 4).fill([0, 0]);
//     this.init(arr, 1, 0, this.n - 1);
//   }

//   init(arr, node, start, end) {
//     if (start === end) {
//       const isEven = arr[start] % 2 === 0 ? 1 : 0;
//       const isOdd = 1 - isEven;
//       return (this.tree[node] = [isEven, isOdd]);
//     }

//     const mid = Math.floor((start + end) / 2);
//     const left = this.init(arr, node * 2, start, mid);
//     const right = this.init(arr, node * 2 + 1, mid + 1, end);

//     return (this.tree[node] = [left[0] + right[0], left[1] + right[1]]);
//   }

//   query(node, start, end, left, right, type) {
//     if (right < start || end < left) return 0;
//     if (left <= start && end <= right) return this.tree[node][type];

//     const mid = Math.floor((start + end) / 2);
//     const leftCount = this.query(node * 2, start, mid, left, right, type);
//     const rightCount = this.query(node * 2 + 1, mid + 1, end, left, right, type);

//     return leftCount + rightCount;
//   }

//   update(index, newValue, node, start, end) {
//     if (index < start || index > end) return this.tree[node];
//     if (start === end) {
//       const isEven = newValue % 2 === 0 ? 1 : 0;
//       const isOdd = 1 - isEven;
//       return (this.tree[node] = [isEven, isOdd]);
//     }

//     const mid = Math.floor((start + end) / 2);
//     const left = this.update(index, newValue, node * 2, start, mid);
//     const right = this.update(index, newValue, node * 2 + 1, mid + 1, end);

//     return (this.tree[node] = [left[0] + right[0], left[1] + right[1]]);
//   }
// }

// const tree = new SegmentTree(arr);
// let result = [];

// for (let [type, a, b] of q) {
//   if (type === 1) {
//     // 인덱스 업데이트 (1-based -> 0-based)
//     tree.update(a - 1, b, 1, 0, n - 1);
//   } else if (type === 2) {
//     // 짝수 개수 쿼리
//     result.push(tree.query(1, 0, n - 1, a - 1, b - 1, 0));
//   } else if (type === 3) {
//     // 홀수 개수 쿼리
//     result.push(tree.query(1, 0, n - 1, a - 1, b - 1, 1));
//   }
// }

// console.log(result.join('\n'));

//13544-수열과 쿼리 3
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let arr = input[1].split(' ').map(Number);
// let m = +input[2];
// let q = input.slice(3).map((v) => v.split(' ').map(Number));

// class SegmentTree {
//   constructor(arr) {
//     this.n = arr.length;
//     this.tree = Array(this.n * 4)
//       .fill(null)
//       .map(() => []);
//     this.init(arr, 1, 0, this.n - 1);
//   }

//   init(arr, node, start, end) {
//     if (start === end) {
//       this.tree[node] = [arr[start]];
//       return this.tree[node];
//     }

//     const mid = Math.floor((start + end) / 2);
//     const left = this.init(arr, node * 2, start, mid);
//     const right = this.init(arr, node * 2 + 1, mid + 1, end);

//     this.tree[node] = this._merge(left, right);
//     return this.tree[node];
//   }

//   _merge(left, right) {
//     let merged = [];
//     let l = 0,
//       r = 0;

//     while (l < left.length && r < right.length) {
//       if (left[l] < right[r]) merged.push(left[l++]);
//       else merged.push(right[r++]);
//     }

//     while (l < left.length) merged.push(left[l++]);
//     while (r < right.length) merged.push(right[r++]);

//     return merged;
//   }
//   query(node, start, end, left, right, k) {
//     if (right < start || end < left) return 0;
//     if (left <= start && end <= right) {
//       const count = this.tree[node].length - this._upperBound(this.tree[node], k);
//       return count;
//     }

//     const mid = Math.floor((start + end) / 2);
//     const leftCount = this.query(node * 2, start, mid, left, right, k);
//     const rightCount = this.query(node * 2 + 1, mid + 1, end, left, right, k);

//     return leftCount + rightCount;
//   }

//   _upperBound(arr, k) {
//     let low = 0,
//       high = arr.length;
//     while (low < high) {
//       const mid = Math.floor((low + high) / 2);
//       if (arr[mid] > k) high = mid;
//       else low = mid + 1;
//     }
//     return low;
//   }
// }

// const tree = new SegmentTree(arr);
// let lastAns = 0;
// let result = [];

// for (let [a, b, c] of q) {
//   let i = (a ^ lastAns) - 1;
//   let j = (b ^ lastAns) - 1;
//   let k = c ^ lastAns;

//   if (i > j) [i, j] = [j, i];

//   const count = tree.query(1, 0, n - 1, i, j, k);
//   result.push(count);
//   lastAns = count;
// }

// console.log(result.join('\n'));

//14245-XOR
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let arr = input[1].split(' ').map(Number);
// let m = +input[2];
// let q = input.slice(3).map((v) => v.split(' ').map(Number));

// class SegmentTree {
//   constructor(arr) {
//     this.n = arr.length;
//     this.tree = Array(this.n * 4).fill(0);
//     this.lazy = Array(this.n * 4).fill(0);
//     this.init(arr, 1, 0, this.n - 1);
//   }

//   init(arr, node, start, end) {
//     if (start === end) return (this.tree[node] = arr[start]);

//     const mid = Math.floor((start + end) / 2);
//     const left = this.init(arr, node * 2, start, mid);
//     const right = this.init(arr, node * 2 + 1, mid + 1, end);

//     return (this.tree[node] = left ^ right);
//   }

//   _propagate(node, start, end) {
//     if (this.lazy[node] !== 0) {
//       const length = end - start + 1;
//       if (length % 2 === 1) this.tree[node] ^= this.lazy[node];

//       if (start !== end) {
//         this.lazy[node * 2] ^= this.lazy[node];
//         this.lazy[node * 2 + 1] ^= this.lazy[node];
//       }

//       this.lazy[node] = 0;
//     }
//   }

//   updateRange(node, start, end, left, right, value) {
//     this._propagate(node, start, end);

//     if (right < start || end < left) return;
//     if (left <= start && end <= right) {
//       this.lazy[node] ^= value;
//       this._propagate(node, start, end);
//       return;
//     }

//     const mid = Math.floor((start + end) / 2);
//     this.updateRange(node * 2, start, mid, left, right, value);
//     this.updateRange(node * 2 + 1, mid + 1, end, left, right, value);

//     this.tree[node] = this.tree[node * 2] ^ this.tree[node * 2 + 1];
//   }

//   query(node, start, end, index) {
//     this._propagate(node, start, end);

//     if (start === end) return this.tree[node];

//     const mid = Math.floor((start + end) / 2);
//     if (index <= mid) return this.query(node * 2, start, mid, index);
//     else return this.query(node * 2 + 1, mid + 1, end, index);
//   }
// }

// const tree = new SegmentTree(arr);
// let result = [];

// for (let [type, a, b, c] of q) {
//   if (type === 1) {
//     tree.updateRange(1, 0, n - 1, a, b, c);
//   } else if (type === 2) {
//     result.push(tree.query(1, 0, n - 1, a));
//   }
// }

// console.log(result.join('\n'));

//2042-구간 합 구하기
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let [n, m, k] = input[0].split(' ').map(BigInt);
// let arr = input.slice(1, Number(n) + 1).map(BigInt);
// let abc = input.slice(Number(n) + 1).map((v) => v.split(' ').map(BigInt));

// class SegmentTree {
//   constructor(arr) {
//     this.n = arr.length;
//     this.tree = Array(this.n * 4).fill(0n);
//     this.arr = arr;
//     this.init(arr, 1n, 0n, BigInt(this.n - 1));
//   }

//   init(arr, node, start, end) {
//     if (start === end) return (this.tree[node] = arr[Number(start)]);

//     const mid = (start + end) / 2n;
//     const left = this.init(arr, node * 2n, start, mid);
//     const right = this.init(arr, node * 2n + 1n, mid + 1n, end);
//     return (this.tree[node] = left + right);
//   }

//   query(left, right, node, start, end) {
//     if (right < start || end < left) return 0n;
//     if (left <= start && end <= right) return this.tree[node];

//     const mid = (start + end) / 2n;
//     const leftSum = this.query(left, right, node * 2n, start, mid);
//     const rightSum = this.query(left, right, node * 2n + 1n, mid + 1n, end);

//     return leftSum + rightSum;
//   }

//   update(index, newValue, node, start, end) {
//     if (index < start || index > end) return this.tree[node];

//     const diff = newValue - this.arr[Number(index)];
//     this.tree[node] += diff;

//     if (start === end) {
//       this.arr[Number(index)] = newValue;
//       return this.tree[node];
//     }

//     const mid = (start + end) / 2n;
//     this.update(index, newValue, node * 2n, start, mid);
//     this.update(index, newValue, node * 2n + 1n, mid + 1n, end);
//     return this.tree[node];
//   }
// }

// const tree = new SegmentTree(arr);
// let result = [];

// for (let [a, b, c] of abc) {
//   if (a === 1n) {
//     tree.update(b - 1n, c, 1n, 0n, n - 1n);
//   } else {
//     result.push(tree.query(b - 1n, c - 1n, 1n, 0n, n - 1n).toString());
//   }
// }

// console.log(result.join('\n'));

//2357-최솟값과 최댓값
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let [n, m] = input[0].split(' ').map(Number);
// let arr = input.slice(1, n + 1).map(Number);
// let q = input.slice(n + 1).map((v) => v.split(' ').map(Number));

// class SegmentTree {
//   constructor(arr) {
//     this.n = arr.length;
//     this.tree = Array(this.n * 4).fill([Infinity, -Infinity]);
//     this.init(arr, 1, 0, this.n - 1);
//   }

//   init(arr, node, start, end) {
//     if (start === end) return (this.tree[node] = [arr[start], arr[start]]);

//     const mid = Math.floor((start + end) / 2);
//     const left = this.init(arr, node * 2, start, mid);
//     const right = this.init(arr, node * 2 + 1, mid + 1, end);

//     return (this.tree[node] = [Math.min(left[0], right[0]), Math.max(left[1], right[1])]);
//   }

//   query(left, right, node, start, end) {
//     if (left > end || start > right) return [Infinity, -Infinity];
//     if (left <= start && end <= right) return this.tree[node];

//     const mid = Math.floor((start + end) / 2);
//     const leftArr = this.query(left, right, node * 2, start, mid);
//     const rightArr = this.query(left, right, node * 2 + 1, mid + 1, end);

//     return [Math.min(leftArr[0], rightArr[0]), Math.max(leftArr[1], rightArr[1])];
//   }
// }

// const tree = new SegmentTree(arr);
// let result = [];

// for (let [a, b] of q) {
//   const [minVal, maxVal] = tree.query(a - 1, b - 1, 1, 0, n - 1);
//   result.push(`${minVal} ${maxVal}`);
// }

// console.log(result.join('\n'));

//10868-최솟값
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let [n, m] = input[0].split(' ').map(Number);
// let arr = input.slice(1, n + 1).map(Number);
// let q = input.slice(n + 1).map((v) => v.split(' ').map(Number));

// class SegmentTree {
//   constructor(arr) {
//     this.n = arr.length;
//     this.tree = Array(this.n * 4).fill(Infinity);
//     this.init(arr, 1, 0, this.n - 1);
//   }

//   init(arr, node, start, end) {
//     if (start === end) return (this.tree[node] = arr[start]);

//     const mid = Math.floor((start + end) / 2);
//     const left = this.init(arr, node * 2, start, mid);
//     const right = this.init(arr, node * 2 + 1, mid + 1, end);

//     return (this.tree[node] = Math.min(left, right));
//   }

//   query(left, right, node, start, end) {
//     if (left > end || start > right) return Infinity;
//     if (left <= start && end <= right) return this.tree[node];

//     const mid = Math.floor((start + end) / 2);
//     const leftArr = this.query(left, right, node * 2, start, mid);
//     const rightArr = this.query(left, right, node * 2 + 1, mid + 1, end);

//     return Math.min(leftArr, rightArr);
//   }
// }

// const tree = new SegmentTree(arr);
// let result = [];

// for (let [a, b] of q) {
//   result.push(tree.query(a - 1, b - 1, 1, 0, n - 1));
// }

// console.log(result.join('\n'));

//14438-수열과 쿼리 17
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let arr = input[1].split(' ').map(Number);
// let m = +input[2];
// let q = input.slice(3).map((v) => v.split(' ').map(Number));

// class SegmentTree {
//   constructor(arr) {
//     this.n = arr.length;
//     this.tree = Array(this.n * 4).fill(Infinity);
//     this.init(arr, 1, 0, this.n - 1);
//   }

//   init(arr, node, start, end) {
//     if (start === end) return (this.tree[node] = arr[start]);

//     const mid = Math.floor((start + end) / 2);
//     const left = this.init(arr, node * 2, start, mid);
//     const right = this.init(arr, node * 2 + 1, mid + 1, end);

//     return (this.tree[node] = Math.min(left, right));
//   }

//   query(left, right, node, start, end) {
//     if (right < start || end < left) return Infinity;

//     if (left <= start && end <= right) return this.tree[node];

//     const mid = Math.floor((start + end) / 2);
//     const leftArr = this.query(left, right, node * 2, start, mid);
//     const rightArr = this.query(left, right, node * 2 + 1, mid + 1, end);

//     return Math.min(leftArr, rightArr);
//   }

//   update(index, newValue, node, start, end) {
//     if (index < start || end < index) return this.tree[node];

//     if (start === end) return (this.tree[node] = newValue);

//     const mid = Math.floor((start + end) / 2);
//     const left = this.update(index, newValue, node * 2, start, mid);
//     const right = this.update(index, newValue, node * 2 + 1, mid + 1, end);

//     return (this.tree[node] = Math.min(left, right));
//   }
// }

// let tree = new SegmentTree(arr);
// let result = [];

// for (let [a, b, c] of q) {
//   if (a === 1) {
//     tree.update(b - 1, c, 1, 0, n - 1);
//   } else {
//     result.push(tree.query(b - 1, c - 1, 1, 0, n - 1));
//   }
// }

// console.log(result.join('\n'));

//16975-수열과 쿼리 21
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input[0];
let arr = input[1].split(' ').map(Number);
let m = +input[2];
let queries = input.slice(3).map((v) => v.split(' ').map(Number));

class SegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.tree = Array(this.n * 4).fill(0);
    this.lazy = Array(this.n * 4).fill(0);
    this.init(arr, 1, 0, this.n - 1);
  }

  init(arr, node, start, end) {
    if (start === end) {
      this.tree[node] = arr[start];
      return arr[start];
    }

    const mid = Math.floor((start + end) / 2);
    const left = this.init(arr, node * 2, start, mid);
    const right = this.init(arr, node * 2 + 1, mid + 1, end);
    this.tree[node] = left + right;
    return this.tree[node];
  }

  propagate(node, start, end) {
    if (this.lazy[node] !== 0) {
      this.tree[node] += (end - start + 1) * this.lazy[node];
      if (start !== end) {
        this.lazy[node * 2] += this.lazy[node];
        this.lazy[node * 2 + 1] += this.lazy[node];
      }
      this.lazy[node] = 0;
    }
  }

  updateRange(l, r, val, node, start, end) {
    this.propagate(node, start, end);
    if (r < start || end < l) return;
    if (l <= start && end <= r) {
      this.lazy[node] += val;
      this.propagate(node, start, end);
      return;
    }

    const mid = Math.floor((start + end) / 2);
    this.updateRange(l, r, val, node * 2, start, mid);
    this.updateRange(l, r, val, node * 2 + 1, mid + 1, end);
    this.tree[node] = this.tree[node * 2] + this.tree[node * 2 + 1];
  }

  query(index, node, start, end) {
    this.propagate(node, start, end);
    if (start === end) return this.tree[node];

    const mid = Math.floor((start + end) / 2);
    if (index <= mid) {
      return this.query(index, node * 2, start, mid);
    } else {
      return this.query(index, node * 2 + 1, mid + 1, end);
    }
  }
}

let tree = new SegmentTree(arr);
let result = [];
queries.forEach((query) => {
  if (query[0] === 1) {
    let i = query[1] - 1;
    let j = query[2] - 1;
    let k = query[3];
    tree.updateRange(i, j, k, 1, 0, n - 1);
  } else if (query[0] === 2) {
    let x = query[1] - 1;
    result.push(tree.query(x, 1, 0, n - 1));
  }
});

console.log(result.join('\n'));
