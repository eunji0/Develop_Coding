//2839-설탕 배달
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input[0];
let count = 0;

while (n >= 0) {
  if (n % 5 === 0) {
    count += Math.floor(n / 5);
    console.log(count);
    return;
  }

  n -= 3;
  count++;
}

console.log(-1);
