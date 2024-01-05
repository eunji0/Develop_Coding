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
