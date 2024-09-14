//11403-경로 찾기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = +input.shift();
let graph = input.map(v => v.split(' ').map(Number));

for(let k=0; k<n; k++){
  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
      if(graph[i][k]===1&&graph[k][j]===1){
        graph[i][j]=1
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  console.log(graph[i].join(' '));
}