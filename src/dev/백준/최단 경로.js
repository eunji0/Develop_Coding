//11403-경로 찾기
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const n = +input.shift();
// let graph = input.map(v => v.split(' ').map(Number));

// for(let k=0; k<n; k++){
//   for(let i=0; i<n; i++){
//     for(let j=0; j<n; j++){
//       if(graph[i][k]===1&&graph[k][j]===1){
//         graph[i][j]=1
//       }
//     }
//   }
// }

// for (let i = 0; i < n; i++) {
//   console.log(graph[i].join(' '));
// }

//11404-플로이드
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// const n = +input[0];  // 도시의 개수
// const m = +input[1];  // 버스의 개수

// const INF=1e9

// const dist = Array.from({length:n}, ()=>Array(n).fill(INF));

// for(let i=0; i<n; i++){
//   dist[i][i]=0
// }

// for(let i=2; i<m+2; i++){
//   const [a, b, c]=input[i].split(' ').map(Number)
//   dist[a-1][b-1]=Math.min(dist[a-1][b-1], c)
// }

// for(let k=0; k<n; k++){
//   for(let i=0; i<n; i++){
//     for(let j=0; j<n; j++){
//       dist[i][j]=Math.min(dist[i][j], dist[i][k]+dist[k][j])
//     }
//   }
// }

// let result ='';

// for(let i=0; i<n; i++){
//   for(let j=0; j<n; j++){
//     if(dist[i][j]===INF){
//       result+='0 '
//     }else{
//       result+=`${dist[i][j]} `
//     }
//   }

//   result+='\n'
// }

// console.log(result.trim())


//1916-최소비용 구하기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = +input[0];
const m= +input[1];
const [start, goal] = input[m+2].split(' ').map(Number)
const graph = Array.from({length: n+1}, ()=>[]);

for(let i=2; i<m+2; i++){
  const [a, b, c] = input[i].split(' ').map(Number);
  graph[a].push([b, c])
}

const dijstra = (start)=>{
  const dist = Array(n+1).fill(Infinity);
  dist[start]=0;

  const pq = [[0, start]];

  while(pq.length){
    pq.sort((a, b)=>a[0]-b[0])
    const [curDist, curNode] = pq.shift();

    //현재 노드에서 더 짧은 경로가 있다면 pass
    if(dist[curNode]<curDist) continue

    for(const [nextNode, nextDist] of graph[curNode]){
      let totalDist = nextDist+curDist;

      if(totalDist<dist[nextNode]){
        dist[nextNode]=totalDist
        pq.push([totalDist, nextNode])
      }
    }
  }

  return dist
}

const result = dijstra(start);
console.log(result[goal])
