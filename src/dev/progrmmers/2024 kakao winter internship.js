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

//산 모양 타일링

//문제 정리
// 정삼각형 2n+1개를 이어붙여 윗변의 길이가 n, 아랫변의 길이가 n+1인 사다리꼴
// 정삼각형타일과 마름모타일(정삼각형타일 2개)로 빈 곳이 없도록 채움
// 사다리꼴의 윗변의 길이를 나타내는 정수 n
// 사다리꼴 윗변에 붙인 정삼각형을 나타내는 1차원 정수 배열 tops
// return 10007(DIV)로 나눈 나머지

function solution(n, tops) {
  // n번째 삼각형이 case 0 ~ 2일 때, n번째까지의 누적 경우의 수 배열
  const case0to2 = Array(n).fill(1);
  // n번째 삼각형이 case 3일 때, n번째까지의 누적 경우의 수 배열
  const case3 = Array(n).fill(1);
  let DIV = 10007;

  // 첫 번째 삼각형에서 가능한 case의 개수
  case0to2[0] = tops[0] ? 3 : 2;
  for (let i = 1; i < n; i++) {
    if (tops[i]) {
      case0to2[i] = (case0to2[i - 1] * 3 + case3[i - 1] * 2) % DIV;
    } else {
      case0to2[i] = (case0to2[i - 1] * 2 + case3[i - 1]) % DIV;
    }
    // case 3의 경우, 삼각형 존재여부와 관계없이 동일
    case3[i] = (case0to2[i - 1] + case3[i - 1]) % DIV;
  }
  //  현재 삼각형이 case 0 ~ 2인 누적 경우의 수 + case 3인 누적 경우의 수
  return (case0to2[n - 1] + case3[n - 1]) % DIV;
}

//주사위 고르기

//문제정리
//6개 면의 주사위에 1-n까지의 수가 적혀있는dice배열들
//a와 b 반반씩 가져감
//a의 선택에 의해 나머지를 b가 가지게 됨
//a가 승리할 확률이 높아지도록 주사위 선택

//풀이 접근
// 먼저 A가 어떤 주사위를 선택할 건지, A의 가능한 조합을 모두 구한다. 그에 맞춰 나머지로 B가 선택한 주사위 들의 조합을 구한다.
// 그다음 선택한 주사위들로 구할 수 있는 A와 B의 합들을 구한다.
// 그 다음 그 둘의 합을 비교해 A가 이길 확률들을 계산해야한다

//a의 가능한 조합들 생성
const getSums = (dice, dices, diceSize) => {
  const sums = [];

  const calSums = (count, sum) => {
    if (count === diceSize) {
      sums.push(sum);
      return;
    }

    for (let i = 0; i < 6; i++) {
      calSums(count + 1, sum + dice[dices[count]][i]);
    }
  };

  calSums(0, 0);

  return sums.sort((a, b) => a - b);
};

const getCombinations = (diceNums, diceSize) => {
  let results = [];

  //크기가 1이라면 배열로 만들어서 그냥 return
  if (diceSize === 1) {
    return diceNums.map((v) => [v]);
  }
  diceNums.forEach((one, index, arr) => {
    let rest = arr.slice(index + 1);
    let combination = getCombinations(rest, diceSize - 1);
    let merge = combination.map((v) => [one, ...v]);
    results.push(...merge);
  });

  return results;
};

const countWins = (aSums, bSums) => {
  let winCount = 0;
  let bLen = bSums.length;

  // bSums는 정렬되어 있으므로 이분 탐색으로 aSum보다 작은 값의 개수 찾기
  for (let a of aSums) {
    let left = 0;
    let right = bLen;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (bSums[mid] < a) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    winCount += left; // a가 이기는 경우의 수
  }

  return winCount;
};

function solution(dice) {
  const n = dice.length;
  const diceNums = Array(n)
    .fill(0)
    .map((_, i) => i);

  const half = n / 2;
  const aDicesList = getCombinations(diceNums, half);
  const bDicesList = aDicesList.map((aCombo) => diceNums.filter((i) => !aCombo.includes(i)));

  let maxWin = -1;
  let bestA = [];

  aDicesList.forEach((aCombo, i) => {
    const bCombo = bDicesList[i];
    const aSums = getSums(dice, aCombo, half);
    const bSums = getSums(dice, bCombo, half);
    const wins = countWins(aSums, bSums);

    if (wins > maxWin) {
      maxWin = wins;
      bestA = aCombo;
    }
  });

  // 주사위 번호를 1부터 시작하므로 +1
  return bestA.map((i) => i + 1).sort((a, b) => a - b);
}

//n+1 카드게임

//문제 정리
// n/3장을 가진채로 시작
// 각 라운드마다 카드 두장을 뽑음.
// 남은 카드 뭉치가 없다면 게임 종료
// 뽑은 카드는 한 장당 동전 하나 소모 or 선택하지 않아 동전 소모 x
// 카드의 수의 합이 n+1이 되도록 2장씩 냄.
// 낼 수 없다면 게임 종료

function solution(coin, cards) {
  const n = cards.length;
  const start = n / 3;
  let index = 0;
  const num = n + 1;
  const map = new Map();
  const save = new Map();
  let round = 0;

  for (let i = 0; i < start; i++) {
    if (map.has(num - cards[i])) {
      round++;
      map.delete(num - cards[i]);
    } else {
      map.set(cards[i], true);
    }
  }

  for (index; index < start; index++) {
    let i = index * 2 + start;
    const num1 = cards[i];
    const num2 = cards[i + 1];

    if (coin && map.has(num - num1)) {
      coin--;
      round++;
      map.delete(num - num1);
    } else {
      save.set(num1, true);
    }

    if (coin && map.has(num - num2)) {
      coin--;
      round++;
      map.delete(num - num2);
    } else {
      save.set(num2, true);
    }

    if (round) {
      round--;
    } else {
      let flag = false;
      if (coin >= 2) {
        for (let key of save.keys()) {
          if (save.has(num - key)) {
            save.delete(key);
            save.delete(num - key);
            coin -= 2;
            flag = true;
            break;
          }
        }
      }

      if (!flag) break;
    }
  }

  return index + 1;
}
