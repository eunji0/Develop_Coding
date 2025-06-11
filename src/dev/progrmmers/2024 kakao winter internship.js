//가장 많이 받은 선물

// 문제정리
// 두 사람이 선물을 주고받은 기록이 있다면:
// 더 많이 준 사람이 → 선물을 하나 받음
// 두 사람 간 선물 기록이 없거나 같다면:
// **선물 지수(=준 수 - 받은 수)**가 큰 사람이 → 작은 사람에게 선물 하나 받음
// 선물 기록도 없고, 선물 지수도 같다면:
// 아무 일도 없음 (선물 없음)
// 선물지수 =  이번 달까지 자신이 친구들에게 준 선물의 수 - 받은 선물의 수

// 출력: 다음달에 가장 많은 선물을 받는 친구가 받을 선물의 수

//설계
//주고받은 선물을 2차원 배열로 생성 -> giveTakeTable
//선물 지수를 2차원 배열로 생성 -> giftCountTable
//friends를 객체로 인덱스와 함께 변환환
//gifts기록을 for(let [give, take] of gifts)로 순회
//2차원 배열들을 채움

//giveTakeTable을 순회하면서 다음달 선물 수 각 인덱스에 맞는 result 업데이트

function solution(friends, gifts) {
  let n = friends.length;
  let giveTakeTable = Array.from({ length: n }, () => Array(n).fill(0));
  let giftCountTable = Array.from({ length: n }, () => Array(3).fill(0)); //[준선물, 받은선물, 선물지수]
  let result = Array(n).fill(0);

  let nameToIndex = {};
  for (let i = 0; i < n; i++) {
    nameToIndex[friends[i]] = i;
  }

  for (let gift of gifts) {
    let [give, take] = gift.split(' ');
    let gIdx = nameToIndex[give];
    let tIdx = nameToIndex[take];
    giveTakeTable[gIdx][tIdx]++;
    giftCountTable[gIdx][0]++; // 준 선물
    giftCountTable[tIdx][1]++; // 받은 선물
  }

  for (let i = 0; i < n; i++) {
    giftCountTable[i][2] = giftCountTable[i][0] - giftCountTable[i][1]; // 선물 지수
  }

  // 선물 받는 횟수 계산
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (giveTakeTable[i][j] > giveTakeTable[j][i]) {
        result[i]++;
      } else if (giveTakeTable[i][j] < giveTakeTable[j][i]) {
        result[j]++;
      } else {
        if (giftCountTable[i][2] > giftCountTable[j][2]) {
          result[i]++;
        } else if (giftCountTable[i][2] < giftCountTable[j][2]) {
          result[j]++;
        }
        // else: 선물 수 같고 지수도 같으면 아무도 안 줌
      }
    }
  }

  return Math.max(...result);
}

//도넛과 막대 그래프
//출력: [생성한 정점의 번호, 도넛 모양 그래프의 수, 막대 모양 그래프의 수, 8자 모양 그래프의 수]
//생성한 정점의 번호 -> 들어오는 게 없고 나가는 화살표가 있는 것
//그 정점이 생성되기전 그래프들의 수
//그래프를 정점의 개수만큼 생성
//for (let [from, to] of edges)로 그래프 정리
//bfs로 해당 정점 별 연결 횟수 return
//해당 연결횟수가 n-1,n,2n+2에 해당하는 인덱스 answer[]++

const bfs = (n) => {
  visited[n] = true;
  let queue = [n];
  let count = 1;

  while (queue.length) {
    let start = queue.shift();

    for (let next of graph[start]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }

  return count;
};

function solution(edges) {
  var answer = [];
  let n = Math.max(...edges.flat());
  let inDegree = Array(n + 1).fill(0);
  let outDegree = Array(n + 1).fill(0);
  let graph = Array.from({ length: n + 1 }, () => []);

  for (let [from, to] of edges) {
    graph[from].push(to);
    outDegree[from]++;
    inDegree[to]++;
  }

  //생성된 쟁점
  let point = -1;

  for (let i = 1; i <= n; i++) {
    if (inDegree[i] === 0 && outDegree[i] > 1) {
      point = i;
      break;
    }
  }

  const visited = Array(n + 1).fill(false);
  const result = [point, 0, 0, 0]; // [생성된 정점, 도넛, 막대, 8자]

  // 그래프 탐색 및 분류
  for (let next of graph[point]) {
    if (visited[next]) continue;

    const queue = [next];
    const localVisited = new Set();
    let cycleCount = 0;
    let edgeCount = 0;

    while (queue.length) {
      const cur = queue.pop();
      if (visited[cur]) continue;
      visited[cur] = true;
      localVisited.add(cur);

      for (let nxt of graph[cur]) {
        edgeCount++;
        if (localVisited.has(nxt)) cycleCount++;
        if (!visited[nxt]) queue.push(nxt);
      }
    }

    if (cycleCount === 0)
      result[2]++; // 막대
    else if (cycleCount === 2)
      result[3]++; // 8자
    else result[1]++; // 도넛
  }

  return result;
}
