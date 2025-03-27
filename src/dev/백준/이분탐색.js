//1920-수찾기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((v) => v.trim());

let n = input[0];
let nArr = new Set(input[1].split(' ').map(Number));
let m = input[2];
let mArr = input[3].split(' ').map(Number);

mArr.forEach((v) => {
  if (nArr.has(v)) {
    console.log(1);
  } else {
    console.log(0);
  }
});
