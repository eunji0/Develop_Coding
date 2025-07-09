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
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const n = +input[0];
// const m = +input[1];
// const [start, goal] = input[m+2].split(' ').map(Number);
// const graph = Array.from({length: n+1}, () => []);

// for (let i = 2; i < m+2; i++) {
//   const [a, b, c] = input[i].split(' ').map(Number);
//   graph[a].push([b, c]);
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

// const dijkstra = (start) => {
//   const dist = Array(n + 1).fill(Infinity);
//   dist[start] = 0;

//   const pq = new MinHeap();
//   pq.push([0, start]);

//   while (pq.size()) {
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

// const result = dijkstra(start);
// console.log(result[goal]);

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

//1261-알고스팟

// 시작점 (1, 1)에서 BFS를 시작, 방문한 방마다 부순 벽의 개수를 기록.
// 벽을 부수지 않고 이동할 수 있으면 덱의 앞쪽에 넣고, 벽을 부수어야 한다면 덱의 뒤쪽에 넣음.
// (N, M)에 도착하면 그때까지 부순 벽의 개수를 출력.

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const [m, n] = input[0].split(' ').map(Number);
// const maze = input.slice(1).map(line => line.split('').map(Number));

// const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];  // 상하좌우 방향 벡터

// const bfs = ()=>{
//   const deq = [[0,0]];
//   const dist = Array.from({length:n}, ()=>Array(m).fill(Infinity))
//   dist[0][0]=0

//   while(deq.length){
//     const [x, y] = deq.shift();

//     for(const [dx, dy] of dir){
//       const nx=x+dx;
//       const ny=y+dy;

//       if(nx>=0&&ny>=0&&nx<n&&ny<m){
//         const nextDist =dist[x][y]+maze[nx][ny]
//         if(nextDist<dist[nx][ny]){
//           dist[nx][ny]=nextDist
//           if(maze[nx][ny]===1){
//             deq.push([nx, ny])
//           }else{
//             deq.unshift([nx, ny])
//           }
//         }
//       }
//     }
//   }

//   return dist[n-1][m-1]
// }

// console.log(bfs())

//4485-녹색 옷 입은 애가 젤다지?
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];  // 우, 하, 좌, 상
// let idx = 0;
// let problemNum = 1;

// const dijkstra = (n, cave) =>{
//   const dist = Array.from({length:n}, ()=>Array(n).fill(Infinity))
//   let pq = [[0,0,cave[0][0]]]
//   dist[0][0]=cave[0][0]

//   while(pq.length){
//     pq.sort((a, b)=>b[2]-a[2]);
//     const [x, y, cost] = pq.pop();

//     if(x===n-1&&y===n-1) return cost

//     for(const [dx, dy] of dir){
//       const nx=x+dx;
//       const ny=y+dy;

//       if(nx>=0&&ny>=0&&nx<n&&ny<n){
//         const nextCost = cost+cave[nx][ny]
//         if(nextCost<dist[nx][ny]){
//           dist[nx][ny]=nextCost
//           pq.push([nx, ny, nextCost])
//         }
//       }
//     }
//   }
// }

// while(true){
//   const N = +input[idx++]

//   if(N===0) break
//   let cave = [];
//   for(let i=0; i<N; i++){
//     cave.push(input[idx++].split(' ').map(Number))
//   }

//   const r = dijkstra(N, cave);
//   console.log(`Problem ${problemNum++}: ${r}`)
// }

//11657-타임머신

//음수 사이클이 되는지 확인
//최소값 출력

//문제 풀이과정
//출발 도시(1번 도시)의 최단 거리를 0으로 설정하고, 나머지 도시는 무한대로 설정
//거리가 더 줄어들 수 있는지 확인하고, 줄어들 수 있다면 갱신
//n-1번 반복
//N-1번 반복 후에도 최단 경로가 갱신될 수 있다면 -1출력

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const [n, m] = input[0].split(' ').map(Number);
// const edges = [];

// for(let i=1; i<=m; i++){
//   const [a, b, c] = input[i].split(' ').map(Number)
//   edges.push([a-1, b-1, c])
// }

// const dist = Array(n).fill(Infinity)
// dist[0]=0

// const bell = ()=>{
//   let check = false

//   for(let i=0; i<n-1; i++){
//     check=false
//     for(const [u, v, w] of edges){
//       if(dist[u]!==Infinity && dist[u]+w<dist[v]){
//         dist[v]=dist[u]+w
//         check=true
//       }
//     }

//     if(!check) break
//   }

//   for(const [u, v, w] of edges){
//     if(dist[u]!==Infinity && dist[u]+w<dist[v]){
//       return false
//     }
//   }

//   return true
// }

// if(!bell()){
//   console.log(-1)
// }else{
//   for(let i=1; i<n; i++){
//     console.log(dist[i]===Infinity?-1:dist[i])
//   }
// }

//11779-최소비용 구하기 2

//문제풀이과정

//입력받기:
//도시의 개수 n, 버스의 개수 m, 셋째 줄부터 m+2줄까지 다음과 같은 버스의 정보, 출발점의 도시번호와 도착점의 도시번호

//알고리즘 구현:
//하나의 시작 노드에서 다른 모든 노드로 가는 최단 경로 -> 다익스트라 알고리즘 사용
//다익스트라 알고리즘
//시작점을 기준으로 한 노드에서 다른 노드로 가는 최소비용을 저장하는 배열을 생성 (무한대로 초기화)
//출발점에서 출발, 다른 도시로 가는 최소비용 업데이트(최소힙)
//각 노드로부터 인접한 노드로 이동할 때 비용을 계산하고, 만약 더 저렴한 경로가 발견되면 업데이트

//경로 복원:
//경로추적 배열 사용

