// //아이템 6가지
// //주인공은 3개의 공간 주머니
// //퀘스트 수행시 6가지 아이템 중 하나
// //주머니 빈자리가 있다면 아이템을 순서대로 삽입
// //가득 찬 상태라면
// //주머니에 없는 아이템이어야 하고
// //가장 오래전에 습득한 아이템을 버림
// //이미 있다면
// //주머니에 담고 기존 아이템 동료 선물
// //버려지는 아이템 없음

// //버린 아이템 1개 이상 공백 출력

// //입력이 끝날때까지
// for(let i=0; i<input.length; i++){

//   //주머니(큐)가 가득찼는지 확인
//   const checkQueue = (q)=>{
//     return q.length>=3
//   }

//   //빈자리가 있다면 삽입
//   q.push(n)

//   //빈자리가 없다면
//   //주머니에 있는 아이템인지 확인(includes)
//   //없다면 맨 앞에 것 삭제 후 push

//   //있다면 유지

// }

//2번
//마라톤이 가능한 최장거리, 출발지 도착지 방번호
//한번 통과한 방은 다시 통과 불가
//출발지 방번호는 도착지 방번호보다 작아야함
//출발지 도착지 사이의 거리가 동일한 경로는 1개만 존재

//입력
//개미 방의 개수 rooms
//방번호 거리값

//3번
//1부터 c개
//카드 섞기
//위에서 n장과 아래서 n장을 제외한 나머지 카드는 순서 유지
//가장 위쪽으로
//위쪽으로 올라온 카드들의 수를 확인
//2*n을 초과하면
//그 카드들에 대해서만 처음부터 반복
//초과하지 않으면 1회 수행과정 끝

//카드 개수 c
//섞기를 수행하는 횟수 p
//arrN(p줄만큼)

//카드 펼치기
let cards = [];
for (let i = 1; i <= c; i++) {
  cards.push(i);
}
//p만큼 반복
//제외
cards.slice(n, c - n);
//몇장인지 count
//2*n보다 많지 않다면
//cards에서 그만큼 뺴고 맨 위에 삽입
//많다면 다시 반복

//1 -10 전체
//3 -8 뽑은
//3-8, 1,2,9,10 전체 재정렬
//뽑은 에서 2*n보다 크다면
//3-8
//5-6 뽑은
//5 6 34 78 12 9 10 재정렬
//큐
//

// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let input = [];
  for await (const line of rl) {
    if (!line) {
      rl.close();
    } else {
      input.push(line);
    }
  }

  let c = +input[0];
  let p = +input[1];
  let nArr = input.slice(2).map(Number);

  let cards = [];

  for (let i = 1; i <= c; i++) {
    cards.push(i);
  }

  for (let i = 0; i < p; i++) {
    let n = nArr[i]; //위아래 제외할 카드 수
    let qq = [];

    let frontCards = cards.slice(0, n);
    let backCards = cards.slice(cards.length - n);
    cards = cards.slice(n, cards.length - n); //뽑은 카드
    //카드 재정렬
    qq.push(frontCards, backCards);

    while (true) {
      if (cards.length < 2 * n) {
        qq.unshift(cards);
        cards = qq.flat();
        break;
      } else {
        frontCards = cards.slice(0, n);
        backCards = cards.slice(cards.length - n);
        cards = cards.slice(n, cards.length - n); //뽑은 카드
        //카드 재정렬
        qq.unshift(frontCards, backCards);
      }
    }
  }

  console.log(cards.slice(0, 5).join(' '));

  process.exit();
})();

//2번
//다수
const f = (arr) => {
  let dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

  for (let i = 0; i < n; i++) {
    dist[i][i] = 0;
  }

  for (let [u, v, w] of arr) {
    arr[u][v] = w;
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][k] + dist[k][j] > dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
};

//우선순위
//1,2,3의 순서는 입력마다 달라짐
//우선순위가 2,1,3인 경우 나이가 가장 높은 조건
//나이가 같다면 성별
//성별이 같다면 임산부, 장애인, 환자

//f>m

//7세이하에 포함 어린순
//7세 이하에 포함 안되면 나이 많은 순

//노약자 순

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push([node, dist]) {
    this.heap.push([node, dist]);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    let last = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap.parentIndex[1] <= last[1]) break;
      this.heap[index] = this.heap[parentIndex];
      index = parentIndex;
    }

    this.heap[index] = last;
  }

  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    let top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return top;
  }

  bubbleDown() {
    let index = 0;
    let top = this.heap[index];
    let length = this.heap.length;

    while (true) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;

      let smallest = index;

      if (left < length && this.heap[left][1] < this.heap[smallest][1]) {
        smallest = left;
      }
      if (right < length && this.heap[right][1] < this.heap[smallest][1]) {
        smallest = right;
      }

      if (smallest === index) break;
      this.heap[index] = this.heap[smallest];
      index = smallest;
    }
    this.heap[index] = top;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const d = (start, n) => {
  let dist = Array(n + 1).fill(0);
  dist[start] = 0;

  let pq = new MinHeap();
  pq.push([start, Infinity]);

  while (!pq.isEmpty()) {
    let [curNode, curDist] = pq.pop();

    if (dist[curNode] > curDist) continue;

    for (const [nextNode, nextDist] of graph[curNode]) {
      let total = curDist + nextDist;

      if (total > dist[nextNode]) {
        dist[nextNode] = total;
        pq.push([nextNode, total]);
      }
    }
  }

  return dist;
};
