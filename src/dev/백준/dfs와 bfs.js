//bfs와 dfs

//bfs
// class Queue{
//   constructor(){
//     this.items = [];
//   }

//   push(element){
//     this.items.push(element)
//   }

//   popLeft(){
//     return this.items.shift();
//   }

//   size(){
//     return this.items.length;
//   }
// }

// function BFS(graph, start, visited){
//   const queue = new Queue();//새로운 큐 생성
//   queue.push(start)//시작노드 삽입
//   visited[start]=start;//방문 표시

//   while(queue.size()){//큐가 비지 않았다면
//     const v = queue.popLeft(); //큐의 맨 앞 노드 꺼내기
//     console.log(v);

//     for(const node of graph[v]){//인접한 노드 순회
//       if(!visited[node]){//방문하지 않은 노드라면
//         queue.push(node);
//         visited[node]=true;
//       }
//     }
//   }
// }

// const graph = [
//   [1, 2],    // 0번 노드와 연결된 노드들
//   [0, 4, 5], // 1번 노드와 연결된 노드들
//   [0, 3],    // 2번 노드와 연결된 노드들
//   [2],       // 3번 노드와 연결된 노드들
//   [1],       // 4번 노드와 연결된 노드들
//   [1]        // 5번 노드와 연결된 노드들
// ];
// const visited = Array(6).fill(false); // 방문 배열 초기화

// BFS(graph, 0, visited); // 노드 0부터 BFS 탐색 시작

//1753-최단경로
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

// // 첫 번째 줄에는 정점의 개수 V와 간선의 개수 E가 주어집니다.
// const [V, E] = input[0].split(' ').map(Number);

// // 두 번째 줄에는 시작 정점의 번호 K가 주어집니다.
// const K = Number(input[1]);

// // 간선 정보를 저장할 그래프를 초기화합니다.
// const graph = Array.from({ length: V + 1 }, () => []);

// // 세 번째 줄부터 E개의 줄에 걸쳐 각 간선의 정보를 읽어옵니다.
// for (let i = 2; i < 2 + E; i++) {
//   const [u, v, w] = input[i].split(' ').map(Number);
//   graph[u].push({ node: v, weight: w });
// }

// // 무한대를 나타내는 큰 값으로 초기화합니다.
// const INF = 1e9;
// const distances = Array(V + 1).fill(INF);
// //다익스트라 알고리즘의 시작 정점에서 시작 정점 자체로 가는 거리는 항상 0이기 때문
// distances[K] = 0;

// // 우선순위 큐를 사용하기 위해 MinHeap 클래스를 구현합니다.
// //최소 힙은 완전 이진 트리의 형태를 가지며, 부모 노드가 자식 노드보다 항상 작거나 같은 값을 갖는 성질을 갖는다
// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   insert(value) {
//     this.heap.push(value);
//     this._bubbleUp();
//   }

//   extractMin() {
//     if (this.heap.length === 1) return this.heap.pop();
//     const min = this.heap[0];
//     this.heap[0] = this.heap.pop();
//     this._bubbleDown();
//     return min;
//   }

//   _bubbleUp() {
//     let index = this.heap.length - 1;
//     while (index > 0) {
//       const parentIndex = Math.floor((index - 1) / 2);
//       //부모 노드와 비교하여 부모 노드보다 작으면 위치를 교환
//       if (this.heap[parentIndex].distance <= this.heap[index].distance) break;
//       [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
//       index = parentIndex;
//     }
//   }

//   _bubbleDown() {
//     let index = 0;
//     while (2 * index + 1 < this.heap.length) {
//       let smallerChildIndex = 2 * index + 1;
//       //자식 노드와 비교하여 자식 노드보다 크면 위치를 교환
//       if (2 * index + 2 < this.heap.length && this.heap[2 * index + 2].distance < this.heap[2 * index + 1].distance) {
//         smallerChildIndex = 2 * index + 2;
//       }
//       if (this.heap[index].distance <= this.heap[smallerChildIndex].distance) break;
//       [this.heap[index], this.heap[smallerChildIndex]] = [this.heap[smallerChildIndex], this.heap[index]];
//       index = smallerChildIndex;
//     }
//   }

//   size() {
//     return this.heap.length;
//   }
// }

// // 다익스트라 알고리즘을 사용하여 최단 경로를 찾습니다.
// function dijkstra(start) {
//   const pq = new MinHeap();
//   pq.insert({ node: start, distance: 0 });

