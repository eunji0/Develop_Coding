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
const input = require('fs').readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split('\n');
const [M, N] = input[0].split(' ').map(Number);
const box = input.slice(1).map(line => line.split(' ').map(Number));

const dir = [[0,1], [0,-1], [1,0], [-1,0]];

let queue = [];

for(let i=0; i<N; i++){
  for(let j=0; j<M; j++){
    if(box[i][j]===1){
      queue.push([i, j])
    }
  }
}

const bfs=(box, queue)=>{
  let index =0;

  while(index<queue.length){
    const [x, y] = queue[index];
    index++;

    for(const [dx, dy] of dir){
      const nx = x+dx;
      const ny = y+dy;

      if(nx>=0&&ny>=0&&nx<N&&ny<M&&!box[nx][ny]){
        box[nx][ny]=box[x][y]+1;
        queue.push([nx, ny])
      }
    }
  }
}

let days =0;

const cal = (box) =>{
  for(let i=0; i<N; i++){
    for(let j=0; j<M; j++){
      if(!box[i][j]){
        return -1
      }
      days=Math.max(days, box[i][j])
    }
  }
  return days-1
}

bfs(box, queue);
console.log(cal(box))

