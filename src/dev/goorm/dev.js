//인공지능 청소기

//purpose
//사용자가 설정한 시간과 장소에 정확히 도착하는 기능

//input
//첫째줄에 테스트 개수
//도착장소(x, y) 시간 n

//problem
//동일한 위치를 두번 이상 지나쳐서 청소 가능
//초기 로봇 청소기 위치:(0,0)
//1초에 한번씩. 상하좌우 중 하나의 방향으로 1의 거리
//n초의 시간에 도착지점(x,y)에 위치해야함

//output
//로봇청소기가 정확한 시간에 도착할 수 있는지 여부 YES OR NO

//procedure
//거리 구하는 함수 getDistance
//while(t--)
//목표좌표와 이동횟수 shift()
//distance거리가 n보다 작을 경우, (n-dis)%2===0인경우 접근 가능

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 맨해튼 거리 계산 함수
const calculateDistance = (r, c, targetR, targetC) => {
  return Math.abs(targetR - r) + Math.abs(targetC - c);
};

function solution(input) {
  let t = Number(input.shift());
  const results = [];

  while (t--) {
    const [x, y, n] = input.shift();
    const distance = calculateDistance(0, 0, x, y);

    // 도달 가능 여부 확인
    if (distance <= n && (n - distance) % 2 === 0) {
      results.push('YES');
    } else {
      results.push('NO');
    }
  }

  console.log(results.join('\n'));
}

let input = [];

rl.on('line', (line) => {
  if (!line) {
    rl.close();
  } else {
    input.push(line.split(' ').map(Number));
  }
});

rl.on('close', () => {
  solution(input);
  process.exit();
});

//소금물의 농도 구하기
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let n, m;

  for await (const line of rl) {
    if (line.trim() === '') {
      rl.close();
    } else {
      [n, m] = line.split(' ').map(Number);
      break;
    }
  }

  let salt = 0.07 * n;
  let saltWater = n + m;
  let s = (salt / saltWater) * 100;

  console.log((Math.floor(s * 100) / 100).toFixed(2));

  process.exit();
})();

//딱지놀이

//문제정리
//별의 개수가 다르다면 많은쪽이 이김
//별 개수가 같고 동그라미가 다르면 많은쪽이 이김
//별,동그라미 같고 네모가 다르다면 //
//별, 동그라미, 네모 같고 세모다르다면 //
//모두 같다면 무승부
//별-4 동그라미-3 네모-2 세모-1

//map함수로 4,3,2,1 만들기
//a와 b개수 세기
// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let input = [];

  for await (const line of rl) {
    if (!line) {
      rl.close();
    } else {
      input.push(line.split(' ').map(Number));
    }
  }

  const n = Number(input.shift());
  let result = [];

  for (let i = 0; i < n; i++) {
    let a = input.shift();
    let b = input.shift();
    let aCount = a.shift();
    let bCount = b.shift();

    a.sort((a, b) => b - a);
    b.sort((a, b) => b - a);

    if (a.join('') === b.join('')) {
      result.push('D');
    } else {
      let aMap = {};
      let bMap = {};

      for (let i = 4; i > 0; i--) {
        aMap[i] = 0;
        bMap[i] = 0;
      }

      a.forEach((v) => (aMap[v] += 1));
      b.forEach((v) => (bMap[v] += 1));

      for (let i = 4; i > 0; i--) {
        if (aMap[i] !== bMap[i]) {
          if (aMap[i] > bMap[i]) {
            result.push('A');
          } else {
            result.push('B');
          }
          break;
        }
      }
    }
  }

  console.log(result.join('\n') + '\n');
  process.exit();
})();

//장마

//배수시스템
//장마 시작 3의 배수가 되는 날, 비 내린뒤 작동
//작동날짜를 기준으로 2일 이내에 비가 내린 위치에서만 작동

//input
//n, m
//마을의 땅 높이
//m개의 줄 s, e집

// Run by Node.js
const readline = require('readline');

//1을 더하는 메서드
const plusOne = (arr, s, state) => {
  let [from, to] = s;

  for (let i = from - 1; i <= to - 1; i++) {
    arr[i] += 1;
    state[i] = true;
  }

  return [arr, state];
};

