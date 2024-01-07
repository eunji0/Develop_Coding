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