//출력:
//출발 도시에서 도착 도시까지 가는데 드는 최소 비용
// 경로에 포함되어있는 도시의 개수
//최소 비용을 갖는 경로를 방문하는 도시 순서대로 출력

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
// const n = +input[0]
// const m = +input[1];
// const [start, goal] = input[m+2].split(' ').map(Number)
// const edges = Array.from({length:n+1}, ()=>[])//버스 정보
// const prev = Array(n+1).fill(-1)//경로 기록
// const dist = Array(n+1).fill(Infinity)//거리 정보

// for(let i=2; i<m+2; i++){
//   const [a, b, c] = input[i].split(' ').map(Number)
//   edges[a].push([b, c])
// }

// //다익스트라 알고리즘을 위한 최소힙구현(우선순위 큐기능)
// class MinHeap{
//   constructor(){
//     this.heap = []
//   }

//   push([city, cost]){
//     this.heap.push([city, cost])
//     //비교하며 자리를 찾는 메서드
//     this.bubbleUp()
//   }

//   //제일 뒤에서 위로 자리를 찾아 비교하면 올라오는 메서드
//   bubbleUp(){
//     //제일 뒤의 자리와 내용물
//     let index = this.heap.length-1;
//     let last  = this.heap[index]

//     //힙이 비어있지 않는다면
//     while(index>0){
//       //현재 위치의 부모의 번호와 내용
//       let parentIndex = Math.floor((index-1)/2);
//       let parent = this.heap[parentIndex]

//       //만약 부모 비용이 더 작다면, 최소힙 구조에 맞는 상태이므로 break
//       if(last[1]>=parent[1]) break

//       //아니라면 부모와 위치를 바꿈
//       //자식과 부모의 값을 교환
//       this.heap[index] = parent
//       //부모의 위치로 이동해 다음 비교를 준비
//       index=parentIndex
//     }
//     // 교환이 완료된 후 마지막으로 남은 값(last)을 최종 위치에 배치
//     this.heap[index]=last
//   }

//   pop(){
//     if(this.heap.length===1) return this.heap.pop()
//       //제일 뒤에 있는 걸 꺼내 top으로 올려둔 뒤 내려가며 자리를 찾음
//       const top = this.heap[0]
//       this.heap[0] = this.heap.pop()
//       this.bubbleDown()
//       return top
//   }

//   //위에서 아래로 비교하며 내려오는 메서드
//   bubbleDown(){
//     let index =0;
//     let length = this.heap.length
//     const top = this.heap[index];

//     while(true){
//       let leftChildIndex = index*2+1;
//       let rightChildIndex = index*2+2;
//       let smallest = index; //현재 비교 중인 노드와 자식 노드들 중에서 가장 작은 값을 가진 노드의 인덱스

//       if(leftChildIndex<length && this.heap[leftChildIndex][1] < this.heap[smallest][1]){
//         smallest = leftChildIndex
//       }

//       if(rightChildIndex<length && this.heap[rightChildIndex][1] < this.heap[smallest][1]){
//         smallest = rightChildIndex
//       }

//       if(smallest === index) break

//       this.heap[index] = this.heap[smallest]
//       index=smallest
//     }

//     this.heap[index] = top
//   }

//   isEmpty(){
//     return this.heap.length===0
//   }
// }

// const dijkstra = (start) =>{
//   dist[start]=0
//   const pq = new MinHeap();
//   pq.push([start, 0])

//   while(!pq.isEmpty()){
//     const [curCity, curDist] = pq.pop()

//     if(dist[curCity]<curDist) continue

//     for(const [nextCity, nextDist] of edges[curCity]){
//       const total = curDist+nextDist

//       if(total<dist[nextCity]){
//         dist[nextCity]=total
//         prev[nextCity]=curCity
//         pq.push([nextCity, total])
//       }
//     }
//   }
// }

// dijkstra(start)

// console.log(dist[goal])

// const path = []
// let city = goal
// while(city!==-1){
//   path.push(city)
//   city=prev[city]
// }

// console.log(path.length)
// console.log(path.reverse().join(' '))

//1865-웜홀

//문제풀이과정

//입력받기:
//테스트케이스의 개수 TC
//첫번째줄: 지점의 수 N, 도로의 개수 M, 웜홀의 개수 W
//두 번째 줄부터 M+1번째 줄에 도로의 정보
// M+2번째 줄부터 M+W+1번째 줄: S와 E는 연결된 지점의 번호, T는 이 도로를 통해 이동하는데 걸리는 시간

//알고리즘 구현:
//특정 경로를 따라 이동할 때 시간이 줄어들며 순환하는 경우(음수 사이클) ->벨만 포드 알고리즘
//모든 거리 배열 초기화(Infinity)
//출발점은 거리 0으로 설정
//그래프의 모든 간선에 대해 총 V-1번의 반복을 수행
//각 간선 (u, v)를 통해 v까지의 최단 거리를 갱신
//음수 사이클 탐지

//출력:
//TC개의 줄에 걸쳐서 만약에 시간이 줄어들면서 출발 위치로 돌아오는 것이 가능하면 YES, 불가능하면 NO

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
// let t = +input[0];
// let index = 1;

// //벨만 포드 알고리즘
// const bellmanFord = (vertices, edges, start) =>{
//   const dist = Array(vertices+1).fill(false)
//   dist[start]=0;

//   for(let i=1; i<vertices; i++){
//     for(const [u, v, w] of edges){
//       if(dist[u]!==Infinity&&dist[v]>dist[u]+w){
//         dist[v]=dist[u]+w
//       }
//     }
//   }

//   for(const [u, v, w] of edges){
//     if(dist[u]!==Infinity&&dist[v]>dist[u]+w){
//       return true
//     }
//   }

//   return false
// }

// for(let i=0; i<t; i++){
//   const [n, m, w] = input[index++].split(' ').map(Number)
//   const edges =[]

//   //도로정보
//   for(let j=0; j<m; j++){
//     const [s, e, t] = input[index++].split(' ').map(Number)
//     edges.push([s, e, t])
//     edges.push([e, s, t])
//   }

//   for(let j=0; j<w; j++){
//     const [s, e, t] = input[index++].split(' ').map(Number)
//     edges.push([s, e, -t])
//   }

