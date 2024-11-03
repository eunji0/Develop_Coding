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
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', (line) => {
    input.push(line);
});

rl.on('close', () => {
    const [N, M] = input[0].split(' ').map(Number);
    let beforeHeights = input[1].split(' ').map(Number);
    let rainyDay = input.slice(2).map(line => line.split(' ').map(Number));
    let waterHeights  = new Array(N).fill(0);

    for (let i = 0; i < M; i++) {
        const [start, end] = rainyDay[i];
        for (let j = start - 1; j < end; j++) waterHeights [j]++;
      
        if ((i + 1) % 3 === 0) {
          	let recentRainyDays = new Set();
            for (let k = Math.max(0, i - 2); k <= i; k++) {
                const [s, e] = rainyDay[k];
                for (let j = s - 1; j < e; j++) {
                    recentRainyDays.add(j);
                }
            }
          	for(let idx of recentRainyDays){
              	if(waterHeights[idx] > 0) waterHeights[idx]--;
            }
        }
    }
  
    let finalHeights = beforeHeights.map((height, idx) => height + waterHeights [idx]);
    console.log(finalHeights.join(" "));
});