//1을 빼는 배수 메서드
const minusOne = (arr, state) => {
  for (let i = 0; i < arr.length; i++) {
    if (state[i]) {
      arr[i] -= 1;
    }
  }

  return arr;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let input = [];

  for await (const line of rl) {
    if (!line) {
      rl.close();
    } else {
      input.push(line.split(' '));
    }
  }

  let n, m, k, loc;

  n = +input[0][0];
  m = +input[0][1];

  k = input[1].map(Number);

  loc = input.slice(2).map((v) => v.map(Number));

  //-1 0 1 0 2 집 상태
  //0 0 1 0 2 //t f f f f //1
  //0 1 1 0 2 //t t f f f //2
  //0 1 2 0 2 //t t t f f //3

  //-1 0 1 0 2
  //-1 0 1 1 3
  //-1 0 1 2 4

  let day = 0;
  let state = Array(n).fill(false); //비가 내린 위치 확인
  arr = k;

  while (m--) {
    [arr, state] = plusOne(arr, loc.shift(), state);
    day++;

    if (day % 3 === 0) {
      arr = minusOne(arr, state);
      state = Array(n).fill(false);
      continue;
    }
  }

  console.log(arr.join(' '));

  process.exit();
})();

//계수기 만들기

//input
//n
//각 자리수의 최댓값
//각 자리수의 초기값
//버튼 누르는 횟수 k(1씩 증가)
// Run by Node.js

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];
// let n, max, per, k;

// rl.on('line', function (line) {
//   if (!line) {
//     rl.close();
//   } else {
//     input.push(line.split(' ').map(Number));
//   }
// }).on('close', function () {
//   n = +input[0];
//   max = input[1];
//   per = input[2];
//   k = +input[3];

//   let point = n - 1;

//   for (let p = point; p >= 0; p--) {
//     per[p] += k % (max[p] + 1);
//     k = Math.floor(k / (max[p] + 1));

//     if (per[p] > max[p]) {
//       k += Math.floor(per[p] / (max[p] + 1));
//       per[p] %= max[p] + 1;
//     }
//   }

//   console.log(per.join(''));
//   process.exit();
// });

//어려운 문제

//팩토리얼 계산
//한 자리 수 인지 확인
//아니라면 모든 자릿 수 더하기
const readline = require('readline');

// BigInt 팩토리얼 계산 함수
const fac = (n) => {
  if (n < 0) return -1n;
  else if (n === 0) return 1n;
  else return BigInt(n) * fac(n - 1);
};

// 모든 자리수를 더하는 함수
const calNum = (n) => {
  return n
    .toString()
    .split('')
    .map(Number)
    .reduce((a, c) => a + c, 0);
};

(async () => {
  const rl = readline.createInterface({ input: process.stdin });

  let input;

  for await (const line of rl) {
    if (!line) rl.close();
    else input = +line;
  }

  // 팩토리얼 계산
  let n = fac(input);

  // 한 자리 숫자가 될 때까지 반복해서 자리수를 더함
  while (n >= 10n) {
    n = BigInt(calNum(n));
  }

  console.log(n.toString()); // 결과 출력
  process.exit();
})();

//단풍나무

//find 0이상인 곳
//상하좌우로 0이 인접한 개수 count
//자신에서 count만큼 뺴기
//모든 구역이 끝나면 하루 지남

// Run by Node.js
// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let input = [];

  for await (const line of rl) {
    if (!line) rl.close();
    input.push(line.split(' ').map(Number));
  }

  const n = input.shift()[0];
  let map = input;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let count = 0;

  while (!map.flat().every((v) => v === 0)) {
    count++;
    let changetMap = map.map((v) => [...v]);

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (map[i][j] > 0) {
          let reduceCount = 0;

          for (const [dx, dy] of directions) {
            const nx = i + dx;
            const ny = j + dy;

            if (nx >= 0 && ny >= 0 && nx < n && ny < n && map[nx][ny] === 0) {
              reduceCount++;
            }
          }

          changetMap[i][j] = Math.max(0, map[i][j] - reduceCount);
        }
      }
    }

    map = changetMap;
  }

  console.log(count);
  process.exit();
})();

