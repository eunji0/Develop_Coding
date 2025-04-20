//1991-트리 순회
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs
//   .readFileSync(filePath)
//   .toString()
//   .split('\n')
//   .map((v) => v.trim());

// const N = Number(input.shift());
// let result = '';

// const tree = {};
// for (let i = 0; i < N; i++) {
//   const [node, left, right] = input[i].split(' ');
//   tree[node] = [left, right];
// }

// function preOrder(node) {
//   if (node === '.') return;
//   let [left, right] = tree[node];
//   result += node;
//   preOrder(left);
//   preOrder(right);
// }

// function inOrder(node) {
//   if (node === '.') return;
//   let [left, right] = tree[node];
//   inOrder(left);
//   result += node;
//   inOrder(right);
// }

// function posOrder(node) {
//   if (node === '.') return;
//   let [left, right] = tree[node];
//   posOrder(left);
//   posOrder(right);
//   result += node;
// }

// preOrder('A');
// result += '\n';
// inOrder('A');
// result += '\n';
// posOrder('A');
// result += '\n';

// console.log(result);

//1725-트리의 부모 찾기
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let arr = input.slice(1).map((v) => v.split(' ').map(Number));
// let graph = Array.from({ length: n + 1 }, () => []);

// for (let [a, b] of arr) {
//   graph[a].push(b);
//   graph[b].push(a);
// }

// let parents = Array(n + 1).fill(0);
// let visited = Array(n + 1).fill(false);

// let queue = [1];
// visited[1] = true;

// while (queue.length) {
//   let node = queue.shift();

//   for (const next of graph[node]) {
//     if (!visited[next]) {
//       visited[next] = true;
//       parents[next] = node;
//       queue.push(next);
//     }
//   }
// }

// console.log(parents.slice(2).join('\n'));

//1967 - 트리의 지름
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let arr = input.slice(1).map((v) => v.split(' ').map(Number));
// let graph = Array.from({ length: n + 1 }, () => []);

// for (let [a, b, c] of arr) {
//   graph[a].push([b, c]);
//   graph[b].push([a, c]);
// }

// function dfs(node, visited, dist) {
//   visited[node] = true;

//   let farthest = [node, dist];

//   for (let [next, nextDist] of graph[node]) {
//     if (!visited[next]) {
//       let result = dfs(next, visited, dist + nextDist);
//       if (result[1] > farthest[1]) {
//         farthest = result;
//       }
//     }
//   }

//   return farthest;
// }

// let visited = Array(n + 1).fill(false);
// let [farthestNode] = dfs(1, visited, 0);

// visited = Array(n + 1).fill(false);
// let [, d] = dfs(farthestNode, visited, 0);

// console.log(d);

//1167-트리의 지름
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let v = +input[0];
// let arr = input.slice(1).map((v) => v.split(' ').map(Number));
// let graph = Array.from({ length: v + 1 }, () => []);

// for (let a of arr) {
//   let num = a.shift();

//   for (let i = 0; i < a.length - 1; i += 2) {
//     graph[num].push([a[i], a[i + 1]]);
//     graph[a[i]].push([num, a[i + 1]]);
//   }
// }

// function dfs(node, visited, dist) {
//   visited[node] = true;
//   let father = [node, dist];

//   for (let [next, nextDist] of graph[node]) {
//     if (!visited[next]) {
//       visited[next] = true;
//       let result = dfs(next, visited, nextDist + dist);
//       if (result[1] > father[1]) {
//         father = result;
//       }
//     }
//   }

//   return father;
// }

// let visited = Array(v + 1).fill(false);
// let fatherResult = dfs(1, visited, 0);

// visited = Array(v + 1).fill(false);
// let [, d] = dfs(fatherResult[0], visited, 0);
// console.log(d);

//1068-트리
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let arr = input[1].split(' ').map(Number);
// let v = +input[2];

// let parents = Array.from({ length: n }, () => []);
// let root;

// arr.forEach((p, i) => {
//   if (p === -1) {
//     root = i;
//   } else {
//     parents[p].push(i);
//   }
// });

