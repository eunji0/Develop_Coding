//1991-트리 순회
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((v) => v.trim());

const N = Number(input.shift());
let result = '';

const tree = {};
for (let i = 0; i < N; i++) {
  const [node, left, right] = input[i].split(' ');
  tree[node] = [left, right];
}

function preOrder(node) {
  if (node === '.') return;
  let [left, right] = tree[node];
  result += node;
  preOrder(left);
  preOrder(right);
}

function inOrder(node) {
  if (node === '.') return;
  let [left, right] = tree[node];
  inOrder(left);
  result += node;
  inOrder(right);
}

function posOrder(node) {
  if (node === '.') return;
  let [left, right] = tree[node];
  posOrder(left);
  posOrder(right);
  result += node;
}

preOrder('A');
result += '\n';
inOrder('A');
result += '\n';
posOrder('A');
result += '\n';

console.log(result);

//1725-트리의 부모 찾기
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

//1967 - 트리의 지름
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