//0커플
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

  let n = +input.shift();

  let arr = input[0].split(' ').map(Number);

  console.log(arr.reduce((a, c) => a + c, 0));

  process.exit();
})();

//블록게임

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

  //0,0 1
  //1,0 5
  //2,0 2
  //2,1 4
  //1,1 3
  //1,0 2

  //위치담는 상자
  //점수담는 상자
  //위치를 담다가 같은 위치를 담으면 stop
  //뒤에서 부터 같은 위치까지 삭제 점수도 동일

  let n = +input.shift();
  let directionArr = input[0].split('');
  let scoreArr = input[1].split(' ').map(Number);
  let dirNum = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ]; //L, R, U, D

  let coordinateBox = [[0, 0]];
  let scoreBox = [1];

  const caldir = (coord, str) => {
    let [x, y] = coord;

    if (str === 'L') {
      x += dirNum[0][0];
      y += dirNum[0][1];
    } else if (str === 'R') {
      x += dirNum[1][0];
      y += dirNum[1][1];
    } else if (str === 'U') {
      x += dirNum[2][0];
      y += dirNum[2][1];
    } else {
      x += dirNum[3][0];
      y += dirNum[3][1];
    }

    return [x, y];
  };

  for (let i = 0; i < n; i++) {
    let newCoord = caldir(coordinateBox[coordinateBox.length - 1], directionArr[i]);

    //이미 있는 거면 push하기 전 삭제 진행
    let nIndex = coordinateBox.findIndex(([x, y]) => x === newCoord[0] && y === newCoord[1]);

    if (nIndex < 0) {
      coordinateBox.push(newCoord);
      scoreBox.push(scoreArr[i]);
    } else {
      coordinateBox = coordinateBox.slice(0, nIndex);
      coordinateBox.push(newCoord);
      scoreBox = scoreBox.slice(0, nIndex);
      scoreBox.push(scoreArr[i]);
    }
  }

  console.log(scoreBox.reduce((a, c) => a + c, 0));

  process.exit();
})();

// ADAS 시스템(테스트케이스 하나만 통과)
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

  let [w, h] = input[0].split(' ');
  let map = input.slice(1).map((v) => v.split(''));
  let dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let danDir = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, 1],
  ];

  //s의 좌표찾기
  //상하좌우 좌표 위치 찾기
  //상하좌우중 우선순위 좌표찾기
  //선택한 좌표의 상하좌우대각선좌표의 p의 개수 세기(위험점수)
  //위험점수 누적
  //2번부터 e의 좌표에 도착할때까지 반복
  let now, target;

  //출발지점과 도착지점 좌표
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      if (map[i][j] === 'S') {
        now = [i, j];
      }
      if (map[i][j] === 'E') {
        target = [i, j];
      }
    }
  }

  //위험점수 계산
  const calScore = (now) => {
    const [x, y] = now;
    let queue = [[x, y]];
    let count = 0;

    for (const [dx, dy] of danDir) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && ny >= 0 && nx < w && ny < h) {
        if (map[nx][ny] === 'P') {
          queue.push([nx, ny]);
          count++;
        }
      }
    }

    let n = Array.from(new Set(queue.map(JSON.stringify)), JSON.parse);
    return n.length - 1;
  };

  //초기점수
  let score = 0;

  while (true) {
    let [x, y] = now;
    if (x === target[0] && y === target[1]) {
      console.log('r', score);
      return;
    }
    let places = [];

    for (const [dx, dy] of dir) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && ny >= 0 && nx < w && ny < h) {
        places.push([nx, ny]);
      }
    }

    places.sort((a, b) => {
      const priority = { E: -2, P: -1 }; // 우선순위 설정
      const aPriority = priority[map[a[0]][a[1]]] || 0;
      const bPriority = priority[map[b[0]][b[1]]] || 0;

      if (aPriority !== bPriority) return aPriority - bPriority;
      return a[0] - b[0] || a[1] - b[1]; // 같은 우선순위일 경우 좌표 정렬
    });

    if (map[now[0]][now[1]] === 'P') {
      score += calScore(now) - 3;
    } else {
      score += calScore(now);
    }

    now = places[0];
  }

  process.exit();
})();