// let visited = Array(n).fill(false);

// const bfs = (start) => {
//   visited[start] = true;
//   let queue = [start];

//   while (queue.length) {
//     let cur = queue.shift();

//     for (let next of parents[cur]) {
//       if (!visited[next]) {
//         visited[next] = true;
//         queue.push(next);
//       }
//     }
//   }
// };

// bfs(v);

// let leafCount = 0;

// for (let i = 0; i < n; i++) {
//   if (visited[i]) continue;

//   let isLeaf = true;
//   for (let child of parents[i]) {
//     if (!visited[child]) {
//       isLeaf = false;
//       break;
//     }
//   }

//   if (isLeaf) leafCount++;
// }

// console.log(leafCount);

//5629-이진 검색 트리
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }

//   insert(newValue) {
//     if (newValue < this.value) {
//       if (this.left === null) this.left = new Node(newValue);
//       else this.left.insert(newValue);
//     } else {
//       if (this.right === null) this.right = new Node(newValue);
//       else this.right.insert(newValue);
//     }
//   }
// }

// const root = new Node(input[0]);
// for (let i = 1; i < input.length; i++) {
//   root.insert(input[i]);
// }

// let result = [];
// function postOrder(node) {
//   if (!node) return;
//   postOrder(node.left);
//   postOrder(node.right);
//   result.push(node.value);
// }

// postOrder(root);
// console.log(result.join('\n'));

//9372-상근이의 여행
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let t = +input[0];
// let idx = 1;

// while (t--) {
//   let [n, m] = input[idx++].split(' ').map(Number);
//   idx += m;
//   console.log(n - 1);
// }

//5052-전화번호 목록
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let t = +input[0];
// let idx = 1;

// while (t--) {
//   let n = +input[idx++];
//   let arr = input.slice(idx, idx + n);
//   idx += n;

//   arr.sort();

//   let isValid = true;
//   for (let i = 0; i < n - 1; i++) {
//     if (arr[i + 1].startsWith(arr[i])) {
//       isValid = false;
//       break;
//     }
//   }

//   console.log(isValid ? 'YES' : 'NO');
// }

//2263-트리의 순회
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let inorder = input[1].split(' ').map(Number);
// let postorder = input[2].split(' ').map(Number);

// const inorderIndex = {};
// inorder.forEach((v, i) => {
//   inorderIndex[v] = i;
// });

// let result = [];

// function buildP(inStart, inEnd, postStart, postEnd) {
//   if (inStart > inEnd || postStart > postEnd) return;

//   const root = postorder[postEnd];
//   result.push(root);

//   const rootIdx = inorderIndex[root];
//   const leftSize = rootIdx - inStart;

//   buildP(inStart, rootIdx - 1, postStart, postStart + leftSize - 1);

//   buildP(rootIdx + 1, inEnd, postStart + leftSize, postEnd - 1);
// }

// buildP(0, n - 1, 0, n - 1);
// console.log(result.join(' '));

//2533-사회망 서비스(SNS)
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const n = +input[0];
// const graph = Array.from({ length: n + 1 }, () => []);
// for (let i = 1; i < n; i++) {
//   const [u, v] = input[i].split(' ').map(Number);
//   graph[u].push(v);
//   graph[v].push(u);
// }

// const dp = Array.from({ length: n + 1 }, () => [0, 0]);
// const visited = Array(n + 1).fill(false);

// function dfs(node) {
//   visited[node] = true;
//   dp[node][0] = 0;
//   dp[node][1] = 1;

//   for (let child of graph[node]) {
//     if (!visited[child]) {
//       dfs(child);
//       dp[node][0] += dp[child][1];
//       dp[node][1] += Math.min(dp[child][0], dp[child][1]);
//     }
//   }
// }

// dfs(1);
// console.log(Math.min(dp[1][0], dp[1][1]));

//11438-LCA2
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let idx = 0;
// const n = +input[idx++];
// const edges = input.slice(idx, idx + n - 1).map((v) => v.split(' ').map(Number));
// idx += n - 1;
// const m = +input[idx++];
// const queries = input.slice(idx, idx + m).map((v) => v.split(' ').map(Number));

