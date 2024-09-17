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
const m = +input[1];
const [start, goal] = input[m+2].split(' ').map(Number);
const graph = Array.from({length: n+1}, () => []);

for (let i = 2; i < m+2; i++) {
  const [a, b, c] = input[i].split(' ').map(Number);
  graph[a].push([b, c]);
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  pop() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown(0);
    }
    return min;
  }

  sinkDown(index) {
    const length = this.heap.length;
    const element = this.heap[index];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild[0] < element[0]) swap = leftChildIndex;
      }
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild[0] < element[0]) ||
          (swap !== null && rightChild[0] < leftChild[0])
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
      index = swap;
    }
  }

  size() {
    return this.heap.length;
  }
}

const dijkstra = (start) => {
  const dist = Array(n + 1).fill(Infinity);
  dist[start] = 0;

  const pq = new MinHeap();
  pq.push([0, start]);

  while (pq.size()) {
    const [curDist, curNode] = pq.pop();

    if (dist[curNode] < curDist) continue;

    for (const [nextNode, nextDist] of graph[curNode]) {
      const totalDist = curDist + nextDist;
      if (totalDist < dist[nextNode]) {
        dist[nextNode] = totalDist;
        pq.push([totalDist, nextNode]);
      }
    }
  }

  return dist;
};

const result = dijkstra(start);
console.log(result[goal]);


//1238-파티

//n: 학생수
//m: 단방향 도로
//x: 파티 장소

//경로: 자신의 마을 -> 파티 장소 ->자신의 마을
//이 도로들은 단방향이기 때문에 아마 그들이 오고 가는 길이 다를지도 모른다. 
//출력: . N명의 학생들 중 오고 가는데 가장 많은 시간을 소비하는 학생(번호)

//문제풀이과정
//자신의 마을 -> 파티 장소의 최단경로
//파티 장소 ->자신의 마을의 최단경로
//각 마을에 대해 왕복하는 데 걸리는 시간을 계산
//그 중 가장 오래 걸리는 시간

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// const [n, m, x] = input[0].split(' ').map(Number);
// const graph = Array.from({ length: n + 1 }, () => []);

// // 그래프 입력 처리
// for (let i = 1; i <= m; i++) {
//   const [start, end, time] = input[i].split(' ').map(Number);
//   graph[start].push([end, time]);
// }

// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   push(value) {
//     this.heap.push(value);
//     this.bubbleUp();
//   }

//   bubbleUp() {
//     let index = this.heap.length - 1;
//     while (index > 0) {
//       let parentIndex = Math.floor((index - 1) / 2);
//       if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
//       [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
//       index = parentIndex;
//     }
//   }

//   pop() {
//     const min = this.heap[0];
//     const end = this.heap.pop();
//     if (this.heap.length > 0) {
//       this.heap[0] = end;
//       this.sinkDown(0);
//     }
//     return min;
//   }

//   sinkDown(index) {
//     const length = this.heap.length;
//     const element = this.heap[index];
//     while (true) {
//       let leftChildIndex = 2 * index + 1;
//       let rightChildIndex = 2 * index + 2;
//       let leftChild, rightChild;
//       let swap = null;

//       if (leftChildIndex < length) {
//         leftChild = this.heap[leftChildIndex];
//         if (leftChild[0] < element[0]) swap = leftChildIndex;
//       }
//       if (rightChildIndex < length) {
//         rightChild = this.heap[rightChildIndex];
//         if (
//           (swap === null && rightChild[0] < element[0]) ||
//           (swap !== null && rightChild[0] < leftChild[0])
//         ) {
//           swap = rightChildIndex;
//         }
//       }

//       if (swap === null) break;
//       [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
//       index = swap;
//     }
//   }

//   size() {
//     return this.heap.length;
//   }
// }

// // 다익스트라 알고리즘
// const dijkstra = (start, graph) => {
//   const dist = Array(n + 1).fill(Infinity);
//   dist[start] = 0;

//   const pq = new MinHeap();
//   pq.push([0, start]);

//   while (pq.size() > 0) {
//     const [curDist, curNode] = pq.pop();

//     if (dist[curNode] < curDist) continue;

//     for (const [nextNode, nextDist] of graph[curNode]) {
//       const totalDist = curDist + nextDist;

//       if (totalDist < dist[nextNode]) {
//         dist[nextNode] = totalDist;
//         pq.push([totalDist, nextNode]);
//       }
//     }
//   }

//   return dist;
// };

// // X 마을로 가는 최단 거리 계산
// const distanceToX = dijkstra(x, graph);

// // 그래프 반전
// const reverseGraph = Array.from({ length: n + 1 }, () => []);
// for (let i = 1; i <= n; i++) {
//   for (const [to, time] of graph[i]) {
//     reverseGraph[to].push([i, time]);
//   }
// }

// // X 마을에서 각 마을로 돌아가는 최단 거리 계산
// const distanceFromX = dijkstra(x, reverseGraph);

// // 왕복 시간을 계산하여 최대값을 찾음
// let maxTime = 0;
// for (let i = 1; i <= n; i++) {
//   const totalTime = distanceToX[i] + distanceFromX[i];
//   maxTime = Math.max(maxTime, totalTime);
// }

// console.log(maxTime);