//   const h= bellmanFord(n, edges, 1) // 1번 정점을 기준으로 탐색

//   if(h){
//     console.log('YES')
//   }else{
//     console.log('NO')
//   }
// }

//2458-키 순서

//문제 풀이 과정

//입력: 학생들의 수 N, 두 학생 키를 비교한 횟수 M
//M개의 줄에  N보다 작거나 같은 서로 다른 양의 정수 a와 b( 번호가 a인 학생이 번호가 b인 학생보다 키가 작은 것을 의미)

//알고리즘: 그래프 탐색-bfs

//출력: 자신이 키가 몇 번째인지 알 수 있는 학생이 모두 몇 명인지
//자기보다 작은 학생들의 수 + 자기보다 큰 학생들의 수 = N-1

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const [n, m]=input[0].split(' ').map(Number)
// const larger = Array.from({length: n+1}, ()=>[])//자신보다 큰 거
// const smaller = Array.from({length: n+1}, ()=>[])//자신보다 작은거

// for(let i=1; i<=m; i++){
//   const [a, b]=input[i].split(' ').map(Number)
//   larger[a].push(b)
//   smaller[b].push(a)
// }

// const bfs=(start, graph)=>{
//   const queue= [start]
//   const visited = Array(n+1).fill(false)
//   visited[start]=true
//   let count = 0

//   while(queue.length){
//     const node = queue.shift();

//     for(const next of graph[node]){
//       if(!visited[next]){
//         visited[next]=true
//         queue.push(next)
//         count++
//       }
//     }
//   }

//   return count
// }

// let reuslt = 0;

// for(let i=1; i<=n; i++){
//   const largerN = bfs(i, larger)
//   const smallerN = bfs(i, smaller)

//   if(largerN+smallerN===n-1){
//     reuslt++
//   }
// }

// console.log(reuslt)

//1753-최단경로

//문제풀이과정

//입력:
//정점의 개수 V와 간선의 개수 E
//시작 정점의 번호 K
//E개의 줄에 걸쳐 각 간선을 나타내는 세 개의 정수 (u, v, w)

//문제풀이과정:
//한 정점에서 다른 모든 정점까지의 최단 경로 -> 다익스트라 알고리즘

//출력:
//주어진 시작점에서 다른 모든 정점으로의 최단 경로

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
// const [v, e] = input[0].split(' ').map(Number)
// const k = +input[1]; //시작점
// const graph =Array.from({length: v+1}, ()=>[])

// for(let i=2; i<2+e; i++){
//   const [u, v, w] = input[i].split(' ').map(Number)
//   graph[u].push([v, w])
// }

// class MinHeap{
//   constructor(){
//     this.heap=[]
//   }

//   push([node, dist]){
//     this.heap.push([node, dist])
//     this.bubbleUp()
//   }

//   bubbleUp(){
//     let index = this.heap.length-1;
//     let last = this.heap[index]

//     while(index>0){
//       let parentIndex = Math.floor((index-1)/2);

//       if(this.heap[parentIndex][1]<last[1]) break

//       this.heap[index]=this.heap[parentIndex]
//       index=parentIndex
//     }

//     this.heap[index]=last
//   }

//   pop(){
//     if(this.heap.length===1) return this.heap.pop()
//       const top = this.heap[0]
//     this.heap[0] = this.heap.pop()
//     this.bubbleDown()
//     return top
//   }

//   bubbleDown(){
//     let index =0;
//     let length = this.heap.length
//     const top = this.heap[index];

//     while(true){
//       let leftChildIndex = index*2+1;
//       let rightChildIndex = index*2+2;
//       let smallest = index;

//       if(leftChildIndex<length && this.heap[leftChildIndex][1] < this.heap[smallest][1]){
//         smallest = leftChildIndex
//       }

//       if(rightChildIndex<length && this.heap[rightChildIndex][1] < this.heap[smallest][1]){
//         smallest = rightChildIndex
//       }

//       if(smallest === index) break

//       this.heap[index] = this.heap[smallest]
//       index=smallest
//     }

//     this.heap[index] = top
//   }

//   isEmpty(){
//     return this.heap.length===0
//   }
// }

// const dijkstra = (start, graph, n) =>{
//   const dist = Array(n+1).fill(Infinity)
//   dist[start]=0
//   const pq = new MinHeap()
//   pq.push([start, 0])

//   while(!pq.isEmpty()){
//     const [curNode, curDist] = pq.pop()

//     if(dist[curNode] < curDist) continue

//     for(const [nextNode, nextDist] of graph[curNode]){
//       const totalDist = nextDist+curDist;
//       if(totalDist<dist[nextNode]){
//         dist[nextNode] = totalDist
//         pq.push([nextNode, totalDist])
//       }
//     }
//   }

//   return dist
// }

// const r = dijkstra(k, graph, v)

// for(let i=1; i<=v; i++){
//   console.log(r[i]===Infinity? 'INF':r[i])
// }

//11403-경로찾기

//입력:
//정점의 개수 N
//그래프의 인접 행렬(1 or 0)

//알고리즘:
//모든 정점에서 다른 모든 정점으로 -> 플로이드 워셜 알고리즘
//i에서 j로 가는 직접 경로가 없더라도, i에서 k로 가고, k에서 j로 가는 경로가 있을 경우 i에서 j로 가는 경로가 있다고 판단할 수 있음
//i에서 j로 경로가 존재하면 해당 위치의 값을 1로 업데이트.

//출력:
//정점 i에서 j로 가는 길이가 양수인 경로가 있으면 i번째 줄의 j번째 숫자를 1로, 없으면 0으로 출력

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
// const n = +input[0]
// const arr = input.slice(1).map(v=>v.split(' ').map(Number))

// const floydWarshall = (graph, n) => {
//   for(let k=0; k<n; k++){
//     for(let i=0; i<n; i++){
//       for(let j=0; j<n; j++){
//         if(graph[i][k]===1&&graph[k][j]===1){
//           graph[i][j]=1
//         }
//       }
//     }
//   }

