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
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
let [N, ...edges] = input;

const graph = Array.from({ length: +N + 1 }).map(() => []);
const checked = Array.from({ length: +N + 1 }).fill(false);
const parentNodes = Array.from({ length: +N + 1 }).fill(null);

edges.forEach((edge) => {
  const [start, end] = edge.split(' ');

  graph[start].push(+end);
  graph[end].push(+start);
});

const dfsSearchForParent = (vertex) => {
  if (checked[vertex]) return;

  checked[vertex] = true;

  graph[vertex].forEach((child) => {
    if (!checked[child]) parentNodes[child] = vertex;

    dfsSearchForParent(child);
  });
};

dfsSearchForParent(1);

let answer = '';

for (let i = 2; i < parentNodes.length; i++) {
  answer += parentNodes[i] + '\n';
}

console.log(answer);