//   while (pq.size() > 0) {
//     const { node: currentNode, distance: currentDistance } = pq.extractMin();

//     if (distances[currentNode] < currentDistance) continue;

//     for (const neighbor of graph[currentNode]) {
//       const distance = currentDistance + neighbor.weight;
//       if (distance < distances[neighbor.node]) {
//         distances[neighbor.node] = distance;
//         pq.insert({ node: neighbor.node, distance });
//       }
//     }
//   }
// }

// // 시작점에서 다익스트라 알고리즘 실행
// dijkstra(K);

// // 결과 출력
// const result = [];
// for (let i = 1; i <= V; i++) {
//   result.push(distances[i] === INF ? 'INF' : distances[i]);
// }
// console.log(result.join('\n'));


//최단 경로 문제 => 최소힙+다익스트라 알고리즘

//먼저 최소힙 이해하기
// class MinHeap{
//   constructor(){
//     this.heap=[];
//   }

//   push(value){
//     this.heap.push(value);
//     this.heapifyUp();
//   }

//   //새로운 노드 자리 찾아주기
//   heapifyUp(){
//     let index = this.heap.length-1;

//     //인덱스가 부모노드가 될때까지
//     while(index>0){
//       const parentIndex = Math.floor((index-1)/2);

//       if(this.heap[parentIndex]<=this.heap[index]) break;

//       [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];

//       index = parentIndex;
//     }
//   }

//   pop(){
//     if(this.isEmpty()) return null;

//     const root = this.heap[0];
//     const lastNode = this.heap.pop();

//     if(!this.isEmpty()){
//       this.heap[0] = lastNode;
//       this.heapifyDown();
//     }

//     return root
//   }

//   //루트 노드 제거후 재정비
//   heapifyDown(){
//     let index =0;
//     const length = this.heap.length;

//     while(true){
//       let smallest = index;
//       const leftChildIndex = index*2+1;
//       const rigthChildIndex = index*2+2;

//       if(leftChildIndex < length &&this.heap[leftChildIndex] <this.heap[smallest]){
//         smallest = leftChildIndex;
//       }

//       if(rigthChildIndex <length &&this.heap[rigthChildIndex] < this.heap[smallest]){
//         smallest = rigthChildIndex;
//       }

//       if(smallest === index) break;

//       [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
//       index = smallest
//     }
    
//   }
// }

// //특정한 하나의 정점에서 다른 모든 정점으로 가는 최단 경로를 계산 => 다익스트라 알고리즘

// //작동 이해하기
// //노드 간의 거리는 Infinity로 저장 => 무한대의 값을 저장해서 영원히 닿을 수 없다는 의미
// //출발 노드는 1번 노드
// //1번 노드는 자기 스스로와 거리가 0 이기 때문에 먼저 0 으로 채워넣는다.
// //1번 노드 방문했으니 visited=true로 설정
// //다음에 방문할 노드 찾기(거리 값이 작은 걸로 선택)
// //1번 노드부터 누적해서 이동한 거리를 저장
// //그 다음, 다시 거리 테이블에서 가장 작은 값을 가졌고, 방문하지 않은 노드인 2번 노드를 방문한다.
// //o번 노드를 거쳐 간 거리가 훨씬 짧기 때문에 거리 테이블에서는 값을 갱신하지 않는다.
// //위와 같은 과정을 반복(방문하지 않은 노드가 없을 때까지)

// //구현하기
// //다익스트라 알고리즘은 bfs로 기반
// //구현 방법
// //첫번째. 거리 테이블을 매번 탐색하는 ‘순차 탐색’ 방식
// //두번째. 거리가 짧은 노드를 우선 탐색하는 ‘우선순위 큐’방식

// //순차탐색 방식
// // 노드 간의 거리를 초기화
// const graph = [
//   [Infinity, 1, Infinity, 2, Infinity],
//   [1, Infinity, 3, Infinity, 2],
//   [Infinity, 3, Infinity, Infinity, 1],
//   [2, Infinity, Infinity, Infinity, 2],
//   [Infinity, 2, 1, 2, Infinity],
// ];

// // 방문 여부를 기록할 배열 생성
// const visited = Array(N).fill(false);

// // 1번 노드로부터 각 노드까지의 최단 거리를 저장한 배열 생성
// const dist = visited.map((_, i) => graph[0][i]);
// //ex)[Infinity, 1, Infinity, 2, Infinity] 이런 형태

