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
