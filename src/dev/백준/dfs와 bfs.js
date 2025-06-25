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

//17182-우주탐사선
// const fs = require('fs');

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const [N, K] = input[0].split(' ').map(Number);
// const time = input.slice(1, N + 1).map(line => line.split(' ').map(Number));
// const visited = new Array(N).fill(0);
// visited[K] = 1;
// let answer = Infinity;

// // Floyd-Warshall Algorithm
// for (let k = 0; k < N; k++) {
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < N; j++) {
//       time[i][j] = Math.min(time[i][j], time[i][k] + time[k][j]);
//     }
//   }
// }

// function findMin(curr, cost, cnt) {
//   if (N === cnt) {
//     answer = Math.min(answer, cost);
//     return;
//   }
//   for (let i = 0; i < N; i++) {
//     if (visited[i] === 0) {
//       visited[i] = 1;
//       findMin(i, cost + time[curr][i], cnt + 1);
//       visited[i] = 0;
//     }
//   }
// }

// findMin(K, 0, 1);
// console.log(answer);

//1719-택배
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
// const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
// const [n, m] = input[0].split(' ').map(Number);
// const path = input.slice(1).map((e) => e.split(' ').map(Number));
// const distance = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));
// let arr = Array.from({ length: n + 1 }, () => Array(n + 1));
// path.forEach(([s, e, cost]) => {
//     distance[s][e] = cost;
//     distance[e][s] = cost;
//     arr[s][e] = e;
//     arr[e][s] = s;
// });

// // 플로이드 워셜 알고리즘 수행
// for (let k = 1; k <= n; k++) {
//     for (let a = 1; a <= n; a++) {
//         for (let b = 1; b <= n; b++) {
//             if (a === b) {
//                 arr[a][b] = '-';
//                 continue;
//             }
//             if (distance[a][b] > distance[a][k] + distance[k][b]) {
//                 distance[a][b] = distance[a][k] + distance[k][b];
//                 arr[a][b] = arr[a][k];
//             }
//         }
//     }
// }
// // 출력 형태로 변환
// arr = arr.slice(1).map((e) => e.slice(1));
// let answer = '';
// arr.forEach((row) => {
//     answer += row.join(' ') + '\n';
// });
// console.log(answer.trimEnd());

//1446-지름길
// const inputs = require("fs")
//   .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
//   .toString()
//   .trim()
//   .split("\n");

// const [n, d] = inputs[0].split(" ").map(Number);
// let dist = Array.from(Array(d + 1).fill(Infinity));
// const graph = Array.from(Array(d + 1), () => []);

// for (let i = 0; i < n; i++) {
//   const [start, end, w] = inputs[i + 1].split(" ").map(Number);
//   if (end > d) continue;
//   if (end - start <= w) continue;

//   graph[start].push([end, w]);
// }

// let prev = -1;
// for (let i = 0; i <= d; i++) {
//   if (i) prev = dist[i - 1];

//   dist[i] = Math.min(dist[i], prev + 1);

//   for (let [next, cost] of graph[i]) {
//     if (dist[next] > dist[i] + cost) {
//       dist[next] = dist[i] + cost;
//     }
//   }
// }
// console.log(dist[d]);

//음료수 얼려먹기
// const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];  // 방향 벡터: 상하좌우 이동을 나타냅니다.
// const visited = Array.from(Array(n), () => Array(m).fill(false));  // 방문 체크 배열: 각 위치가 방문되었는지 여부를 저장합니다.

// const bfs = (graph, sx, sy) => {
//   const q = [];  // BFS를 위한 큐를 선언합니다.
//   q.push([sx, sy]);  // 시작 위치를 큐에 추가합니다.
//   visited[sx][sy] = true;  // 시작 위치를 방문 처리합니다.

//   while (q.length !== 0) {  // 큐가 빌 때까지 반복합니다.
//     const [x, y] = q.shift();  // 큐에서 하나의 위치를 꺼냅니다.

//     for (let i = 0; i < 4; i++) {  // 상하좌우 네 방향에 대해 반복합니다.
//       const nx = x + dir[i][0];  // 다음 위치의 x좌표
//       const ny = y + dir[i][1];  // 다음 위치의 y좌표

//       if (nx < 0 || nx >= n || ny < 0 || ny >= m)  // 다음 위치가 범위를 벗어나면 건너뜁니다.
//         continue;

//       if (!visited[nx][ny] && graph[nx][ny] === '0') {  // 다음 위치가 방문되지 않았고, 구멍(0)이라면
//         q.push([nx, ny]);  // 큐에 다음 위치를 추가합니다.
//         visited[nx][ny] = true;  // 다음 위치를 방문 처리합니다.
//       }
//     }
//   }
// }

// function solution(n, m, graph) {
//   let count = 0;  // 아이스크림 덩어리 개수를 셀 변수를 선언합니다.

//   for (let i = 0; i < n; i++) {  // 모든 행에 대해 반복합니다.
//     for (let j = 0; j < m; j++) {  // 모든 열에 대해 반복합니다.
//       const cur = graph[i][j];  // 현재 위치의 값을 가져옵니다.
//       if (!visited[i][j] && cur === '0') {  // 현재 위치가 방문되지 않았고, 구멍(0)이라면
//         bfs(graph, i, j);  // BFS를 실행하여 연결된 모든 구멍을 방문 처리합니다.
//         count++;  // 아이스크림 덩어리 개수를 하나 증가시킵니다.
//       }
//     }
//   }

//   return count;  // 아이스크림 덩어리의 총 개수를 반환합니다.
// }

// // 예시 입력
// const n = 4;  // 행의 개수
// const m = 5;  // 열의 개수
// const graph = [
//   '00110',
//   '00011',
//   '11111',
//   '00000'
// ].map(line => line.split(''));  // 그래프를 문자열 배열로 입력받아 각 문자를 분리합니다.

// console.log(solution(n, m, graph));  // 주어진 그래프에 대해 아이스크림 덩어리 개수를 출력합니다.

// 예시 입력
// const n = 4;  // 행의 개수
// const m = 5;  // 열의 개수
// const graph = [
//   '00110',
//   '00011',
//   '11111',
//   '00000'
// ].map(line => line.split(''));  // 그래프를 문자열 배열로 입력받아 각 문자를 분리합니다.

// //방향벡터
// const dir = [[0,1],[0,-1], [1,0], [-1,0]];
// //방문 체크 배열
// const visited = Array.from(Array(n), ()=>Array(m).fill(false));

// const bfs = (graph, sx, sy)=>{
//   const q=[];
//   //시작 위치를 큐에 삽이
//   q.push([sx, sy]);
//   //시작 위치를 방문처리
//   visited[sx][sy]=true;

//   //큐가 빌 때까지 반복
//   while(q.length!==0){
//     //맨 앞 위치 꺼내기
//     const [x, y]=q.shift();

//     //상하좌우 반복
//     for(let i=0; i<4; i++){
//       //다음 위치의 x좌표
//       const nx = x+dir[i][0];
//       //다음 위치의 y좌표
//       const ny = y+dir[i][1];

//       //다음 위치가 벗어나는지 확인
//       if(nx<0||nx>=n||ny<0||ny>=m)
//         continue

//       //방문하지 않았고 0이라면
//       if(!visited[nx][ny]&&graph[nx][ny]==='0'){
//         //큐에 다음 위치 추가
//         q.push([nx, ny]);
//         //방문 체크
//         visited[nx][ny]=true;
//       }
//     }
//   }
// }

// const solution = (n, m, graph) =>{
//   //아이스크림 덩어리 개수
//   let count = 0;

//   //배열 순회
//   //행
//   for(let i=0 ; i<n; i++){
//     //열
//     for(let j=0; j<m; j++){
//       //현재 위치 값
//       const cur = graph[i][j];

//       //방문 여부와 0표시여부
//       if(!visited[i][j]&&cur ==='0'){
//         bfs(graph, i, j);
//         count++;
//       }
//     }
//   }

//   return count
// }

// console.log(solution(n, m, graph));

// 예시 입력
// const n = 4;  // 행의 개수
// const m = 5;  // 열의 개수
// const graph = [
//   '00110',
//   '00011',
//   '11111',
//   '00000'
// ].map(line => line.split(''));  // 그래프를 문자열 배열로 입력받아 각 문자를 분리합니다.

//dfs
// const dir = [[0,1], [0,-1], [1,0], [-1, 0]];
// const visited = Array.from(Array(n), ()=>Array(m).fill(false));

// const dfs = (graph, x, y)=>{
//   visited[x][y]=true;

//   for(let i=0; i<4; i++){
//     const nx = x+dir[i][0];
//     const ny = y+dir[i][1];

//     if(nx<0||nx>=n||ny<0||ny>=m)
//       continue;

//     if(!visited[nx][ny]&&graph[nx][ny]==='0'){
//       dfs(graph, nx, ny)
//     }
//   }
// }

// const solution = ( n, m, graph)=>{
//   let count =0;

//   for(let i=0; i<n; i++){
//     for(let j=0; j<m; j++){
//       const cur = graph[i][j];

//       if(!visited[i][j]&&cur==='0'){
//         dfs(graph, i, j);
//         count++;
//       }
//     }
//   }

//   return count
// }

// console.log(solution(n, m, graph));

//미로찾기
// const dir = [[0,1], [0,-1], [1,0], [-1,0]];

// const bfs = (graph, sx, sy, target) => {
//   const n=graph.length;
//   const m=graph[0].length;
//   const visited = Array.from(Array(n), ()=>Array(m).fill(false));
//   let time = 0;
//   const q=[];
//   q.push([sx, sy]);
//   visited[sx][sy]= true;

//   while(q.length!==0){

//     const size = q.length;
//     for(let i=0; i<size; i++){
//       const [x, y] = q.shift();

//       for(let k=0; k<4; k++){
//         const nx =x+dir[k][0];
//         const ny=y+dir[k][1];

//         if (nx < 0 || nx >= n || ny < 0 || ny >= m)
//           continue;

//         if(!visited[nx][ny]&&graph[nx][ny]!=='X'){
//           if(graph[nx][ny]===target){
//             return time+1;
//           }
//           q.push([nx, ny]);
//           visited[nx][ny]=true;
//         }
//       }
//     }

//     time++;
//   }

//   return -1;
// }

// const solution = (maps) =>{
//   let lCord, sCord;
//   const graph = maps.map(v=>v.split(''));

//   for(let x=0; x<graph.length; x++){
//     for(let y=0; y<graph[0].length; y++){

//       if(maps[x][y]==='S'){
//         sCord = [x, y];
//       }

//       if(maps[x][y]==='L'){
//         lCord = [x, y];
//       }

//     }
//   }

//   const a = bfs(graph, sCord[0], sCord[1], 'L');

//   if(a===-1){
//     return -1;
//   }

//   const b = bfs(graph, lCord[0], lCord[1], 'E')

//   if(b===-1){
//     return -1;
//   }

//   return a+b
// }

// // 예시 실행
// const maps = [
//   "SOOOL",
//   "XXXXO",
//   "OOOOO",
//   "OXXXX",
//   "OOOOE"
// ];

// console.log(solution(maps));  // 예상 결과: 16

//1260-dfs와 bfs
// const input = require('fs').readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const [N, M, V] = input.shift().split(' ').map(Number);
// const edges = input.map(v => v.split(' ').map(Number));
// const graph = [...Array(N + 1)].map(() => []);
// edges.forEach(([from, to]) => {
//   graph[from].push(to);
//   graph[to].push(from);
// });

// const dfs = (start)=>{
//   const stack = [start];

//   const visited = Array(N+1).fill(false);
//   const order = [];

//   while(stack.length){
//     const node = stack.pop();

//     if(!visited[node]){
//       visited[node]=true;
//       order.push(node);
//       stack.push(...graph[node]);
//     }
//   }

//   return order.join(' ');
// }

// graph.forEach(v=>v.sort((a, b)=>b-a));
// console.log(dfs(V))

// const bfs = (start) =>{
//   const queue = [start];
//   const visited = Array(N+1).fill(false);
//   const order=[];

//   while(queue.length){
//     const node = queue.shift();

//     if(!visited[node]){
//       visited[node]=true;
//       order.push(node);
//       queue.push(...graph[node]);
//     }
//   }
//   return order.join(' ');
// }

// graph.forEach(v=>v.sort((a, b)=>b-a));
// console.log(bfs(V))

//bfs적용해보기
//2178-미로탐색
// // 파일 시스템 모듈을 불러와서 입력 데이터를 읽음
// const input = require('fs').readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');

// // 미로를 BFS로 탐색하여 최단 경로를 찾는 함수
// const bfsMaze = (maze, N, M) => {
//   // 네 방향(오른쪽, 왼쪽, 아래, 위)으로 이동할 수 있는 방향 배열
//   const directions = [
//     [0, 1],   // 오른쪽
//     [0, -1],  // 왼쪽
//     [1, 0],   // 아래
//     [-1, 0]   // 위
//   ];

//   // 탐색을 위한 큐를 초기화하고 시작점 (0, 0)을 큐에 삽입
//   const queue = [[0, 0]];
//   // 방문한 위치를 기록하기 위한 배열을 초기화, 처음 위치를 방문 처리
//   const visited = Array.from(Array(N), () => Array(M).fill(false));
//   visited[0][0] = true;

//   // BFS의 레벨을 기록하는 변수, 첫 번째 칸을 포함하므로 1로 시작
//   let steps = 1;

//   // 큐가 비어있지 않은 동안 반복
//   while (queue.length) {
//     // 현재 레벨의 모든 노드를 처리하기 위해 큐의 크기를 저장
//     let size = queue.length;

//     // 현재 레벨의 모든 노드를 처리
//     for (let i = 0; i < size; i++) {
//       // 큐에서 노드를 꺼내어 현재 위치를 저장
//       const [x, y] = queue.shift();

//       // 현재 위치가 도착지점인지 확인
//       if (x === N - 1 && y === M - 1) {
//         return steps; // 도착지점에 도달하면 현재까지의 이동 칸 수를 반환
//       }

//       // 네 방향으로 이동을 시도
//       for (const [dx, dy] of directions) {
//         const nx = x + dx;
//         const ny = y + dy;

//         // 다음 위치가 미로 범위 내에 있는지 확인
//         if (nx >= 0 && nx < N && ny >= 0 && ny < M && maze[nx][ny] === 1 && !visited[nx][ny]) {
//           // 다음 위치가 이동 가능하고 방문하지 않은 경우
//           queue.push([nx, ny]); // 큐에 다음 위치를 추가
//           visited[nx][ny] = true; // 다음 위치를 방문 처리
//         }
//       }
//     }

//     // 현재 레벨의 처리가 끝나면 이동 칸 수를 증가
//     steps++;
//   }

//   // 도착지점에 도달할 수 없는 경우 -1을 반환
//   return -1;
// };

// // 첫 번째 줄에서 미로의 크기 N과 M을 읽어옴
// const [N, M] = input[0].split(' ').map(Number);
// // 나머지 줄에서 미로를 읽어와 2차원 배열로 변환
// const maze = input.slice(1).map(line => line.split('').map(Number));

// // bfsMaze 함수 호출하여 결과를 출력
// console.log(bfsMaze(maze, N, M));

//2606-바이러스
// const bfs = (graph, start)=>{
//   //그래프 길이의 false로 구성된 뱁열
//   const visited = Array(graph.length).fill(false);
//   //큐의 시작점 대입
//   const queue = [start];
//   //방문 표시
//   visited[start] = true;
//   //컴퓨터의 수
//   let count =0;

//   //큐가 빌때까지
//   while(queue.length){
//     //맨 앞꺼 빼기
//     const node = queue.shift();

//     //연결된 이웃 돌기
//     for(let neighbor of graph[node]){
//       //방문하지 않았다면
//       if(!visited[neighbor]){
//         queue.push(neighbor);
//         visited[neighbor] = true;
//         count++;
//       }
//     }
//   }

//   return count
// }

// const n = +input[0];//컴퓨터수
// const m = +input[1]//연결된 쌍수
// const graph = Array.from(Array(n+1), ()=>[]);

// const computers = input.slice(2).map(v=>v.split(' ').map(Number));
// computers.map(([from, to])=>{
//   graph[from].push(to);
//   graph[to].push(from);
// })

// console.log(bfs(graph, 1))

//dfs
// const dfs = (graph, start)=>{
//   const visited = Array(graph.length).fill(false);
//   const stack = [start];
//   visited[start] = true;
//   let count = 0;

//   while(stack.length){
//     const node = stack.pop();

//     for(const neighbor of graph[node]){
//       if(!visited[neighbor]){
//         visited[neighbor] = true;
//         stack.push(neighbor);
//         count++;
//       }
//     }
//   }
//   return count
// }
// const n = +input[0];
// const m = +input[1];
// const graph = Array.from(Array(n+1), ()=>[])

// const computers = input.slice(2).map(v=>v.split(' ').map(Number))

// computers.map(([from, to])=>{
//   graph[from].push(to);
//   graph[to].push(from);
// })

// console.log(dfs(graph, 1))

//2667-단지번호붙이기
// const n = Number(input.shift());
// const map = input.map(v=>v.split('').map(Number));
// const dir = [[0,1], [0,-1], [1,0], [-1,0]];

// const bfs =(startx, starty)=>{
//   const queue = [[startx, starty]];
//   let count=0;

//   while(queue.length){
//     const [x, y]=queue.shift();
//     count++;

//     for(const [dx, dy] of dir){
//       const nx = x+dx;
//       const ny=y+dy;

//       if(nx>=0&&nx<n&&ny>=0&&ny<n&&map[nx][ny]){
//         map[nx][ny]=0;
//         queue.push([nx, ny]);
//       }
//     }
//   }
// }

// let result = [];
// for(let x=0; x<n; x++){
//   for(let y=0; y<n; y++){
//     map[x][y]=0;
//     result.push(bfs(x, y))
//   }
// }

//1012-유기농 배추
// const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt").toString().trim().split('\n');

// // 첫 줄의 값을 읽어서 테스트 케이스의 개수로 설정함.
// const T = +input[0]

// // 상하좌우 방향을 나타내는 배열
// const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];

// // 테스트 케이스의 시작 인덱스를 1로 설정
// let index = 1;

// // 테스트 케이스의 수만큼 반복
// for (let t = 0; t < T; t++) {
//   // 현재 테스트 케이스의 가로 길이 M, 세로 길이 N, 배추의 개수 K를 읽어옴.
//   let [M, N, K] = input[index].split(' ').map(Number);
//   index++; // 다음 줄로 이동

//   // M*N 크기의 0으로 채워진 2차원 배열 maps를 생성
//   let maps = Array.from({ length: N }, () => Array(M).fill(0));

//   // M*N 크기의 false로 채워진 2차원 배열 visited를 생성
//   let visited = Array.from({ length: N }, () => Array(M).fill(false));

//   // 배추의 위치를 담을 배열을 초기화
//   let cabbage = [];

//   // 배추의 개수만큼 반복하면서 배추의 위치를 읽어서 저장
//   for (let i = 0; i < K; i++) {
//     // 현재 배추의 x, y 좌표를 읽어옴
//     const [x, y] = input[index + i].split(' ').map(Number);

//     // 배추의 위치를 2차원 배열 maps에 기록 (배추가 있는 위치를 1로 표시)
//     maps[y][x] = 1;

//     // 배추의 위치를 배열 cabbage에 추가 (배열에 y, x 순서로 저장)
//     cabbage.push([y, x]);
//   }

//   // 다음 테스트 케이스로 이동하기 위해 인덱스를 K만큼 증가시킴
//   index += K;

//   // 필요한 지렁이 수를 저장할 변수 answer를 초기화
//   let answer = 0;

//   // BFS 함수 정의 - 주어진 시작 위치에서 연결된 모든 배추를 방문 처리
//   function bfs(y, x) {
//     // BFS를 위한 큐를 초기화하고 시작 위치를 큐에 추가
//     const queue = [[y, x]];

//     // 큐가 빌 때까지 반복
//     while (queue.length) {
//       // 큐의 첫 번째 원소를 꺼내서 현재 위치로 설정
//       const [cy, cx] = queue.shift();

//       // 4개의 방향(상하좌우)을 모두 검사
//       for (const [dy, dx] of dir) {
//         // 새로운 위치를 계산
//         const ny = cy + dy;
//         const nx = cx + dx;

//         // 새로운 위치가 유효한 범위 내에 있고 아직 방문하지 않은 위치인 경우
//         if (ny >= 0 && ny < N && nx >= 0 && nx < M && !visited[ny][nx]) {
//           // 방문 처리
//           visited[ny][nx] = true;

//           // 해당 위치에 배추가 있다면 큐에 추가
//           if (maps[ny][nx] === 1) {
//             queue.push([ny, nx]);
//           }
//         }
//       }
//     }
//   }

//   // 모든 배추의 위치를 검사
//   for (let i = 0; i < cabbage.length; i++) {
//     // 현재 배추의 위치를 가져옴
//     const [y, x] = cabbage[i];

//     // 만약 해당 위치가 방문되지 않았고 배추가 있는 경우
//     if (!visited[y][x] && maps[y][x] === 1) {
//       // 방문 처리
//       visited[y][x] = true;

//       // BFS를 통해 연결된 모든 배추를 방문 처리
//       bfs(y, x);

//       // 지렁이 수를 증가시킴
//       answer++;
//     }
//   }

//   // 현재 테스트 케이스의 결과를 출력
//   console.log(answer);
// }

//7576-토마토
// const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt").toString().split('\n').map(s => s.split(" ")).slice(0,-1);
// const NM = input.shift();
// const [n,m] = NM.map(el => Number(el));
// const board = input.map(s => s.map(el => Number(el)));

// const dx=[1, 0, -1, 0];
// const dy=[0, 1, 0, -1];

// function solution(row, col, board){
//     const q = [];
//     const dist = Array.from({length: col}, ()=>Array(row).fill(0));

//     for(let i=0; i<col; i++){
//         for(let j=0; j<row; j++){
//             if(board[i][j]===1){
//                 q.push([i, j]);
//             }

//             if(board[i][j]===0){
//                 dist[i][j]=-1;
//             }
//         }
//     }

//     let head = 0;
//     while(q.length>head){
//         const [x, y]=q[head++];

//         for(let k=0; k<4; k++){
//             const nx = x+dx[k]
//             const ny = y+dy[k];

//             if(nx<0||ny<0||nx>=col||ny>=row) continue;

//             if(dist[nx][ny]>=0) continue;

//             dist[nx][ny] = dist[x][y] + 1;

//             q.push([nx,ny]);
//         }
//     }

//         // 토마토가 익을 때까지의 최소 날짜 출력
//         let day = 0;
//         for (let i=0; i < col; i++) {
//             for (let j=0; j < row; j++) {
//                 // 익지 않은 토마토가 있음
//                 if (dist[i][j] === -1) return -1;
//                 day = Math.max(day, dist[i][j]);
//             }
//         }
//         return day;
// }

// console.log(solution(n,m,board));

//1697-숨바꼭질
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const [N, K] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
// const visited = Array(100001).fill(0); // 방문 체크할 배열

// const bfs = (start, goal) => {
//     const queue=[[start, 0]];

//     while(queue.length){
//         const [cur, sec] = queue.shift();
//         const move = [cur+1, cur-1, cur*2];

//         if(visited[cur]) continue
//         if(cur===goal) return sec
//         visited[cur]=1;

//         for (const pos of move) {
//             if (!visited[pos] && pos >= 0 && pos <= 100000) {
//               queue.push([pos, sec + 1]); // 큐에 해당 위치와 시간 1초 증가시키고 담기
//             }
//           }
//     }
// };

// console.log(bfs(N, K));

//11724-연결 요소의 개수
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
// const [n, m]=input[0].split(' ').map(Number);
// const arr = input.slice(1).map(v=>v.split(' ').map(Number));
// let visited = Array(n+1).fill(false);
// let answer = 0;
// let graph = Array.from({length: n+1},()=>[]);

// arr.map(([from, to])=>{
//     graph[from].push(to);
//     graph[to].push(from);
// })

// const bfs = (start) =>{
//     const queue = [start];

//     while(queue.length){
//         const cur = queue.shift();

//         for(let vertax of graph[cur]){
//             if(!visited[vertax]){
//                 visited[vertax]=true;
//                 queue.push([vertax]);
//             }
//         }
//     }
// }

// for(let i=1; i<=n; i++){
//     if(!visited[i]){
//         bfs(i);
//         answer++;
//     }
// }

// console.log(answer)

//1260-dfs와 bfs
// const input = require('fs').readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const [n, m, k] = input.shift().split(' ').map(Number);
// let graph = Array.from({length: n+1}, ()=>[]);

// for(let i=0; i<m; i++){
//   let [from, to] = input[i].split(' ').map(Number);
//   graph[from].push(to);
//   graph[to].push(from);
// }

// const dfs = (graph, start) => {
//   let stack = [start];
//   let visited = Array(graph.length).fill(false)
//   let result = [];

//   while(stack.length){
//     const node = stack.pop();

//     if(!visited[node]){
//       visited[node]=true;
//       result.push(node);

//       let nodes = graph[node];
//       stack = [...stack, ...nodes.sort((a, b)=>b-a)]
//     }
//   }

//   return result
// }

// const bfs = (graph, start) => {
//   let queue=[start];
//   let visited = Array(graph.length).fill(false);

//   let result = [];

//   while(queue.length){
//     const node = queue.shift();

//     if(!visited[node]){
//       visited[node]=true;
//       result.push(node);

//       const nodes = graph[node];
//       queue=[...queue, ...nodes.sort((a, b)=>a-b)]
//     }
//   }

//   return result
// }

// console.log(dfs(graph, k).join(' '))
// console.log(bfs(graph, k).join(' '))

//2178-미로탐색
// const input = require('fs').readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const [n, m] = input.shift().split(' ').map(Number);
// const maze = input.map(v=>v.split('').map(Number));

// const bfs = (maze, n, m)=>{
//   const dir = [[0,1],[0,-1], [1,0], [-1,0]];
//   let visited = Array.from({length: n}, ()=>Array(m).fill(false));
//   let queue =[[0,0]];
//   let count=1;
//   visited[0][0]=true;

//   while(queue.length){
//     const size = queue.length;

//     for(let i=0; i<size; i++){
//       const [x, y] = queue.shift();

//       if(x===n-1&&y===m-1){
//         return count
//       }

//       for(const [dx, dy] of dir){
//         let nx = x+dx;
//         let ny=y+dy;

//         if(nx>=0&&ny>=0&&nx<n&&ny<m&&!visited[nx][ny]&&maze[nx][ny]){
//           queue.push([nx, ny]);
//           visited[nx][ny]=true;
//         }
//       }
//     }

//     count++;
//   }

//   return -1;
// }

// console.log(bfs(maze, n, m))

//2606-바이러스
// const input = require('fs').readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// let computers = +input[0];
// let network = +input[1];
// let arr = input.slice(2).map(v=>v.split(' ').map(Number));
// let graph = Array.from({length: computers+1}, ()=>[]);

// arr.map(([from, to])=>{
//   graph[from].push(to);
//   graph[to].push(from);
// })

// const bfs = (graph, start) =>{
//   let visited = Array(graph.length).fill(false);
//   let queue=[start];
//   visited[start]=true;
//   let count =0;

//   while(queue.length){
//     const node = queue.shift();

//     for(const nodes of graph[node]){
//       if(!visited[nodes]){
//         visited[nodes]=true;
//         queue.push(nodes);
//         count++;
//       }
//     }
//   }

//   return count
// }

// console.log(bfs(graph, 1))

//2667-단지번호붙이기
// const input = require('fs').readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const n = +input[0];

// const map = input.slice(1).map(v=>v.split('').map(Number));
// const dir=[[0,1], [0,-1], [1,0], [-1,0]];

// const bfs = (startx, starty) => {
//   const queue = [[startx, starty]];
//   let count =0;

//   while(queue.length){
//     const [x, y] = queue.shift();
//     count++;

//     for(const [dx, dy] of dir){
//       const nx = x+dx;
//       const ny=y+dy;

//       if(nx>=0&&ny>=0&&nx<n&&ny<n&&map[nx][ny]){
//         map[nx][ny]=0;
//         queue.push([nx, ny])

//       }
//     }
//   }
//   return count
// }

// let result = [];

// for(let i=0; i<n; i++){
//   for(let j=0; j<n; j++){
//     if(map[i][j]){
//       map[i][j]=0;
//       result.push(bfs(i, j));
//     }
//   }
// }

// console.log(result.length);
// console.log(result.sort((a, b)=>a-b).join('\n'))

//1012-유기농 배추
// const input = require('fs').readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const t = +input[0];
// let index = 1;
// const dir = [[0,1], [0,-1], [1,0], [-1,0]]

// const bfs = (graph, i, j) => {
//   const queue = [[i, j]];
//   let count =0;

//   while(queue.length){
//     const [x, y] = queue.shift();
//     const n = graph.length;
//     const m= graph[0].length;

//     for(const [dx, dy] of dir){
//       const nx = x+dx;
//       const ny = y+dy;

//       if(nx>=0&&ny>=0&&nx<n&&ny<m&&graph[nx][ny]){
//         graph[nx][ny]=0;
//         queue.push([nx, ny]);
//         count++;

//       }
//     }
//   }

//   return count;
// }

// for(let i=0; i<t; i++){
//   const [n, m, k]=input[index].split(' ').map(Number);
//   const arr = input.slice(index+1, index+1+k).map(v=>v.split(' ').map(Number));

//   const graph = Array.from({length: n}, ()=>Array(m).fill(0));

//   arr.map(([x, y])=>{
//     graph[x][y]=1
//   })

//   let result = [];
//   for(let i=0; i<n; i++){
//     for(let j=0; j<m; j++){
//       if(graph[i][j]){
//         result.push(bfs(graph, i, j))
//       }
//     }
//   }

//   console.log(result.length)

//   index++;
//   index+=k
// }

//7576-토마토
// const input = require('fs').readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const [M, N] = input[0].split(' ').map(Number);
// const box = input.slice(1).map(line => line.split(' ').map(Number));

// const dir = [[0,1], [0,-1], [1,0], [-1,0]];

// let queue = [];

// for (let i = 0; i < N; i++) {
//   for (let j = 0; j < M; j++) {
//     if (box[i][j] === 1) {
//       queue.push([i, j]);
//     }
//   }
// }

// const bfs = (box, queue)=>{
//   let index = 0;

//   while(index<queue.length){
//     const [x, y] = queue[index];
//     index++;

//     for(const [dx, dy] of dir){
//       const nx = x+dx;
//       const ny = y+dy;

//       if(nx>=0&&nx<N&&ny>=0&&ny<M&&!box[nx][ny]){
//         box[nx][ny]=box[x][y]+1;
//         queue.push([nx, ny]);
//       }
//     }
//   }
// }

// let days =0;

// const cal = (box)=>{
//   for(let i=0; i<N; i++){
//     for(let j=0; j<M; j++){
//       if(!box[i][j]){
//         return -1;
//       }

//       days = Math.max(days, box[i][j]);
//     }
//   }
//   return days-1;
// }

// bfs(box, queue);
// console.log(cal(box))

//1697-숨바꼭질
// const input = require('fs').readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim();
// const [N, K] = input.split(' ').map(Number);
// const visited = Array(100001).fill(0); // 방문 체크할 배열

// const bfs = (start, goal) => {
//   const queue =[[start, 0]];

//   while(queue.length){
//     const [cur, sec] = queue.shift();
//     const move = [cur-1, cur+1, cur*2];

//     if(visited[cur])continue;
//     if(cur===goal) return sec;
//     visited[cur] = 1;

//     for(const p of move){
//       if(!visited[p]&&p>=0&&p<=100000){
//         queue.push([p, sec+1])
//       }
//     }
//   }
// }

// console.log(bfs(N, K))

//11724-연결 요소의 개수
// const input = require('fs').readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const [n, m]=input.shift().split(' ').map(Number);
// const arr = input.map(v=>v.split(' ').map(Number));
// const graph = Array.from({length: n+1}, ()=>[]);
// let visited = Array(graph.length).fill(false);

// arr.map(([from, to])=>{
//   graph[from].push(to);
//   graph[to].push(from)
// })

// const bfs = (start)=>{
//   const queue = [start];
//   visited[start]=true;

//   while(queue.length){
//     const node = queue.shift();

//     for(const n of graph[node]){
//       if(!visited[n]){
//         visited[n]=true;
//         queue.push([n])
//       }
//     }
//   }
// }

// let count =0;

// for(let i=1; i<=n; i++){
//   if(!visited[i]){
//     bfs(i);
//     count++;
//   }
// }

// console.log(count)

//14502-연구소
// const input = require('fs').readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const [N, M] = input.shift().split(' ').map(Number);
// const lab = input.map(line => line.split(' ').map(Number));

// const directions= [
//   [0, 1], [0, -1], [1, 0], [-1, 0]
// ];

// const isValidPosition = (x, y) => x >= 0 && y >= 0 && x < N && y < M;

// const bfs = (labCopy) => {
//   let queue = []; // BFS 탐색을 위한 큐 초기화
//   for (let i = 0; i < N; i++) { // 연구소 지도를 순회하면서
//     for (let j = 0; j < M; j++) {
//       if (labCopy[i][j] === 2) { // 바이러스 위치를 큐에 추가
//         queue.push([i, j]);
//       }
//     }
//   }

//   while (queue.length) { // 큐가 빌 때까지 반복
//     const [x, y] = queue.shift(); // 큐에서 현재 위치를 꺼냄
//     for (const [dx, dy] of directions) { // 네 방향에 대해 반복
//       const nx = x + dx;
//       const ny = y + dy;
//       if (isValidPosition(nx, ny) && labCopy[nx][ny] === 0) { // 유효한 좌표이고 빈 칸인 경우
//         labCopy[nx][ny] = 2; // 바이러스를 확산
//         queue.push([nx, ny]); // 새로운 위치를 큐에 추가
//       }
//     }
//   }
// };

// const countSafeArea = (labCopy) => {
//   let count = 0; // 안전 영역 크기를 저장할 변수 초기화
//   for (let i = 0; i < N; i++) { // 연구소 지도를 순회하면서
//     for (let j = 0; j < M; j++) {
//       if (labCopy[i][j] === 0) count++; // 빈 칸이면 안전 영역 크기 증가
//     }
//   }
//   return count; // 안전 영역 크기를 반환
// };

// let maxSafeArea = 0; // 최대 안전 영역 크기를 저장할 변수 초기화

// for (let i = 0; i < N * M; i++) { // 첫 번째 벽을 세울 위치를 선택
//   const x1 = Math.floor(i / M);
//   const y1 = i % M;
//   if (lab[x1][y1] !== 0) continue; // 빈 칸이 아니면 넘어감

//   for (let j = i + 1; j < N * M; j++) { // 두 번째 벽을 세울 위치를 선택
//     const x2 = Math.floor(j / M);
//     const y2 = j % M;
//     if (lab[x2][y2] !== 0) continue; // 빈 칸이 아니면 넘어감

//     for (let k = j + 1; k < N * M; k++) { // 세 번째 벽을 세울 위치를 선택
//       const x3 = Math.floor(k / M);
//       const y3 = k % M;
//       if (lab[x3][y3] !== 0) continue; // 빈 칸이 아니면 넘어감

//       const labCopy = lab.map(row => row.slice()); // 연구소 지도를 복사
//       labCopy[x1][y1] = 1; // 첫 번째 벽 세우기
//       labCopy[x2][y2] = 1; // 두 번째 벽 세우기
//       labCopy[x3][y3] = 1; // 세 번째 벽 세우기

//       bfs(labCopy); // BFS를 사용해 바이러스 확산
//       const safeArea = countSafeArea(labCopy); // 안전 영역 크기 계산
//       maxSafeArea = Math.max(maxSafeArea, safeArea); // 최대 안전 영역 크기 갱신
//     }
//   }
// }

// console.log(maxSafeArea); // 최대 안전 영역 크기를 반환

//10026-적록색약
// const input = require('fs').readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const n = +(input.shift());
// let arr = input.map(v=>v.trim().split(''));
// const dir = [[0,1], [0,-1], [1,0], [-1,0]];

// // 방문 여부를 체크하기 위한 배열 초기화
// let visitedCan = Array.from({ length: n }, () => Array(n).fill(false));
// let visitedCant = Array.from({ length: n }, () => Array(n).fill(false));

// // 유효한 위치인지 확인하는 함수
// const isValidPosition = (x, y) => x >= 0 && y >= 0 && x < n && y < n;

// // 적록색약의 경우를 위한 배열 변환 (G를 R로 변경)
// let cantRedGreen = arr.map(v => v.slice()).map(row => row.map(cell => (cell === 'G' ? 'R' : cell)));

// // BFS를 사용하여 영역을 탐색하는 함수
// const bfs = (graph, i, j, visited) => {
//   let queue = [[i, j]]; // BFS 탐색을 위한 큐 초기화
//   visited[i][j] = true; // 시작점 방문 처리
//   const color = graph[i][j]; // 시작점의 색상

//   while (queue.length) {
//     const [x, y] = queue.shift(); // 큐에서 현재 위치를 꺼냄

//     // 네 방향으로 탐색
//     for (const [dx, dy] of dir) {
//       const nx = x + dx;
//       const ny = y + dy;

//       // 유효한 좌표이고 방문하지 않았으며 동일한 색상인 경우
//       if (isValidPosition(nx, ny) && !visited[nx][ny] && graph[nx][ny] === color) {
//         visited[nx][ny] = true; // 방문 처리
//         queue.push([nx, ny]); // 큐에 추가
//       }
//     }
//   }
// }

// // 적록색약이 아닌 사람의 구역 수를 계산
// let canResult = 0;
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     if (!visitedCan[i][j]) { // 아직 방문하지 않은 경우
//       bfs(arr, i, j, visitedCan); // BFS 탐색
//       canResult++; // 구역 수 증가
//     }
//   }
// }

// // 적록색약인 사람의 구역 수를 계산
// let cantResult = 0;
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     if (!visitedCant[i][j]) { // 아직 방문하지 않은 경우
//       bfs(cantRedGreen, i, j, visitedCant); // BFS 탐색
//       cantResult++; // 구역 수 증가
//     }
//   }
// }

// console.log(canResult, cantResult)

//7569-토마토
// const fs = require('fs');
// const input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const [m, n, h] = input[0].split(' ').map(Number);
// const isValidPosition = (nz, nx, ny) => nz >= 0 && nz < h && nx >= 0 && nx < n && ny >= 0 && ny < m;

// // 상자 정보를 3차원 배열로 변환
// let arr = [];
// for (let i = 1; i < input.length; i += n) {
//   let box = [];
//   for (let j = i; j < i + n; j++) {
//     box.push(input[j].split(' ').map(Number));
//   }
//   arr.push(box);
// }

// // 익은 토마토의 자리를 큐에 추가
// const queue = [];
// const dir = [[0, 0, 1], [0, 0, -1], [0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0]];

// for (let k = 0; k < h; k++) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (arr[k][i][j] === 1) {
//         queue.push([k, i, j]);
//       }
//     }
//   }
// }

// // bfs
// const bfs = (graph, queue) => {
//   let index = 0;

//   while (index < queue.length) {
//     const [z, x, y] = queue[index++];

//     for (const [dz, dx, dy] of dir) {
//       const nz = z + dz;
//       const nx = x + dx;
//       const ny = y + dy;

//       if (isValidPosition(nz, nx, ny) && graph[nz][nx][ny] === 0) {
//         graph[nz][nx][ny] = graph[z][x][y] + 1;
//         queue.push([nz, nx, ny]);
//       }
//     }
//   }
// }

// // 계산
// const cal = (arr) => {
//   let result = 0;

//   for (let k = 0; k < h; k++) {
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < m; j++) {
//         if (arr[k][i][j] === 0) {
//           return -1; // 익지 않은 토마토가 남아있는 경우
//         }
//         result = Math.max(result, arr[k][i][j]);
//       }
//     }
//   }
//   return result - 1; // 처음 익은 토마토가 1이었으므로 1을 빼줌
// }

// bfs(arr, queue);
// console.log(cal(arr));

//11725-트리의 부모 찾기
// const fs = require('fs');
// const input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const n = +(input.shift());
// const arr = input.map(v=>v.split(' ').map(Number));
// let parents = Array(n+1).fill(0);
// let graph = Array.from({length: n+1}, ()=>[]);

// arr.map(([from, to])=>{
//   graph[from].push(to)
//   graph[to].push(from)
// })

// const bfs = (start) =>{
//   let queue = [start];

//   while(queue.length){
//     const node = queue.shift();

//     for(const next of graph[node]){
//       if(parents[next]===0&&next!==1){
//         parents[next]=node;
//         queue.push(next);
//       }
//     }
//   }
// }

// bfs(1);
// console.log(parents.slice(2).join('\n'))

//2468-안전영역
// const fs = require('fs');
// const input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const n = +input[0];
// let arr = input.slice(1).map(v=>v.split(' ').map(Number));

// const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
// const isValidPosition = (x, y) => x >= 0 && x < n && y >= 0 && y < n;

// const bfs = (status, i, j)=>{
//   const queue = [[i, j]];
//   status[i][j]=false;

//   while(queue.length){
//     const [x, y]=queue.shift();

//     for(const [dx, dy] of dir){
//       const nx = x+dx;
//       const ny = y+dy;

//       if(isValidPosition(nx, ny)&&status[nx][ny]){
//         status[nx][ny]=false;
//         queue.push([nx, ny]);
//       }
//     }
//   }
// }

// let safeArea = 0;
// let maxH = Math.max(...arr.flat());

// for(let h=0; h<=maxH; h++){
//   let status = Array.from({length: n}, (_, i)=>arr[i].map(v=>v>h));

//   let count = 0;

//   for(let i=0; i<n; i++){
//     for(let j=0; j<n; j++){
//       if(status[i][j]){
//         bfs(status, i, j);
//         count++;
//       }
//     }
//   }

//   safeArea = Math.max(safeArea, count);
// }

// console.log(safeArea)

//4963-섬의 개수
// const fs = require('fs');
// const input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const dir = [[0, 1], [0,-1], [1,0], [-1,0], [1, 1], [1,-1], [-1,1], [-1,-1]];
// let arr, w, h, visited;

// const bfs=(j, i)=>{
//   const queue=[[j, i]];

//   while(queue.length){
//     const [y, x] = queue.shift();

//     for(const [dx, dy] of dir){
//       const nx = x+dx;
//       const ny= y+dy;

//       if(nx>=0&&ny>=0&&nx<w&&ny<h&&!visited[ny][nx]&&arr[ny][nx]){
//         visited[ny][nx]=true;
//         queue.push([ny, nx]);
//       }
//     }
//   }
// }

// const mapCal = ()=>{
//   let count =0;

//   for(let i=0; i<h; i++){
//     for(let j=0; j<w; j++){
//       if(!visited[i][j]&&arr[i][j]){
//         bfs(i, j);
//         count++;
//       }
//     }
//   }

//   console.log(count)
// }

// for(let i=0; i<input.length-1; i++){
//   [w, h]=input[i].split(' ').map(Number);
//   arr = input.slice(i+1, i+h+1).map(v=>v.split(' ').map(Number));
//   i+=h;
//   visited=Array.from({length: h}, ()=>Array(w).fill(false))
//   mapCal();
// }

//7562-나이트의 이동
// const fs = require('fs');
// const input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const c = +(input.shift());
// const dir = [[2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]];

// const bfs = (h, start, goal)=>{
//   const [startX, startY] = start;
//   const [goalX, goalY] = goal;

//   const queue = [[startX, startY]];

//   const visited = Array.from({length: h}, ()=>Array(h).fill(false));
//   const dis = Array.from({length: h}, ()=>Array(h).fill(0));

//   visited[startX][startY] = true;

//   while(queue.length){
//     const [x, y] = queue.shift();

//     if(x === goalX&&y===goalY){
//       return dis[x][y]
//     }

//     for(const [dx, dy] of dir){
//       const nx = x+dx;
//       const ny = y+dy;

//       if (nx >= 0 && ny >= 0 && nx < h && ny < h && !visited[nx][ny]){
//         visited[nx][ny] = true;
//         dis[nx][ny] = dis[x][y]+1;
//         queue.push([nx, ny])
//       }
//     }
//   }

//   return -1;
// }

// for(let i=0; i<input.length; i+=3){
//   let h = +input[i];
//   let map = input.slice(i+1, i+3).map(v=>v.split(' ').map(Number))

//   console.log(bfs(h, map[0], map[1]));
// }

//2206-벽 부수고 이동하기
// const fs = require('fs');
// const input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const [n, m] = input[0].split(' ').map(Number);
// const arr = input.slice(1).map(v => v.split('').map(Number));
// const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];

// class Queue {
//     constructor() {
//         this.items = {}; // 큐의 요소를 저장할 객체
//         this.head = 0;   // 큐의 앞쪽 포인터
//         this.tail = 0;   // 큐의 뒤쪽 포인터
//     }

//     // 큐의 뒤에 요소 추가
//     enqueue(element) {
//         this.items[this.tail] = element; // tail 위치에 요소를 추가
//         this.tail++; // tail 포인터를 증가시켜 다음 위치로 이동
//     }

//     // 큐의 앞에서 요소 제거하고 반환
//     dequeue() {
//         const item = this.items[this.head]; // head 위치의 요소를 가져옴
//         delete this.items[this.head]; // head 위치의 요소를 삭제
//         this.head++; // head 포인터를 증가시켜 다음 위치로 이동
//         return item; // 삭제된 요소를 반환
//     }

//     // 큐의 크기 반환
//     size() {
//         return this.tail - this.head; // tail과 head의 차이로 큐의 크기 계산
//     }

//     // 큐가 비어 있는지 확인
//     isEmpty() {
//         return this.head === this.tail; // head와 tail이 같으면 큐가 비어 있음
//     }
// }

// // BFS 함수 정의
// const bfs = () => {
//     // 방문 여부를 저장하는 3차원 배열 생성
//     let visited = Array.from({ length: n }, () => Array.from({ length: m }, () => Array(2).fill(false)));
//     visited[0][0][0] = true; // 시작 위치를 방문 처리

//     let queue = new Queue(); // 큐 인스턴스 생성
//     queue.enqueue([0, 0, 0]); // 시작 위치를 큐에 추가
//     let steps = 1; // 초기 이동 횟수 설정

//     while (queue.size()) { // 큐가 비어있지 않은 동안 반복
//         let size = queue.size(); // 현재 큐의 크기를 저장

//         while (size--) { // 현재 큐의 크기만큼 반복
//             const [x, y, broken] = queue.dequeue(); // 큐의 앞에서 요소를 꺼냄

//             if (x === n - 1 && y === m - 1) { // 도착지에 도달한 경우
//                 return steps; // 이동 횟수 반환
//             }

//             for (const [dx, dy] of dir) { // 상하좌우로 이동
//                 const nx = x + dx;
//                 const ny = y + dy;

//                 // 다음 위치가 맵의 범위 안에 있는지 확인
//                 if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
//                     if (arr[nx][ny] === 0 && !visited[nx][ny][broken]) { // 이동 가능한 경우
//                         visited[nx][ny][broken] = true; // 방문 처리
//                         queue.enqueue([nx, ny, broken]); // 다음 위치를 큐에 추가
//                     }

//                     if (arr[nx][ny] === 1 && broken === 0 && !visited[nx][ny][1]) { // 벽을 부술 수 있는 경우
//                         visited[nx][ny][1] = true; // 벽을 부순 상태로 방문 처리
//                         queue.enqueue([nx, ny, 1]); // 다음 위치를 큐에 추가
//                     }
//                 }
//             }
//         }
//         steps++; // 이동 횟수 증가
//     }

//     return -1; // 도착지에 도달할 수 없는 경우 -1 반환
// }
// console.log(bfs());

//2583-영역 구하기
// const fs = require('fs');
// const input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const [m, n, k] = input.shift().split(' ').map(Number);
// let arr = Array.from({ length: m }, () => Array(n).fill(0));
// let visited = Array.from({ length: m }, () => Array(n).fill(false));
// const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];

// input.forEach(v=>{
//     let [x1, y1, x2, y2] = v.split(' ').map(Number);

//     for(let i=x1; i<x2; i++){
//         for(let j=y1; j<y2; j++){
//             arr[j][i] = 1;
//         }
//     }
// })

// const bfs=(i, j)=>{
//     const queue=[[i, j]];
//     let area=0;
//     visited[i][j]=true

//     while(queue.length){
//         const [x, y] = queue.shift();
//         area++;

//         for(const [dx, dy] of dir){
//             const nx = x+dx;
//             const ny = y+dy;

//             if(nx>=0&&ny>=0&&nx<m&&ny<n&&!visited[nx][ny]&&!arr[nx][ny]){
//                 visited[nx][ny]=true;
//                 queue.push([nx, ny])
//             }
//         }
//     }

//     return area
// }

// let areas = [];

// for(let i=0; i<m; i++){
//     for(let j=0; j<n; j++){
//         if(!visited[i][j]&&!arr[i][j]){
//             areas.push(bfs(i, j))
//         }
//     }
// }

// console.log(areas.length);
// console.log(areas.sort((a, b)=>a-b).join(' '))

//2655-촌수계산
// const fs = require('fs');
// let input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const n = parseInt(input.shift()); // 사람의 수
// const [a, b] = input.shift().split(' ').map(Number); // 촌수를 계산해야 하는 두 사람
// const m = parseInt(input.shift()); // 부모 자식 관계의 개수
// const relations = input.map(v => v.split(' ').map(Number));

// let graph = Array.from({length: n+1}, ()=>[]);

// relations.map(([from, to])=>{
//     graph[from].push(to);
//     graph[to].push(from);
// })

// const bfs = (start, target) =>{
//     const queue =[[start, 0]];
//     let visited = Array(n+1).fill(false);
//     visited[start] = true;

//     while(queue.length){
//         const [cur, dep] = queue.shift();

//         if(cur===target) return dep

//         for(const node of graph[cur]){
//             if(!visited[node]){
//                 visited[node]=true;
//                 queue.push([node, dep+1])
//             }
//         }
//     }

//     return -1;
// }

// console.log(bfs(a, b))

//16236-아기 상어
// const fs = require('fs');
// let input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const N = parseInt(input[0]);
// const space = input.slice(1).map(line => line.split(' ').map(Number));
// const directions = [
//     [-1, 0], // 위
//     [1, 0],  // 아래
//     [0, -1], // 왼쪽
//     [0, 1],  // 오른쪽
// ];

// let shark = {size:2, x:0, y:0, eaten:0};

// for(let i=0; i<N; i++){
//     for(let j=0; j<N; j++){
//         if(space[i][j]===9){
//             shark.x=i;
//             shark.y=j;
//             space[i][j]=0
//         }
//     }
// }

// const bfs= (startx, starty, size) => {
//     const queue = [[startx, starty, 0]];
//     const visited = Array.from({length: N}, ()=>Array(N).fill(false));
//     visited[startx][starty]=true;
//     let edi=[];

//     while(queue.length){
//         const [x, y, dis] = queue.shift();

//         for(const [dx, dy] of directions){
//             const nx = x+dx;
//             const ny= y+dy;

//             if(nx>=0&&ny>=0&&nx<N&&ny<N&&!visited[nx][ny]&&space[nx][ny]<=size){
//                 visited[nx][ny]=true;
//                 if(space[nx][ny]>0&&space[nx][ny]<size){
//                     edi.push([nx, ny, dis+1])
//                 }else{
//                     queue.push([nx, ny, dis+1])
//                 }
//             }
//         }
//     }

//     if(edi.length){
//         edi.sort((a, b)=>{
//             if(a[2]===b[2]){
//                 if(a[0]===b[0]) return a[1]-b[1]
//                 return a[0]-b[0]
//             }
//             return a[2]-b[2]
//         })
//         return edi[0]
//     }

//     return null
// }

// let total = 0;
// while(true){
//     const fish = bfs(shark.x, shark.y, shark.size);
//     if(!fish) break;

//     const [fx, fy, dis] = fish;
//     total+=dis
//     shark.x = fx;
//     shark.y = fy;
//     shark.eaten++;

//     if(shark.eaten===shark.size){
//         shark.size++;
//         shark.eaten=0
//     }

//     space[fx][fy]=0
// }

// console.log(total)

//1260-dfs와 bfs
// const fs = require('fs');
// let input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const [n, m, v] = input[0].split(' ').map(Number);
// const arr = input.slice(1).map(v=>v.split(' ').map(Number));
// let graph = Array.from({length: n+1}, ()=>[]);
// let visited = Array(n+1).fill(false)

// arr.map(([from, to])=>{
//     graph[from].push(to);
//     graph[to].push(from)
// });

// for(let i=1; i<=n; i++){
//     graph[i].sort((a, b)=>a-b)
// }

// const bfs = (start) =>{
//     const queue=[start];
//     let visited = Array(n).fill(false);
//     visited[start]=true;
//     let result= [];

//     while(queue.length){
//         const node= queue.shift();
//         result.push(node);

//         for(const n of graph[node]){
//             if(!visited[n]){
//                 visited[n]=true;
//                 queue.push(n)
//             }
//         }
//     }
//     return result
// }

// const dfs = (start) => {
//     let result = [];
//     let visited = Array(n).fill(false);
//     let stack = [start];

//     while(stack.length){
//         const node = stack.pop();

//         if(visited[node]) continue
//         visited[node]=true;
//         result.push(node)

//         graph[node].sort((a, b)=>b-a).forEach(v=>{
//             if(!visited[v]){
//                 stack.push(v)
//             }
//         })
//     }

//     return result
// };

// console.log(dfs(v).join(' '))
// console.log(bfs(v).join(' '))

//2178-미로탐색
// const fs = require('fs');
// let input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const [n, m] = input[0].split(' ').map(Number);
// const arr = input.slice(1).map(v=>v.split('').map(Number));
// const dir = [[0,1], [0,-1], [1,0], [-1,0]];

// const bfs = (startx, starty) =>{
//     const queue=[[startx, starty]];
//     let distance = Array.from({length:n}, ()=>Array(m).fill(0));
//     distance[startx][starty]=1;

//     while(queue.length){
//         const [x, y] = queue.shift();

//         for(const [dx, dy] of dir){
//             const nx = x+dx;
//             const ny = y+dy;

//             if(nx>=0&&ny>=0&&nx<n&&ny<m&&arr[nx][ny]){
//                 arr[nx][ny]=0;
//                 distance[nx][ny]=distance[x][y]+1
//                 queue.push([nx, ny])
//             }
//         }
//     }

//     return distance[n-1][m-1]
// }

// console.log(bfs(0, 0))

//2606-바이러스
// const fs = require('fs');
// let input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const n = +input[0];
// const m = +input[1];
// const arr = input.slice(2).map(v=>v.split(' ').map(Number));
// let graph = Array.from({length:n+1}, ()=>[]);

// arr.map(([from, to])=>{
//     graph[from].push(to);;
//     graph[to].push(from)
// })

// const bfs = (start) =>{
//     const queue =[start];
//     let visited = Array(n+1).fill(false);
//     visited[start] = true;
//     let count =0;

//     while(queue.length){
//         const node = queue.shift();

//         for(const n of graph[node]){
//             if(!visited[n]){
//                 visited[n]=true;
//                 count++;
//                 queue.push(n)
//             }
//         }
//     }

//     return count
// }

// console.log(bfs(1))

//2667-단지번호붙이기
// const fs = require('fs');
// let input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const n = +input[0];
// const arr = input.slice(1).map(v=>v.split('').map(Number));
// let visited =Array.from({length: n+1}, ()=>Array(n+1).fill(false));
// const dir = [[0,1], [0,-1], [1,0], [-1,0]];

// const bfs = (i, j)=>{
//     const queue =[[i, j]];
//     visited[i][j]=true;
//     let count=0;

//     while(queue.length){
//         const [x, y] = queue.shift();
//         count++

//         for(const [dx, dy] of dir){
//             const nx = x+dx;
//             const ny = y+dy;

//             if(nx>=0&&ny>=0&&nx<n&&ny<n&&!visited[nx][ny]&&arr[nx][ny]===1){
//                 visited[nx][ny]=true;
//                 queue.push([nx, ny])
//             }
//         }
//     }

//     return count
// }

// let result=[]

// for(let i=0; i<n; i++){
//     for(let j=0; j<n; j++){
//         if(!visited[i][j]&&arr[i][j]){
//             result.push(bfs(i, j))
//         }
//     }
// }

// console.log(result.length)
// console.log(result.sort((a, b)=>a-b).join('\n'))

//1012-유기농 배추
// const input = require('fs').readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const t = +input[0];
// let index=1;
// const dir = [[0,1], [0,-1], [1,0], [-1,0]]
// let n, m, k, graph;

// const bfs = (graph, i, j) => {
//   const queue = [[i, j]];
//   let count =0;

//   while(queue.length){
//     const [x, y] = queue.shift();

//     for(const [dx, dy] of dir){
//       const nx = x+dx;
//       const ny = y+dy;

//       if(nx>=0&&ny>=0&&nx<n&&ny<m&&graph[nx][ny]){
//         graph[nx][ny]=0;
//         queue.push([nx, ny]);
//         count++;

//       }
//     }
//   }

//   return count;
// }

// for(let i=0; i<t; i++){
//   [n, m, k]=input[index].split(' ').map(Number);
//   const arr = input.slice(index+1, index+1+k).map(v=>v.split(' ').map(Number));

//   const graph = Array.from({length: n}, ()=>Array(m).fill(0));

//   arr.map(([x, y])=>{
//     graph[x][y]=1
//   })

//   let result = [];
//   for(let i=0; i<n; i++){
//     for(let j=0; j<m; j++){
//       if(graph[i][j]){
//         result.push(bfs(graph, i, j))
//       }
//     }
//   }

//   console.log(result.length)

//   index++;
//   index+=k
// }

//7576-토마토
// const input = require('fs').readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const [M, N] = input[0].split(' ').map(Number);
// const box = input.slice(1).map(line => line.split(' ').map(Number));

// const dir = [[0,1], [0,-1], [1,0], [-1,0]];

// let queue = [];

// for(let i=0; i<N; i++){
//   for(let j=0; j<M; j++){
//     if(box[i][j]===1){
//       queue.push([i, j])
//     }
//   }
// }

// const bfs=(box, queue)=>{
//   let index =0;

//   while(index<queue.length){
//     const [x, y] = queue[index];
//     index++;

//     for(const [dx, dy] of dir){
//       const nx = x+dx;
//       const ny = y+dy;

//       if(nx>=0&&ny>=0&&nx<N&&ny<M&&!box[nx][ny]){
//         box[nx][ny]=box[x][y]+1;
//         queue.push([nx, ny])
//       }
//     }
//   }
// }

// let days =0;

// const cal = (box) =>{
//   for(let i=0; i<N; i++){
//     for(let j=0; j<M; j++){
//       if(!box[i][j]){
//         return -1
//       }
//       days=Math.max(days, box[i][j])
//     }
//   }
//   return days-1
// }

// bfs(box, queue);
// console.log(cal(box))

//1697-숨바꼭질
// const input = require('fs').readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const [n, k]=input[0].split(' ').map(Number);
// let visited = Array(100001).fill(false);

// const bfs = (start, goal) => {
//   const queue = [[start, 0]];

//   while(queue.length){
//     const [cur, sec] = queue.shift();
//     const move = [cur-1, cur+1, cur*2];

//     if(visited[cur]) continue
//     if(cur===goal) return sec
//     visited[cur]=1;

//     for(const m of move){
//       if(!visited[m]&&m>=0&&m<=100000){
//         queue.push([m, sec+1])
//       }
//     }
//   }
// }

// console.log(bfs(n, k))

//11724-연결 요소의 개수
// const input = require('fs').readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const [n, m] = input[0].split(' ').map(Number);
// const arr = input.slice(1).map(v=>v.split(' ').map(Number));
// let graph = Array.from({length: n+1}, ()=>[]);
// let visited = Array(n+1).fill(false);

// arr.map(([from, to])=>{
//   graph[from].push(to);
//   graph[to].push(from)
// })

// const bfs = (start) =>{
//   let queue = [start];
//   visited[start]=true

//   while(queue.length){
//     let node = queue.shift();

//     for(const n of graph[node]){
//       if(!visited[n]){
//         visited[n]=true;
//         queue.push(n)
//       }
//     }
//   }
// }
// let count =0;

// for(let i=1; i<=n; i++){
//   if(!visited[i]){
//     bfs(i);
//     count++
//   }
// }

// console.log(count)

//14502-연구소
// const input = require('fs').readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const [n, m] = input[0].split(' ').map(Number);
// const lab = input.slice(1).map(v=>v.split(' ').map(Number));

// const dir = [[0,1], [0,-1], [1,0], [-1,0]];

// const isValidPosition = (x, y)=> x>=0&&y>=0&&x<n&&y<m;

// const bfs = (labCopy) =>{
//   //큐에 바이러스 지역 넣기
//   const queue = [];
//   for(let i=0; i<n; i++){
//     for(let j=0; j<m; j++){
//       if(labCopy[i][j]===2){
//         queue.push([i, j])
//       }
//     }
//   }

//   //바이러스 옮기기
//   while(queue.length){
//     const [x, y] = queue.shift();

//     for(const [dx, dy] of dir){
//       const nx = x+dx;
//       const ny = y+dy;

//       if(isValidPosition(nx, ny)&&labCopy[nx][ny]===0){
//         labCopy[nx][ny]=2;
//         queue.push([nx, ny])
//       }
//     }
//   }
// }

// //안전영역계산하기
// const safeArea = (labCopy) =>{
//   let count =0;

//   for(let i=0; i<n; i++){
//     for(let j=0; j<m; j++){
//       if(labCopy[i][j]===0){
//         count++
//       }
//     }
//   }

//   return count
// }

// let maxSafeArea=0;

// for(let i=0; i<n*m; i++){
//   let x1 = Math.floor(i/m);
//   let y1 = i%m;

//   if(lab[x1][y1]!==0) continue;

//   for(let j=i+1; j<n*m; j++){
//     let x2 = Math.floor(j/m);
//     let y2 = j%m;

//     if(lab[x2][y2]!==0) continue;

//     for(let k=j+1; k<n*m; k++){
//       let x3 = Math.floor(k/m);
//       let y3 = k%m;

//       if(lab[x3][y3]!==0) continue;

//       let labCopy = lab.map(v=>v.slice())
//       labCopy[x1][y1]=1
//       labCopy[x2][y2]=1
//       labCopy[x3][y3]=1

//       bfs(labCopy);
//       let max = safeArea(labCopy);
//       maxSafeArea = Math.max(max, maxSafeArea)
//     }
//   }
// }

// console.log(maxSafeArea)

//10026-적록색약
// const input = require('fs').readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const n = +input[0];
// let arr = input.slice(1).map(v=>v.trim().split(''));
// const dir = [[0,1], [0,-1], [1,0], [-1,0]]
// let visited = Array.from({length: n}, ()=>Array(n).fill(false))
// let noArr = arr.map(v=>v.slice()).map(row => row.map(vv => vv === 'R' ? 'G' : vv));
// let noVisited = Array.from({length: n}, ()=>Array(n).fill(false))

// const bfs = (graph, v, startx, starty)=>{
//   const queue = [[startx, starty]];
//   v[startx][starty]=true;
//   let k= graph[startx][starty];

//   while(queue.length){
//     const [x, y] =queue.shift();

//     for(const [dx, dy] of dir){
//       const nx = x+dx;
//       const ny = y+dy;

//       if(nx>=0&&ny>=0&&nx<n&&ny<n&&!v[nx][ny]&&graph[nx][ny]===k){
//         v[nx][ny]=true;
//         queue.push([nx, ny])
//       }
//     }
//   }
// }

// const cal = (graph, v) =>{
//   let count =0;

//   for(let i=0; i<n; i++){
//     for(let j=0; j<n; j++){
//       if(!v[i][j]){
//         bfs(graph, v, i, j);
//         count++;
//       }
//     }
//   }

//   return count
// }

// console.log(cal(arr, visited), cal(noArr, noVisited));

//7569-토마토
// const fs = require('fs');
// const input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const [m, n, h] = input[0].split(' ').map(Number);
// const isValidPosition = (nz, nx, ny) => nz >= 0 && nz < h && nx >= 0 && nx < n && ny >= 0 && ny < m;
// const dir = [[0, 0, 1], [0, 0, -1], [0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0]];

// let arr = [];
// for(let i=1; i<input.length; i+=n){
//   let box = [];

//   for(let j=i; j<i+n; j++){
//     box.push(input[j].split(' ').map(Number))
//   }
//   arr.push(box)
// }

// //익은 토마토의 위치를 큐에 추가
// let queue = [];
// for(let k=0; k<h; k++){
//   for(let i=0; i<n; i++){
//     for(let j=0; j<m; j++){
//       if(arr[k][i][j]===1){
//         queue.push([k, i, j])
//       }
//     }
//   }
// }

// const bfs = (arr, queue) =>{
//   let index = 0;

//   while(index<queue.length){
//     const [z, x, y] =queue[index++];

//     for(const [dz, dx, dy] of dir){
//       const nz = z+dz;
//       const nx = x+dx;
//       const ny = y+dy;

//       //전이
//       if(isValidPosition(nz, nx, ny)&&arr[nz][nx][ny]===0){
//         arr[nz][nx][ny]=arr[z][x][y]+1;
//         queue.push([nz, nx, ny])
//       }
//     }
//   }
// }

// const cal = (arr) =>{
//   let result =0;

//   for(let k=0; k<h; k++){
//     for(let i=0; i<n; i++){
//       for(let j=0; j<m; j++){
//         //안 익은 토마토가 남아있다면 -1반환
//         if(arr[k][i][j]===0){
//           return -1
//         }
//         result = Math.max(result, arr[k][i][j])
//       }
//     }
//   }

//   return result-1
// }

// bfs(arr, queue);
// console.log(cal(arr))

//1697-숨바꼭질
// const fs = require('fs');
// const input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const [n, k] = input[0].split(' ').map(Number);
// let visited = Array(100001).fill(false);

// const bfs = (start, goal) =>{
//   const queue =[[start, 0]];

//   while(queue.length){
//     const [cur, sec] = queue.shift();
//     const move = [cur-1, cur+1, cur*2];

//     if(visited[cur]) continue;
//     if(cur === goal) return sec;

//     visited[cur] = true;

//     for(const m of move){
//       if(!visited[m]&&m>=0&&m<=100000){
//         queue.push([m, sec+1])
//       }
//     }
//   }
// }

// console.log(bfs(n, k))

//11725-트리의 부모찾기
// const fs = require('fs');
// const input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const n = +input[0];
// const arr = input.slice(1).map(v=>v.split(' ').map(Number))
// let graph = Array.from({length: n+1}, ()=>[]);
// let parent = Array(n+1).fill(0);

// arr.map(([from, to])=>{
//   graph[from].push(to);
//   graph[to].push(from)
// })

// const bfs = (start) =>{
//   const queue = [start];

//   while(queue.length){
//     const node = queue.shift();

//     for(const next of graph[node]){
//       if(parent[next]===0&&next!==1){
//         parent[next]=node;
//         queue.push(next)
//       }
//     }
//   }
// }

// bfs(1)
// console.log(parent.slice(2).join('\n'))

//2468-안전 영역
// const fs = require('fs');
// const input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const n = +input[0];
// const arr= input.slice(1).map(v=>v.split(' ').map(Number));
// const dir = [[0,1], [0,-1], [1,0], [-1,0]]

// //개수 세기
// const bfs = (state, i, j)=>{
//   const queue = [[i, j]];

//   while(queue.length){
//     const [x, y] = queue.shift();

//     for(const [dx, dy] of dir){
//       const nx = x+dx;
//       const ny = y+dy;

//       if(nx>=0&&ny>=0&&nx<n&&ny<n&&state[nx][ny]===true){
//         //방문여부 대신 false로 체크
//         state[nx][ny]=false
//         queue.push([nx, ny])
//       }
//     }
//   }
// }

// let maxSafeArea = 0;

// //h보다 낮은 지역의 상태 표시
// for(let h=0; h<=Math.max(...arr.flat()); h++){
//   let state = arr.map(row => row.map(value => value > h));

//   let count =0;

//   for(let i=0; i<n; i++){
//     for(let j=0; j<n; j++){
//       if(state[i][j]===true){
//         bfs(state, i, j);
//         count++;
//       }
//     }
//   }

//   maxSafeArea=Math.max(maxSafeArea, count)
// }

// console.log(maxSafeArea)

//4963-섬의 개수
// const fs = require('fs');
// const input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const dir = [[0,1], [0,-1], [1,0], [-1,0], [1,-1], [-1,1], [-1,-1], [1,1]]
// let arr, w, h;

// const bfs = (i, j) =>{
//   const queue = [[i, j]];

//   while(queue.length){
//     const [x, y] =queue.shift();

//     for(const [dx, dy] of dir){
//       const nx = x+dx;
//       const ny = y+dy;

//       if(nx>=0&&ny>=0&&nx<h&&ny<w&&arr[nx][ny]===1){
//         queue.push([nx, ny]);
//         arr[nx][ny]=true;
//       }
//     }
//   }
// }

// for(let i=0; i<input.length-1; i++){
//   [w, h] = input[i].split(' ').map(Number);
//   arr = input.slice(i+1, i+h+1).map(v=>v.split(' ').map(Number));

//   let count =0;

//   for(let i=0; i<h; i++){
//     for(let j=0; j<w; j++){
//       if(arr[i][j]===1){
//         bfs(i, j)
//         count++;
//       }
//     }
//   }

//   console.log(count)
//   i+=h
// }

//7562-나이트의 이동
// const fs = require('fs');
// const input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const dir = [[2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]];
// const t = +input[0];

// const bfs = (start, goal, l) => {
//   const queue=[[start[0], start[1]]];
//   let visited = Array.from({length: l}, ()=>Array(l).fill(false));
//   visited[start[0]][start[1]] = true;
//   let graph = Array.from({length: l}, ()=>Array(l).fill(0));

//   while(queue.length){
//     const [x, y]=queue.shift();

//     if(x===goal[0]&&y===goal[1]){
//       return graph[x][y]
//     }

//     for(const [dx, dy] of dir){
//       const nx = x+dx;
//       const ny = y+dy;

//       if(nx>=0&&ny>=0&&nx<l&&ny<l&&!visited[nx][ny]){
//         queue.push([nx, ny]);
//         visited[nx][ny]=true;
//         graph[nx][ny]= graph[x][y]+1
//       }
//     }
//   }

//   return -1
// }

// for(let i=1; i<input.length; i+=3){
//   const l = +input[i]
//   const now = input[i+1].split(' ').map(Number);
//   const moveTo = input[i+2].split(' ').map(Number);

//   console.log(bfs(now, moveTo, l))
// }

//2206-벽 부수고 이동하기
// const fs = require('fs');
// const input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const [N, M] = input.shift().split(' ').map(Number);
// const graph = input.map((v) => v.split('').map(Number));
// const visited = Array.from(Array(N), () => Array.from(Array(M), () => Array(2).fill(0)));
// const dir = [[-1, 0], [1, 0], [0, 1], [0, -1]]; // 인접 네방향 x,y좌표

// const bfs = () => {
//   const queue = [[0, 0, 0]]; // 현재 위치 x,y좌표 및 벽이 부서진 횟수
//   visited[0][0][0] = 1; // 시작하는 칸 수도 세야 하므로 방문한 칸수는 1로 시작
//   let idx = 0;

//   while (idx < queue.length) {
// 	// isBreak: 벽이 부서진 횟수 담는 변수 (1번만 벽을 부술 수 있음)
// 	// shift() 대신 인덱스로 큐 배열의 값에 접근
//     const [x, y, isBreak] = queue[idx++];

// 	// 목적지에 도달했으면 반환
//     if (x === N - 1 && y === M - 1) {
//       return visited[x][y][isBreak];
//     }

//     for(const [dx, dy] of dir){
//         const nx = x+dx;
//         const ny = y+dy;

// 	  // 해당 위치 그래프 범위를 벗어나지 않았다면
//       if (nx >= 0 && nx < N && ny >= 0 && ny < M) {

// 		// 해당 위치가 빈 공간이고, 방문한적이 없는 칸이라면
//         if (!graph[nx][ny] && !visited[nx][ny][isBreak]) {
// 		  // 이동 칸 수 = 이전까지 이동해온 칸 수에 +1하여 누적 증가
//           visited[nx][ny][isBreak] = visited[x][y][isBreak] + 1;
//           queue.push([nx, ny, isBreak]);

// 		// 해당 위치에 벽이 있고, 벽을 한 번도 부순적이 없다면(벽 부수는 기회를 아직 사용한적 없으면)
//         } else if (graph[nx][ny] && !isBreak) {
//           visited[nx][ny][isBreak + 1] = visited[x][y][isBreak] + 1;
//           queue.push([nx, ny, isBreak + 1]); // 벽 부수기 1회권 사용
//         }
//       }
//     }
//   }
//   return -1;
// };
// console.log(bfs());

//2583-영역 구하기
// const fs = require('fs');
// const input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const [m, n, k] = input[0].split(' ').map(Number);
// const arr = input.slice(1).map(v=>v.split(' ').map(Number));
// let graph = Array.from({length:m}, ()=>Array(n).fill(0));
// let visited = Array.from({length:m}, ()=>Array(n).fill(false));
// const dir = [[0,1], [0,-1], [1,0], [-1,0]];

// //눈금칠하기
// arr.forEach(v=>{
//   const [x1, y1, x2, y2] = v;

//   for(let i=x1; i<x2; i++){
//     for(let j=y1; j<y2; j++){
//       graph[j][i]=1
//     }
//   }
// })

// const bfs = (i, j)=>{
//   const queue=[[i, j]];
//   visited[i][j]=true;
//   let count =1;

//   while(queue.length){
//     const [x, y] =queue.shift();

//     for(const [dx, dy] of dir){
//       const nx = x+dx;
//       const ny = y+dy;

//       if(nx>=0&&ny>=0&&nx<m&&ny<n&&!visited[nx][ny]&&!graph[nx][ny]){
//         visited[nx][ny] = true;
//         queue.push([nx, ny]);
//         count++
//       }
//     }
//   }

//   return count
// }

// let result = [];

// for(let i=0; i<m; i++){
//   for(let j=0; j<n; j++){
//     if(!visited[i][j]&&!graph[i][j]){
//       result.push(bfs(i, j))
//     }
//   }
// }

// result.sort((a, b)=>a-b)
// console.log(result.length);
// console.log(result.join(' '))

//2644-촌수계산
// const fs = require('fs');
// const input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const n = +input[0];
// const [a, b] = input[1].split(' ').map(Number);
// const m = +input[2];
// const arr = input.slice(3).map(v=>v.split(' ').map(Number));
// let graph = Array.from({length:n+1}, ()=>[]);
// let visited = Array(n+1).fill(false);

// arr.map(([from, to])=>{
//   graph[from].push(to);
//   graph[to].push(from)
// })

// const bfs = (start, goal) => {
//   const queue = [[start, 0]];
//   visited[start]=true;

//   while(queue.length){
//     const [cur, dep] = queue.shift();

//     if(cur === goal) return dep;

//     for(const next of graph[cur]){
//       if(!visited[next]){
//         visited[next]=true;
//         queue.push([next, dep+1])
//       }
//     }
//   }

//   return -1
// }

// console.log(bfs(a, b))

//16236-아기상어
// const fs = require('fs');
// let input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const N = parseInt(input[0]);
// const space = input.slice(1).map(line => line.split(' ').map(Number));
// const directions = [
//     [-1, 0], // 위
//     [1, 0],  // 아래
//     [0, -1], // 왼쪽
//     [0, 1],  // 오른쪽
// ];

// let shark = {size:2, x:0, y:0, eaten:0};

// for(let i=0; i<N; i++){
//     for(let j=0; j<N; j++){
//         if(space[i][j]===9){
//             shark.x=i;
//             shark.y=j;
//             space[i][j]=0
//         }
//     }
// }

// const bfs= (startx, starty, size) => {
//     const queue = [[startx, starty, 0]];
//     const visited = Array.from({length: N}, ()=>Array(N).fill(false));
//     visited[startx][starty]=true;
//     let edi=[];

//     while(queue.length){
//         const [x, y, dis] = queue.shift();

//         for(const [dx, dy] of directions){
//             const nx = x+dx;
//             const ny= y+dy;

//             if(nx>=0&&ny>=0&&nx<N&&ny<N&&!visited[nx][ny]&&space[nx][ny]<=size){
//                 visited[nx][ny]=true;
//                 if(space[nx][ny]>0&&space[nx][ny]<size){
//                     edi.push([nx, ny, dis+1])
//                 }else{
//                     queue.push([nx, ny, dis+1])
//                 }
//             }
//         }
//     }

//     if(edi.length){
//         edi.sort((a, b)=>{
//             if(a[2]===b[2]){
//                 if(a[0]===b[0]) return a[1]-b[1]
//                 return a[0]-b[0]
//             }
//             return a[2]-b[2]
//         })
//         return edi[0]
//     }

//     return null
// }

// let total = 0;
// while(true){
//     const fish = bfs(shark.x, shark.y, shark.size);
//     if(!fish) break;

//     const [fx, fy, dis] = fish;
//     total+=dis
//     shark.x = fx;
//     shark.y = fy;
//     shark.eaten++;

//     if(shark.eaten===shark.size){
//         shark.size++;
//         shark.eaten=0
//     }

//     space[fx][fy]=0
// }

// console.log(total)

//13549-숨바꼭질3
// const fs = require('fs');
// let input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
// const [n, k] = input[0].split(' ').map(Number);
// let visited = Array(100001).fill(false);

// const bfs = (start, goal) =>{
//     const queue = [[start, 0]];
//     visited[start]=true

//     while(queue.length){
//         const [cur, sec] = queue.shift();
//         const move = [cur-1, cur+1, cur*2];

//         if(cur===goal) return sec;

//         for(const m of move){
//             if(!visited[m]&&m>=0&&m<=100000){
//                 visited[m]=true;
//                 if(m===cur*2){
//                     queue.unshift([m, sec])
//                 }else{
//                     queue.push([m, sec+1])
//                 }
//               }
//         }
//     }

// }

// console.log(bfs(n, k))

//16953-A->B
// const fs = require('fs');
// let input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt").toString().trim().split(' ');
// const [a, b] = input.map(Number);

// const bfs = (start, target) =>{
//     const queue = [[start, 1]];

//     while(queue.length){
//         const [cur, sec] = queue.shift();
//         const move = [cur*2, parseInt(cur.toString()+'1')];

//         if(cur===target) return sec

//         for(const m of move){
//             if(m<=target){
//                 queue.push([m, sec+1])
//             }
//         }
//     }
//     return -1
// }

// console.log(bfs(a, b))

//1389-케빈 베이컨의 6단계 법칙
// const fs = require('fs');
// let input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt").toString().trim().split('\n');
// const [n, m] = input[0].split(' ').map(Number);
// const arr = input.slice(1).map(v=>v.split(' ').map(Number))
// let graph = Array.from({length: n+1}, ()=>[]);

// arr.map(([from, to])=>{
//   graph[from].push(to);
//   graph[to].push(from)
// })

// const bfs = (start, target) =>{
//   const queue = [[start, 0]];
//   let visited = Array(n+1).fill(false);
//   visited[start]=true;

//   while(queue.length){
//     const [cur, sec] = queue.shift();

//     if(cur===target) return sec

//     for(const m of graph[cur]){
//       if(!visited[m]){
//         visited[m]=true;
//         queue.push([m, sec+1])
//       }
//     }
//   }
// }

// let answer =[];

// for(let i=1; i<=n; i++){

//   let result = [];
//   for(let j=1; j<=n; j++){
//     result.push(bfs(i, j))
//   }

//   answer.push([i, result.reduce((a, c)=>a+c, 0)])
// }

// answer.sort((a, b)=>{
//   if(a[1]===b[1]) return a[0]-b[0]
//   return a[1]-b[1]
// })

// console.log(answer[0][0])

//16234-인구 이동
// const fs = require('fs');
// let input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt").toString().trim().split('\n');
// const [N, L, R] = input[0].split(' ').map(Number);
// const arr = input.slice(1).map(v => v.split(' ').map(Number));

// const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];

// const isValidPosition = (x, y) => x >= 0 && y >= 0 && x < N && y < N;

// const bfs = (i, j, visited) =>{
//   const queue=[[i, j]];
//   const union = [[i, j]];
//   visited[i][j]=true;
//   let sum = arr[i][j]

//   while(queue.length){
//     const [x, y] = queue.shift();

//     for(const [dx, dy] of dir){
//       const nx=x+dx;
//       const ny = y+dy;

//       if(isValidPosition(nx, ny)&&!visited[nx][ny]){
//         let m = Math.abs(arr[nx][ny]-arr[x][y]);
//         if(m>=L&&m<=R){
//           queue.push([nx, ny]);
//           union.push([nx, ny]);
//           visited[nx][ny]=true;
//           sum+=arr[nx][ny];
//         }
//       }
//     }
//   }

//   let avg = Math.floor(sum/union.length);

//   for(const [x, y] of union){
//     arr[x][y] = avg
//   }

//   return union.length>1
// }

// let days =0;

// while(true){
//   let visited = Array.from({length: N}, ()=>Array(N).fill(false));
//   let move = false;

//   for(let i=0; i<N; i++){
//     for(let j=0; j<N; j++){
//       if(!visited[i][j]){
//         if(bfs(i, j, visited)){
//           move = true;
//         }
//       }
//     }
//   }

//   if(!move) break;
//   days++
// }

// console.log(days)

//1707-이분 그래프
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// let tc = +input.shift();
// let index = 0;

// while(tc--){
//   const [v, e] = input[index++].split(' ').map(Number);
//   const graph = Array.from({length: v+1}, ()=>[]);
//   const colors =Array(v+1).fill(0)//이분 그래프 여부를 같은 색으로 구분

//   for(let i=0; i<e; i++){
//     const [from, to]=input[index+i].split(' ').map(Number);
//     graph[from].push(to);
//     graph[to].push(from);
//   }

//   const bfs = (start) =>{
//     const queue = [start];
//     colors[start]=1;

//     while(queue.length){
//       const cur = queue.shift();

//       for(const node of graph[cur]){
//         if(!colors[node]){
//           colors[node]=-colors[cur];
//           queue.push(node)
//         }else if(colors[node]===colors[cur]){
//           return false
//         }
//       }
//     }

//     return true;
//   }

//   let isa = true;

//   for(let i=1; i<=v; i++){
//     if(!colors[i]){
//       if(!bfs(i)){
//         isa=false;
//         break;
//       }
//     }
//   }

//   console.log(isa?'YES':'NO');
//   index+=e
// }

//13460-구슬탈출2

//문제 해결과정
// 1. bfs로 탐색하며, [빨간공 위치, 파란공 위치, 반복수 cnt] 배열을 큐에 넣는다.
// 2. 큐가 비어있을 때 까지 탐색하면서 아래의 절차를 수행한다.

// a. 상하좌우를 모두 탐색한다.
// b. 탐색할 때 빨간공이 먼저 움직일지, 파란공이 먼저 움직일지를 이동할 방향과 각 공의 좌표에 따라 정한다.
// c. 빨간공과 파란공을 정해진 순서대로 이동시킨다.
// d. 파란공이 구멍에 빠졌다면 정답이 아니므로 넘어간다.
// e. 빨간공만 구멍에 빠졌다면 정답이므로 탐색을 멈춘다.
// f. 빨간공과 파란공이 빠지지 않았을 때 다음을 수행한다.
//      i. 만약 cnt가 10회라면, 더이상 기울일 수 없으므로 다음 방향의 이동을 수행한다.
//      ii. 빨간공과 파란공의 기울여서 움직인 좌표가 움직이기 전과 같다면, 큐에 넣지 않는다.
//      iii. 움직인 좌표가 움직이기 전과 다르다면, 이후 좌표를 큐에 넣어주면서 기울인 횟수 cnt를 증가시킨다.
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n').map(v=>v.trim());

// const sol =(input)=>{
//   let redBallPos = null;
//   let blueBallPos = null;
//   let holePos = null;
//   const maxCnt = 10;
//   const boardObj = {
//     RED: 'R',
//     BLUE: 'B',
//     HOLE: 'O',
//     EMPTY: '.',
//   }; // 상수 객체
//   const dirObj = {
//     TOP: 0,
//     RIGHT: 1,
//     BOTTOM: 2,
//     LEFT: 3,
//   }; // 상하좌우 방향 객체

//   const dx = [-1, 0, 1, 0];
//   const dy = [0, 1, 0, -1];

//   //빨간공, 파란공, 구멍 위치 삽입
//   //공들 위치 확인하며 이동
//   //공이 구멍에 빠졌는지 확인
//   //빨간공이 해당 방향에 앞에 위치했는지 확인
//   //이전 공의 위치와 이후공의 위치 가 같으면 stop
//   //cnt가 max와 같아이면 stop
//   //파란공이 구멍에 빠져도 stop
//   //빨간공이 빠지면 정답

//   const boards = input.slice(1).map((str, rowIdx)=>{
//     const row = str.split('');

//     row.map((e, colIdx)=>{
//       if(e===boardObj.BLUE) blueBallPos=[rowIdx, colIdx]
//       else if(e===boardObj.RED) redBallPos=[rowIdx, colIdx]
//       else if(e===boardObj.HOLE) holePos=[rowIdx, colIdx]
//     })

//     return row
//   })

//   const moveBall=(ball, otherBall, dir)=>{
//     while(true){
//       const nx = ball[0]+dx[dir];
//       const ny = ball[1]+dy[dir];

//       if(nx===otherBall[0]&&ny===otherBall[1]){
//         break
//       }else if(boards[nx][ny]===boardObj.EMPTY){
//         ball[0]=nx;
//         ball[1]=ny
//       }else if(boards[nx][ny]===boardObj.HOLE){
//         ball[0]=-1;
//         ball[1]=-1;
//         break
//       }
//       else break
//     }
//   }

//   const checkEscape = (ball)=>{
//     if(ball[0]===-1&&ball[1]===-1) return true;
//     return false
//   }

//   const firstMoveRedBall = (red, blue, dir) =>{
//     if(
//       (dir===dirObj.TOP&&red[0]<blue[0])||
//       (dir===dirObj.BOTTOM&&red[0]>blue[0])||
//       (dir===dirObj.RIGHT&&red[1]>blue[1])||
//       (dir===dirObj.LEFT&&red[1]<blue[1])
//     ){
//       return true
//     }
//     return false
//   }

//   const checkStop=(beforeBall, afterBall)=>{
//     if (beforeBall[0] === afterBall[0] && beforeBall[1] === afterBall[1])
//       return true;
//     return false;
//   }

//   let answer = -1;
//   let findAnswer = 0;
//   const queue = [[...redBallPos, ...blueBallPos, 1]];

//   while (queue.length) {
//     if (findAnswer) break;
//     const [rx, ry, bx, by, cnt] = queue.shift();

//     for(let dir =0; dir<4; dir++){
//       const reds = [rx, ry];
//       const blues = [bx, by];

//       if(firstMoveRedBall(reds, blues, dir)){
//         moveBall(reds, blues, dir);
//         moveBall(blues, reds, dir);
//       }else{
//         moveBall(blues, reds, dir);
//         moveBall(reds, blues, dir);
//       }

//       if(checkEscape(blues)) continue
//       if(checkEscape(reds)){
//         findAnswer=1;
//         answer=cnt;
//         break
//       }

//       if (checkStop([rx, ry], reds) && checkStop([bx, by], blues)) continue;
//       if(cnt===maxCnt) continue

//       queue.push([...reds, ...blues, cnt + 1]);
//     }
//   }

//   console.log(answer)
// }

// sol(input)

//2573-빙산

//문제해결과정
// 동서남북 네 방향으로 붙어있는 0이 저장된 칸의 개수만큼 줄어든다.
//단, 각 칸에 저장된 높이는 0보다 더 줄어들지 않는다.
//빙산이 두 덩어리 이상으로 분리되는 최초의 시간(년)
//만일 전부 다 녹을 때까지 두 덩어리 이상으로 분리되지 않으면 프로그램은 0을 출력

//덩어리 개수 확인하는 함수
//a.0이 아니고, 방문한적이 없는 자리여야함
//b.count=[]에 크기 별로 push
//c.count개수가 2이상이면 결과값 출력
//d. 만약 전부 다 0이라면(flat()과 every()로 확인) 0을 출력

//높이 줄어드는 함수

//전부 다 녹았는지 확인하는 함수

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n').map(v => v.trim());
// const [n, m] = input[0].split(' ').map(Number);
// let arr = input.slice(1).map(v => v.split(' ').map(Number));
// let dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
// const isValidPosition = (x, y) => x >= 0 && y >= 0 && x < n && y < m;

// //빙산을 녹이는 함수
// const reduceHeight = () =>{
//   let newArr = JSON.parse(JSON.stringify(arr));

//   for(let i=0; i<n; i++){
//     for(let j=0; j<m; j++){
//       if(arr[i][j]>0){
//         let reduceCount=0;
//         for(let [dx, dy] of dir){
//           const nx = i+dx;
//           const ny = j+dy;

//           if(isValidPosition(nx, ny)&&arr[nx][ny]===0){
//             reduceCount++;
//           }
//         }
//         newArr[i][j]=Math.max(0, arr[i][j]-reduceCount)
//       }
//     }
//   }

//   return newArr
// }

// //분리된 섬이 몇개인 세는 함수
// const countIland = (arr, visited) =>{
//   let count =0;

//   for(let i=0; i<n; i++){
//     for(let j=0; j<m; j++){
//       if(arr[i][j]>0&&!visited[i][j]){
//         bfs(arr, visited, i, j);
//         count++;
//       }
//     }
//   }

//   return count
// }

// const bfs = (arr, visited, i, j) =>{
//   const queue=[[i, j]];
//   visited[i][j]=true;

//   while(queue.length){
//     const [x, y] =queue.shift();

//     for(const [dx, dy] of dir){
//       const nx = x+dx;
//       const ny = y+dy;

//       if(isValidPosition(nx, ny)&&!visited[nx][ny]&&arr[nx][ny]>0){
//         visited[nx][ny]=true;
//         queue.push([nx, ny])
//       }
//     }
//   }
// }

// let years =0;

// while(true){
//   let visited = Array.from({length: n}, ()=>Array(m).fill(false));
//   let ilands = countIland(arr, visited);

//   if(ilands>1){
//     console.log(years);
//     break
//   }

//   if(ilands===0){
//     console.log(0);
//     break
//   }

//   arr = reduceHeight();
//   years++;
// }

//5014-스타트링크

//1층부터 가장 높은 층은 F층
// 강호가 지금 있는 곳은 S층
//스타트링크가 있는 곳의 위치는 G층(목적지)
//U버튼은 위로 U층을 가는 버튼
//D버튼은 아래로 D층을 가는 버튼

//만약, U층 위, 또는 D층 아래에 해당하는 층이 없을 때는, 엘리베이터는 움직이지 않는다
//만약, 엘리베이터를 이용해서 G층에 갈 수 없다면, "use the stairs"를 출력

//출력: G층에 도착하려면, 버튼을 적어도 몇 번 눌러야 하는지

// 층수 정렬: 1,2,3,4,5,6,7,8,9,10(1부터 f까지 나열)
//1 3 5 7 9 8 10

//층수를 올라거나 내려가는 함수
//층수 범위를 벗어나는 지 확인하는 함수

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim();
// const [F, S, G, U, D] = input.split(' ').map(Number);

// // BFS를 사용하여 최소 버튼 수를 구하는 함수
// const bfs = (start) =>{
//   const queue=[[start, 0]];
//   let visited = Array(F+1).fill(false);
//   visited[start]=true;

//   while(queue.length){
//     const [now, count] = queue.shift();

//     if(now===G) return count

//     // U 버튼을 눌렀을 때
//     if (U > 0 && now + U <= F && !visited[now + U]) {
//       visited[now + U] = true;
//       queue.push([now + U, count + 1]);
//     }

//     // D 버튼을 눌렀을 때
//     if (D > 0 && now - D >= 1 && !visited[now - D]) {
//       visited[now - D] = true;
//       queue.push([now - D, count + 1]);
//     }
//   }

//   return 'use the stairs'
// }

// console.log(bfs(S))

//1926-그림
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const [n, m] = input[0].split(' ').map(Number);
// const arr = input.slice(1).map(v=>v.split(' ').map(Number));
// let visited = Array.from({length:n}, ()=>Array(m).fill(false));
// const dir = [[0,1], [0,-1], [1,0], [-1,0]];

// const bfs = (i, j)=>{
//   const queue =[[i, j]];
//   visited[i][j]=true;
//   let count =1;

//   while(queue.length){
//     const [x, y] =queue.shift();

//     for(const [dx, dy] of dir){
//       const nx = x+dx;
//       const ny = y+dy;

//       if(nx>=0&ny>=0&&nx<n&&ny<m&&!visited[nx][ny]&&arr[nx][ny]){
//         visited[nx][ny]=true;
//         queue.push([nx, ny]);
//         count++;
//       }
//     }
//   }

//   return count
// }

// let result = [];

// for(let i=0; i<n; i++){
//   for(let j=0; j<m; j++){
//     if(!visited[i][j]&&arr[i][j]){
//       result.push(bfs(i, j))
//     }
//   }
// }

// console.log(result.length)
// console.log(result.length>0?Math.max(...result):0)

//9019-DSLR
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// const t = +input[0];

// const dMove = (num) => {
//   return num * 2 % 10000;
// }

// const sMove = (num) => {
//   return num === 0 ? 9999 : num - 1;
// }

// const lMove = (num) => {
//   return (num % 1000) * 10 + Math.floor(num / 1000);
// }

// const rMove = (num) => {
//   return (num % 10) * 1000 + Math.floor(num / 10);
// }

// const bfs = (start, goal) => {
//   const queue = [[start, ""]];
//   const visited = Array(10000).fill(false);
//   visited[start] = true;

//   while (queue.length) {
//     const [current, commands] = queue.shift();

//     if (current === goal) return commands;

//     const nextD = dMove(current);
//     const nextS = sMove(current);
//     const nextL = lMove(current);
//     const nextR = rMove(current);

//     if (!visited[nextD]) {
//       visited[nextD] = true;
//       queue.push([nextD, commands + 'D']);
//     }
//     if (!visited[nextS]) {
//       visited[nextS] = true;
//       queue.push([nextS, commands + 'S']);
//     }
//     if (!visited[nextL]) {
//       visited[nextL] = true;
//       queue.push([nextL, commands + 'L']);
//     }
//     if (!visited[nextR]) {
//       visited[nextR] = true;
//       queue.push([nextR, commands + 'R']);
//     }
//   }
// }

// for (let i = 1; i <= t; i++) {
//   const [a, b] = input[i].split(' ').map(Number);
//   console.log(bfs(a, b));
// }

//3055-탈출

//비어있는 곳은 '.'
//물이 차있는 지역은 '*'
//돌은 'X'
//비버의 굴은 'D'
//고슴도치의 위치는 'S'

//물이 있는 칸과 인접해있는 비어있는 칸(적어도 한 변을 공유)은 물이 차게 된다.
//물과 고슴도치는 돌을 통과할 수 없다.
//고슴도치는 물로 차있는 구역으로 이동할 수 없다
//물도 비버의 소굴로 이동할 수 없다.
//고슴도치가 안전하게 비버의 굴로 이동하기 위해 필요한 최소 시간

//고슴도치는 물이 찰 예정인 칸으로 이동할 수 없다
//다음 시간에 물이 찰 예정인 칸으로 고슴도치는 이동할 수 없다.

//비버의 굴 위치, 고슴도치의 위치 삽입
//고슴 도치가 이동한 후 고슴도치 위치를 빈칸으로 만들어줘야 함.
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// const [r, c] = input[0].split(' ').map(Number);
// const forest = input.slice(1).map(line => line.split(''));
// const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

// let startPosition = null;
// let holePosition = null;
// let waterQueue = [];
// let waterTime = Array.from({ length: r }, () => Array(c).fill(Infinity));

// // 초기 위치 찾기
// for (let i = 0; i < r; i++) {
//   for (let j = 0; j < c; j++) {
//     if (forest[i][j] === 'S') {
//       startPosition = [i, j];
//     } else if (forest[i][j] === 'D') {
//       holePosition = [i, j];
//     } else if (forest[i][j] === '*') {
//       waterQueue.push([i, j]);
//       waterTime[i][j] = 0;
//     }
//   }
// }

// // 물 퍼뜨리기
// const fillWater = () => {
//   while (waterQueue.length) {
//     const [x, y] = waterQueue.shift();

//     for (const [dx, dy] of directions) {
//       const nx = x + dx;
//       const ny = y + dy;

//       if (nx >= 0 && ny >= 0 && nx < r && ny < c) {
//         if (forest[nx][ny] === '.' && waterTime[nx][ny] === Infinity) {
//           waterTime[nx][ny] = waterTime[x][y] + 1;
//           waterQueue.push([nx, ny]);
//         }
//       }
//     }
//   }
// }

// // 고슴도치 이동
// const moveHedgehog = () => {
//   const queue = [[...startPosition, 0]];
//   const visited = Array.from({ length: r }, () => Array(c).fill(false));
//   visited[startPosition[0]][startPosition[1]] = true;

//   while (queue.length) {
//     const [x, y, time] = queue.shift();

//     if (x === holePosition[0] && y === holePosition[1]) {
//       return time;
//     }

//     for (const [dx, dy] of directions) {
//       const nx = x + dx;
//       const ny = y + dy;

//       if (nx >= 0 && ny >= 0 && nx < r && ny < c && !visited[nx][ny]) {
//         if ((forest[nx][ny] === '.' || forest[nx][ny] === 'D') && time + 1 < waterTime[nx][ny]) {
//           visited[nx][ny] = true;
//           queue.push([nx, ny, time + 1]);
//         }
//       }
//     }
//   }

//   return "KAKTUS";
// }

// fillWater();
// console.log(moveHedgehog());

//2636-치즈

//출력해야하는 부분
//a.치즈가 모두 녹아 없어지는 데 걸리는 시간(noneTime)
//b.모두 녹기 한 시간 전에 남아있는 치즈조각이 놓여 있는 칸의 개수(lastHourCheeseCount)

//함수
//a.녹아없어지는 함수(meltCheese)
//b. 치즈 개수 세는 함수(countCheese)

//문제해결과정
//치즈 있는 칸을 큐에 넣는다.
//bfs를 통해 공기와 접촉한 칸(0)은 녹인다.
//방문한 칸은 표시한다.
//치즈가 하나도 없는지 확인하는 함수
//치즈가 하나도 없으면 count를 return 한다.

//point:안쪽이 고립되어 있으면 안녹음(공기와 접촉되어 있지 않는 부분)
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const [rows, cols] = input[0].split(' ').map(Number);
// let cheese = input.slice(1).map(v=>v.split(' ').map(Number));
// const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

// const meltCheese = () =>{
//   let visited = Array.from({length:rows}, ()=>Array(cols).fill(false));
//   let melt = [];
//   let queue = [[0,0]];
//   visited[0][0]=true

//   while(queue.length){
//     const [x, y] = queue.shift();

//     for(const [dx, dy] of directions){
//       const nx = x+dx;
//       const ny = y+dy;

//       if(nx>=0&&ny>=0&&nx<rows&&ny<cols&&!visited[nx][ny]){
//         visited[nx][ny]=true;

//         if(cheese[nx][ny]===1){
//           melt.push([nx, ny])
//         }else{
//           queue.push([nx, ny])
//         }
//       }
//     }
//   }

//   melt.forEach(([x, y])=>{
//     cheese[x][y]=0
//   })

//   return melt.length
// }

// const simulate = () =>{
//   let time =0;
//   let beforeMelt =0;

//   while(true){
//     let count = meltCheese();
//     if(count===0) break
//     beforeMelt = count
//     time++
//   }

//   return [time, beforeMelt]
// }

// const [a, b] = simulate();
// console.log(a);
// console.log(b)

//2589-보물섬
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const [n, m] = input[0].split(' ').map(Number);
// const arr = input.slice(1).map(v=>v.trim().split(''));
// const dir = [[0,1], [0,-1], [1,0], [-1,0]];

// const bfs = (i, j)=>{
//   const queue=[[i, j, 0]];
//   let visited = Array.from({length: n}, ()=>Array(m).fill(false));
//   visited[i][j]=true;
//   let maxD =0;

//   while(queue.length){
//     const [x, y, dist] = queue.shift();
//     maxD = Math.max(dist, maxD)

//     for(const [dx, dy] of dir){
//       const nx = x+dx;
//       const ny =y+dy;

//       if(nx>=0&&ny>=0&&nx<n&&ny<m&&!visited[nx][ny]&&arr[nx][ny]==='L'){
//         queue.push([nx, ny, dist+1]);
//         visited[nx][ny]=true
//       }
//     }
//   }

//   return maxD
// }

// let max = 0;

// for(let i=0; i<n; i++){
//   for(let j=0; j<m; j++){
//     if(arr[i][j]==='L'){
//       max = Math.max(max, bfs(i, j))
//     }
//   }
// }

// console.log(max)

//뱀과 사다리 게임
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const [n, m] = input[0].split(' ').map(Number);
// const ladders = input.slice(1, n+1).map(v=>v.split(' ').map(Number));
// const snakes = input.slice(n+1).map(v=>v.split(' ').map(Number));
// let visited = Array(101).fill(false);

// const bfs = ()=>{
//   let queue =[[1, 0]]//현재 위치와 이동횟수

//   while(queue.length){
//     const [now, count] = queue.shift();
//     const move = [now+1, now+2, now+3, now+4, now+5, now+6];
//     const inClude = [...ladders, ...snakes];

//     if(now===100) return count

//     for(let m of move){
//       if(!visited[m]&&m<101){
//         visited[m]=true
//         inClude.forEach(([from, to])=>{
//           if(m===from) m=to;
//         })

//         queue.push([m, count+1])
//       }
//     }
//   }
// }

// console.log(bfs())

//18352-특정 거리의 도시 찾기
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// const [n, m, k, x]=input[0].split(' ').map(Number);
// const arr = input.slice(1).map(v=>v.split(' ').map(Number))

// let graph = Array.from({length: n+1}, ()=>[]);

// arr.forEach(([from, to])=>{
//   graph[from].push(to)
// })

// const bfs = (start, goalCount) =>{
//   let visited = Array(n+1).fill(false)
//   const queue = [[start, 0]];
//   visited[start]=true
//   let result = [];

//   while(queue.length){
//     const [now, count] = queue.shift();

//     if(count === goalCount){
//       result.push(now)
//       continue
//     }

//     for(const m of graph[now]){
//       if(!visited[m]){
//         visited[m]=true;
//         queue.push([m, count+1])
//       }
//     }
//   }

//   return result
// }

// let answer = bfs(x, k)
// console.log(answer.length > 0 ? answer.join('\n'):-1)

//13913-숨바꼭질4
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const [n, m] = input[0].split(' ').map(Number);
// let visited = Array(100001).fill(false);
// let from = Array(100001).fill(-1);

// const bfs=(start, goal)=>{
//   const queue=[[start, 0]];
//   visited[start]=true;

//   while(queue.length){
//     const [now, count] = queue.shift();
//     const move = [now-1, now+1, now*2];

//     if(now===goal){
//       console.log(count);

//       let path=[];
//       let cur = goal
//       while(cur!=-1){
//         path.push(cur);
//         cur = from[cur]
//       }

//       console.log(path.reverse().join(' '));
//       return
//     }

//     for(const next of move){
//       if(!visited[next]){
//         visited[next]=true;
//         queue.push([next, count+1]);
//         from[next]=now
//       }
//     }
//   }
// }

// bfs(n, m)

//12851-숨바꼭질2
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const [N, K] = input[0].split(' ').map(Number)

// const MAX = 100000; // 문제에서 주어진 최대 위치
// const visited = Array(MAX + 1).fill(false); // 방문 여부를 기록하는 배열
// const dist = Array(MAX + 1).fill(0); // 각 위치까지의 최단 시간을 기록하는 배열
// const ways = Array(MAX + 1).fill(0); // 각 위치까지 도달하는 방법의 수를 기록하는 배열

// // BFS 큐 초기화
// const queue = [];
// queue.push(N);
// visited[N] = true;
// dist[N] = 0;
// ways[N] = 1;

// while (queue.length > 0) {
//     const current = queue.shift();

//     // 다음 위치로 이동하는 세 가지 경우를 모두 확인
//     for (let next of [current - 1, current + 1, current * 2]) {
//         if (next < 0 || next > MAX) continue; // 범위를 벗어나면 무시

//         if (!visited[next]) { // 방문하지 않은 위치라면
//             visited[next] = true;
//             dist[next] = dist[current] + 1; // 현재 위치에서 1초 증가
//             ways[next] = ways[current]; // 현재 위치까지 오는 방법 수와 같음
//             queue.push(next);
//         } else if (dist[next] === dist[current] + 1) { // 이미 방문했지만 같은 시간이 걸린다면
//             ways[next] += ways[current]; // 현재 위치에서 오는 방법 수를 추가
//         }
//     }
// }

// // 결과 출력
// console.log(dist[K]); // 동생을 찾는 가장 빠른 시간
// console.log(ways[K]); // 그 방법의 수

//2146-다리만들기

//문제 풀이과정
//bfs로 각 섬마다 육지 번호 다르게 표시하기
//각 섬에서 동시에 BFS를 진행하면서 다른 섬에 처음 도달하는 순간의 다리 길이를 기록
//모든 섬에 대해 BFS를 진행하면서 다른 섬에 도달하는 순간의 다리 길이를 최소화

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const n = +input[0];
// const arr = input.slice(1).map(v=>v.split(' ').map(Number))
// let visited = Array.from({length: n}, ()=>Array(n).fill(false))
// const dir = [[0,1], [0,-1], [1,0], [-1,0]]

// const bfs = (i, j, index) =>{
//   const queue = [[i, j]];
//   visited[i][j]=true;
//   arr[i][j]=index;

//   while(queue.length){
//     const [x, y] = queue.shift();

//     for(const [dx, dy] of dir){
//       const nx = x+dx;
//       const ny=y+dy;

//       if(nx>=0&&ny>=0&&nx<n&&ny<n&&!visited[nx][ny]&&arr[nx][ny]===1){
//         visited[nx][ny]=true;
//         queue.push([nx, ny]);
//         arr[nx][ny]=index
//       }
//     }
//   }
// }

// let index =2;

// for(let i=0; i<n; i++){
//   for(let j=0; j<n; j++){
//     if(!visited[i][j]&&arr[i][j]===1){
//       bfs(i, j, index)
//       index++
//     }
//   }
// }
// let minBridgeLength = Infinity;

// const bfsForBridge = (index) => {
//   let queue = [];

//   let dist = Array.from({length:n}, ()=>Array(n).fill(-1));

//   //육지 부분 거리를 0으로
//   for(let i=0; i<n; i++){
//     for(let j=0; j<n; j++){
//       if(arr[i][j]===index){
//         queue.push([i, j])
//         dist[i][j]=0;
//       }
//     }
//   }

//   while(queue.length){
//     const [x, y] =queue.shift();

//     for(const [dx, dy] of dir){
//       const nx = x+dx;
//       const ny =y+dy;

//       if(nx>=0&&ny>=0&&nx<n&&ny<n){
//         //0이 아니고 다른 육지에 도달한다면 return
//         if (arr[nx][ny] > 0 && arr[nx][ny] !== index) {
//           minBridgeLength = Math.min(minBridgeLength, dist[x][y]);
//           return;
//         }

//         //바다이고 방문하지 않은 곳이라면
//         if (arr[nx][ny] === 0 && dist[nx][ny] === -1) {
//           dist[nx][ny] = dist[x][y] + 1;
//           queue.push([nx, ny]);
//         }
//       }
//     }
//   }
// }

// for(let i=2; i<=index; i++){
//   bfsForBridge(i)
// }

// console.log(minBridgeLength)

//9205-맥주 마시면서 걸어가기

//문제풀이과정
//맥주 한 박스에는 20으로 시작
//50미터 당 맥주 한병씩 감소
//편의점에 도착하면 20에서 빈 만큼 맥주 사서 채우기

//현재 위치가 페스티벌 위치에 도착하면, 상태 return
//현재 위치부터 편의점들까지 bfs로 전진
// 두 좌표 사이의 거리는 x 좌표의 차이 + y 좌표의 차이
//거리가 1000미터 이하인 경우에만 이동이 가능(맥주 최댓 개수 20)
//BFS를 종료했는데도 페스티벌에 도달하지 못했다면 "sad"
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const T = +input[0];
// let idx = 1;

// for (let i = 0; i < T; i++) {
//   const bfs = (x, y) => {
//     const dep = [[x, y]];
//     while (dep.length) {
//       const [x, y] = dep.shift();

//       // 도착지점까지의 거리가 1000m 이하라면 도착 가능
//       if (Math.abs(x - festival[0]) + Math.abs(y - festival[1]) <= 1000) {
//         check = true;
//         return;
//       }

//       // 모든 편의점을 돌면서 방문 여부와 거리를 체크
//       for (let k = 0; k < N; k++) {
//         if (!visited[k]) {
//           // 편의점까지의 거리가 1000m 이하라면
//           if (Math.abs(x - place[k][0]) + Math.abs(y - place[k][1]) <= 1000) {
//             visited[k] = true; // 방문 체크
//             dep.push([place[k][0], place[k][1]]); // 다음 방문지 추가
//           }
//         }
//       }
//     }

//     return;
//   };

//   let N = +input[idx];
//   idx += 1;

//   let visited = Array.from({ length: N }).fill(false); // 방문 배열 초기화
//   const start = input[idx].split(' ').map(Number); // 시작점 (집의 좌표)

//   let place = [];
//   let check = false; // 도착 가능 여부를 체크하는 변수

//   // 편의점 좌표 입력 받기
//   for (let j = 0; j < N; j++) {
//     place.push(input[idx + j + 1].split(' ').map(Number));
//   }

//   idx += N + 1;
//   const festival = input[idx].split(' ').map(Number); // 페스티벌 좌표 입력
//   idx += 1;

//   bfs(...start); // BFS 실행
//   console.log(check ? "happy" : "sad"); // 결과 출력
// }

//2638-치즈

//치즈가 모두 녹아 없어지는데 걸리는 정확한 시간

//외부 공기 접촉(bfs사용)
//a.가장자리부터 BFS를 이용하여 외부 공기와 연결된 모든 격자를 탐색
//b.외부 공기로 연결된 0들을 찾아 방문 표시

//치즈 녹이기
//탐색을 통해 모든 치즈 격자에 대해 인접한 격자(상, 하, 좌, 우) 중에서 외부 공기와 접촉한 면의 수를 계산
//녹는 기준: 2변 이상이 실내온도의 공기와 접촉한 것
//해당 치즈는 한 시간 후에 녹음
//치즈가 녹는 과정을 관리하기 위해 큐에 녹을 치즈의 좌표를 저장해두고, 해당 치즈를 제거(0으로 변경)

//모든 치즈가 다 녹을 때까지 이 과정을 반복

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// const [N, M] = input.shift().split(' ').map(Number);
// const grid = input.map(line => line.split(' ').map(Number));
// const dir = [[0,1], [0,-1], [1,0], [-1,0]];

// //공기와 접촉 여부
// const bfs = (grid) =>{
//   const queue=[[0,0]];
//   let contact = Array.from({length: N}, ()=>Array(M).fill(false));
//   contact[0][0]=true;

//   while(queue.length){
//     const [x, y] =queue.shift();

//     for(const [dx, dy] of dir){
//       const nx = x+dx;
//       const ny =y+dy;

//       if(nx >= 0 && nx < N && ny >= 0 && ny < M && !contact[nx][ny] && grid[nx][ny] === 0){
//         contact[nx][ny]=true;
//         queue.push([nx, ny])
//       }
//     }
//   }

//   return contact
// }

// //치즈 녹이기
// const meltCheese=()=>{
//   let time = 0;

//   while(true){
//     let airContact = bfs(grid);
//     let melt = [];

//     for(let i=0; i<N; i++){
//       for(let j=0; j<M; j++){
//         if(grid[i][j]===1){
//           let airCount =0;

//           for(const [dx, dy] of dir){
//             const nx = i+dx;
//             const ny =j+dy;

//             //공기와 접촉했다면
//             if(nx >= 0 && nx < N && ny >= 0 && ny < M&&airContact[nx][ny]){
//               airCount++
//             }
//           }

//           if(airCount>1){
//             melt.push([i, j])
//           }
//         }
//       }
//     }

//     if(melt.length===0){
//       break
//     }

//     melt.forEach(([x, y])=>{
//       grid[x][y]=0
//     })

//     time++
//   }

//   return time
// }

// console.log(meltCheese())

//14940-쉬운 최단거리

//문제 풀이 과정

//0은 갈 수 없는 땅
//1은 갈 수 있는 땅
//2는 목표지점

//출력: 모든 지점에 대해서 목표지점까지의 거리

//2인 구간 목표지점으로 설정
//bfs(출발지점, 목표지점)으로 거리 구하기

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const [n, m] = input.shift().split(' ').map(Number)
// const arr = input.map(v=>v.split(' ').map(Number));

// const dir = [[0,1], [0,-1], [1,0], [-1,0]];

// let goal = [];
// for(let i=0; i<n; i++){
//   for(let j=0; j<m; j++){
//     if(arr[i][j]===2){
//       goal=[i, j]
//       break;
//     }
//   }

//   if(goal){
//     break;
//   }
// }

// const bfs = (start)=>{
//   let distance = Array.from({length: n}, ()=>Array(m).fill(-1));
//   const [startx, starty] =start;
//   const queue=[[startx, starty]];
//   distance[startx][starty]=0;

//   while(queue.length){
//     const [x, y] =queue.shift();

//     for(const [dx, dy] of dir){
//       const nx =x+dx;
//       const ny =y+dy;

//       if(nx >= 0 && nx < n && ny >= 0 && ny < m&&arr[nx][ny]!=0&&distance[nx][ny]===-1){
//         distance[nx][ny]=distance[x][y]+1;
//         queue.push([nx, ny])
//       }
//     }
//   }

//   return distance
// }

// const distances = bfs(goal);

// for(let i=0; i<n; i++){
//   let r = [];
//   for(let j=0; j<m; j++){
//     if(arr[i][j]===0){
//       r.push(0)
//     }else{
//       r.push(distances[i][j])
//     }
//   }

//   console.log(r.join(' '))
// }

//1325-효율적인 해킹
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const [input, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
// const [N, M] = input.split(" ").map(Number);

// // 그래프를 만듦.
// const graph = Array.from({ length: N + 1 }, () => []);

// // 각 노드에 대한 간선 정보를 저장
// for (let i = 0; i < M; i++) {
//   const [front, back] = arr[i].split(" ");
//   graph[+back].push(+front);
// }

// // 각 노드에 대한 DFS
// function dfs(start) {
//   const stack = [start];
//   const visited = new Array(N + 1).fill(false);
//   let count = 0; // 해킹 가능한 컴퓨터 수
//   visited[start] = true; // 시작 노드 방문 처리

//   while (stack.length) {
//     const node = stack.pop();
//     // 해당 노드와 연결된 노드들을 탐색
//     for (let next of graph[node]) {
//       if (visited[next]) continue;
//       stack.push(next);
//       visited[next] = true;
//       count++;
//     }
//   }

//   return count;
// }

// let max = -1;
// let answer = [];

// for (let i = 1; i <= N; i++) {
//   let count = dfs(i);
//   if (count > max) {
//     max = count;
//     answer = [i];
//   } else if (count === max) {
//     answer.push(i);
//   }
// }

// console.log(answer.join(" "));

//1600-말이 되고픈 원숭이

//문제풀이과정
//구해야 할것: (0, 0)**에서 시작하여 (H-1, W-1) 지점까지 가는 데 필요한 최소 동작 수
//0은 이동 가능한 곳(평지)을 나타내며, 1은 이동할 수 없는 장애물
//도착할 수 없을 경우 -1

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// const K = Number(input[0]); // 말처럼 이동할 수 있는 최대 횟수
// const [W, H] = input[1].split(' ').map(Number); // 격자 크기 W(가로), H(세로)
// const grid = input.slice(2).map(line => line.split(' ').map(Number)); // 격자 정보

// const directionsMonkey = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // 원숭이의 상하좌우 이동
// const directionsHorse = [[-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1]]; // 말의 나이트 이동

// const visited = Array.from({ length: H }, () =>
//   Array.from({ length: W }, () => Array(K + 1).fill(false))
// );

// const bfs = ()=>{
//   const queue = [[0,0,0,0]]
//   visited[0][0][0]=true;

//   while(queue.length){
//     const [x, y, horse, total] = queue.shift();

//     if (x === H - 1 && y === W - 1) return total;

//     for(const [dx, dy] of directionsMonkey){
//       const nx = x+dx;
//       const ny =y+dy;

//       if(nx >= 0 && nx < H && ny >= 0 && ny < W &&grid[nx][ny]===0&&!visited[nx][ny][horse]){
//         visited[nx][ny][horse]=true;
//         queue.push([nx, ny, horse, total+1])
//       }
//     }

//     if (horse < K) {
//       for (const [dx, dy] of directionsHorse) {
//         const nx = x + dx;
//         const ny = y + dy;
//         if (nx >= 0 && nx < H && ny >= 0 && ny < W && grid[nx][ny] === 0 && !visited[nx][ny][horse + 1]) {
//           visited[nx][ny][horse + 1] = true;
//           queue.push([nx, ny, horse + 1, total + 1]);
//         }
//       }
//     }
//   }

//   // 목표 지점에 도달하지 못하면 -1 반환
//   return -1;
// };

// console.log(bfs());

//4179-불!

// #: 벽
// .: 지나갈 수 있는 공간
// J: 지훈이의 미로에서의 초기위치 (지나갈 수 있는 공간)
// F: 불이 난 공간

//불이 도달하기 전에 미로를 탈출 할 수 없는 경우 IMPOSSIBLE
//미로를 탈출할 수 있는 경우에는 가장 빠른 탈출시간

//그래프 0으로 두르기
//bfs로 탈출하는 시간 반환(0에 닿으면 탈출)
//불보다 지훈이 먼저 탈출 가능시 시간 반환

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const [r, c] = input.shift().split(' ').map(Number);
// const graph = input.map(v => v.trim().split(''));

// const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];

// // 불의 BFS와 지훈의 BFS를 위해 큐를 따로 관리
// let jihoonQueue = [];
// let fireQueue = [];
// let fireVisited = Array.from({ length: r }, () => Array(c).fill(-1));  // 불의 전파 시간
// let jihoonVisited = Array.from({ length: r }, () => Array(c).fill(-1));  // 지훈의 이동 시간

// // 초기 불과 지훈의 위치를 찾아서 큐에 넣고 시작
// for (let i = 0; i < r; i++) {
//   for (let j = 0; j < c; j++) {
//     if (graph[i][j] === 'J') {
//       jihoonQueue.push([i, j]);
//       jihoonVisited[i][j] = 0;  // 지훈 시작점 방문
//     }
//     if (graph[i][j] === 'F') {
//       fireQueue.push([i, j]);
//       fireVisited[i][j] = 0;  // 불 시작점 방문
//     }
//   }
// }

// // 불의 전파 BFS
// while (fireQueue.length) {
//   const [x, y] = fireQueue.shift();
//   for (const [dx, dy] of dir) {
//     const nx = x + dx;
//     const ny = y + dy;

//     if (nx >= 0 && ny >= 0 && nx < r && ny < c && fireVisited[nx][ny] === -1 && graph[nx][ny] !== '#') {
//       fireQueue.push([nx, ny]);
//       fireVisited[nx][ny] = fireVisited[x][y] + 1;  // 불이 전파되는 시간을 기록
//     }
//   }
// }

// // 지훈의 이동 BFS
// while (jihoonQueue.length) {
//   const [x, y] = jihoonQueue.shift();

//   // 지훈이 경계에 도달하면 즉시 탈출 가능
//   if (x === 0 || y === 0 || x === r - 1 || y === c - 1) {
//     console.log(jihoonVisited[x][y] + 1);  // 시작점 포함해서 1을 더해줌
//     return;
//   }

//   for (const [dx, dy] of dir) {
//     const nx = x + dx;
//     const ny = y + dy;

//     // 다음 위치가 유효하고, 벽이 아니며, 아직 방문하지 않은 경우
//     if (nx >= 0 && ny >= 0 && nx < r && ny < c && jihoonVisited[nx][ny] === -1 && graph[nx][ny] !== '#') {
//       // 불이 도달하지 않았거나, 지훈이 불보다 먼저 도착할 수 있는 경우만 이동
//       if (fireVisited[nx][ny] === -1 || jihoonVisited[x][y] + 1 < fireVisited[nx][ny]) {
//         jihoonVisited[nx][ny] = jihoonVisited[x][y] + 1;
//         jihoonQueue.push([nx, ny]);
//       }
//     }
//   }
// }

// console.log('IMPOSSIBLE');  // 탈출할 수 없는 경우

//1743-음식물 피하기
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const [n, m, k] = input.shift().split(' ').map(Number);
// const arr = input.map(v=>v.split(' ').map(Number));
// const dir = [[0,1], [0,-1], [1,0], [-1,0]]
// const graph = Array.from({length: n}, ()=>Array(m).fill(0));
// let visited = Array.from({length: n}, ()=>Array(m).fill(false));

// arr.map(([x, y])=>{
//   graph[x-1][y-1]=1
// })

// const bfs = (i, j)=>{
//   const queue = [[i, j]];
//   visited[i][j]=true
//   let count =1

//   while(queue.length){
//     const [x, y] =queue.shift();

//     for(const [dx, dy] of dir){
//       const nx =x+dx;
//       const ny =y+dy;

//       if(nx>=0&&ny>=0&&nx<n&&ny<m&&!visited[nx][ny]&&graph[nx][ny]===1){
//         visited[nx][ny]=true;
//         queue.push([nx, ny])
//         count++
//       }
//     }
//   }

//   return count
// }

// let result =[];

// for(let i=0; i<n; i++){
//   for(let j=0; j<m; j++){
//     if(graph[i][j]===1&&!visited[i][j]){
//       result.push(bfs(i, j))
//     }
//   }
// }

// console.log(Math.max(...result))

//5427-불

// '.': 빈 공간
// '#': 벽
// '@': 상근이의 시작 위치
// '*': 불

//point-여러개의 불을 처리

//덱 사용
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n').map(v => v.trim());
// const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
// const t = Number(input.shift());

// class Deque{
//   constructor(){
//     this.queue=[];
//     this.front = 0;
//     this.rear=0;
//   }

//   push(item){
//     this.queue[this.rear++]=item
//   }

//   shift(){
//     if(this.front===this.rear) return undefined
//     this.item = this.queue[this.front];
//     this.front++
//     return item;
//   }

//   length() {
//     return this.rear - this.front;
//   }
// }

//21736-헌내기는 친구가 필요해
// const fs = require('fs');
// let [n, ...info] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

// let N = Number(n.trim().split(' ')[0]);
// let M = Number(n.trim().split(' ')[1]);

// let doyeon = [0, 0];
// let person = [];
// for (let i = 0; i < N; i++) {
//   let dFind = info[i].indexOf('I');
//   let pFind = info[i].indexOf('P');
//   if (dFind !== -1) doyeon = [i, dFind];
//   else if (pFind !== -1) person.push([i, pFind]);
//   info[i] = info[i].trim().split('');
// }

// const directions = [
//   [1, 0],
//   [-1, 0],
//   [0, 1],
//   [0, -1],
// ];

// function BFS(start) {
//   let queue = [start];
//   let visited = Array.from({ length: N }, () => Array(M).fill(false));
//   visited[start[0]][start[1]] = true;
//   let count = 0;

//   while (queue.length > 0) {
//     let [x, y] = queue.shift();

//     for (let [dx, dy] of directions) {
//       let nx = x + dx;
//       let ny = y + dy;

//       if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny]) {
//         if (info[nx][ny] !== 'X') {
//           visited[nx][ny] = true;
//           if (info[nx][ny] === 'P') {
//             count++;
//           }
//           queue.push([nx, ny]);
//         }
//       }
//     }
//   }

//   return count;
// }

// let result = BFS(doyeon);
// console.log(result === 0 ? 'TT' : result);

//17471-게리맨더링

// let input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
// let idx = 0;
// const N = parseInt(input[idx++]);
// const POPULATION = input[idx++].split(' ').map(Number);
// let lines = Array.from({ length: 6 }, (_) => []);
// // A팀 B팀 나눠서 저장.
// let teamA = [];
// let teamB = [];
// let min = Number.MAX_SAFE_INTEGER;
// // 연결 관계 저장.
// for (let i = 0; i < N; i++) {
//   lines[i] = input[idx++]
//     .split(' ')
//     .slice(1)
//     .map(Number)
//     .map((v) => v - 1);
// }

// // BFS를 이용해서 연결되어 있는지 확인.
// const BFS = (now, total, team) => {
//   let queue = [now];

//   let index = 0;
//   let visited = Array.from({ length: N }, (_) => false);
//   visited[now] = true;

//   while (queue.length > index) {
//     const NOW = queue[index];
//     for (let i = 0; i < lines[NOW].length; i++) {
//       const NEXT = lines[NOW][i];
//       if (!visited[NEXT] && team.includes(NEXT)) {
//         queue.push(NEXT);
//         visited[NEXT] = true;
//       }
//     }
//     index++;
//   }
//   return visited.filter((v) => v === true).length === total;
// };

// // A 구역의 갯수를 주면 그 갯수만큼의 조합을 만들어줌.
// const Combination = (A, arr, last) => {
//   if (arr.length === A) {
//     teamA = arr;
//     let tmp = [];
//     // B팀 갱신.
//     for (let i = 0; i < N; i++) {
//       if (arr.includes(i)) continue;
//       tmp.push(i);
//     }
//     teamB = tmp;
//     // B팀 수
//     const B = N - A;

//     // 두 팀이 조건에 맞게 연결된다면.
//     if (BFS(teamA[0], A, teamA) && BFS(teamB[0], B, teamB)) {
//       let sumA = 0;
//       let sumB = 0;
//       // 인구 계산.
//       POPULATION.forEach((value, index) => {
//         if (teamA.includes(index)) {
//           sumA += value;
//         } else {
//           sumB += value;
//         }
//       });
//       min = Math.min(min, Math.abs(sumB - sumA));
//     }
//     return;
//   }

//   // 재귀를 이용해 조합.
//   for (let i = last; i < N; i++) {
//     Combination(A, [...arr, i], i + 1);
//   }
// };
// for (let i = 1; i < N; i++) {
//   Combination(i, [0], 1);
// }
// min = min === Number.MAX_SAFE_INTEGER ? -1 : min;
// console.log(min);

//12851-숨바꼭질2
class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(item) {
    const node = new Node(item);
    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length += 1;
  }

  pop() {
    const popItem = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return popItem.item;
  }
}
const fs = require('fs');
const [S, E] = fs.readFileSync('./dev/stdin').toString().trim().split(' ').map(Number);

function solve(start, end) {
  let dist = Array.from(Array(100001), () => 0);
  let cnt = Array.from(Array(100001), () => 0);
  if (start == end) {
    return [0, 1];
  } else {
    let q = new Queue();
    q.push(S);
    cnt[S] = 1;
    while (q.length > 0) {
      //큐에 뭐가 들어 있으면
      const now = q.pop(); //꺼내서
      const next = [now + 1, now - 1, now * 2].filter((v) => v >= 0 && v <= 100000);
      next.forEach((v) => {
        if (dist[v] == 0) {
          q.push(v);
          dist[v] = dist[now] + 1;
          cnt[v] += cnt[now];
        } else if (dist[v] == dist[now] + 1) {
          cnt[v] += cnt[now];
        }
      });
    }
    return [dist[end], cnt[end]];
  }
}

const [v, c] = solve(S, E);
console.log(v);
console.log(c);