// // 방문하지 않았으면서 거리 테이블에서 가장 작은 값을 가진 노드 탐색
// const findSmallestNode = (visited, distance) => {
//   //최소 거리 초기화
//   let minDist = Infinity;
//   //최소 노드 초기화
//   let minIdx = 0;

//   //거리값까지 순회
//   for (let i = 0; i < distance.length; i++) {
//     //방문했다면 패스
//     if (visited[i]) continue;

//     //현재 거리값이 최소 거리값보다 작다면
//     if (distance[i] < minDist) {
//       //거리값 갱신
//       minDist = distance[i];
//       //노드번호 갱신
//       minIdx = i;
//     }
//   }

//   //가장 작은 노드 번호 반환
//   return minIdx;
// };

// // 다익스트라 알고리즘 수행
// const dijkstra = (graph, visited, dist) => {
//   // 1번 노드는 거리를 0으로 설정하고, 방문한 것으로 처리
//   distance[0] = 0;
//   visited[0] = true;

//   /*
// 			현재 방문한 노드는 거리 테이블 상에서 가장 거리가 짧은 값을 가진 노드. 
// 			다음에 방문할 노드에 저장된 값이
// 			"현재 방문한 노드까지 누적 이동 거리 + 다음 노드까지 거리"보다 크다면
// 			"현재 방문한 노드까지 누적 이동 거리 + 다음 노드까지 거리"를 거리 테이블의 다음 방문할 노드에 저장
// 		*/
//   for (let i = 0; i < distance.length; i++) {
//     // 방문하지 않았으면서 거리 테이블에서 가장 작은 값을 가진 노드 탐색
//     const nodeIdx = findSmallestNode(visited, distance);
//     //방문 체크
//     visited[nodeIdx] = true;

//     for (let j = 0; j < distance.length; j++) {
//       if (visited[j]) continue;
//       //현재 거리값이 "현재 방문한 노드까지 누적 이동 거리 + 다음 노드까지 거리"보다 크다면
//       if (distance[j] > distance[nodeIdx] + graph[nodeIdx][j])
//         //갱신
//         distance[j] = distance[nodeIdx] + graph[nodeIdx][j];
//     }
//   }
// };

// // 순차 탐색 방식은 ‘방문하지 않은 노드 중 거리값이 가장 작은 노드’를 다음 탐색 노드로 선택한다.
// // 그 노드를 찾는 방식은 거리 테이블의 앞에서부터 찾아내야 하기 때문에 
// // 시간 복잡도는 O(N2)이 된다.

// //우선순위 큐
// //그래프는 2차원 배열 안에 객체 형태로 to 목적지와 dist 거리를 저장
// // 0번 노드는 사용하지 않는 빈 노드이다.
// // 이는 시작 노드를 1번으로 설정하기 위함이다.
// const graph = [
//   [], // 사용X
//   [
//     { to: 2, dist: 1 },
//     { to: 4, dist: 2 },
//   ],
//   [
//     { to: 1, dist: 1 },
//     { to: 3, dist: 3 },
//     { to: 5, dist: 2 },
//   ],
//   [
//     { to: 2, dist: 3 },
//     { to: 5, dist: 1 },
//   ],
//   [
//     { to: 1, dist: 2 },
//     { to: 5, dist: 2 },
//   ],
//   [
//     { to: 2, dist: 2 },
//     { to: 3, dist: 1 },
//     { to: 4, dist: 2 },
//   ],
// ];

// // 1번 노드와 각 노드까지 최단 경로를 저장하는 배열 생성
// const dist = Array(graph.length).fill(Infinity);

// // 큐 생성 및 1번 노드에 대한 정보 저장
// const queue = [{ to: 1, dist: 0 }];

// // 1번 노드의 거리는 0 으로 설정
// dist[1] = 0;

// // 큐가 빌 때까지 반복
// while (queue.length) {
//   // 큐에서 방문할 노드 꺼내기
//   const { to } = queue.pop();

//   // 방문한 노드까지 이동한 거리 + 다음 방문 노드까지 거리를
//   // 기존에 저장된 값과 비교해서 갱신
//   graph[to].forEach((next) => {
//     //acc는 새로운 거리(방문한 노드까지 이동한 거리 + 다음 방문 노드까지 거리)
//     const acc = dist[to] + next.dist;
//     //새로운 거리가 기존 거리보다 짧다면
//     if (dist[next.to] > acc) {
//       //갱신
//       dist[next.to] = acc;
//       // 최단 경로가 되는 노드는 큐에 추가
//       queue.push(next);
//     }
//   });
// }

