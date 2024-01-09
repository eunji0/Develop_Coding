//타겟 넘버
//dfs
function solution(numbers, target) {
  let answer = 0;

  dfs(0, 0);

  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }

      return;
    }
    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }

  return answer;
}

//게임 맵 최단거리
//bfs 최단거리는 bfs
function solution2(maps) {
  // 맵의 세로 길이
  const yLen = maps.length;
  // 맵의 가로 길이
  const xLen = maps[0].length;
  // 목표 지점의 세로 좌표
  const goalY = yLen - 1;
  // 목표 지점의 가로 좌표
  const goalX = xLen - 1;

  // 이동 방향을 나타내는 배열
  const dy = [0, 0, 1, -1];
  const dx = [-1, 1, 0, 0];

  // BFS를 위한 큐 초기화
  const queue = [];
  // 시작 지점을 큐에 추가 [세로 좌표, 가로 좌표, 이동 횟수]
  queue.push([0, 0, 1]);

  while (queue.length) {
    // 큐에서 현재 위치와 이동 횟수를 가져옴
    const [curY, curX, move] = queue.shift();

    // 목표 지점에 도달했으면 이동 횟수 반환
    if (curY === goalY && curX === goalX) return move;

    // 네 방향으로 이동
    for (let i = 0; i < 4; i++) {
      const ny = curY + dy[i];
      const nx = curX + dx[i];

      // 맵 범위 내에 있고 벽이 아닌 경우
      if (ny >= 0 && ny < yLen && nx >= 0 && nx < xLen && maps[ny][nx] === 1) {
        // 다음 위치를 큐에 추가하고 해당 위치의 값을 0으로 변경 (방문 표시)
        queue.push([ny, nx, move + 1]);
        maps[ny][nx] = 0;
      }
    }
  }

  // BFS를 마쳤는데 목표 지점에 도달하지 못했으면 -1 반환
  return -1;
}

//네트워크
function solution3(n, computers) {
  let answer = 0; // 네트워크의 개수를 카운트할 변수
  const length = computers.length; // 컴퓨터의 개수
  const visited = Array.from({ length: n }, () => false); // 방문 여부를 기록할 배열

  // 깊이 우선 탐색(DFS) 함수 정의
  function dfs(index) {
    visited[index] = true; // 현재 컴퓨터를 방문 처리

    // 현재 컴퓨터와 연결된 다른 컴퓨터들을 확인
    for (let i = 0; i < length; i++) {
      // 연결되어 있고 아직 방문하지 않은 컴퓨터라면
      if (computers[index][i] && !visited[i]) {
        dfs(i); // 해당 컴퓨터로 DFS 수행
      }
    }
  }

  // 모든 컴퓨터에 대해 반복
  for (let i = 0; i < length; i++) {
    if (!visited[i]) {
      // 아직 방문하지 않은 컴퓨터라면
      dfs(i); // DFS 수행
      answer++; // 네트워크의 개수 증가
    }
  }

  return answer; // 최종적인 네트워크의 개수 반환
}

//단어변환
function solution4(begin, target, words) {
  // target이 words에 없으면 변환할 수 없으므로 0을 반환
  if (!words.includes(target)) return 0;

  // 현재 변환된 단어를 저장하는 배열
  let temp = [];
  // BFS를 위한 큐
  let que = [];
  // 방문한 단어를 저장하는 Set
  let visited = new Set();
  // 최종 변환에 필요한 단계 수
  let answer = 0;

  // 시작 단어를 큐에 추가
  que.push(begin);

  while (que.length) {
    // 큐에서 단어를 꺼냄
    const word = que.shift();
    // 방문한 단어로 표시
    visited.add(word);

    // 목표 단어에 도달하면 단계 수를 반환
    if (word === target) return answer;

    // 단어의 각 문자를 하나씩 비교하여 변환 가능한 단어를 찾음
    for (let i = 0; i < word.length; i++) {
      let letter = wordSlice(word, i);
      // 변환 가능한 단어들을 필터링하여 temp 배열에 추가
      let match = words.filter(
        (v) => !visited.has(v) && wordSlice(v, i) === letter
      );
      temp.push(...match);
    }

    // 현재 큐에서 처리한 단어가 모두 끝나면(한 단계가 끝나면) answer 증가
    if (que.length < 1) {
      answer++;
      // temp에 있는 단어들을 큐에 추가하고 temp 초기화
      que.push(...temp);
      temp = [];
    }
  }

  // 목표 단어에 도달하지 못하면 0 반환
  return 0;
}

// 단어의 i번째 문자를 제외한 나머지 부분을 반환하는 함수
function wordSlice(word, i) {
  let a = word.split("");
  a.splice(i, 1);
  return a.join("");
}

//여행경로
//이해 안됨
//한 번더 리팩 필요
function solution5(tickets) {
  var paths = [];

  // 출발지를 key로, 도착지를 value로 가지는 맵 생성
  const ticketPath = tickets.reduce((prev, ticket) => {
    prev.set(
      ticket[0],
      prev.get(ticket[0]) ? [...prev.get(ticket[0]), ticket[1]] : [ticket[1]]
    );
    return prev;
  }, new Map());

  // DFS를 이용하여 모든 경로를 탐색
  getTravel(ticketPath, "ICN");

  function getTravel(pathMap, path, count = 1) {
    // 현재 경로에서 마지막 공항 코드를 추출
    const curAirport = path.substring(path.length - 3);

    // 모든 도시를 방문했을 때
    if (count === tickets.length + 1) {
      paths.push(path); // paths 배열에 현재 경로를 추가
      return;
    }

    // 현재 공항에서 갈 수 있는 도시들에 대해 반복
    for (let i = 0; i < (pathMap.get(curAirport) || []).length; i++) {
      const curPath = pathMap.get(curAirport); // 현재 공항에서 갈 수 있는 도시들의 배열
      const airport = curPath.shift(); // 배열에서 도시 하나를 꺼내옴

      // 다음 경로로 DFS 수행
      getTravel(pathMap, path + "," + airport, count + 1);

      // DFS 수행이 끝난 후, 꺼내온 도시를 다시 도시 배열에 추가
      curPath.push(airport);
      // 업데이트된 도시 배열을 다시 맵에 저장
      pathMap.set(curAirport, curPath);
    }
  }

  paths.sort(); // 알파벳 순으로 정렬
  return paths[0].split(","); // 가장 빠른 경로를 배열로 반환
}