// const graph = Array.from({ length: n }, () => []);
// for (const [u, v] of edges) {
//   graph[u - 1].push(v - 1);
//   graph[v - 1].push(u - 1);
// }

// const depth = Array(n).fill(0);
// const parent = Array(n).fill(-1);
// const visited = Array(n).fill(false);

// function dfs(cur, d) {
//   visited[cur] = true;
//   depth[cur] = d;

//   for (const next of graph[cur]) {
//     if (!visited[next]) {
//       parent[next] = cur;
//       dfs(next, d + 1);
//     }
//   }
// }

// dfs(0, 0);

// const maxK = 17;
// const dp = Array.from({ length: n }, () => Array(maxK + 1).fill(-1));

// for (let i = 0; i < n; i++) {
//   dp[i][0] = parent[i];
// }

// for (let k = 1; k <= maxK; k++) {
//   for (let i = 0; i < n; i++) {
//     if (dp[i][k - 1] !== -1) {
//       dp[i][k] = dp[dp[i][k - 1]][k - 1];
//     }
//   }
// }

// function lca(a, b) {
//   if (depth[a] < depth[b]) [a, b] = [b, a];

//   for (let k = maxK; k >= 0; k--) {
//     if (depth[a] - (1 << k) >= depth[b]) {
//       a = dp[a][k];
//     }
//   }

//   if (a === b) return a;

//   for (let k = maxK; k >= 0; k--) {
//     if (dp[a][k] !== -1 && dp[a][k] !== dp[b][k]) {
//       a = dp[a][k];
//       b = dp[b][k];
//     }
//   }

//   return parent[a];
// }

// let result = '';
// for (const [a, b] of queries) {
//   result += lca(a - 1, b - 1) + 1 + '\n';
// }

// console.log(result.trim());

//9934-완전 이진 트리
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const K = +input[0];
// const inorder = input[1].split(' ').map(Number);
// const result = Array.from({ length: K }, () => []);

// function buildNum(level, start, end) {
//   if (start > end) return;

//   let mid = Math.floor((start + end) / 2);
//   result[level].push(inorder[mid]);

//   buildNum(level + 1, start, mid - 1);
//   buildNum(level + 1, mid + 1, end);
// }

// buildNum(0, 0, inorder.length - 1);
// console.log(result.map((v) => v.join(' ')).join('\n'));

//15681-트리와 쿼리
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const [n, r, q] = input[0].split(' ').map(Number);

// const graph = Array.from({ length: n + 1 }, () => []);
// for (let i = 1; i < n; i++) {
//   const [u, v] = input[i].split(' ').map(Number);
//   graph[u].push(v);
//   graph[v].push(u);
// }

// const queries = [];
// for (let i = n; i < n + q; i++) {
//   queries.push(Number(input[i]));
// }

// const subtreeSizes = Array(n + 1).fill(0);
// const visited = Array(n + 1).fill(false);

// function dfs(node) {
//   visited[node] = true;
//   subtreeSizes[node] = 1;

//   for (const neighbor of graph[node]) {
//     if (!visited[neighbor]) {
//       subtreeSizes[node] += dfs(neighbor);
//     }
//   }

//   return subtreeSizes[node];
// }

// dfs(r);

// const results = queries.map((query) => subtreeSizes[query]);
// console.log(results.join('\n'));

//3584-가장 가까운 공통 조상
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let t = +input[0];
// let idx = 1;

// while (t--) {
//   let n = +input[idx++];
//   let arr = input.slice(idx, idx + n - 1).map((v) => v.split(' ').map(Number));
//   idx += n - 1;
//   let [a, b] = input[idx++].split(' ').map(Number);

//   const tree = Array.from({ length: n + 1 }, () => []);
//   const parent = Array(n + 1).fill(0);
//   const depth = Array(n + 1).fill(0);
//   const visited = Array(n + 1).fill(false);
//   const isChild = Array(n + 1).fill(false);