// //연습문제
// //프로그래머스-배달
// function solution(N, road, K) {
//   let graph = Array.from(Array(N + 1), () => Array());
//   let distance = Array.from({ length: N + 1 }, () => Infinity);
//   let queue = [];

//   for (let [a, b, c] of road) {
//     graph[a].push([b, c]);5
//   }
 
//   queue.push([1, 0]);
//   distance[1] = 0;
//   while (queue.length) {
//     const [point, cost] = queue.shift();
//     for (let i = 0; i < graph[point].length; i++) {
//       const next = graph[point][i][0];
//       const nextcost = graph[point][i][1];

//       if (distance[next] > distance[point] + nextcost) {
//         distance[next] = distance[point] + nextcost;
//         queue.push([next, nextcost]);
//       }
//     }
//   }

//   distance = distance.filter((v) => v <= K);
//   return distance.length;
// }

//1916-최소비용
//순차탐색 구현
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const [N, M, ...input] = require('fs').readFileSync(filePath).toString().trim().split("\n");

// N = +N;  // 도시의 개수
// M = +M;  // 버스의 개수

// // 출발 도시 start, 도착 도시 end
// let [start, end] = input.pop().split(" ").map(Number);

// // 버스의 정보
// input = input.map((v) => v.split(" ").map(Number));

// // 버스의 정보를 저장할 배열
// let graph = Array.from({ length: N + 1 }, () => []);

// // 출발도시 a의 도착 도시 b, 비용 c를 객체 형태로 저장
// for (let [a, b, c] of input) {
//   graph[a].push({ node: b, cost: c });
// }

// // 최단거리를 저장할 배열
// let dist = Array.from({ length: N + 1 }).fill(Infinity);
// // 방문여부를 저장할 배열
// let visited = Array.from({ length: N + 1 }).fill(false);

// 순차 탐색을 하는 경우 노드의 개수 만큼 순차 탐색을 수행해야 하기 때문에 O(N²)의 시간이 걸린다.


//우선 순위 큐 방식 사용하기
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = require('fs').readFileSync(filePath).toString().trim().split("\n");

// const N = +input[0];
// const M = +input[1];
// const arr = Array.from({ length: N + 1 }, () => []);
// for (let i = 2; i < 2 + M; i++) {
//   const [a, b, c] = input[i].trim().split(" ").map((v) => +v);
//   arr[a].push([c, b]);
// }

// class Heap {
//   constructor(comparator = (a, b) => a - b) {
//     this.array = [];
//     this.comparator = (i1, i2) => {
//       const value = comparator(this.array[i1], this.array[i2]);
//       if (Number.isNaN(value)) {
//         throw new Error(
//           `Comparator should evaluate to a number. Got ${value} when comparing ${this.array[i1]} with ${this.array[i2]}`
//         );
//       }
//       return value;
//     };
//   }

//   add(value) {
//     this.array.push(value);
//     this.bubbleUp();
//   }

//   peek() {
//     return this.array[0];
//   }

//   remove(index = 0) {
//     if (!this.size) return null;
//     this.swap(index, this.size - 1);
//     const value = this.array.pop();
//     this.bubbleDown(index);
//     return value;
//   }

//   get size() {
//     return this.array.length;
//   }

//   bubbleUp() {
//     let index = this.size - 1;
//     const parent = (i) => Math.ceil(i / 2 - 1);
//     while (parent(index) >= 0 && this.comparator(parent(index), index) > 0) {
//       this.swap(parent(index), index);
//       index = parent(index);
//     }
//   }

//   bubbleDown(index = 0) {
//     let curr = index;
//     const left = (i) => 2 * i + 1;
//     const right = (i) => 2 * i + 2;
//     const getTopChild = (i) =>
//       right(i) < this.size && this.comparator(left(i), right(i)) > 0
//         ? right(i)
//         : left(i);

//     while (
//       left(curr) < this.size &&
//       this.comparator(curr, getTopChild(curr)) > 0
//     ) {
//       const next = getTopChild(curr);
//       this.swap(curr, next);
//       curr = next;
//     }
//   }

