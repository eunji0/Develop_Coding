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
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let v = +input[0];
let arr = input.slice(1).map((v) => v.split(' ').map(Number));
let graph = Array.from({ length: v + 1 }, () => []);

for (let a of arr) {
  let num = a.shift();

  for (let i = 0; i < a.length - 1; i += 2) {
    graph[num].push([a[i], a[i + 1]]);
    graph[a[i]].push([num, a[i + 1]]);
  }
}

function dfs(node, visited, dist) {
  visited[node] = true;
  let father = [node, dist];

  for (let [next, nextDist] of graph[node]) {
    if (!visited[next]) {
      visited[next] = true;
      let result = dfs(next, visited, nextDist + dist);
      if (result[1] > father[1]) {
        father = result;
      }
    }
  }

  return father;
}

let visited = Array(v + 1).fill(false);
let fatherResult = dfs(1, visited, 0);

visited = Array(v + 1).fill(false);
let [, d] = dfs(fatherResult[0], visited, 0);
console.log(d);
