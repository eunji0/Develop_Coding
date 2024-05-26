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
class MinHeap{
  constructor(){
    this.heap=[];
  }

  push(value){
    this.heap.push(value);
    this.heapifyUp();
  }

  //새로운 노드 자리 찾아주기
  heapifyUp(){
    let index = this.heap.length-1;

    //인덱스가 부모노드가 될때까지
    while(index>0){
      const parentIndex = Math.floor((index-1)/2);

      if(this.heap[parentIndex]<=this.heap[index]) break;

      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];

      index = parentIndex;
    }
  }

  pop(){
    if(this.isEmpty()) return null;

    const root = this.heap[0];
    const lastNode = this.heap.pop();

    if(!this.isEmpty()){
      this.heap[0] = lastNode;
      this.heapifyDown();
    }

    return root
  }

  //루트 노드 제거후 재정비
  heapifyDown(){
    let index =0;
    const length = this.heap.length;

    while(true){
      let smallest = index;
      const leftChildIndex = index*2+1;
      const rigthChildIndex = index*2+2;

      if(leftChildIndex < length &&this.heap[leftChildIndex] <this.heap[smallest]){
        smallest = leftChildIndex;
      }

      if(rigthChildIndex <length &&this.heap[rigthChildIndex] < this.heap[smallest]){
        smallest = rigthChildIndex;
      }

      if(smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
      index = smallest
    }
    
  }
}

//다익스트라 알고리즘 이해하기
// 노드 간의 거리를 초기화
const graph = [
  [Infinity, 1, Infinity, 2, Infinity],
  [1, Infinity, 3, Infinity, 2],
  [Infinity, 3, Infinity, Infinity, 1],
  [2, Infinity, Infinity, Infinity, 2],
  [Infinity, 2, 1, 2, Infinity],
];

// 방문 여부를 기록할 배열 생성
const visited = Array(N).fill(false);

// 1번 노드로부터 각 노드까지의 최단 거리를 저장한 배열 생성
const dist = visited.map((_, i) => graph[0][i]);

// 방문하지 않았으면서 거리 테이블에서 가장 작은 값을 가진 노드 탐색
const findSmallestNode = (visited, distance) => {
  let minDist = Infinity;
  let minIdx = 0;
  for (let i = 0; i < distance.length; i++) {
    if (visited[i]) continue;
    if (distance[i] < minDist) {
      minDist = distance[i];
      minIdx = i;
    }
  }
  return minIdx;
};

// 다익스트라 알고리즘 수행
const dijkstra = (graph, visited, dist) => {
  // 1번 노드는 거리를 0으로 설정하고, 방문한 것으로 처리
  distance[0] = 0;
  visited[0] = true;

  /*
			현재 방문한 노드는 거리 테이블 상에서 가장 거리가 짧은 값을 가진 노드. 
			다음에 방문할 노드에 저장된 값이
			"현재 방문한 노드까지 누적 이동 거리 + 다음 노드까지 거리"보다 크다면
			"현재 방문한 노드까지 누적 이동 거리 + 다음 노드까지 거리"를 거리 테이블의 다음 방문할 노드에 저장
		*/
  for (let i = 0; i < distance.length; i++) {
    const nodeIdx = findSmallestNode(visited, distance);
    visited[nodeIdx] = true;
    for (let j = 0; j < distance.length; j++) {
      if (visited[j]) continue;
      if (distance[j] > distance[nodeIdx] + graph[nodeIdx][j])
        distance[j] = distance[nodeIdx] + graph[nodeIdx][j];
    }
  }
};
