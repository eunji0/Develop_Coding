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