//불이야(테스트 8/10)
const readline = require('readline');

(async () => {
  const rl = readline.createInterface({ input: process.stdin });
  const input = [];
  for await (const line of rl) {
    if (!line) {
      rl.close();
    } else {
      input.push(line);
    }
  }

  let [r, c] = input.shift().split(' ').map(Number);
  const map = input.map((v) => v.split(''));

  let end;
  const queue = [];
  const visited = Array.from({ length: r }, () => Array(c).fill(false));

  // 시작점과 도착점 설정
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (map[i][j] === '@') {
        queue.push([i, j, 0]); // 시작 지점을 큐에 넣기
        visited[i][j] = true; // 방문 처리
      }
      if (map[i][j] === '&') {
        end = [i, j];
      }
    }
  }

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (queue.length) {
    const [x, y, dist] = queue.shift();

    // 도착 지점에 도달한 경우 최단 거리 반환
    if (x === end[0] && y === end[1]) {
      console.log(dist - 1);
      return;
    }

    // 상하좌우로 이동
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      // 유효한 범위 내에 있고, 방문하지 않았으며, 장애물이 아닐 때만 이동
      if (nx >= 0 && ny >= 0 && nx < r && ny < c && !visited[nx][ny] && map[nx][ny] !== '#') {
        visited[nx][ny] = true;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }

  // 도착 지점에 도달할 수 없는 경우 -1 출력
  console.log(-1);

  process.exit();
})();

//발전기
// const readline = require('readline');
// let rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let input = [];
// rl.on('line', (line) => {
//   if (!line) {
//     rl.close();
//   } else {
//     input.push(line);
//   }
// });

// rl.on('close', () => {
//   let n = +input.shift();
//   let arr = input.map((v) => v.split(' ').map(Number));
//   let dir = [
//     [0, 1],
//     [0, -1],
//     [1, 0],
//     [-1, 0],
//   ];

//   const bfs = (i, j) => {
//     let queue = [[i, j]];

//     while (queue.length) {
//       const [x, y] = queue.shift();

//       for (const [dx, dy] of dir) {
//         const nx = x + dx;
//         const ny = y + dy;

//         if (nx >= 0 && ny >= 0 && nx < n && ny < n && arr[nx][ny] === 1) {
//           arr[nx][ny] = 0;
//           queue.push([nx, ny]);
//         }
//       }
//     }
//   };

//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (arr[i][j] === 1) {
//         arr[i][j] = 0;
//         bfs(i, j);
//         count += 1;
//       }
//     }
//   }

//   console.log(count);
// });

//발전기2
// const readline = require('readline');
// let rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let input = [];
// rl.on('line', (line) => {
//   if (!line) {
//     rl.close();
//   } else {
//     input.push(line);
//   }
// });

// rl.on('close', () => {
//   let [n, k] = input[0].split(' ').map(Number);
//   let arr = input.slice(1).map((v) => v.split(' ').map(Number));
//   let visited = Array.from({ length: n }, () => Array(n).fill(false));
//   let complex = [];
//   let dir = [
//     [0, 1],
//     [0, -1],
//     [1, 0],
//     [-1, 0],
//   ];

//   const bfs = (i, j, num) => {
//     visited[i][j] = true;

//     let count = 1;
//     let queue = [[i, j]];

//     while (queue.length) {
//       const [x, y] = queue.shift();

//       for (const [dx, dy] of dir) {
//         const nx = x + dx;
//         const ny = y + dy;

//         if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
//           if (!visited[nx][ny] && arr[nx][ny] === num) {
//             queue.push([nx, ny]);
//             visited[nx][ny] = true;
//             count += 1;
//           }
//         }
//       }
//     }

