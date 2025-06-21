//개인정보 수집 유효기간

//문제 정리
//output 오늘날짜를 기준으로 파기해야할 정보 번호
//모든 달은 28일

//풀이 설계
// today 입력을 .을 기준으로 split('.').map(Number)
// 날짜를 year * 12 * 28 + month * 28 + day 이렇게 변환하는 메서드 calDays
// today = [year, month, day] =>calDays메서드로 변환
// terms =>객체로 변환 {'A':6}
// for(let i=0; i<privacies; i++)로 순회
// let [days, term] = privacies.split(' )
// days =>calDays메서드로 변환
// days+terms.get(term)-1 <= today 파기 result.push(i)

const calDays = (year, month, day) => {
  return year * 12 * 28 + month * 28 + day;
};

function solution(today, terms, privacies) {
  let result = [];

  let [tYear, tMonth, tDay] = today.split('.').map(Number);
  const todayInDays = calDays(tYear, tMonth, tDay);

  const termMap = new Map();
  terms.forEach((v) => {
    const [type, duration] = v.split(' ');
    termMap.set(type, +duration);
  });

  privacies.forEach((entry, i) => {
    const [dateStr, term] = entry.split(' ');
    const [pYear, pMonth, pDay] = dateStr.split('.').map(Number);
    const startDate = calDays(pYear, pMonth, pDay);
    const expiryDate = startDate + termMap.get(term) * 28;

    if (expiryDate <= todayInDays) {
      result.push(i + 1);
    }
  });

  return result;
}

//이모티콘 할인행사

//문제 정리
// 이모티콘 플러스 서비스 가입자를 최대한 늘리는 것.
// 이모티콘 판매액을 최대한 늘리는 것.
// 1번 목표가 우선이며, 2번 목표가 그 다음
//각 사용자들은 일정 비율 이상 할인하는 이모티콘을 모두 구매
//이모티콘 구매 비용의 합이 일정 가격 이상이 된다면, 이모티콘 구매를 모두 취소하고 이모티콘 플러스 서비스에 가입

function solution(users, emoticons) {
  const discounts = [10, 20, 30, 40];
  let maxJoin = 0;
  let maxProfit = 0;

  const dfs = (depth, currentCombo) => {
    if (depth === emoticons.length) {
      let join = 0;
      let profit = 0;

      for (let [minRate, minPrice] of users) {
        let total = 0;

        for (let i = 0; i < emoticons.length; i++) {
          const sale = currentCombo[i];
          if (sale >= minRate) {
            const discounted = (emoticons[i] * (100 - sale)) / 100;
            total += discounted;
          }
        }

        if (total >= minPrice) {
          join++;
        } else {
          profit += total;
        }
      }

      if (join > maxJoin || (join === maxJoin && profit > maxProfit)) {
        maxJoin = join;
        maxProfit = profit;
      }

      return;
    }

    for (let rate of discounts) {
      currentCombo.push(rate);
      dfs(depth + 1, currentCombo);
      currentCombo.pop();
    }
  };

  dfs(0, []);
  return [maxJoin, Math.floor(maxProfit)];
}

//미로 탈출 명령어

//문제정리
//미로탈출조건
//격자의 바깥으로 나갈 수 없음
//(x, y)에서 (r, c)까지 이동하는 거리가 총 k
//- 같은 격자를 두 번 이상 방문해도 된다
// //문자열이 사전 순으로 가장 빠른 경로로 탈출
// l: 왼쪽으로 한 칸 이동
// r: 오른쪽으로 한 칸 이동
// u: 위쪽으로 한 칸 이동
// d: 아래쪽으로 한 칸 이동
//.은 빈 공간, S는 출발 지점, E는 탈출 지점
//사전 순으로 빠른 경로 return
//단, 위 조건대로 미로를 탈출할 수 없는 경우 "impossible"을 return

//풀이접근
//최단거리를 구해야 하는것이 아닌 k만큼의 거리로 경로 설정
//입력들로 map 만들기(출발지점, 도착지점 표시)
//dfs 거리를 start부터 end까지 삽입channels.length = k이면 result삽입
//k만큼 거리의 모든 경로를 모음 kOutput = []
//kOutput이 빈배열이라면 'impossilbe' return
//사전순으로 정렬 .sort((a, b)=>a-b)