//   return graph
// }

// const result = floydWarshall(arr, n)

// for(let i=0; i<n; i++){
//   console.log(result[i].join(' '))
// }

//11404-플로이드

//입력:
//도시의 개수 n
//버스의 개수 m
//버스의 정보(시작 도시 a, 도착 도시 b, 한 번 타는데 필요한 비용 c)

//알고리즘:
//모든 정점에서 다른 모든 정점으로 -> 플로이드 워셜 알고리즘
//* 만약, i에서 j로 갈 수 없는 경우에는 그 자리에 0을 출력

//출력:
//모든 도시의 쌍 (A, B)에 대해서 도시 A에서 B로 가는데 필요한 비용의 최솟값

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
// const n = +input[0]
// const m = +input[1]
// const dist = Array.from({length: n}, ()=>Array(n).fill(Infinity))//거리정보

// for(let i=0; i<n; i++){
//   dist[i][i]=0
// }

// for(let i=2; i<2+m; i++){
//   const [a, b, c] = input[i].split(' ').map(Number)
//   dist[a-1][b-1]=Math.min(dist[a-1][b-1], c)
// }

// const floydWarshall = (dist, n)=>{

//   for(let k=0; k<n; k++){
//     for(let i=0; i<n; i++){
//       for(let j=0; j<n; j++){
//         dist[i][j] = Math.min(dist[i][j], dist[i][k]+dist[k][j])
//       }
//     }
//   }

//   return dist
// }

// const result = floydWarshall(dist, n)

// for(let i=0; i<n; i++){
//   console.log(result[i].map(v=>v===Infinity?0:v).join(' '))
// }

//1916-최소비용 구하기

//입력:
//도시의 개수 n
//버스의 개수 m
//버스의 정보(시작 도시 a, 도착 도시 b, 한 번 타는데 필요한 비용 c)
//출발점의 도시번호와 도착점의 도시번호

//알고리즘:
//하나의 노드에서 다른 노드로 이동 -> 다익스트라 알고리즘
//거리배열을 생성 후 무한대로 초기화
//시작도시의 거리배열을 업데이트
//최소힙을 통해 pq배열 생성 후 시작 도시와 비용 업데이트
//현재 도시와 비용을 pq배열에서 꺼냄
//연결된 도시와 거리비교 후 업데이트

//출력:
// 출발 도시에서 도착 도시까지 가는데 드는 최소 비용

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const n = +input[0];
// const m = +input[1];
// const graph = Array.from({length:n+1}, ()=>[])
// const [start, goal] = input[m+2].split(' ').map(Number)

// class MinHeap{
//   constructor(){
//     this.heap = []
//   }

//   push([city, cost]){
//     this.heap.push([city, cost])
//     this.bubbleUp()
//   }

//   bubbleUp(){
//     let index = this.heap.length-1;
//     let last = this.heap[index]

//     while(index>0){
//       let parentIndex = Math.floor((index-1)/2)

//       if(this.heap[parentIndex][1] < last[1]) break

//       this.heap[index] = this.heap[parentIndex]
//       index=parentIndex
//     }

//     this.heap[index] = last
//   }

//   pop(){
//     if(this.heap.length===1) return this.heap.pop()
//     const top = this.heap[0]
//     this.heap[0]=this.heap.pop()
//     this.bubbleDown()
//     return top
//   }

//   bubbleDown(){
//     let index = 0;
//     let length = this.heap.length
//     let top = this.heap[index]

//     while(true){
//       let leftChildIndex = index*2+1;
//       let rightChildIndex = index*2+2;
//       let smallest = index

//       if(leftChildIndex<length&&this.heap[leftChildIndex][1]<this.heap[smallest][1]){
//         smallest=leftChildIndex
//       }

//       if(rightChildIndex<length&&this.heap[rightChildIndex][1]<this.heap[smallest][1]){
//         smallest=rightChildIndex
//       }

//       if(smallest===index) break
//       this.heap[index]=this.heap[smallest]
//       index=smallest;
//     }

//     this.heap[index] = top
//   }

//   isEmpty(){
//     return this.heap.length===0
//   }
// }

// for(let i=2; i<m+2; i++){
//   const [a, b, c] = input[i].split(' ').map(Number)
//   graph[a].push([b, c])
// }

// const dijkstra = (graph ,start, n) =>{
//   const dist = Array(n+1).fill(Infinity)
//   dist[start]=0;
//   const pq= new MinHeap()
//   pq.push([start, 0])

//   while(!pq.isEmpty()){
//     const [curCity, curCost] = pq.pop()

//     if(dist[curCity]<curCost) continue

//     for(const [nextCity, nextCost] of graph[curCity]){
//       const totalCost = curCost+nextCost

//       if(totalCost<dist[nextCity]){
//         dist[nextCity]=totalCost
//         pq.push([nextCity, totalCost])
//       }
//     }
//   }

//   return dist
// }

// const result = dijkstra(graph ,start, n)
// console.log(result[goal])

//13549-숨바꼭질3

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const [n, m] = input[0].split(' ').map(Number)
// const visited = Array(100001).fill(false)

// const bfs = (start, goal)=>{
//   const queue=[[start, 0]];
//   visited[start]=true;

//   while(queue.length){
//     const [cur, sec] = queue.shift()
//     const move = [cur-1, cur+1, cur*2]

//     if(cur===goal) return sec

//     for(const m of move){
//       if(m>=0&&m<=100000&&!visited[m]){
//         visited[m]=true
//         if(m===cur*2){
//           queue.unshift([m, sec])
//         }else{
//           queue.push([m, sec+1])
//         }
//       }
//     }
//   }
// }

// console.log(bfs(n, m))

//1389-케빈베이컨의 6단계 법칙

//입력:
// 유저의 수 N
//친구 관계의 수 M
//친구 관계

//알고리즘:
//모든 정점 간의 최단 경로를 구해야 함 -> 플로이드 워셜
//n만큼 케빈 베이컨 수를 구해야 함
//거리배열생성
//입력받은 친구관계처리
//최단거리계산
//케빈베이컨최소합 계산

