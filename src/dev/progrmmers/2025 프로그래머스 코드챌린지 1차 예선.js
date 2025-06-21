//유연근무제
// 일주일 동안 각자 설정한 출근 희망 시각에 늦지 않고 출근한 직원들에게 상품을 주는 이벤트
// 출근 희망 시각 + 10분
// 토요일, 일요일의 출근 시각은 영향x
// 시에 100을 곱하고 분을 더한 정수로 표현
// output: 상품을 받을 직원이 몇 명인지

// schedules[i]는 i + 1번째 직원이 설정한 출근 희망 시각을 의미
// timelogs[i][j]는 i + 1번째 직원이 이벤트 j + 1일차에 출근한 시각을 의미
// 1은 월요일, 2는 화요일, 3은 수요일, 4는 목요일, 5는 금요일, 6은 토요일, 7은 일요일에 이벤트를 시작했음을 의미

//풀이
// schedules를 map으로 checkInTime 출근 인정시각을 시*60+분+10으로 설정
// let len = schedules.length로 설정, result = len
// for(let i=0; i<len; i++)로 순회
// timelogs도 map으로 시*60+분 재설정
// startday++로 증가시키면서 6과 7이면 continue, 아니면 출근 인정시간을 넘는지 확인
// 넘는 순간 break result--

function solution(schedules, timelogs, startday) {
  let len = schedules.length;
  let result = len;
  schedules = schedules.map((v) => {
    let hour = Math.floor(v / 100);
    let min = v % 100;
    return hour * 60 + min + 10;
  });

  for (let i = 0; i < len; i++) {
    let iDay = startday;
    timelogs[i] = timelogs[i].map((v) => {
      let hour = Math.floor(v / 100);
      let min = v % 100;
      return hour * 60 + min;
    });

    for (let j = 0; j < timelogs[i].length; j++) {
      let rest = iDay % 7;

      if (rest === 6 || rest === 0) {
        iDay++; // 주말이어도 날은 흐른다
        continue;
      }

      if (timelogs[i][j] > schedules[i]) {
        result--;
        break;
      }

      iDay++;
    }
  }

  return result;
}

//지게차와 크레인

//문제 정리
// 컨테이너가 n x m
// “A”처럼 알파벳 하나로만 출고 요청이 들어올 경우 지게차+가장 바깥에 있을 경우 꺼내기 가능
// "BB"처럼 같은 알파벳이 두 번 반복된 경우는 크레인을 사용
// return 남은 컨테이너의 수

// n = storage.length
// m=storage[0].length
// storage map split(')
// storage.push(Array(m).fill(0)), unshift()
// .map(v.unshift(0), v.push(0))
// storageCopy복사본 생성
// requests를 forEach로 순회
// 길이가 하나인 경우 지게차 사용
// 상하좌우 중 하나라도 범위를 벗어나면 bfs로 삭제 가능
// storageCopy의 상태에서 삭제.
// 해당 좌표가 외부와 연결되어 있는지 확인
// storage=storageCopy로 업데이트
// 순회가 끝나면 storage에서 0이 아닌 개수 return

function solution(storage, requests) {
  let n = storage.length;
  let m = storage[0].length;
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  // 문자 배열로 변환
  storage = storage.map((row) => row.split(''));

  // 외부 접근 가능한 0 위치를 BFS로 탐색
  const findExternalZero = (map) => {
    const visited = Array.from({ length: n + 2 }, () => Array(m + 2).fill(false));
    const queue = [[0, 0]];
    visited[0][0] = true;

    while (queue.length) {
      const [x, y] = queue.shift();
      for (let [dx, dy] of dir) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < n + 2 && ny >= 0 && ny < m + 2 && !visited[nx][ny] && map[nx][ny] === 0) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
    return visited;
  };

  // padding: 사방에 0을 감싸 외부 탐색이 가능하게
  let padded = Array.from({ length: n + 2 }, (_, i) =>
    Array.from({ length: m + 2 }, (_, j) => {
      if (i === 0 || i === n + 1 || j === 0 || j === m + 1) return 0;
      return storage[i - 1][j - 1];
    }),
  );

  for (let req of requests) {
    const temp = padded.map((row) => [...row]);
    const visited = Array.from({ length: n + 2 }, () => Array(m + 2).fill(false));
    const ch = req[0];

    if (req.length === 1) {
      // 지게차: 외부에서 접근 가능한 해당 컨테이너 제거
      const external = findExternalZero(padded);

      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
          if (padded[i][j] === ch) {
            for (let [dx, dy] of dir) {
              const ni = i + dx,
                nj = j + dy;
              if (external[ni][nj]) {
                temp[i][j] = 0;
                break;
              }
            }
          }
        }
      }
    } else {
      // 크레인: 전부 제거
      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
          if (padded[i][j] === ch) {
            temp[i][j] = 0;
          }
        }
      }
    }

    padded = temp;
  }

  // 남은 문자 개수 세기
  let count = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (typeof padded[i][j] === 'string') count++;
    }
  }

  return count;
}