function solution(n, m, x, y, r, c, k) {
  const dir = [
    [1, 0, 'd'], // 아래
    [0, -1, 'l'], // 왼쪽
    [0, 1, 'r'], // 오른쪽
    [-1, 0, 'u'], // 위
  ];

  let answer = 'impossible';
  let found = false;

  const isValid = (nx, ny) => nx >= 1 && nx <= n && ny >= 1 && ny <= m;

  const dfs = (cx, cy, path, depth) => {
    if (found) return;
    let dist = Math.abs(cx - r) + Math.abs(cy - c);
    let remain = k - depth;

    if (dist > remain || (remain - dist) % 2 !== 0) return;

    if (depth === k && cx === r && cy === c) {
      answer = path;
      found = true;
      return;
    }

    for (let [dx, dy, dChar] of dir) {
      const nx = cx + dx;
      const ny = cy + dy;
      if (isValid(nx, ny)) {
        dfs(nx, ny, path + dChar, depth + 1);
      }
    }
  };

  dfs(x, y, '', 0);
  return answer;
}

//택배 배달과 수거하기

//문제 설명
// i번째 집은 물류창고에서 거리 i만큼 떨어져 있다.
// i번째 집은 j번째 집과 거리 j - i만큼 떨어져 있다.
// 트럭에는 재활용 택배 상자를 최대 cap개
// 각 집에 배달 및 수거할 때, 원하는 개수만큼 택배를 배달 및 수거할 수 있다.
// 트럭 하나로 모든 배달과 수거를 마치고 물류창고까지 돌아올 수 있는 최소 이동 거리

//풀이 설계
// 트럭은 가장 멀리 있는 배달 또는 수거가 필요한 집까지 가서
// 갈 수 있는 한 최대한 배달하고 수거한 후 돌아온다.
// 뒤에서부터 접근 (가장 멀리 있는 집부터).
// 한 번의 이동으로 최대한 많은 배달/수거를 처리.
// 배달이든 수거든 둘 중 하나라도 처리할 게 남아 있으면 그 위치까지 왕복.

// 1. deliveries와 pickups 배열을 역순으로 탐색
// → 가장 멀리 있는 집부터 거슬러 올라오면서 처리.
// 2. 현재 배달해야 하는 양, 수거해야 하는 양 누적
// → 각 루프마다 cap만큼만 처리.
// 3. 한번 이동할 때마다, 가장 멀리 이동해야 했던 집의 인덱스를 기준으로 왕복 거리를 더함.

function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let d = 0; // 배달 상자 수
  let p = 0; // 수거 상자 수

  for (let i = n - 1; i >= 0; i--) {
    d += deliveries[i];
    p += pickups[i];

    // 배달이나 수거할 것이 있다면 이 위치까지 왕복
    while (d > 0 || p > 0) {
      d -= cap;
      p -= cap;
      answer += (i + 1) * 2; // 왕복 거리
    }
  }

  return answer;
}

//표 병합

//문제 정리
//"UPDATE r c value"
// ->(r, c) 위치의 값을 value로 바꿈
//"UPDATE value1 value2"
//->value1을 값으로 가지고 있는 모든 셀을 value2로
//"MERGE r1 c1 r2 c2"
//->(r1, c1) 위치의 셀과 (r2, c2) 위치의 셀을 선택하여 병합
// 두 셀 중 한 셀이 값을 가지고 있을 경우 병합된 셀은 그 값을 갖게 됨
// 두 셀 모두 값을 가지고 있을 경우 병합된 셀은 (r1, c1) 위치의 셀 값을 갖게 됨
// 이후 (r1, c1) 와 (r2, c2) 중 어느 위치를 선택하여도 병합된 셀로 접근.
//"UNMERGE r c"
//->해당 셀의 모든 병합을 해제
//->병합을 해제하기 전 셀이 값을 가지고 있었을 경우 (r, c) 위치의 셀이 그 값을 갖게 됨
//"PRINT r c"
//->(r, c) 위치의 셀을 선택하여 셀의 값을 출력
//->  비어있을 경우 "EMPTY"