//출력:
//BOJ의 유저 중에서 케빈 베이컨의 수가 가장 작은 사람
//여러 명일 경우에는 번호가 가장 작은 사람

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const [n, m] = input[0].split(' ').map(Number)

// const dist= Array.from({length:n}, ()=>Array(n).fill(Infinity))

// for(let i=0; i<n; i++){
//   dist[i][i]=0
// }

// for(let i=1; i<=m; i++){
//   const [a, b] = input[i].split(' ').map(Number)
//   dist[a-1][b-1]=1
//   dist[b-1][a-1]=1
// }

// for(let k=0; k<n; k++){
//   for(let i=0; i<n; i++){
//     for(let j=0; j<n; j++){
//       if(dist[i][j]>dist[i][k]+dist[k][j]){
//         dist[i][j]=dist[i][k]+dist[k][j]
//       }
//     }
//   }
// }

// let minSum = Infinity
// let result = 0;

// for(let i=0; i<n; i++){
//   let sum = dist[i].reduce((a, c)=>a+c, 0)
//   if(sum<minSum){
//     minSum=sum
//     result=i+1
//   }
// }

// console.log(result)

//1238-파티

//입력:
//N명의 학생, M개의 단방향 도로, X번 마을
//도로의 시작점, 끝점, 소요시간

//알고리즘: 다익스트라 알고리즘(단방향 도로)
//각 학생이 자신의 마을에서 X 마을까지 가는 최단 거리
// X 마을에서 다시 자신의 마을로 돌아오는 최단 거리

//출력:
//N명의 학생들 중 오고 가는데 가장 오래 걸리는 학생의 소요시간

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const [n, m, x] = input[0].split(' ').map(Number)//학생, 도로, 마을
// const graph = Array.from({length:n+1}, ()=>[])

// for(let i=1; i<=m; i++){
//   const [start, goal, time] = input[i].split(' ').map(Number)
//   graph[start].push([goal, time])
// }

// class MinHeap{
//   constructor(){
//     this.heap=[]
//   }

//   push([city, time]){
//     this.heap.push([city, time])
//     this.bubbleUp()
//   }

//   bubbleUp(){
//     let index = this.heap.length-1;
//     let last = this.heap[index]

//     while(index>0){
//       let parentIndex = Math.floor((index-1)/2);

//       if(this.heap[parentIndex][1]<last[1]) break

//       this.heap[index] = this.heap[parentIndex]
//       index=parentIndex
//     }

//     this.heap[index]=last
//   }

//   pop(){
//     if(this.heap.length===1)
//       return this.heap.pop()

//     const top = this.heap[0]
//     this.heap[0]=this.heap.pop()
//     this.bubbleDown()
//     return top
//   }

//   bubbleDown(){
//     let index=0;
//     let top=this.heap[index]
//     let length=this.heap.length

//     while(true){
//       let leftChildIndex = index*2+1;
//       let rightChildIndex= index*2+2;
//       let smallest= index

//       if(leftChildIndex<length&&this.heap[leftChildIndex][1]<this.heap[smallest][1]){
//         smallest=leftChildIndex
//       }

//       if(rightChildIndex<length&&this.heap[rightChildIndex][1]<this.heap[smallest][1]){
//         smallest=rightChildIndex
//       }

//       if(smallest===index) break
//       this.heap[index]=this.heap[smallest]
//       index=smallest
//     }

//     this.heap[index]=top
//   }

//   isEmpty(){
//     return this.heap.length===0
//   }
// }

// const dijkstra = (start, graph)=>{
//   const dist = Array(n+1).fill(Infinity)
//   dist[start]=0

//   const pq = new MinHeap()
//   pq.push([start, 0])

//   while(!pq.isEmpty()){
//     const [curCity, curCost] = pq.pop()

//     if(dist[curCity]<curCost) continue

//     for(const [nextCity, nextCost] of graph[curCity]){
//       const totalCost = curCost+nextCost
//       if(totalCost<dist[nextCity]){
//         dist[nextCity]=totalCost
//         pq.push([nextCity, totalCost])
//       }
//     }
//   }

//   return dist
// }

// const rx = dijkstra(x, graph)

// const reverseGraph = Array.from({length:n+1}, ()=>[])
// for(let i=1; i<=n; i++){
//   for(const [to, time] of graph[i]){
//     reverseGraph[to].push([i, time])
//   }
// }

// const ry = dijkstra(x, reverseGraph)

// let max = 0;

// for(let i=1; i<=n; i++){
//   const total = rx[i]+ry[i]
//   max = Math.max(max, total)
// }

// console.log(max)

//1504-특정한 최단 경로

//입력:
//정점의 개수 N과 간선의 개수 E
//a번 정점에서 b번 정점까지 양방향 길이 존재하며, 그 거리가 c
//반드시 거쳐야 하는 두 개의 서로 다른 정점 번호 v1과 v2

//알고리즘:
//경유지가 있어 플로이드 워셜알고리즘이 적합한 듯 보이나
//N의 수가 큼에 따라 다익스트라가 나을 수 있음
//1->v1->v2->n 과 1->v2->v1->n중 더 짧은 거리여야 함

//즉 다익스트라 3번 사용
//1번 정점에서 v1, v2로 가는 최단 경로
// v1에서 v2로 가는 최단 경로
// v1, v2에서 N번 정점으로 가는 최단 경로

//출력: 두 개의 정점을 지나는 최단 경로의 길이, 없을때는 -1

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const [n, e] = input[0].split(' ').map(Number)
// const [v1, v2] = input[e+1].split(' ').map(Number)
// const graph = Array.from({length: n+1}, ()=>[])

// for(let i=1; i<=e; i++){
//   const [a, b, c] = input[i].split(' ').map(Number)
//   graph[a].push([b, c])
//   graph[b].push([a, c])
// }

// class MinHeap{
//   constructor(){
//     this.heap=[]
//   }