//     return count;
//   };

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (!visited[i][j]) {
//         let count = bfs(i, j, arr[i][j]);
//         if (count >= k) {
//           complex.push(arr[i][j]);
//         }
//       }
//     }
//   }

//   let countComplex = new Map();

//   complex.forEach((v) => {
//     countComplex.set(v, (countComplex.get(v) || 0) + 1);
//   });

//   let maxCount = 0;
//   let maxNum = null;

//   for (let [num, count] of countComplex) {
//     if (maxCount < count) {
//       maxCount = count;
//       maxNum = num;
//     } else if (maxCount === count) {
//       if (num > maxNum) {
//         maxNum = num;
//       }
//     }
//   }

//   console.log(maxNum);
// });

//과일구매
// const readline = require('readline');
// let rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let input = [];
// rl.on('line', (line) => {
//   if (!line) {
//     rl.close();
//   } else {
//     input.push(line);
//   }
// });

// //몇배인지에 따라 오름차순으로 정렬

// rl.on('close', () => {
//   let [n, k] = input[0].split(' ').map(Number); //개수, 돈
//   //n개의 줄 가격, 포만감
//   let arr = input.slice(1).map((v) => v.split(' ').map(Number));
//   arr.map((v) => {
//     v.push(v[1] / v[0]);
//   });

//   arr.sort((a, b) => {
//     if (a[2] === b[2]) {
//       return b[1] - a[1];
//     }
//     return b[2] - a[2];
//   });

//   let sumPrice = 0;
//   let sumF = 0;

//   while (sumPrice < k && arr.length > 0) {
//     let [price, full, x] = arr.shift();

//     if (price + sumPrice <= k) {
//       sumPrice += price;
//       sumF += full;
//     } else {
//       let n = k - sumPrice;
//       sumF += x * n;
//       sumPrice += n;
//       break;
//     }
//   }

//   console.log(sumF);
// });

//연합
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let lines = [];

// rl.on('line', (line) => {
//   lines.push(line.split(' ').map(Number));
// }).on('close', () => {
//   const [N, M] = lines[0];
//   let cnt = 1;
//   let graph = {};
//   visited = Array(N + 1).fill(false);
//   const check = Array.from(Array(N + 1), () => Array(N + 1).fill(false));

//   for (let i = 1; i <= M; i++) {
//     let [start, end] = lines[i];
//     if (!graph[start]) {
//       graph[start] = [];
//     }
//     graph[start].push(end);
//     check[start][end] = true;
//   }

//   for (let i = 1; i <= N; i++) {
//     if (visited[i] === false) {
//       let queue = [i];

//       while (queue.length > 0) {
//         const currentNode = queue.shift();
//         visited[currentNode] = true;

//         for (const nextNode of graph[currentNode] || []) {
//           if (graph[nextNode] && check[nextNode][currentNode] && !visited[nextNode]) {
//             queue.push(nextNode);
//           }
//         }
//       }

//       cnt++;
//     }
//   }
//   console.log(cnt - 1);
//   process.exit();
// });

//구름이의 여행
// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let input = [];
  for await (const line of rl) {
    if (line === '0') {
      rl.close();
    } else {
      input.push(line);
    }
  }

  let [n, m, k] = input[0].split(' ').map(Number);
  let arr = input.slice(1).map((v) => v.split(' ').map(Number));
  let graph = Array.from({ length: n + 1 }, () => []);

  for (let i = 0; i < m; i++) {
    let [a, b] = arr[i];
    graph[a].push(b);
    graph[b].push(a);
  }

  const bfs = (start, goal, k) => {
    let visited = Array(n + 1).fill(false);

    let queue = [[start, 0]];
    visited[start] = true;

    while (queue.length) {
      let [node, dist] = queue.shift();

      if (node === goal) {
        return dist;
      }

      for (const next of graph[node]) {
        if (!visited[next]) {
          visited[next] = true;

          if (dist + 1 <= k) {
            queue.push([next, dist + 1]);
          }
        }
      }
    }

    return -1;
  };

  const s = bfs(1, n, k);
  console.log(s <= k && s > 0 ? 'YES' : 'NO');

  process.exit();
})();