function solution(commands) {
  const SIZE = 51;
  const map = Array.from({ length: SIZE }, () => Array(SIZE).fill(''));
  const parent = Array.from({ length: SIZE }, (_, r) => Array.from({ length: SIZE }, (_, c) => [r, c]));

  const find = ([r, c]) => {
    const [pr, pc] = parent[r][c];
    if (pr === r && pc === c) return [r, c];
    return (parent[r][c] = find(parent[pr][pc]));
  };

  const union = ([r1, c1], [r2, c2]) => {
    const p1 = find([r1, c1]);
    const p2 = find([r2, c2]);
    if (p1[0] === p2[0] && p1[1] === p2[1]) return;

    // 병합 시 p1을 대표로
    parent[p2[0]][p2[1]] = p1;
    const val1 = map[p1[0]][p1[1]];
    const val2 = map[p2[0]][p2[1]];

    if (!val1 && val2) {
      map[p1[0]][p1[1]] = val2;
    }
    map[p2[0]][p2[1]] = '';
  };

  const unmerge = ([r, c]) => {
    const root = find([r, c]);
    const saved = map[root[0]][root[1]];
    const group = [];

    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        if (find([i, j])[0] === root[0] && find([i, j])[1] === root[1]) {
          parent[i][j] = [i, j];
          map[i][j] = '';
        }
      }
    }

    map[r][c] = saved;
  };

  const updateAll = (v1, v2) => {
    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        const [pi, pj] = find([i, j]);
        if (map[pi][pj] === v1) {
          map[pi][pj] = v2;
        }
      }
    }
  };

  const answer = [];

  for (let line of commands) {
    const v = line.split(' ');
    if (v[0] === 'UPDATE') {
      if (v.length === 4) {
        const [_, r, c, val] = v;
        const [pr, pc] = find([+r, +c]);
        map[pr][pc] = val;
      } else {
        const [_, v1, v2] = v;
        updateAll(v1, v2);
      }
    } else if (v[0] === 'MERGE') {
      const [_, r1, c1, r2, c2] = v.map(Number);
      union([r1, c1], [r2, c2]);
    } else if (v[0] === 'UNMERGE') {
      const [_, r, c] = v.map(Number);
      unmerge([r, c]);
    } else if (v[0] === 'PRINT') {
      const [_, r, c] = v.map(Number);
      const [pr, pc] = find([r, c]);
      const val = map[pr][pc];
      answer.push(val ? val : 'EMPTY');
    }
  }

  return answer;
}

//포화 가능한 이진 트리
function solution(numbers) {
  const answer = [];

  for (let num of numbers) {
    let bin = num.toString(2);

    // 최소 포화 이진트리 크기 구하기
    let len = 1;
    while ((1 << len) - 1 < bin.length) {
      len++;
    }

    const fullLen = (1 << len) - 1;
    const padded = bin.padStart(fullLen, '0');

    answer.push(isValidTree(padded) ? 1 : 0);
  }

  return answer;
}

function isValidTree(str) {
  const check = (s) => {
    if (s.length === 1) return true;
    const mid = Math.floor(s.length / 2);
    const root = s[mid];
    const left = s.slice(0, mid);
    const right = s.slice(mid + 1);

    if (root === '0' && (left.includes('1') || right.includes('1'))) {
      return false;
    }

    return check(left) && check(right);
  };

  return check(str);
}

//표 병합
function solution(commands) {
  const n = 50;
  const size = n * n;
  const parent = Array.from({ length: size }, (_, i) => i);
  const values = Array(size).fill('');

  const answer = [];

  const getIndex = (r, c) => (r - 1) * n + (c - 1);

  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]); // path compression
    }
    return parent[x];
  }

  function union(a, b) {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA === rootB) return;

    // 병합 시 rootB -> rootA
    const newVal = values[rootA] !== '' ? values[rootA] : values[rootB];

    for (let i = 0; i < size; i++) {
      if (find(i) === rootB) {
        parent[i] = rootA;
      }
    }

    values[rootA] = newVal;
    values[rootB] = '';
  }

  function unmerge(r, c) {
    const idx = getIndex(r, c);
    const root = find(idx);
    const originalVal = values[root];

    const targets = [];
    for (let i = 0; i < size; i++) {
      if (find(i) === root) {
        targets.push(i);
      }
    }

    for (let i of targets) {
      parent[i] = i;
      values[i] = '';
    }

    values[idx] = originalVal;
  }

  for (let cmd of commands) {
    const parts = cmd.split(' ');

    if (parts[0] === 'UPDATE') {
      if (parts.length === 4) {
        const [_, r, c, val] = parts;
        const idx = find(getIndex(+r, +c));
        values[idx] = val;
      } else {
        const [_, val1, val2] = parts;
        for (let i = 0; i < size; i++) {
          if (values[i] === val1) values[i] = val2;
        }
      }
    } else if (parts[0] === 'MERGE') {
      const [_, r1, c1, r2, c2] = parts.map(Number);
      const idx1 = getIndex(r1, c1);
      const idx2 = getIndex(r2, c2);
      union(idx1, idx2);
    } else if (parts[0] === 'UNMERGE') {
      const [_, r, c] = parts.map(Number);
      unmerge(r, c);
    } else if (parts[0] === 'PRINT') {
      const [_, r, c] = parts.map(Number);
      const idx = find(getIndex(r, c));
      answer.push(values[idx] || 'EMPTY');
    }
  }

  return answer;
}