//   push([node, dist]){
//     this.heap.push([node, dist])
//     this.bubbleUp()
//   }

//   bubbleUp(){
//     let index =this.heap.length-1
//     let last =this.heap[index]

//     while(index>0){
//       let parentIndex = Math.floor((index-1)/2)

//       if(this.heap[parentIndex][1]<last[1]) break

//       this.heap[index]=this.heap[parentIndex]
//       index=parentIndex
//     }

//     this.heap[index]=last
//   }

//   pop(){
//     if(this.heap.length===1)
//       return this.heap.pop()
//     const top = this.heap[0]
//     this.heap[0]=this.heap.pop();
//     this.bubbleDown()
//     return top
//   }

//   bubbleDown(){
//     let index=0;
//     let top = this.heap[index]
//     let length = this.heap.length

//     while(true){
//       let leftChildIndex = index*2+1;
//       let rightChildIndex = index*2+2
//       let smallest = index

//       if(leftChildIndex<length&&this.heap[leftChildIndex][1]<this.heap[smallest][1]){
//         smallest=leftChildIndex
//       }

//       if(rightChildIndex<length&&this.heap[rightChildIndex][1]<this.heap[smallest][1]){
//         smallest=rightChildIndex
//       }

//       if(smallest===index) break
//       this.heap[index] = this.heap[smallest]
//       index=smallest
//     }

//     this.heap[index]=top
//   }

//   isEmpty(){
//     return this.heap.length===0
//   }
// }

// const dijkstra = (start, n)=>{
//   const dist = Array(n+1).fill(Infinity)
//   dist[start]=0

//   const pq = new MinHeap()
//   pq.push([start, 0]);

//   while(!pq.isEmpty()){
//     const [curNode, curDist] = pq.pop()

//     if(dist[curNode]<curDist) continue

//     for(const [nextNode, nextDist] of graph[curNode]){
//       const totalDist = curDist+nextDist

//       if(totalDist<dist[nextNode]){
//         dist[nextNode]=totalDist
//         pq.push([nextNode, totalDist])
//       }
//     }
//   }

//   return dist
// }

// // 1. 1에서 각 정점까지의 최단 경로
// const distFrom1 = dijkstra(1, n);

// // 2. v1에서 각 정점까지의 최단 경로
// const distFromV1 = dijkstra(v1, n);

// // 3. v2에서 각 정점까지의 최단 경로
// const distFromV2 = dijkstra(v2, n);

// // 경로 1: 1 -> v1 -> v2 -> N
// const path1 = distFrom1[v1] + distFromV1[v2] + distFromV2[n];

// // 경로 2: 1 -> v2 -> v1 -> N
// const path2 = distFrom1[v2] + distFromV2[v1] + distFromV1[n];

// // 두 경로 중 더 작은 값을 선택, 불가능하면 -1
// const result = Math.min(path1, path2);
// if (result >= Infinity) {
//   console.log(-1);
// } else {
//   console.log(result);
// }

//1261-알고스팟

//입력:
//가로 크기 M, 세로 크기 N
//미로의 상태

//알고리즘: bfs와 덱
//가중치가 0인 이동(벽을 부수지 않는 이동)은 덱의 앞쪽에
//가중치가 1인 이동(벽을 부수는 이동)은 덱의 뒤쪽

//출력:
//(N, M)으로 이동하기 위해 벽을 최소 몇 개 부수어야 하는지

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
// const [m, n] = input[0].split(' ').map(Number);
// const maze = input.slice(1).map(v => v.split('').map(Number));

// const bfs = ()=>{
//   const deq=[[0,0]]
//   const dist = Array.from({length:n}, ()=>Array(m).fill(Infinity))
//   dist[0][0]=0;

//   while(deq.length){
//     const [x, y] =deq.shift()

//     for(const [dx, dy] of dir){
//       const nx=x+dx;
//       const ny=y+dy;

//       if(nx>=0&&ny>=0&&nx<n&&ny<m){
//         const next = dist[x][y]+maze[nx][ny]
//         if(next<dist[nx][ny]){
//           dist[nx][ny]=next
//           if(maze[nx][ny]===1){
//             deq.push([nx, ny])
//           }else{
//             deq.unshift([nx, ny])
//           }
//         }
//       }
//     }
//   }

//   return dist[n - 1][m - 1];
// }

// console.log(bfs())

//18352-특정 거리의 도시 찾기

//입력:
//도시의 개수 N, 도로의 개수 M, 거리 정보 K, 출발 도시의 번호 X
//A번 도시에서 B번 도시

//알고리즘: 출발도시에서 다른 도시 -> 다익스트라
//but 가중치가 1로 통일되어 있으므로 -> bfs가 나음

//출력:
//X로부터 출발하여 도달할 수 있는 도시
//최단 거리가 K인 모든 도시의 번호
//한 줄에 하나씩 오름차순
//최단 거리가 K인 도시가 하나도 존재하지 않으면 -1을 출력
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const [N, M, K, X] = input[0].split(' ').map(Number);

// const graph = Array.from({length:N+1}, ()=>[])

// for(let i=1; i<=M; i++){
//   const [a, b] = input[i].split(' ').map(Number)
//   graph[a].push(b)
// }

// const dist = Array(N+1).fill(Infinity)
// dist[X]=0

// const queue=[X]

// while(queue.length){
//   const cur = queue.shift()

//   for(const next of graph[cur]){
//     if(dist[next]===Infinity){
//       dist[next]=dist[cur]+1
//       queue.push(next)
//     }
//   }
// }

// const r = [];

// for(let i=1; i<=N; i++){
//   if(dist[i]===K){
//     r.push(i)
//   }
// }

// if(r.length===0){
//   console.log(-1)
// }else{
//   console.log(r.sort((a, b) => a - b).join('\n'))
// }

//4485-녹색 옷 입은 애가 젤다지?

//입력:
//동굴의 크기를 나타내는 정수 N
//N = 0인 입력이 주어지면 전체 입력이 종료