//   for (let [p, c] of arr) {
//     tree[p].push(c);
//     tree[c].push(p);
//     isChild[c] = true;
//   }

//   let root = 0;
//   for (let i = 1; i <= n; i++) {
//     if (!isChild[i]) {
//       root = i;
//       break;
//     }
//   }

//   function dfs(cur, d) {
//     visited[cur] = true;
//     depth[cur] = d;
//     for (let next of tree[cur]) {
//       if (!visited[next]) {
//         parent[next] = cur;
//         dfs(next, d + 1);
//       }
//     }
//   }

//   dfs(root, 0);

//   while (depth[a] > depth[b]) a = parent[a];
//   while (depth[a] < depth[b]) b = parent[b];

//   while (a !== b) {
//     a = parent[a];
//     b = parent[b];
//   }

//   console.log(a);
// }

//1240-노드사이의 거리
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let [n, m] = input[0].split(' ').map(Number);
// let nArr = input.slice(1, n).map((v) => v.split(' ').map(Number));
// let mArr = input.slice(n).map((v) => v.split(' ').map(Number));
// let graph = Array.from({ length: n + 1 }, () => []);

// for (let [a, b, c] of nArr) {
//   graph[a].push([b, c]);
//   graph[b].push([a, c]);
// }

// function dfs(cur, target, visited, dist) {
//   if (cur === target) return dist;

//   visited[cur] = true;

//   for (let [next, weight] of graph[cur]) {
//     if (!visited[next]) {
//       const result = dfs(next, target, visited, dist + weight);
//       if (result !== -1) return result;
//     }
//   }

//   return -1;
// }

// for (let [from, to] of mArr) {
//   const visited = Array(n + 1).fill(false);
//   const distance = dfs(from, to, visited, 0);
//   console.log(distance);
// }

//14725-개미굴
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const n = +input[0];
// const trie = {};

// for (let i = 1; i <= n; i++) {
//   let cur = trie;
//   let [_, ...foods] = input[i].split(' ');

//   for (let food of foods) {
//     if (!cur[food]) {
//       cur[food] = {};
//     }
//     cur = cur[food];
//   }
// }

// function printTrie(node, depth) {
//   let keys = Object.keys(node).sort();

//   for (let key of keys) {
//     console.log('--'.repeat(depth) + key);
//     printTrie(node[key], depth + 1);
//   }
// }

// printTrie(trie, 0);

//1949-우수 마을
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let nums = input[1].split(' ').map(Number);
// let arr = input.slice(2).map((v) => v.split(' ').map(Number));
// let graph = Array.from({ length: n + 1 }, () => []);

// for (let [a, b] of arr) {
//   graph[a].push(b);
//   graph[b].push(a);
// }

// let dp = Array.from({ length: n + 1 }, () => [0, 0]);
// let visited = Array(n + 1).fill(false);

// function dfs(cur) {
//   visited[cur] = true;

//   dp[cur][0] = 0;
//   dp[cur][1] = nums[cur - 1];

//   for (let next of graph[cur]) {
//     if (!visited[next]) {
//       dfs(next);
//       dp[cur][0] += Math.max(dp[next][0], dp[next][1]);
//       dp[cur][1] += dp[next][0];
//     }
//   }
// }

// dfs(1);

// console.log(Math.max(dp[1][0], dp[1][1]));

//1991-트리 순회
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let result = '';

// let tree = {};

// for (let i = 1; i <= n; i++) {
//   let [node, left, right] = input[i].split(' ').map((v) => v.trim());

//   tree[node] = [left, right];
// }

// function preOrder(node) {
//   if (node === '.') return;
//   let [left, right] = tree[node];
//   result += node;
//   preOrder(left);
//   preOrder(right);
// }

// function inOrder(node) {
//   if (node === '.') return;
//   let [left, right] = tree[node];
//   inOrder(left);
//   result += node;

//   inOrder(right);
// }

// function posOrder(node) {
//   if (node === '.') return;
//   let [left, right] = tree[node];
//   posOrder(left);
//   posOrder(right);
//   result += node;
// }

