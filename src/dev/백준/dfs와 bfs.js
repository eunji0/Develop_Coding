//bfs와 dfs

//bfs
class Queue{
  constructor(){
    this.items = [];
  }

  push(element){
    this.items.push(element)
  }

  popLeft(){
    return this.items.shift();
  }

  size(){
    return this.items.length;
  }
}

function BFS(graph, start, visited){
  const queue = new Queue();//새로운 큐 생성
  queue.push(start)//시작노드 삽입
  visited[start]=start;//방문 표시

  while(queue.size()){//큐가 비지 않았다면
    const v = queue.popLeft(); //큐의 맨 앞 노드 꺼내기
    console.log(v);

    for(const node of graph[v]){//인접한 노드 순회
      if(!visited[node]){//방문하지 않은 노드라면
        queue.push(node);
        visited[node]=true;
      }
    }

    
  }
}

const graph = [
  [1, 2],    // 0번 노드와 연결된 노드들
  [0, 4, 5], // 1번 노드와 연결된 노드들
  [0, 3],    // 2번 노드와 연결된 노드들
  [2],       // 3번 노드와 연결된 노드들
  [1],       // 4번 노드와 연결된 노드들
  [1]        // 5번 노드와 연결된 노드들
];
const visited = Array(6).fill(false); // 방문 배열 초기화

BFS(graph, 0, visited); // 노드 0부터 BFS 탐색 시작