//알고리즘:
//가중치가 있는 최단 경로 -> 다익스트라
//BFS는 가중치가 모두 동일한 경우에 적합

//출력: 링크가 잃을 수밖에 없는 최소 금액

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];

// let idx = 0;
// let problemNum = 1;

// while(true){
//   const n = +input[idx];
//   if(n===0) break

//   const cave = input.slice(idx+1, idx+1+n).map(v=>v.split(' ').map(Number))
//   idx+=(n+1)

//   const pq = [[0,0,cave[0][0]]]
//   const dist = Array.from({length: n}, ()=>Array(n).fill(Infinity));
//   dist[0][0]=cave[0][0]

//   while(pq.length){
//     pq.sort((a, b)=>a[2]-b[2])
//     const [x, y, cost] = pq.shift()

//     if(dist[x][y]<cost) continue

//     for(const [dx, dy] of dir){
//       const nx =x+dx;
//       const ny =y+dy;

//       if(nx>=0&&ny>=0&&nx<n&&ny<n){
//         const nextCost = cost+cave[nx][ny]

//         if(nextCost<dist[nx][ny]){
//           dist[nx][ny]=nextCost
//           pq.push([nx, ny, nextCost])
//         }
//       }
//     }
//   }

//   console.log(`Problem ${problemNum}: ${dist[n - 1][n - 1]}`);
//   problemNum++
// }

//11657-타임머신

//입력:
// 도시의 개수 N, 버스 노선의 개수 M
//A는 시작도시, B는 도착도시, C는 버스를 타고 이동하는데 걸리는 시간

//알고리즘: 음수인 가중치가 있으므로 -> 벨만 포드 알고리즘
//. C = 0인 경우는 순간 이동을 하는 경우
//C < 0인 경우는 타임머신으로 시간을 되돌아가는 경우

//출력:
//1번 도시에서 출발해서 나머지 도시로 가는 가장 빠른 시간

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// function bellmanFord(start, edges, n) {
//   const distances = Array(n).fill(Infinity);
//   distances[start] = 0;

//   for (let i = 0; i < n - 1; i++) {
//     for (const [u, v, weight] of edges) {
//       if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
//         distances[v] = distances[u] + weight;
//       }
//     }
//   }

//   for (const [u, v, weight] of edges) {
//     if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
//       return false
//     }
//   }

//   return distances;
// }

// const [n, m] = input[0].split(' ').map(Number)

// const edges = [];

// for (let i = 1; i <= m; i++) {
//   const [a, b, c] = input[i].split(' ').map(Number);
//   edges.push([a - 1, b - 1, c]);  // 간선 리스트에 저장
// }

// const r = bellmanFord(0, edges, n);

// if(!r){
//   console.log(-1)
// }else{
//   for(let i=1; i<n; i++){
//     console.log(r[i]===Infinity? -1 : r[i])
//   }
// }

//11779-최소비용 구하기2

//입력:
//도시의 개수 n 버스의 개수 m
//셋째 줄부터 m+2줄까지 다음과 같은 버스의 정보
//m+3째 줄에는 우리가 구하고자 하는 구간 출발점의 도시번호와 도착점의 도시번호

//알고리즘:
//한 노드에서 다른 노드까지 -> 다익스트라 알고리즘

//출력:
//출발 도시에서 도착 도시까지 가는데 드는 최소 비용
//최소 비용을 갖는 경로에 포함되어있는 도시의 개수
// 최소 비용을 갖는 경로를 방문하는 도시 순서대로 출력

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const n = +input[0]
// const m = +input[1]
// const arr = input.slice(2, m+2).map(v=>v.split(' ').map(Number))
// const [start, goal] = input[m+2].split(' ').map(Number)

// const graph=Array.from({length: n+1}, ()=>[])
// const prev = Array(n + 1).fill(null);

// for(let i=0; i<arr.length; i++){
//   const [a, b, c] = arr[i]
//   graph[a].push([b, c])
// }

// class MinHeap{
//   constructor(){
//     this.heap=[]
//   }

//   push([node, dist]){
//     this.heap.push([node, dist])
//     this.bubbleUp()
//   }

//   bubbleUp(){
//     let index =this.heap.length-1
//     let last =this.heap[index]

//     while(index>0){
//       let parentIndex = Math.floor((index-1)/2)

//       if(this.heap[parentIndex][1]<last[1]) break

//       this.heap[index]=this.heap[parentIndex]
//       index=parentIndex
//     }

//     this.heap[index]=last
//   }

//   pop(){
//     if(this.heap.length===1)
//       return this.heap.pop()
//     const top = this.heap[0]
//     this.heap[0]=this.heap.pop();
//     this.bubbleDown()
//     return top
//   }

//   bubbleDown(){
//     let index=0;
//     let top = this.heap[index]
//     let length = this.heap.length

//     while(true){
//       let leftChildIndex = index*2+1;
//       let rightChildIndex = index*2+2
//       let smallest = index

//       if(leftChildIndex<length&&this.heap[leftChildIndex][1]<this.heap[smallest][1]){
//         smallest=leftChildIndex
//       }

//       if(rightChildIndex<length&&this.heap[rightChildIndex][1]<this.heap[smallest][1]){
//         smallest=rightChildIndex
//       }

//       if(smallest===index) break
//       this.heap[index] = this.heap[smallest]
//       index=smallest
//     }

//     this.heap[index]=top
//   }

//   isEmpty(){
//     return this.heap.length===0
//   }
// }

// const dijkstra = (start, n)=>{
//   const dist = Array(n+1).fill(Infinity)
//   dist[start]=0

//   const pq = new MinHeap()
//   pq.push([start, 0]);

//   while(!pq.isEmpty()){
//     const [curNode, curDist] = pq.pop()

//     if(dist[curNode]<curDist) continue

//     for(const [nextNode, nextDist] of graph[curNode]){
//       const totalDist = curDist+nextDist