//   swap(i1, i2) {
//     [this.array[i1], this.array[i2]] = [this.array[i2], this.array[i1]];
//   }
// }

// const pq = new Heap((a, b) => a[0] - b[0]);

// const dijkstra = (start) => {
//   const dp = new Array(N + 1).fill(Infinity);
//   dp[start] = 0;
//   pq.add([0, start]);
//   while (pq.size > 0) {
//     const [pqW, pqV] = pq.remove();
//     if (dp[pqV] < pqW) continue;
//     for (let [arrW, arrV] of arr[pqV]) {
//       const totalW = arrW + pqW;
//       if (totalW < dp[arrV]) {
//         dp[arrV] = totalW;
//         pq.add([totalW, arrV]);
//       }
//     }
//   }
//   return dp;
// };

// const [start, destination] = input[2 + M].trim().split(" ").map((v) => +v);
// const result = dijkstra(start);
// console.log(result[destination]);


//2665-미로만들기
// const fs = require('fs');

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const n = parseInt(input[0]);
// const map = [];
// const visited = Array.from({ length: n }, () => Array(n).fill(Infinity));

// for (let i = 0; i < n; i++) {
//     const row = input[i + 1].split('').map(char => char === '1');
//     map.push(row);
// }

// const dx = [-1, 1, 0, 0];
// const dy = [0, 0, -1, 1];

// function bfs(x, y) {
//     const queue = [];
//     queue.push([x, y]);
//     visited[x][y] = 0;

//     while (queue.length > 0) {
//         const [xx, yy] = queue.shift();

//         for (let i = 0; i < 4; i++) {
//             const nowX = xx + dx[i];
//             const nowY = yy + dy[i];

//             if (nowX >= 0 && nowY >= 0 && nowX < n && nowY < n) {
//                 if (visited[nowX][nowY] > visited[xx][yy]) {
//                     if (map[nowX][nowY]) {
//                         queue.push([nowX, nowY]);
//                         visited[nowX][nowY] = visited[xx][yy];
//                     } else {
//                         queue.push([nowX, nowY]);
//                         visited[nowX][nowY] = visited[xx][yy] + 1;
//                     }
//                 }
//             }
//         }
//     }
// }

// bfs(0, 0);
// console.log(visited[n - 1][n - 1]);

//1238-파티
// const fs = require('fs');

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// let [n, m, x] = input[0].split(' ').map(Number);
// const edges = input.slice(1).map(line => line.split(' ').map(Number));

// function dijkstra(graph, start) {
//     const distance = new Array(n + 1).fill(Infinity);
//     const queue = [[start, 0]];
//     distance[start] = 0;

//     while (queue.length > 0) {
//         const [current, cost] = queue.shift();
//         for (const [next, nextCost] of graph[current]) {
//             const newCost = cost + nextCost;
//             if (distance[next] > newCost) {
//                 distance[next] = newCost;
//                 queue.push([next, newCost]);
//             }
//         }
//     }
//     return distance;
// }

// const goGraph = Array.from({ length: n + 1 }, () => []);
// const backGraph = Array.from({ length: n + 1 }, () => []);

// for (const [start, end, cost] of edges) {
//     goGraph[start].push([end, cost]);
//     backGraph[end].push([start, cost]);
// }

// const backDistance = dijkstra(backGraph, x);
// const goDistance = dijkstra(goGraph, x);

// let maxTime = 0;
// for (let i = 1; i <= n; i++) {
//     const roundTrip = backDistance[i] + goDistance[i];
//     maxTime = Math.max(maxTime, roundTrip);
// }

// console.log(maxTime);