// preOrder('A');
// result += '\n';
// inOrder('A');
// result += '\n';
// posOrder('A');
// result += '\n';

// console.log(result);

//11725-트리의 부모 찾기
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let arr = input.slice(1).map((v) => v.split(' ').map(Number));
// let graph = Array.from({ length: n + 1 }, () => []);
// let parent = Array(n + 1).fill(0);

// for (let [a, b] of arr) {
//   graph[a].push(b);
//   graph[b].push(a);
// }

// let queue = [1];
// let visited = Array(n + 1).fill(false);
// visited[1] = true;

// while (queue.length) {
//   let node = queue.shift();

//   for (let next of graph[node]) {
//     if (!visited[next]) {
//       visited[next] = true;
//       parent[next] = node;
//       queue.push(next);
//     }
//   }
// }

// for (let i = 2; i <= n; i++) {
//   console.log(parent[i]);
// }

//1967-트리의 지름
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let arr = input.slice(1).map((v) => v.split(' ').map(Number));
// let graph = Array.from({ length: n + 1 }, () => []);

// for (let [a, b, c] of arr) {
//   graph[a].push([b, c]);
//   graph[b].push([a, c]);
// }

// function bfs(start) {
//   let visited = Array(n + 1).fill(false);
//   let depth = Array(n + 1).fill(0);

//   visited[start] = true;
//   let queue = [start];

//   while (queue.length) {
//     let node = queue.shift();

//     for (let [next, dist] of graph[node]) {
//       if (!visited[next]) {
//         visited[next] = true;
//         depth[next] = dist + depth[node];
//         queue.push(next);
//       }
//     }
//   }

//   let maxDist = Math.max(...depth);
//   let maxNum = depth.indexOf(maxDist);
//   return [maxNum, maxDist];
// }

// let [num, dist] = bfs(1);
// let [_, d] = bfs(num);

// console.log(d);

//1167-트리의 지름
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let v = +input[0];
// let graph = Array.from({ length: v + 1 }, () => []);

// for (let i = 1; i <= v; i++) {
//   let arr = input[i].split(' ').map(Number);
//   let n = arr.shift();

//   for (let j = 0; j < arr.length - 1; j += 2) {
//     graph[n].push([arr[j], arr[j + 1]]);
//   }
// }

// function bfs(start) {
//   let visited = Array(v + 1).fill(false);
//   visited[start] = true;
//   let queue = [start];
//   let dist = Array(v + 1).fill(0);

//   while (queue.length) {
//     let node = queue.shift();

//     for (const [next, d] of graph[node]) {
//       if (!visited[next]) {
//         visited[next] = true;
//         dist[next] = dist[node] + d;
//         queue.push(next);
//       }
//     }
//   }

//   let maxDist = Math.max(...dist);
//   let maxNum = dist.indexOf(maxDist);

//   return [maxNum, maxDist];
// }

// let [fatherNum, fatherDist] = bfs(1);
// let [_, dist] = bfs(fatherNum);
// console.log(dist);

//1068-트리
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let n = +input[0];
// let arr = input[1].split(' ').map(Number);
// let v = +input[2];
// let root = 0;
// let tree = Array.from({ length: n + 1 }, () => []);

// for (let i = 0; i < n; i++) {
//   if (arr[i] === -1) {
//     root = i;
//   } else {
//     tree[arr[i]].push(i);
//   }
// }

// let count = 0;

// function dfs(node) {
//   if (node === v) return;

//   let deleteCount = 0;

//   for (let next of tree[node]) {
//     if (next === v) continue;
//     dfs(next);
//     deleteCount++;
//   }

//   if (deleteCount === 0) count++;
// }

// if (root !== v) {
//   dfs(root);
// }

// console.log(count);

//5639-이진검색트리
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let arr = input.map(Number);

function postOrder(start, end) {
  if (start > end) return;

  let root = arr[start];
  let divide = start + 1;

  while (divide <= end && arr[divide] < root) {
    divide++;
  }

  postOrder(start + 1, divide - 1);
  postOrder(divide, end);

  console.log(root);
}

postOrder(0, arr.length - 1);