//       if(totalDist<dist[nextNode]){
//         dist[nextNode]=totalDist
//         pq.push([nextNode, totalDist])
//         prev[nextNode] = curNode
//       }
//     }
//   }

//   return dist
// }

// const r = dijkstra(start, n);

// console.log(r[goal]);

// let path = []

// let cur = goal

// while(cur){
//   path.push(cur)
//   cur=prev[cur]
// }

// path.reverse()

// console.log(path.length)
// console.log(path.join(' '))

//1865-웜홀

//입력:
//테스트케이스의 개수 TC
//지점의 수 N, 도로의 개수 M, 웜홀의 개수 W
//두 번째 줄부터 M+1번째 줄에 도로의 정보(S와 E는 연결된 지점의 번호, T는 이 도로를 통해 이동하는데 걸리는 시간)
//M+2번째 줄부터 M+W+1번째 줄까지 웜홀의 정보(S는 시작 지점, E는 도착 지점, T는 줄어드는 시간을)

//알고리즘:
//음수가중치(웜홀)사용 -> 벨만포드 알고리즘

//출력:
//TC개의 줄에 걸쳐
//출발 위치로 돌아오는 것이 가능하면 YES, 불가능하면 NO

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const bellmanFord=(n, edges, start)=>{
//   const dist = Array(n+1).fill(false)
//   dist[start]=0;

//   for(let i=1; i<n; i++){
//     for(const [u, v, w] of edges){
//       if(dist[u]!==Infinity&&dist[u]+w<dist[v]){
//         dist[v]=dist[u]+w
//       }
//     }
//   }

//   for(const [u, v, w] of edges){
//     if(dist[u]!==Infinity&&dist[u]+w<dist[v]){
//       return true
//     }
//   }

//   return false
// }

// const tc = +input[0];
// let index = 1

// for(let i=0; i<tc; i++){
//   const [n, m, w] = input[index++].split(' ').map(Number)
//   let edges = []

//   for(let i=0; i<m; i++){
//     const [s, e, t] = input[index++].split(' ').map(Number)
//     edges.push([s, e, t])
//     edges.push([e, s, t])
//   }

//   for(let i=0; i<w; i++){
//     const [s, e, t] = input[index++].split(' ').map(Number)
//     edges.push([s, e, -t])
//   }

//   const h= bellmanFord(n, edges, 1)

//   if(h){
//     console.log('YES')
//   }else{
//     console.log('NO')
//   }
// }

//2458-키순서

//입력:
//학생들의 수 N, 두 학생 키를 비교한 횟수 M
//서로 다른 양의 정수 a와 b

//알고리즘:
//모든 노드를 비교 -> 플로이드 워셜

//출력:
//자신이 키가 몇 번째인지 알 수 있는 학생이 모두 몇 명인지

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const [n, m] = input[0].split(' ').map(Number)
// const dist = Array.from({length: n+1}, ()=>Array(n+1).fill(Infinity))

// for(let i=1; i<=n; i++){
//   dist[i][i]=0
// }

// for(let i=1; i<=m; i++){
//   const [a, b] = input[i].split(' ').map(Number)
//   dist[a][b]=1
// }

// for(let k=1; k<=n; k++){
//   for(let i=1; i<=n; i++){
//     for(let j=1; j<=n; j++){
//       if(dist[i][j]>dist[i][k]+dist[k][j]){
//         dist[i][j]=dist[i][k]+dist[k][j]
//       }
//     }
//   }
// }

// let r = 0;

// for(let i=1; i<=n; i++){
//   let k =0;

//   for(let j=1; j<=n; j++){
//     if(dist[i][j]!==Infinity||dist[j][i]!==Infinity){
//       k++
//     }
//   }

//   if(k===n){
//     r++
//   }
// }

// console.log(r)

//1956-운동

//입력:
//V개의 마을와 E개의 도로
// a번 마을에서 b번 마을로 가는 거리가 c인 도로

//알고리즘:
//모든 노드를 비교 -> 플로이드 워셜

//출력:
//최소 사이클의 도로 길이의 합
//운동 경로를 찾는 것이 불가능한 경우에는 -1

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const [v, e] = input[0].split(' ').map(Number)

// const dist = Array.from({length:v+1}, ()=>Array(v+1).fill(Infinity))

// for(let i=1; i<=v; i++){
//   dist[i][i]=0
// }

// for(let i=1; i<=e; i++){
//   const [a, b, c] = input[i].split(' ').map(Number)
//   dist[a][b]=c
// }

// for(let k=1; k<=v; k++){
//   for(let i=1; i<=v; i++){
//     for(let j=1; j<=v; j++){
//       if(dist[i][j]>dist[i][k]+dist[k][j]){
//         dist[i][j]=dist[i][k]+dist[k][j]
//       }
//     }
//   }
// }

// let m = Infinity

// for(let i=1; i<=v; i++){
//   for(let j=1; j<=v; j++){
//     if(i!==j&&dist[i][j]!==Infinity&&dist[j][i]!==Infinity){
//       m=Math.min(m, dist[i][j]+dist[j][i])
//     }
//   }
// }

// if(m===Infinity){
//   console.log(-1)
// }else{
//   console.log(m)
// }

//1446-지름길
const input = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n');

let [n, d] = input[0].split(' ').map(Number);
let shortcuts = input.slice(1).map((v) => v.split(' ').map(Number));

let dists = Array(d + 1).fill(Infinity);
dists[0] = 0;

let graph = Array.from({ length: d + 1 }, () => []);
shortcuts.forEach(([s, e, l]) => {
  if (e > d) return; // 도착점이 범위를 초과
  if (e - s <= l) return; // 지름길이 더 비효율적
  graph[s].push([e, l]);
});

for (let i = 0; i <= d; i++) {
  if (i > 0) {
    dists[i] = Math.min(dists[i], dists[i - 1] + 1);
  }

  for (let [e, l] of graph[i]) {
    if (e <= d && dists[e] > dists[i] + l) {
      dists[e] = dists[i] + l;
    }
  }
}

console.log(dists[d]);