//1261-알고스팟
// const fs = require('fs');

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const sol = (input) => {
//   const [M, N] = input[0].split(" ").map(Number); // M,N 순서로 데이터가 주어진다.
//   input = input.slice(1);
//   const adjM = input.map((row) => row.split("").map(Number));

//   function bfs(sx, sy) {
//     const deque = [];
//     deque.push([sx, sy, 0]);
//     const check = Array.from({ length: N }, () => new Array(M).fill(0));
//     check[sx][sy] = 1;
//     const dx = [-1, 0, 1, 0];
//     const dy = [0, 1, 0, -1];
//     while (deque.length) {
//       const [x, y, cnt] = deque.shift();
//       if (x === N - 1 && y === M - 1) return cnt; // (N,M) 위치에 도달하면 종료한다.

//       for (let i = 0; i < 4; i++) { // 현재 위치 (x,y)에서 상하좌우 한번씩 이동을 탐색한다.
//         const [nx, ny] = [x + dx[i], y + dy[i]];
//         if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
//         if (check[nx][ny]) continue;
//         check[nx][ny] = 1;
//         if (adjM[nx][ny]) {
//           adjM[nx][ny] = 0;
//           deque.push([nx, ny, cnt + 1]);
//         } else {
//           deque.unshift([nx, ny, cnt]); // 벽이 없어서 바로 이동하는 경우를 우선적으로 처리하도록 맨 앞에 넣어준다.
//         }
//       }
//     }
//   }
//   return bfs(0, 0);
// };

// console.log(sol(input));

//4485-녹색 옷 입은 애가 젤다지?
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
// const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
// let N = +input.shift();
// const dx = [-1, 1, 0, 0];
// const dy = [0, 0, -1, 1];
// let answerCount = 1;
// let answer = '';

// while (N !== 0) {
//     const map = input.splice(0, N).map((e) => e.split(' ').map(Number));
//     dijkstra([0, 0], map);
//     N = +input.shift();
// }

// console.log(answer.trimEnd());

// function dijkstra(start, map) {
//     const [x, y] = start;
//     const distance = Array.from({ length: N }, () => Array(N).fill(Infinity));

//     // 다익스트라 + BFS
//     const queue = [[x, y]];
//     let front = 0;
//     distance[y][x] = map[y][x];

//     while (queue.length > front) {
//         const [x, y] = queue[front++];
//         for (let i = 0; i < 4; i++) {
//             const nx = x + dx[i];
//             const ny = y + dy[i];
//             if (ny >= 0 && nx >= 0 && ny < N && nx < N && distance[ny][nx] > distance[y][x] + map[ny][nx]) {
//                 distance[ny][nx] = distance[y][x] + map[ny][nx];
//                 queue.push([nx, ny]);
//             }
//         }
//     }
//     answer += `Problem ${answerCount++}: ${distance[N - 1][N - 1]}\n`;
// }

//2485-가로수
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
// input.shift();
// let arr = input.map(el=>+Number(el))
// let answer = [];
//   for(let i = 0; i<arr.length-1; i++){
//     answer.push(Math.abs(arr[i]-arr[i+1]))
//   }

//   function gcd(a, b) { //최대공약수 구하기
//     if (a < b) {
//       [a, b] = [b, a];
//     }
  
//     if (b === 0) {
//       return a;
//     } else {
//       return gcd(b, a % b);
//     }
//   }

//   function findGCD(arr) { //여러개 숫자의 최대공약수
    
//     let result = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       result = gcd(result, arr[i]);
//     }
//     return result;
//   }
  
//   let num = findGCD(answer)
//   let sum = 0;
//   for(let x of answer){
//     sum += Math.floor(x/num)-1;
//   } 
//   console.log(sum)

//2660-회장뽑기
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n=+input[0];
let graph=Array.from({length:n+1},()=>new Array());
let i = 1;
while (i < input.length - 1) {
  const [u, v] = input[i].split(' ').map(Number);
  graph[u].push(v);
  graph[v].push(u);
  i++;
}
let min = 51;
let idxGraph = [[]];
for (let i = 1; i <= n; i++) {
  let queue = [];
  let visited = Array(n + 1).fill(0);
  visited[i] = 1;
  let relation = Array.from({ length: n }, () => new Array());
  for (let neighbor of graph[i]) {
    queue.push([neighbor, 0]);
    visited[neighbor] = 1;
  }
  let max = 0;
  while (queue.length) {
    const [neighbor, dis] = queue.shift();
    max = dis;
    relation[dis].push(neighbor);
    for (let friend of graph[neighbor]) {
      if (visited[friend] === 0) {
        visited[friend] = 1;
        queue.push([friend, dis + 1]);
      }
    }
  }
  relation = relation.slice(0, max + 1);
  idxGraph.push(relation);
  min = Math.min(min, relation.length);
}
let answer1 = `${min} `;
let answer2 = "";
let cnt = 0;
for (let i = 1; i <= n; i++) {
  if (idxGraph[i].length === min) {
    cnt++;
    answer2 += `${i} `;
  }
}
answer1 += `${cnt}`;
console.log(answer1);
console.log(answer2.trim());
