//2217-로프
const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n');

const N = input.shift();

const rope = input.map(Number);

rope.sort((a, b) => b - a);

const answer = [];

for (let i = 0; i < N; i++) {
  answer.push(rope[i] * (i + 1));
}

console.log(Math.max(...answer));
