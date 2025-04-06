//1991-트리 순회
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const N = Number(input.shift());
// let result = '';

// const tree = {};
// for (let i = 0; i < N; i++) {
//   const [node, left, right] = input[i].split(' ');
//   tree[node] = [left, right];
// }

// function preorder(node) {
//   if (node === '.') return;
//   const [left, right] = tree[node];
//   result += node;
//   preorder(left);
//   preorder(right);
// }

// function inorder(node) {
//   if (node === '.') return;
//   const [left, right] = tree[node];
//   inorder(left);
//   result += node;
//   inorder(right);
// }

// function postorder(node) {
//   if (node === '.') return;
//   const [left, right] = tree[node];
//   postorder(left);
//   postorder(right);
//   result += node;
// }

// preorder('A');
// result += '\n';
// inorder('A');
// result += '\n';
// postorder('A');

// console.log(result);

//1725-트리의 부모 찾기
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let [N, ...edges] = input;

// const graph = Array.from({ length: +N + 1 }).map(() => []);
// const checked = Array.from({ length: +N + 1 }).fill(false);
// const parentNodes = Array.from({ length: +N + 1 }).fill(null);

// edges.forEach((edge) => {
//   const [start, end] = edge.split(' ');

//   graph[start].push(+end);
//   graph[end].push(+start);
// });

// const dfsSearchForParent = (vertex) => {
//   if (checked[vertex]) return;

//   checked[vertex] = true;

//   graph[vertex].forEach((child) => {
//     if (!checked[child]) parentNodes[child] = vertex;

//     dfsSearchForParent(child);
//   });
// };

// dfsSearchForParent(1);

// let answer = '';

// for (let i = 2; i < parentNodes.length; i++) {
//   answer += parentNodes[i] + '\n';
// }

// console.log(answer);

//1967 - 트리의 지름
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());
const inputArr = input.map((v) => v.split(' ').map(Number));
let graph = Array.from(Array(N + 1), () => []);
inputArr.forEach(([from, to, distance]) => {
  graph[from].push([to, distance]);
  graph[to].push([from, distance]);
});
const visited = Array(N + 1).fill(false);
let max = { node: 0, dist: 0 };
const dfs = (node, dist) => {
  visited[node] = true;
  if (max.dist < dist) max = { node, dist };
  for (const [nextNode, nextDist] of graph[node]) {
    if (visited[nextNode]) continue;
    dfs(nextNode, dist + nextDist);
  }
};
dfs(1, 0); // 루트 노드(1번)로부터 가장 먼 노드 찾기위해 dfs 실행
visited.fill(false); // 방문 배열 초기화
dfs(max.node, 0); // 가중치가 가장 큰(가장 먼) 노드에서부터 dfs 실행
console.log(max.dist);
