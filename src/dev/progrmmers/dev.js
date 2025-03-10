const { configure } = require('@testing-library/react');
const { map } = require('jquery');
const { get } = require('request');

//완주하지 못한 선수
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

//전화번호 목록
function solution(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }

  return true;
}

//의상
function solution(clothes) {
  let count = new Map();

  clothes.forEach((v) => {
    count.set(v[1], (count.get(v[1]) || 0) + 1);
  });

  return [...count.values()].reduce((a, c) => a * (c + 1), 1) - 1;
}

//[PCCP 기출문제] 1번 / 동영상 재생기

//10초전으로 이동 - prev
//현재 위치가 10초 미만인 경우 영상의 처음 위치로 이동

//10초후로 이동 - next
//동영상의 남은 시간이 10초 미만일 경우 영상의 마지막 위치로 이동

//오프닝 건너뛰기
//현재 재생 위치가 오프닝 구간(op_start ≤ 현재 재생 위치 ≤ op_end)인 경우 자동으로 오프닝이 끝나는 위치로 이동

//동영상의 길이를 나타내는 video_len
//기능이 수행되기 직전의 재생위치를 나타내는 pos
//오프닝 시작 시각을 나타내는 op_start
//오프닝이 끝나는 시각을 나타내는 op_end
//사용자의 입력을 나타내는 1차원 commands

// 오프닝 구간인지 여부
const checkOpeningTime = (x, op_start, op_end) => {
  return x >= op_start && x <= op_end;
};

// 시간을 초로 변환하는 함수
const transTime = (str) => {
  const [mm, ss] = str.split(':');
  const result = mm * 60 + ss * 1;
  return result;
};

// 초를 "mm:ss" 형식으로 변환하는 함수
const transStr = (time) => {
  let mm = parseInt(time / 60);
  let ss = time % 60;
  mm = String(mm).padStart(2, '0');
  ss = String(ss).padStart(2, '0');
  return `${mm}:${ss}`;
};

// 10초 전으로 이동하는 함수
const prev = (x) => {
  return x - 10 < 0 ? 0 : x - 10;
};

// 10초 후로 이동하는 함수
const next = (x, video_len) => {
  return x + 10 > video_len ? video_len : x + 10;
};

function solution(video_len, pos, op_start, op_end, commands) {
  // 입력된 시간들을 모두 초 단위로 변환
  video_len = transTime(video_len);
  pos = transTime(pos);
  op_start = transTime(op_start);
  op_end = transTime(op_end);

  // 오프닝 구간에 있는지 체크하고 건너뛰기
  if (checkOpeningTime(pos, op_start, op_end)) {
    pos = op_end;
  }

  // commands 처리
  commands.forEach((v) => {
    if (v === 'prev') {
      pos = prev(pos);
    } else if (v === 'next') {
      pos = next(pos, video_len);
    }

    // 이동 후에 오프닝 구간에 있는지 다시 체크
    if (checkOpeningTime(pos, op_start, op_end)) {
      pos = op_end;
    }
  });

  // 최종 위치를 "mm:ss" 형식으로 반환
  return transStr(pos);
}

//가장 많이 받은 선물

//친구 이름을 인덱스에 대응시키기 위한 맵
//선물을 주고받은 기록을 저장하는 2차원 배열
//각 친구가 받은 선물 지수를 계산하기 위한 배열
//다음 달에 선물을 받을 친구의 수를 기록하는 배열

function solution(friends, gifts) {
  const len = friends.length;
  const nameMap = new Map();
  const giftTable = new Array(len).fill(0).map((_) => new Array(len).fill(0));
  const rankInfo = new Array(len).fill(0);
  const nextMonth = new Array(len).fill(0);

  friends.forEach((v, i) => {
    nameMap.set(v, i);
  });

  gifts.forEach((v) => {
    const [from, to] = v.split(' ');
    giftTable[nameMap.get(from)][nameMap.get(to)]++;
  });

  for (let i = 0; i < len; i++) {
    rankInfo[i] = giftTable[i].reduce((a, c) => (a += c), 0);

    for (let j = 0; j < len; j++) {
      rankInfo[i] -= giftTable[j][i];
    }
  }

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (giftTable[i][j] > giftTable[j][i]) nextMonth[i]++;
      if (giftTable[i][j] < giftTable[j][i]) nextMonth[j]++;
      if (giftTable[i][j] === giftTable[j][i]) {
        if (rankInfo[i] > rankInfo[j]) nextMonth[i]++;
        if (rankInfo[i] < rankInfo[j]) nextMonth[j]++;
      }
    }
  }

  return Math.max(...nextMonth);
}

//붕대 감기
//t초 동안 붕대를 감으면서 1초마다 x만큼의 체력을 회복
// t초 연속으로 붕대를 감는 데 성공한다면 y만큼의 체력을 추가로 회복
// 현재 체력이 최대 체력보다 커지는 것은 불가능

//최대 체력을 넘는지 확인하는 메서드
//최대체력을 넘는다면 0 아니면 초당 회복량을 더함
//연속 성공 상태, 연속 성공을 성공한다면 초당회복량과 추가 회복량을 더함

function solution(bandage, health, attacks) {
  const maxHealth = health;

  const [t, x, y] = bandage;

  const lastTimeAttacks = 0;

  for (const [attackTime, damage] of attacks) {
    const timeDiff = attackTime - lastTimeAttacks - 1;

    const heal = timeDiff * x + Math.floor(timeDiff / t) * y;

    health = Math.min(health + heal, maxHealth);

    health -= damage;

    if (health <= 0) return -1;

    lastTimeAttacks = attackTime;
  }

  return health;
}

//달리기 경주
function solution(players, callings) {
  let s = new Map();

  players.forEach((v, i) => {
    s.set(v, i);
  });

  callings.forEach((v) => {
    let curIdx = s.get(v);

    if (curIdx > 0) {
      let prevIdx = curIdx - 1;
      let prevP = players[prevIdx];

      players[curIdx] = prevP;
      players[prevIdx] = v;

      s.set(v, prevIdx);
      s.set(prevP, curIdx);
    }
  });

  return players;
}

//추억점수
function solution(name, yearning, photo) {
  let s = new Map();
  let result = [];

  name.forEach((v, i) => {
    s.set(v, yearning[i]);
  });

  for (let i = 0; i < photo.length; i++) {
    let arr = photo[i];
    let total = 0;

    arr.forEach((c) => {
      total += s.get(c) || 0;
    });

    result.push(total);
  }

  return result;
}

//공원 산책
function solution(park, routes) {
  let start = [];

  let n = park.length;

  for (let i = 0; i < n; i++) {
    park[i] = park[i].split('');
  }

  let m = park[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (park[i][j] === 'S') {
        start = [i, j];
      }
    }
  }

  while (routes.length) {
    let [dir, num] = routes.shift().split(' ');
    num = parseInt(num);

    let newStart = [...start];
    let block = false;

    if (dir === 'E') {
      if (start[1] + num >= m) {
        continue;
      } else {
        for (let i = 1; i <= num; i++) {
          if (park[start[0]][start[1] + i] === 'X') {
            block = true;
            break;
          }
        }
        if (!block) newStart[1] += num;
      }
    } else if (dir === 'W') {
      if (start[1] - num < 0) {
        continue;
      } else {
        for (let i = 1; i <= num; i++) {
          if (park[start[0]][start[1] - i] === 'X') {
            block = true;
            break;
          }
        }
        if (!block) newStart[1] -= num;
      }
    } else if (dir === 'S') {
      if (start[0] + num >= n) {
        continue;
      } else {
        for (let i = 1; i <= num; i++) {
          if (park[start[0] + i][start[1]] === 'X') {
            block = true;
            break;
          }
        }
        if (!block) newStart[0] += num;
      }
    } else if (dir === 'N') {
      if (start[0] - num < 0) {
        continue;
      } else {
        for (let i = 1; i <= num; i++) {
          if (park[start[0] - i][start[1]] === 'X') {
            block = true;
            break;
          }
        }
        if (!block) newStart[0] -= num;
      }
    }

    if (!block) {
      start = newStart;
    }
  }
  return [start[0], start[1]];
}

//바탕화면 정리

//파일들의 위치들을 모은 배열
//파일들의 위치들 중 x와 y가 가장 작은 값과 큰 값을 뽑음
//배열 반환

function solution(wallpaper) {
  let n = wallpaper.length;
  let m = wallpaper[0].length;

  let files = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (wallpaper[i][j] === '#') {
        files.push([i, j]);
      }
    }
  }

  let minx = Infinity;
  let miny = Infinity;

  let maxx = 0;
  let maxy = 0;

  files.forEach(([a, b]) => {
    minx = Math.min(minx, a);
    miny = Math.min(miny, b);
    maxx = Math.max(maxx, a);
    maxy = Math.max(maxy, b);
  });

  return [minx, miny, maxx + 1, maxy + 1];
}

//덧칠하기

//벽길이 나열 (false)
//칠해야 하는 부분 true
//페인트를 칠하며 false로 표기

function solution(n, m, section) {
  let count = 0;
  let now = 0;

  for (const s of section) {
    if (now < s) {
      count++;
      now = s + m - 1;
    }
  }

  return count;
}

//대충 만든 자판
//몇번 눌렀는지 count
//키맵에서 현재 몇번 자판 위치에 있는지
//키맵 전체에서 적은 버튼 수를 뽑아야 함

//map들 중 x를 찾아 제일 작은 값을 리턴

function solution(keymap, targets) {
  let answer = [];
  let map = new Map();

  for (const key of keymap) {
    key.split('').map((v, i) => (map[v] = map[v] < i + 1 ? map[v] : i + 1));
  }

  for (const target of targets) {
    answer.push(target.split('').reduce((a, c) => (a += map[c]), 0) || -1);
  }

  return answer;
}

//카드뭉치
function solution(cards1, cards2, goal) {
  while (goal.length) {
    let now = goal.shift();

    if (cards1[0] === now) {
      cards1.shift();
    } else if (cards2[0] === now) {
      cards2.shift();
    } else {
      return 'No';
    }
  }
  return 'Yes';
}

//둘만의 암호
function solution(s, skip, index) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  let skips = skip.split('');

  let remake = alphabet.filter((v) => !skips.includes(v));

  let result = '';

  s.split('').map((v) => {
    let n = remake.indexOf(v) + index;
    result += remake[n % remake.length];
  });

  return result;
}

//개인정보 수집 유효기간
function solution(today, terms, privacies) {
  let result = [];
  const t = today.split('.').map(Number);
  const dates = t[0] * 12 * 28 + t[1] * 28 + t[2];

  const tt = {};
  terms.forEach((v) => {
    let [a, b] = v.split(' ');
    tt[a] = Number(b);
  });

  privacies.forEach((e, i) => {
    const [day, n] = e.split(' ');
    const dd = day.split('.').map(Number);
    const days = dd[0] * 12 * 28 + dd[1] * 28 + dd[2] + tt[n] * 28;

    if (days <= dates) result.push(i + 1);
  });

  return result;
}

//크기가 작은 부분 문자열
function solution(t, p) {
  let len = p.length;
  let result = 0;

  for (let i = 0; i < t.length - len + 1; i++) {
    let num = t.slice(i, i + len);
    if (Number(num) <= Number(p)) {
      result++;
    }
  }

  return result;
}

//가장 가까운 같은 글자
function solution(s) {
  return [...s].map((v, i) => {
    let count = s.slice(0, i).lastIndexOf(v);
    return count < 0 ? count : i - count;
  });
}

//문자열 나누기
function solution(s) {
  let answer = 0;
  let current;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (count === 0) {
      answer++;
      current = s[i];
      count = 1;
    } else {
      if (current !== s[i]) count--;
      else count++;
    }
  }

  return answer;
}

//명예의 전당(1)
function solution(k, score) {
  let home = [];
  let result = [];

  while (score.length) {
    let nowScore = score.shift();
    home.push(nowScore);
    home.sort((a, b) => b - a);

    if (home.length > k) {
      home.pop();
    }

    result.push(home[home.length - 1]);
  }

  return result;
}

//기사 단원의 무기
const nn = (n) => {
  let count = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      count++;
      if (i !== n / i) {
        count++;
      }
    }
  }
  return count;
};

function solution(number, limit, power) {
  let arr = [];
  let result = 0;

  for (let i = 1; i <= number; i++) {
    arr.push(nn(i));
  }

  arr.forEach((v) => (v > limit ? (result += power) : (result += v)));

  return result;
}

//과일 장수
function solution(k, m, score) {
  score.sort((a, b) => b - a);
  let result = 0;

  for (let i = 0; i < score.length; i++) {
    const arr = score.slice(i, i + m);
    console.log(arr);

    if (arr.length === m) {
      result += arr[m - 1] * m;
    }
    i = i + m - 1;
  }

  return result;
}

//푸드 파이트 대회
function solution(food) {
  var answer = '';

  for (let i = 1; i < food.length; i++) {
    let n = food[i];
    if (n % 2 === 1) {
      n -= 1;
    }
    answer += `${i}`.repeat(n / 2);
  }
  return answer + '0' + answer.split('').reverse().join('');
}

//햄버거 만들기
function solution(ingredient) {
  let stack = [];
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);

    if (stack.length >= 4 && stack.slice(-4).join('') === '1231') {
      stack.splice(-4);
      count++;
    }
  }

  return count;
}

//옹알이2
function solution(babbling) {
  let standard = ['aya', 'ye', 'woo', 'ma'];

  return babbling.reduce((a, c, i) => {
    for (let i = 0; i < standard.length; i++) {
      if (c.includes(standard[i].repeat(2))) return a;
    }

    for (let i = 0; i < standard.length; i++) {
      c = c.split(standard[i]).join(' ').trim();
    }

    if (c) return a;

    return a++;
  }, 0);
}

//콜라 문제
function solution(a, b, n) {
  let s = 0;

  while (n >= a) {
    s += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a);
  }

  return s;
}

//삼총사
function solution(number) {
  let result = 0;

  const com = (cur, start) => {
    if (cur.length === 3) {
      result += cur.reduce((a, c) => a + c, 0) === 0 ? 1 : 0;
      return;
    }

    for (let i = start; i < number.length; i++) {
      com([...cur, number[i]], i + 1);
    }
  };

  com([], 0);
  return result;
}

//숫자 짝꿍
function solution(X, Y) {
  let result = [];

  let countx = Array(10).fill(0);
  let county = Array(10).fill(0);

  for (let char of X) {
    countx[char]++;
  }

  for (let char of Y) {
    county[char]++;
  }

  for (let i = 0; i < 10; i++) {
    let com = Math.min(countx[i], county[i]);
    for (let j = 0; j < com; j++) {
      result.push(i);
    }
  }

  result.sort((a, b) => b - a);

  if (result.length === 0) {
    return '-1';
  } else if (result[0] === 0) {
    return '0';
  } else {
    return result.join('');
  }
}

//성격 유형 검사하기
function solution(survey, choices) {
  const MBTI = {};
  const types = ['RT', 'CF', 'JM', 'AN'];

  types.forEach((v) => {
    v.split('').forEach((a) => (MBTI[a] = 0));
  });

  choices.forEach((v, i) => {
    const [disa, a] = survey[i];

    MBTI[v > 4 ? a : disa] += Math.abs(v - 4);
  });

  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join('');
}

//신고 결과 받기
function solution(id_list, report, k) {
  let count = {};
  let sliceC = {};
  let stop = [];
  report = [...new Set(report)];

  id_list.forEach((v) => {
    count[v] = 0;
    sliceC[v] = 0;
  });

  report.forEach((v) => {
    const [a, b] = v.split(' ');
    count[b] += 1;
  });

  for (let c in count) {
    if (count[c] >= k) {
      stop.push(c);
    }
  }

  report.forEach((v) => {
    const [a, b] = v.split(' ');
    if (stop.includes(b)) {
      sliceC[a] += 1;
    }
  });

  return Object.entries(sliceC).map((v) => v[1]);
}

//나머지가 1이 되는 수 찾기
function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}

//최소직사각형
function solution(sizes) {
  sizes.forEach((v) => {
    let [a, b] = v;
    if (a < b) {
      v[0] = b;
      v[1] = a;
    }
  });

  sizes.sort((a, b) => b[0] - a[0]);

  let a = sizes[0][0];

  sizes.sort((a, b) => b[1] - a[1]);

  let b = sizes[0][1];

  return a * b;
}

//없는 숫자 더하기
function solution(numbers) {
  numbers.sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) {
      result += i;
    }
  }

  return result;
}

//부족한 금액 계산하기
function solution(price, money, count) {
  let sum = 0;

  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }

  return sum - money > 0 ? sum - money : 0;
}

//숫자 문자열과 영단어
function solution(s) {
  let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  let answer = s;

  for (let i = 0; i < numbers.length; i++) {
    answer = answer.split(numbers[i]).join(i);
  }

  return +answer;
}

//약수의 개수와 덧셈
const countM = (m) => {
  let count = 0;

  for (let i = 1; i * i <= m; i++) {
    if (m % i === 0) {
      count++;
      if (i !== m / i) {
        count++;
      }
    }
  }

  return count;
};

function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    if (countM(i) % 2 === 0) {
      result += i;
    } else {
      result -= i;
    }
  }

  return result;
}

//로또의 최고 순위와 최저 순위
function solution(lottos, win_nums) {
  lottos.sort((a, b) => a - b);
  win_nums.sort((a, b) => a - b);

  let same = 0; //0제외 일치하는 수

  for (let i = 0; i < win_nums.length; i++) {
    if (win_nums.includes(lottos[i])) {
      same++;
    }
  }

  let zero = 0; //0의 개수

  lottos.forEach((v) => (v === 0 ? zero++ : zero));

  let max = same + zero;
  max = 7 - max === 7 ? 6 : 7 - max;

  let min = 7 - same === 7 ? 6 : 7 - same;

  return [max, min];
}

//음양 더하기
function solution(absolutes, signs) {
  let result = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      result += absolutes[i];
    } else {
      result -= absolutes[i];
    }
  }

  return result;
}

//3진법 뒤집기
function solution(n) {
  return parseInt(n.toString(3).split('').reverse().join(''), 3);
}

//두 개 뽑아서 더하기
function solution(numbers) {
  let result = [];

  numbers.sort((a, b) => a - b);

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.push(numbers[i] + numbers[j]);
    }
  }

  let r = [...new Set(result)];
  return r.sort((a, b) => a - b);
}

//키패드 누르기
function solution(numbers, hand) {
  let answer = [];
  let leftHandPosition = '*';
  let rightHandPosition = '#';

  numbers.forEach((num) => {
    if (num === 1 || num === 4 || num === 7) {
      answer.push('L');
      leftHandPosition = num;
      return;
    }

    if (num === 3 || num === 6 || num === 9) {
      answer.push('R');
      rightHandPosition = num;
      return;
    }

    const leftDis = getDistance(leftHandPosition, num);
    const rightDis = getDistance(rightHandPosition, num);

    if (leftDis === rightDis) {
      if (hand === 'right') {
        answer.push('R');
        rightHandPosition = num;
        return;
      } else {
        answer.push('L');
        leftHandPosition = num;
        return;
      }
    }

    if (leftDis > rightDis) {
      answer.push('R');
      rightHandPosition = num;
    } else {
      answer.push('L');
      leftHandPosition = num;
    }
  });

  return answer.join('');
}
const getDistance = (locatedNumber, target) => {
  const keyPad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  const nowPosition = keyPad[locatedNumber];
  const targetPosition = keyPad[target];

  return Math.abs(targetPosition[0] - nowPosition[0]) + Math.abs(targetPosition[1] - nowPosition[1]);
};

//크레인 인형뽑기 게임
function solution(board, moves) {
  const h = board.length;
  const stack = [];

  moves.forEach((m) => {
    for (let i = 0; i < h; i++) {
      if (board[i][m - 1] > 0) {
        stack.push(board[i][m - 1]);
        board[i][m - 1] = 0;
        break;
      }
    }
  });

  let count = 0;
  const t = [];
  while (stack.length) {
    const currentDoll = stack.shift();
    if (t.length && t[t.length - 1] === currentDoll) {
      t.pop();
      count += 2;
    } else {
      t.push(currentDoll);
    }
  }

  return count;
}

//실패율
function solution(N, stages) {
  let m = stages.length;
  let arr = Array(N).fill(0);
  let map = {};

  for (let i = 0; i < N; i++) {
    let count = 0;

    stages.map((v) => (v === i + 1 ? count++ : count));

    arr[i] = count / m;

    m -= count;
  }

  arr.map((v, i) => {
    map[i + 1] = v;
  });

  map = Object.entries(map);

  map.sort((a, b) => b[1] - a[1]);

  return map.map((v) => +v[0]);
}

//체육복
function solution(n, lost, reserve) {
  let student = {};
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    student[i] = 1;
  }

  lost.forEach((v) => (student[v] -= 1));
  reserve.forEach((v) => (student[v] += 1));

  for (let i = 1; i <= n; i++) {
    if (student[i] === 0 && student[i + 1] === 2) {
      student[i + 1] -= 1;
      student[i] += 1;
    } else if (student[i] === 0 && student[i - 1] === 2) {
      student[i - 1] -= 1;
      student[i] += 1;
    }
  }

  for (let i in student) {
    if (student[i] > 0) {
      answer++;
    }
  }

  return answer;
}

//모의고사
function solution(answers) {
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let score = [0, 0, 0];

  answers.forEach((answer, i) => {
    if (answer === one[i % one.length]) score[0]++;
    if (answer === two[i % two.length]) score[1]++;
    if (answer === three[i % three.length]) score[2]++;
  });

  let max = Math.max(...score);

  return score.map((v, i) => (v === max ? i + 1 : null)).filter((v) => v !== null);
}

//k번째수
function solution(array, commands) {
  let result = [];

  commands.forEach((v) => {
    let [i, j, k] = v;

    let n = array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
    result.push(n);
  });

  return result;
}

//완주하지 못한 선수
function solution(participant, completion) {
  let arr = {};

  participant.forEach((v) => (arr[v] ? (arr[v] += 1) : (arr[v] = 1)));

  completion.forEach((v) => (arr[v] -= 1));

  return Object.entries(arr)
    .filter((v) => v[1] > 0)
    .map((v) => v[0])
    .toString();
}

//1차 다트 게임
function singlePoint(stack) {
  if (stack.length > 0) {
    const point = Math.pow(stack.pop(), 1);
    stack.push(point);

    return true;
  }
  return false;
}
function doublePoint(stack) {
  if (stack.length > 0) {
    const point = Math.pow(stack.pop(), 2);
    stack.push(point);

    return true;
  }
  return false;
}
function triplePoint(stack) {
  if (stack.length > 0) {
    const point = Math.pow(stack.pop(), 3);
    stack.push(point);

    return true;
  }
  return false;
}
function star(stack) {
  if (stack.length > 0) {
    const point = stack.pop() * 2;

    if (stack.length >= 1) {
      const prevPoint = stack.pop() * 2;
      stack.push(prevPoint);
    }

    stack.push(point);

    return true;
  }
  return false;
}
function acha(stack) {
  if (stack.length > 0) {
    const point = stack.pop() * -1;
    stack.push(point);
    return true;
  }
  return false;
}

const operators = {
  S: singlePoint,
  D: doublePoint,
  T: triplePoint,
  '*': star,
  '#': acha,
};
function isOperator(character) {
  return operators[character];
}
function solution(dartResult) {
  var answer = 0;
  const stack = [];

  for (let i = 0; i < dartResult.length; i++) {
    const number = parseInt(dartResult.slice(i));

    if (Number.isInteger(number)) {
      stack.push(number);
      i += number.toString().length - 1;
    } else {
      const operator = isOperator(dartResult.charAt(i));
      operator(stack);
    }
  }
  console.log(stack);
  answer = stack.reduce((accumulator, currentValue) => accumulator + currentValue);
  return answer;
}

//1차 비밀지도
function solution(n, arr1, arr2) {
  arr1 = arr1.map((v) => v.toString(2).padStart(n, '0').split(''));
  arr2 = arr2.map((v) => v.toString(2).padStart(n, '0').split(''));

  let map = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] === '1' || arr2[i][j] === '1') {
        map[i][j] = 1;
      }
    }
  }

  let result = [];

  map.forEach((v) => {
    let r = '';
    r += v.map((vv) => (vv === 1 ? '#' : ' ')).join('');
    result.push(r);
  });

  return result;
}

//예산
function solution(d, budget) {
  d.sort((a, b) => a - b);

  let sum = 0;
  let count = 0;

  d.forEach((v) => {
    if (v + sum <= budget) {
      sum += v;
      count++;
    }
  });

  return count;
}

//소수 만들기
function isPrime(num) {
  if (num <= 1) return false;

  if (num === 2) return true;

  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

function solution(nums) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        arr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  let prime = 0;

  arr.forEach((v) => (isPrime(v) ? prime++ : prime));

  return prime;
}

//직사각형 별찍기
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);

  for (let i = 0; i < b; i++) {
    let r = '';
    for (let j = 0; j < a; j++) {
      r += '*';
    }

    console.log(r);
  }
});

//x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
  let answer = [];
  let p = x;

  while (n--) {
    answer.push(x);
    x += p;
  }

  return answer;
}

//행렬의 덧셈
function solution(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let a = [];
    for (let j = 0; j < arr1[0].length; j++) {
      a.push(arr1[i][j] + arr2[i][j]);
    }
    result.push(a);
  }

  return result;
}

//[PCCP 기출문제] 3번 / 충돌위험 찾기
//from에서 to까지 히스토리 기록
//일치할때까지 좌표 변환
//충돌지점찾기
//위험상황 횟수 return
function solution(points, routes) {
  const getPosition = (r, c, targetR, targetC) => {
    if (r !== targetR) return r > targetR ? [r - 1, c] : [r + 1, c];
    if (c !== targetC) return c > targetC ? [r, c - 1] : [r, c + 1];
    return [r, c];
  };

  let arr = [];
  let maxImdex = 0;
  routes.forEach((route) => {
    let startPoint = route.shift();
    let history = [points[startPoint - 1]];

    while (route.length) {
      let [nowR, nowC] = history.at(-1);
      let [targetR, targetC] = points[route[0] - 1];

      let [nextR, nextC] = getPosition(nowR, nowC, targetR, targetC);

      history.push([nextR, nextC]);
      if (nextR === targetR && nextC === targetC) {
        route.shift();
      }
    }

    maxImdex = Math.max(maxImdex, history.length - 1);
    arr.push(history);
  });

  let answer = 0;
  let index = 0;

  while (index <= maxImdex) {
    let crushPoints = [];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (
          arr[i][index] &&
          arr[j][index] &&
          arr[i][index][0] === arr[j][index][0] &&
          arr[i][index][1] === arr[j][index][1]
        ) {
          let r = crushPoints.some((v) => v[0] === arr[i][index][0] && v[1] === arr[i][index][1]);

          if (!r) {
            crushPoints.push([arr[i][index][0], arr[i][index][1]]);
            ++answer;
          }
        }
      }
    }
    ++index;
  }

  return answer;
}

//도넛과 막대 그래프

//어떤 그래프인지 구분
//생성한 쟁점 생성
const getInfo = (edges) => {
  const info = edges.reduce((map, key) => {
    if (!map.has(key[0])) {
      map.set(key[0], [1, 0]);
    } else {
      const [give, recieve] = map.get(key[0]);
      map.set(key[0], [give + 1, recieve]);
    }

    if (!map.has(key[1])) {
      map.set(key[1], [0, 1]);
    } else {
      const [give, recieve] = map.get(key[1]);
      map.set(key[1], [give, recieve + 1]);
    }
    return map;
  }, new Map());

  return info;
};

const chkInfo = (info) => {
  const res = new Array(4).fill(0);

  for (const [key, io] of info) {
    const [give, recieve] = io;
    if (give >= 2 && recieve === 0) {
      res[0] = key;
    } else if (give === 0) {
      res[2]++;
    } else if (give >= 2 && recieve >= 2) {
      res[3]++;
    }
  }

  res[1] = info.get(res[0])[0] - res[2] - res[3];
  return res;
};

const solution = (edges) => {
  const mapInfo = getInfo(edges);
  const answer = chkInfo(mapInfo);
  return answer;
};

//[PCCP 기출문제] 2번 / 석유 시추
//각 석유덩어리의 크기 bfs로 찾기
//시추관의 위치와 접해있는 석유 덩어리 정리
//bfs에서 덩어리 크기와 해당 위치 묶기(map)
//그 중 가장 큰 석유량 반환
function solution(land) {
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const n = land.length;
  const m = land[0].length;
  let visited = Array.from({ length: n }, () => Array(m).fill(false));

  let arr = [];

  const bfs = (i, j) => {
    const queue = [[i, j]];
    let loc = [[i, j]];
    let count = 1;
    visited[i][j] = true;

    let cols = new Set();
    cols.add(j);

    while (queue.length) {
      const [x, y] = queue.shift();

      for (const [dx, dy] of dir) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx >= 0 && ny >= 0 && nx < n && ny < m && land[nx][ny] === 1 && !visited[nx][ny]) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
          loc.push([nx, ny]);
          count++;
          cols.add(ny);
        }
      }
    }

    arr.push({ size: count, cols: [...cols] });
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (land[i][j] === 1 && !visited[i][j]) {
        bfs(i, j);
      }
    }
  }

  let maxOil = 0;

  for (let col = 0; col < m; col++) {
    let oilSum = 0;

    for (const { size, cols } of arr) {
      if (cols.includes(col)) {
        oilSum += size;
      }
    }

    maxOil = Math.max(maxOil, oilSum);
  }

  return maxOil;
}

//요격 시스템
function solution(targets) {
  targets.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let last = -1;

  for (const [start, end] of targets) {
    if (last < start) {
      count++;
      last = end - 0.1;
    }
  }

  return count;
}

//두 원 사이의 정수 쌍
//4분의 1크기에서 점 개수를 구해 *4
//큰 원의 포함된 점 수에서 작은 원의 안에 속해있는 점 빼기
function solution(r1, r2) {
  var answer = 0;
  for (let x = 1; x <= r2; x++) {
    let max = Math.floor(Math.sqrt(r2 * r2 - x * x));
    let min = 0;
    if (r1 > x) {
      min = Math.ceil(Math.sqrt(r1 * r1 - x * x));
    } else {
      min = 0;
    }
    answer += max - min + 1;
  }
  return answer * 4;
}

//과제 진행하기
function timetTo(time) {
  const [hh, mm] = time.split(':').map(Number);
  return hh * 60 + mm;
}

function solution(plans) {
  let stack = [];

  const sortedPlan = plans
    .map(([subject, time, count]) => [subject, timetTo(time), Number(count)])
    .sort((a, b) => b[1] - a[1]);

  while (sortedPlan.length) {
    let [subject, time, count] = sortedPlan.pop();

    stack.forEach((v, i) => {
      if (time < v[1]) stack[i][1] += count;
    });
    stack.push([subject, time + count]);
  }

  return stack.sort((a, b) => a[1] - b[1]).map((v) => v[0]);
}

//폰켓몬
function solution(nums) {
  let a = new Set(nums).size;
  let b = Math.floor(nums.length / 2);
  return Math.min(a, b);
}

//완주하지 못한 선수
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  let map = new Map();

  participant.forEach((v) => {
    map.set(v, (map.get(v) || 0) + 1);
  });

  completion.forEach((v) => {
    if (map.get(v) > 0) {
      map.set(v, map.get(v) - 1);
    }
  });

  let result = '';
  for (let [a, b] of map) {
    if (b > 0) {
      result += a.repeat(b);
    }
  }
  return result;
}

//전화번호 목록
function solution(phone_book) {
  var answer = true;
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }
  return answer;
}

//의상
function solution(clothes) {
  let map = new Map();

  for (let [a, b] of clothes) {
    map.set(b, (map.get(b) || 0) + 1);
  }

  let sum = 1;

  for (let count of map.values()) {
    sum *= count + 1;
  }

  return (sum -= 1);
}

//베스트앨범
function solution(genres, plays) {
  let arr = [];

  for (let i = 0; i < genres.length; i++) {
    arr.push([genres[i], plays[i], i]);
  }

  let map = new Map();

  for (let [a, b, c] of arr) {
    map.set(a, (map.get(a) || 0) + b);
  }

  map = [...map].sort((a, b) => b[1] - a[1]);

  let graph = new Map();

  for (let [genre, plays, idx] of arr) {
    if (!graph.has(genre)) {
      graph.set(genre, []);
    }
    graph.get(genre).push([plays, idx]);
  }

  for (let [genres, arr] of graph) {
    graph.set(
      genres,
      arr.sort((a, b) => b[0] - a[0]),
    );
  }

  let answer = [];

  for (let [g, sum] of map) {
    let songs = graph.get(g);
    answer.push(songs[0][1]);
    if (songs.length > 1) {
      answer.push(songs[1][1]);
    }
  }

  return answer;
}

//같은 숫자는 싫어
function solution(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let now = arr[i];
    if (now === arr[i + 1]) {
      continue;
    } else {
      result.push(now);
      now = arr[i + 1];
    }
  }

  return result;
}

//기능개발
function solution(progresses, speeds) {
  let days = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));
  let result = [];

  let maxDay = days[0];
  let count = 0;

  for (let day of days) {
    if (day <= maxDay) {
      count++;
    } else {
      result.push(count);
      count = 1;
      maxDay = day;
    }
  }

  result.push(count);

  return result;
}

//올바른 괄호
function solution(s) {
  let box = 0;

  for (let v of s) {
    if (v === '(') {
      box++;
    } else {
      if (box === 0) return false;
      box--;
    }
  }

  return box === 0;

  return box === 0;
}

//프로세스
function solution(priorities, location) {
  let list = priorities.map((v, i) => ({
    my: i === location,
    val: v,
  }));

  let count = 0;

  while (true) {
    let cur = list.splice(0, 1)[0];
    if (list.some((a) => a.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
  }
}

//다리를 지나는 트럭
function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge = [];

  let bridge_weight = 0;

  while (truck_weights.length > 0 || bridge.length > 0) {
    time++;

    if (bridge.length > 0 && bridge[0][1] === 0) {
      bridge_weight -= bridge.shift()[0];
    }

    if (truck_weights.length > 0) {
      let nextTruck = truck_weights[0];
      if (bridge_weight + nextTruck <= weight) {
        bridge.push([nextTruck, bridge_length]);
        bridge_weight += nextTruck;
        truck_weights.shift();
      }
    }

    bridge.forEach((truck) => truck[1]--);
  }

  return time;
}

//주식가격
function solution(prices) {
  var answer = [];
  for (let i = 0; i < prices.length; i++) {
    let now = prices[i];
    let count = 1;
    for (let j = i + 1; j < prices.length; j++) {
      count++;
      if (now > prices[j]) {
        break;
      }
    }
    answer.push(count);
  }
  return answer;
}

//더 맵게
class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    let top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return top;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      if (this.heap[parentIdx] <= this.heap[index]) break;
      [this.heap[parentIdx], this.heap[index]] = [this.heap[index], this.heap[parentIdx]];
      index = parentIdx;
    }
  }

  size() {
    return this.heap.length;
  }

  bubbleDown() {
    let index = 0;
    let length = this.heap.length;

    while (true) {
      let leftIdx = index * 2 + 1;
      let rightIdx = index * 2 + 2;
      let smallest = index;
      if (leftIdx < length && this.heap[leftIdx] < this.heap[smallest]) {
        smallest = leftIdx;
      }
      if (rightIdx < length && this.heap[rightIdx] < this.heap[smallest]) {
        smallest = rightIdx;
      }

      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}

function solution(scoville, K) {
  let count = 0;
  let minH = new MinHeap();

  scoville.forEach((v) => minH.push(v));

  while (minH.size() > 1) {
    let first = minH.pop();

    if (first >= K) return count;
    let sec = minH.pop();
    let newC = first + sec * 2;

    minH.push(newC);
    count++;
  }

  return minH.pop() >= K ? count : -1;
}

//디스크 컨트롤러
class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    let top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return top;
  }

  size() {
    return this.heap.length;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      if (this.heap[parentIdx][1] <= this.heap[index][1]) break;
      [this.heap[parentIdx], this.heap[index]] = [this.heap[index], this.heap[parentIdx]];
      index = parentIdx;
    }
  }

  bubbleDown() {
    let index = 0;
    let length = this.heap.length;

    while (true) {
      let leftIdx = index * 2 + 1;
      let rightIdx = index * 2 + 2;
      let smallest = index;

      if (leftIdx < length && this.heap[leftIdx][1] < this.heap[smallest][1]) {
        smallest = leftIdx;
      }
      if (rightIdx < length && this.heap[rightIdx][1] < this.heap[smallest][1]) {
        smallest = rightIdx;
      }

      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}

function solution(jobs) {
  let curTime = 0;
  let totalTime = 0;
  let jobIndex = 0;
  let jobCount = jobs.length;

  jobs.sort((a, b) => a[0] - b[0]);

  let minH = new MinHeap();

  while (jobIndex < jobCount || minH.size() > 0) {
    while (jobIndex < jobCount && jobs[jobIndex][0] <= curTime) {
      minH.push(jobs[jobIndex]);
      jobIndex++;
    }

    if (minH.size() > 0) {
      let [start, dur] = minH.pop();
      curTime += dur;
      totalTime += curTime - start;
    } else {
      curTime = jobs[jobIndex][0];
    }
  }

  return Math.floor(totalTime / jobCount);
}

//이중우선순위큐
class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    let top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return top;
  }

  top() {
    return this.heap.length ? this.heap[0] : null;
  }

  size() {
    return this.heap.length;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      if (this.heap[parentIdx] <= this.heap[index]) break;
      [this.heap[parentIdx], this.heap[index]] = [this.heap[index], this.heap[parentIdx]];
      index = parentIdx;
    }
  }

  bubbleDown() {
    let index = 0;
    let length = this.heap.length;

    while (true) {
      let leftIdx = index * 2 + 1;
      let rightIdx = index * 2 + 2;
      let smallest = index;

      if (leftIdx < length && this.heap[leftIdx] < this.heap[smallest]) {
        smallest = leftIdx;
      }
      if (rightIdx < length && this.heap[rightIdx] < this.heap[smallest]) {
        smallest = rightIdx;
      }

      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  top() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    let top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return top;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      if (this.heap[parentIdx] >= this.heap[index]) break;
      [this.heap[index], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[index]];
      index = parentIdx;
    }
  }

  bubbleDown() {
    let index = 0;
    let length = this.heap.length;
    while (true) {
      let leftIdx = index * 2 + 1;
      let rightIdx = index * 2 + 2;
      let largest = index;

      if (leftIdx < length && this.heap[leftIdx] > this.heap[largest]) {
        largest = leftIdx;
      }

      if (rightIdx < length && this.heap[rightIdx] > this.heap[largest]) {
        largest = rightIdx;
      }

      if (largest === index) break;
      [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
      index = largest;
    }
  }
}

function solution(operations) {
  let minH = new MinHeap();
  let maxH = new MaxHeap();
  let count = 0;
  let deleted = new Set();

  operations.forEach((v) => {
    let [op, num] = v.split(' ');
    num = +num;

    if (op === 'I') {
      minH.push(num);
      maxH.push(num);
      count++;
    } else if (num === -1 && count > 0) {
      while (minH.size() && deleted.has(minH.top())) minH.pop();
      deleted.add(minH.pop());
      count--;
    } else if (num === 1 && count > 0) {
      while (maxH.size() && deleted.has(maxH.top())) maxH.pop();
      deleted.add(maxH.pop());
      count--;
    }

    if (count === 0) {
      minH = new MinHeap();
      maxH = new MaxHeap();
      deleted.clear();
    }
  });

  while (minH.size() && deleted.has(minH.top())) minH.pop();
  while (maxH.size() && deleted.has(maxH.top())) maxH.pop();

  return count > 0 ? [maxH.top(), minH.top()] : [0, 0];
}

//k번째수
function solution(array, commands) {
  let result = [];
  commands.forEach((v) => {
    let [a, b, c] = v;
    result.push(array.slice(a - 1, b).sort((a, b) => a - b)[c - 1]);
  });
  return result;
}

//가장큰수
function solution(numbers) {
  var answer = numbers
    .map((v) => v + '')
    .sort((a, b) => (b + a) * 1 - (a + b) * 1)
    .join('');
  return answer[0] === '0' ? '0' : answer;
}

//h-index
function solution(citations) {
  citations.sort((a, b) => b - a);
  return citations.filter((el, idx) => el >= idx + 1).length;
}

//최소 직사각형
function solution(sizes) {
  var answer = 0;
  sizes = sizes.map((v) => v.sort((a, b) => a - b));
  let maxA = Math.max(...sizes.map((v) => v[0]));
  let maxB = Math.max(...sizes.map((v) => v[1]));

  return maxA * maxB;
}

//모의고사
function solution(answers) {
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let aCount = 0,
    bCount = 0,
    cCount = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === one[i % one.length]) aCount++;
    if (answers[i] === two[i % two.length]) bCount++;
    if (answers[i] === three[i % three.length]) cCount++;
  }

  let scores = [
    [1, aCount],
    [2, bCount],
    [3, cCount],
  ];

  let maxScore = Math.max(...scores.map((v) => v[1]));

  return scores.filter((v) => v[1] === maxScore).map((v) => v[0]);
}

//소수찾기
function solution(numbers) {
  const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  var answer = new Set();

  const pp = (arr, fixed) => {
    if (arr.length) {
      for (let i = 0; i < arr.length; i++) {
        let newF = arr[i] + fixed;
        answer.add(+newF);
        let rest = arr.slice(0, i).concat(arr.slice(i + 1));

        pp(rest, newF);
      }
    }
  };

  pp(numbers.split(''), '');

  return [...answer].filter(isPrime).length;
}

//카펫
function solution(brown, yellow) {
  let total = brown + yellow;

  for (let h = 3; h <= total / h; h++) {
    if (total % h === 0) {
      let w = total / h;

      if ((w - 2) * (h - 2) === yellow) {
        return [w, h];
      }
    }
  }
}

//피로도
function solution(k, dungeons) {
  let len = dungeons.length;
  let ans = 0;
  let visited = Array(len).fill(0);

  const dfs = (k, cnt) => {
    ans = Math.max(cnt, ans);

    for (let j = 0; j < len; j++) {
      if (k >= dungeons[j][0] && !visited[j]) {
        visited[j] = 1;
        dfs(k - dungeons[j][1], cnt + 1);
        visited[j] = 0;
      }
    }
  };

  dfs(k, 0);
  return ans;
}

//피로도
function solution(k, dungeons) {
  let len = dungeons.length;
  let ans = 0;
  let visited = Array(len).fill(0);

  const dfs = (k, cnt) => {
    ans = Math.max(cnt, ans);

    for (let j = 0; j < len; j++) {
      if (k >= dungeons[j][0] && !visited[j]) {
        visited[j] = 1;
        dfs(k - dungeons[j][1], cnt + 1);
        visited[j] = 0;
      }
    }
  };

  dfs(k, 0);
  return ans;
}

//전력망을 둘로 나누기
function solution(n, wires) {
  let min = n;
  let graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of wires) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const bfs = (start, removedArr) => {
    let q = [start];
    let visited = Array(n + 1).fill(false);
    let count = 0;
    visited[start] = true;

    while (q.length) {
      let node = q.shift();
      count++;

      for (const next of graph[node]) {
        if (
          !visited[next] &&
          !(node === removedArr[0] && next === removedArr[1]) &&
          !(next === removedArr[0] && node === removedArr[1])
        ) {
          visited[next] = true;
          q.push(next);
        }
      }
    }

    return count;
  };

  for (const [a, b] of wires) {
    let c1 = bfs(a, [a, b]);
    let c2 = n - c1;

    min = Math.min(min, Math.abs(c1 - c2));
  }

  return min;
}

//모음사전
function solution(words) {
  return words.split('').reduce((r, c, i) => r + [781, 156, 31, 6, 1][i] * ['A', 'E', 'I', 'O', 'U'].indexOf(c) + 1, 0);
}

//체육복

//시작 체육복 소지자 count = reserve.length
//lost forEach문 순회(v)
//v-1이 reserve에 있으면 , reserve에서 해당 splice후 count++
//v-1이 없으면 v+1
function solution(n, lost, reserve) {
  var answer = 0;
  let graph = Array(n + 1).fill(1);

  lost.forEach((v) => (graph[v] -= 1));
  reserve.forEach((v) => (graph[v] += 1));

  for (let i = 1; i <= n; i++) {
    if (graph[i] === 2 && graph[i - 1] === 0) {
      graph[i - 1]++;
      graph[i]--;
    } else if (graph[i] === 2 && graph[i + 1] === 0) {
      graph[i + 1]++;
      graph[i]--;
    }
  }

  for (let i of graph) {
    if (i >= 1) {
      answer++;
    }
  }
  return (answer -= 1);
}

//조이스틱
function solution(name) {
  let total = 0;
  let move = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    total += Math.min(name.charCodeAt(i) - 'A'.charCodeAt(0), 'Z'.charCodeAt(0) - name.charCodeAt(i) + 1);
    let next = i + 1;
    while (next < name.length && name[next] === 'A') next++;

    move = Math.min(move, i * 2 + (name.length - next), (name.length - next) * 2 + i);
  }

  return total + move;
}

//큰 수 만들기
function solution(number, k) {
  let stack = [];

  for (let num of number) {
    while (stack.length > 0 && k > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      k--;
    }
    stack.push(num);
  }

  stack = stack.slice(0, stack.length - k);
  return stack.join('');
}

//구명보트
function solution(people, limit) {
  people.sort((a, b) => a - b);
  let count = 0;
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
    count++;
  }
  return count;
}

//섬 연결하기
function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]);
  let parent = Array(n)
    .fill(0)
    .map((_, i) => i);

  function find(x) {
    if (parent[x] === x) return x;
    return (parent[x] = find(parent[x]));
  }

  function union(a, b) {
    let rootA = find(a);
    let rootB = find(b);
    if (rootA !== rootB) parent[rootB] = rootA;
  }

  let answer = 0;
  let count = 0;

  for (let [a, b, c] of costs) {
    if (find(a) !== find(b)) {
      union(a, b);
      answer += c;
      count++;
    }

    if (count === n - 1) break;
  }
  return answer;
}

//단속카메라
function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let startCount = -30001;

  for (let [start, end] of routes) {
    if (startCount < start) {
      count++;
      startCount = end;
    }
  }

  return count;
}

//n으로 표현
function solution(N, number) {
  if (N === number) return 1;

  let dp = Array.from({ length: 9 }, () => new Set());

  for (let i = 1; i <= 8; i++) {
    dp[i].add(Number(String(N).repeat(i)));

    for (let j = 1; j < i; j++) {
      for (let n1 of dp[j]) {
        for (let n2 of dp[i - j]) {
          dp[i].add(n1 + n2);
          dp[i].add(n1 - n2);
          dp[i].add(n1 * n2);
          if (n2 !== 0) dp[i].add(Math.floor(n1 / n2));
        }
      }
    }

    if (dp[i].has(number)) return i;
  }

  return -1;
}

//정수 삼각형
function solution(triangle) {
  let n = triangle.length;
  let dp = Array.from({ length: n }, (_, i) => [...triangle[i]]);

  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }

  return dp[0][0];
}

//등굣길
function solution(m, n, puddles) {
  let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let [a, b] of puddles) {
    dp[b][a] = -1;
  }

  dp[1][1] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (i === 1 && j === 1) continue;
      if (dp[i][j] === -1) {
        dp[i][j] = 0;
      } else {
        let up = i > 1 ? dp[i - 1][j] : 0;
        let left = j > 1 ? dp[i][j - 1] : 0;
        dp[i][j] = (up + left) % 1000000007;
      }
    }
  }

  return dp[n][m];
}

//타겟 넘버
function solution(numbers, target) {
  let answer = 0;
  getAnswer(0, 0);
  function getAnswer(x, values) {
    if (x < numbers.length) {
      getAnswer(x + 1, values + numbers[x]);
      getAnswer(x + 1, values - numbers[x]);
    } else {
      if (values === target) {
        answer++;
      }
    }
  }
  return answer;
}

//네트워크
function solution(n, computers) {
  let visited = Array(n).fill(false);
  let count = 0;

  const dfs = (node) => {
    visited[node] = true;
    for (let next = 0; next < n; next++) {
      if (computers[node][next] === 1 && !visited[next]) {
        dfs(next);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      count++;
    }
  }

  return count;
}

//게임 맵 최단거리
function solution(maps) {
  let n = maps.length;
  let m = maps[0].length;

  let queue = [[0, 0, 1]];
  let dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (queue.length) {
    let [x, y, dist] = queue.shift();

    if (x === n - 1 && y === m - 1) return dist;

    for (const [dx, dy] of dir) {
      let nx = x + dx;
      let ny = y + dy;

      if (nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] === 1) {
        queue.push([nx, ny, dist + 1]);
        maps[nx][ny] = 0;
      }
    }
  }
  return -1;
}

//단어 변환
function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  let queue = [[begin, 0]];
  let visited = new Set();

  while (queue.length) {
    let [cur, steps] = queue.shift();

    if (cur == target) return steps;

    for (let word of words) {
      if (!visited.has(word) && canTrans(cur, word)) {
        visited.add(word);
        queue.push([word, steps + 1]);
      }
    }
  }

  return 0;
}

const canTrans = (word1, word2) => {
  let count = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) count++;
    if (count > 1) return false;
  }

  return count === 1;
};

//여행경로
function solution(tickets) {
  let routes = {};
  let answer = [];

  tickets.forEach(([from, to]) => {
    if (!routes[from]) routes[from] = [];
    routes[from].push(to);
  });

  for (let route in routes) {
    routes[route].sort();
  }

  const dfs = (airport) => {
    while (routes[airport] && routes[airport].length) {
      let nextAirport = routes[airport].shift();
      dfs(nextAirport);
    }
    answer.push(airport);
  };

  dfs('ICN');

  return answer.reverse();
}

//퍼즐 조각 채우기
function solution(game_board, table) {
  let dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let n = game_board.length;

  const visitedBoard = Array.from({ length: n }, () => Array(n).fill(false));
  const visitedTable = Array.from({ length: n }, () => Array(n).fill(false));

  const bfs = (board, x, y, target, visited) => {
    let queue = [[x, y]];
    let blocks = [[x, y]];
    visited[x][y] = true;

    while (queue.length) {
      let [cx, cy] = queue.shift();

      for (const [dx, dy] of dir) {
        const nx = cx + dx;
        const ny = cy + dy;

        if (nx >= 0 && ny >= 0 && nx < n && ny < n && !visited[nx][ny] && board[nx][ny] === target) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
          blocks.push([nx, ny]);
        }
      }
    }
    return normalizeShape(blocks);
  };

  const normalizeShape = (blocks) => {
    let minX = Math.min(...blocks.map((v) => v[0]));
    let minY = Math.min(...blocks.map((v) => v[1]));

    return blocks.map(([x, y]) => [x - minX, y - minY]).sort();
  };

  const rotate90 = (shape) => {
    let rotated = shape.map(([x, y]) => [y, -x]);
    return normalizeShape(rotated);
  };

  let emptySpaces = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (game_board[i][j] === 0 && !visitedBoard[i][j]) {
        emptySpaces.push(bfs(game_board, i, j, 0, visitedBoard));
      }
    }
  }

  let puzzlePieces = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (table[i][j] === 1 && !visitedTable[i][j]) {
        puzzlePieces.push(bfs(table, i, j, 1, visitedTable));
      }
    }
  }

  function matchPiece(space, piece) {
    for (let i = 0; i < 4; i++) {
      if (JSON.stringify(space) === JSON.stringify(piece)) return true;
      piece = rotate90(piece);
    }
    return false;
  }

  let filledCount = 0;
  let usedPieces = new Array(puzzlePieces.length).fill(false);

  for (let space of emptySpaces) {
    for (let i = 0; i < puzzlePieces.length; i++) {
      if (!usedPieces[i] && matchPiece(space, puzzlePieces[i])) {
        filledCount += space.length;
        usedPieces[i] = true;
        break;
      }
    }
  }

  return filledCount;
}

//입국심사
function solution(n, times) {
  let low = 1;
  let high = Math.max(...times) * n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let people = times.reduce((a, time) => a + Math.floor(mid / time), 0);

    if (people < n) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
}

//징검다리
function solution(distance, rocks, n) {
  rocks.push(distance);
  rocks.sort((a, b) => a - b);

  let low = 1;
  let high = distance;
  let answer = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let prev = 0;
    let removed = 0;

    for (let rock of rocks) {
      if (rock - prev < mid) {
        removed++;
      } else {
        prev = rock;
      }
    }

    if (removed > n) {
      high = mid - 1;
    } else {
      answer = mid;
      low = mid + 1;
    }
  }

  return answer;
}

//가장 먼 노드
function solution(n, edge) {
  let graph = Array.from({ length: n + 1 }, () => []);

  for (let [a, b] of edge) {
    graph[a].push(b);
    graph[b].push(a);
  }

  let queue = [1];
  let distances = Array(n + 1).fill(-1);
  distances[1] = 0;

  while (queue.length) {
    let node = queue.shift();

    for (let next of graph[node]) {
      if (distances[next] === -1) {
        queue.push(next);
        distances[next] = distances[node] + 1;
      }
    }
  }

  let maxDist = Math.max(...distances);
  return distances.filter((v) => v === maxDist).length;
}

//순위
function solution(n, results) {
  let graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  for (let [a, b] of results) {
    graph[a][b] = 1;
    graph[b][a] = -1;
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (graph[i][k] === 1 && graph[k][j] === 1) {
          graph[i][j] = 1;
          graph[j][i] = -1;
        }
      }
    }
  }

  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= n; j++) {
      if (graph[i][j] !== 0) count++;
    }

    if (count === n - 1) answer++;
  }

  return answer;
}

//방의 개수
function solution(arrows) {
  let answer = 0;
  const directions = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];

  let visitedNodes = new Set();
  let visitedEdges = new Set();

  let x = 0,
    y = 0;
  visitedNodes.add(`0,0`);

  for (let arrow of arrows) {
    for (let step = 0; step < 2; step++) {
      let nx = x + directions[arrow][0];
      let ny = y + directions[arrow][1];

      let nodeKey = `${nx},${ny}`;
      let edgeKey = `${x},${y}-${nx},${ny}`;
      let edgeReverseKey = `${nx},${ny}-${x},${y}`;
      if (visitedNodes.has(nodeKey) && !visitedEdges.has(edgeKey)) {
        answer++;
      }

      visitedNodes.add(nodeKey);
      visitedEdges.add(edgeKey);
      visitedEdges.add(edgeReverseKey);

      x = nx;
      y = ny;
    }
  }

  return answer;
}

//리코쳇 로봇
function solution(board) {
  let dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  board = board.map((v) => v.split(''));
  let start = [];
  let goal = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'R') {
        start = [i, j];
      }
      if (board[i][j] === 'G') {
        goal = [i, j];
      }
    }
  }

  let queue = [[...start, 0]];
  let visited = Array.from({ length: board.length }, () => Array(board[0].length).fill(false));
  visited[start[0]][start[1]] = true;

  while (queue.length) {
    let [x, y, count] = queue.shift();

    if (x === goal[0] && y === goal[1]) return count;

    for (let [dx, dy] of dir) {
      let nx = x,
        ny = y;

      while (
        nx + dx >= 0 &&
        nx + dx < board.length &&
        ny + dy >= 0 &&
        ny + dy < board[0].length &&
        board[nx + dx][ny + dy] !== 'D'
      ) {
        nx += dx;
        ny += dy;
      }

      if (!visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, count + 1]);
      }
    }
  }
  return -1;
}

//완전범죄
function solution(info, n, m) {
  let dp = Array.from({ length: info.length + 1 }, () => Array(n).fill(Infinity));

  dp[0][0] = 0;

  for (let i = 0; i < info.length; i++) {
    let [a, b] = info[i];

    for (let j = n - 1; j >= 0; j--) {
      if (dp[i][j] < Infinity) {
        if (j + a < n) dp[i + 1][j + a] = Math.min(dp[i + 1][j + a], dp[i][j]);

        if (dp[i][j] + b < m) dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j] + b);
      }
    }
  }

  let minA = -1;
  for (let j = 0; j < n; j++) {
    if (dp[info.length][j] < m) {
      minA = j;
      break;
    }
  }

  return minA;
}

//서버 증설 횟수
function solution(players, m, k) {
  let servers = Array(24).fill(0);
  let answer = 0;

  players.forEach((player, idx) => {
    if (Math.floor(player / m) > servers[idx]) {
      let newCnt = Math.floor(player / m) - servers[idx];

      for (let i = 0; i < k; ++i) {
        if (idx + i < 24) {
          servers[idx + i] += newCnt;
        }
      }

      answer += newCnt;
    }
  });

  return answer;
}

//지게차와 크레인
function solution(storage, requests) {
  const maxRow = storage.length - 1,
    maxColumn = storage[0].length - 1;

  // 남은 컨테이너 수
  let containerCnt = storage.length * storage[0].length;

  // 컨테이너 위치와 값을 가지는 2차원 배열 생성
  let storageMap = storage.map((string) => {
    return string.split('');
  });
  // storageMap[row][column] = true 일 경우 => 외부에서 접근 가능한 빈 공간
  // storageMap[row][column] = false 일 경우 => 외부에서 접근 불가능 한 빈공간

  // r,c 가 storageMap 내부에 있는 row와 column인지
  let isInside = (r, c) => {
    if (r >= 0 && r <= maxRow && c >= 0 && c <= maxColumn) {
      return true;
    }
    return false;
  };

  // row,column이 외부에서 접근 가능한지
  const isOutside = (row, column) => {
    // 동서남북
    let dr = [0, 0, 1, -1],
      dc = [1, -1, 0, 0];
    for (let i = 0; i < 4; ++i) {
      let [nearR, nearC] = [row + dr[i], column + dc[i]];
      if (nearR < 0 || nearR > maxRow || nearC < 0 || nearC > maxColumn) {
        return true;
      } else if (
        nearR >= 0 &&
        nearR <= maxRow &&
        nearC >= 0 &&
        nearC <= maxColumn &&
        storageMap[nearR][nearC] === true
      ) {
        return true;
      }
    }
    return false;
  };

  const resetOutside = () => {
    for (let r = 0; r <= maxRow; ++r) {
      for (let c = 0; c <= maxColumn; ++c) {
        if (isOutside(r, c) && storageMap[r][c] === false) {
          let arr = [[r, c]];

          while (arr.length) {
            let [row, column] = arr.shift();
            storageMap[row][column] = true;

            let dr = [0, 0, 1, -1];
            let dc = [1, -1, 0, 0];

            for (let i = 0; i < 4; ++i) {
              let [nearR, nearC] = [row + dr[i], column + dc[i]];

              if (isInside(nearR, nearC) && isOutside(nearR, nearC) && storageMap[nearR][nearC] === false) {
                arr.push([nearR, nearC]);
              }
            }
          }
        }
      }
    }
  };

  requests.forEach((request) => {
    let alphabet = request[0];
    resetOutside();
    if (request.length === 1) {
      let pickContainers = [];

      for (let r = 0; r <= maxRow; ++r) {
        for (let c = 0; c <= maxColumn; ++c) {
          if (isOutside(r, c) && alphabet === storageMap[r][c]) {
            pickContainers.push([r, c]);
          }
        }
      }

      pickContainers.forEach(([r, c]) => {
        --containerCnt;
        storageMap[r][c] = true;
      });
    } else {
      for (let r = 0; r <= maxRow; ++r) {
        for (let c = 0; c <= maxColumn; ++c) {
          if (storageMap[r][c] === alphabet) {
            --containerCnt;
            storageMap[r][c] = false;
          }
        }
      }
    }
  });

  return containerCnt;
}

//[PCCP 기출문제] 2번 / 퍼즐 게임 챌린지
//sum=0
//diff ≤ level
//sum+=time_cur
//diff > level
//diff - level번 틀립
//틀릴 때마다, time_cur만큼의 시간을 사용
// 추가로 time_prev만큼의 시간을 사용
//diff - level번 틀린 이후에 다시 퍼즐을 풀면 time_cur만큼의 시간을 사용

function solution(diffs, times, limit) {
  let max = 100000,
    min = 1,
    mid = undefined;
  let answer = max;
  while (min <= max) {
    mid = Math.floor((max + min) / 2);
    let spendTime = 0,
      over = false;
    for (let i = 0; i < diffs.length; ++i) {
      if (mid - diffs[i] < 0) {
        spendTime = spendTime + (diffs[i] - mid) * (times[i] + times[i - 1]) + times[i];
      } else {
        spendTime += times[i];
      }

      if (limit < spendTime) {
        over = true;
        break;
      }
    }

    if (over) {
      min = mid + 1;
    } else {
      answer = mid;
      max = mid - 1;
    }
  }
  return answer;
}

//호텔 대실
function solution(book_time) {
  let calTime = book_time.map((v) => {
    let [a, b] = v.map((vv) => vv.split(':').map(Number));
    return [a[0] * 60 + a[1], b[0] * 60 + b[1] + 10];
  });

  calTime.sort((a, b) => a[0] - b[0]);

  let minHeap = [];

  for (let [start, end] of calTime) {
    if (minHeap.length > 0 && minHeap[0] <= start) {
      minHeap.shift();
    }
    minHeap.push(end);
    minHeap.sort((a, b) => a - b);
  }

  return minHeap.length;
}

//무인도 여행
function solution(maps) {
  maps = maps.map((v) => v.split('').map(Number));
  let visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(false));
  let dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const bfs = (i, j) => {
    let queue = [[i, j]];
    let sum = 0;

    sum += maps[i][j];
    while (queue.length) {
      let [x, y] = queue.shift();

      for (let [dx, dy] of dir) {
        let nx = x + dx;
        let ny = y + dy;

        if (nx >= 0 && ny >= 0 && nx < maps.length && ny < maps[0].length && maps[nx][ny] > 0 && !visited[nx][ny]) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
          sum += maps[nx][ny];
        }
      }
    }

    return sum;
  };

  let result = [];
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] > 0 && !visited[i][j]) {
        visited[i][j] = true;
        result.push(bfs(i, j));
      }
    }
  }
  return result.length > 0 ? result.sort((a, b) => a - b) : [-1];
}

//뒤에 있는 큰수 찾기
//for문으로 numbers[i]가 기준
//i부터 끝까지 비교
//자신보다 큰 수가 없다면 -1
//자신보다 큰 수가 나온다면 stop

function solution(numbers) {
  let stack = [];
  let result = Array(numbers.length).fill(-1);

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
      result[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  return result;
}

//숫자 변환하기
function solution(x, y, n) {
  if (x === y) return 0;

  let queue = [[x, 0]];
  let visited = new Set();
  let front = 0;

  while (front < queue.length) {
    let [cur, count] = queue[front++];

    for (let next of [cur + n, cur * 2, cur * 3]) {
      if (next === y) return count + 1;
      if (next <= y && !visited.has(next)) {
        visited.add(next);
        queue.push([next, count + 1]);
      }
    }
  }
  return -1;
}

//시소 짝꿍
function solution(weights) {
  let count = 0;
  let map = new Map();

  for (let w of weights) {
    map.set(w, (map.get(w) || 0) + 1);
  }

  for (let [num, c] of map) {
    if (c > 1) count += (c * (c - 1)) / 2;

    for (let ratio of [1 / 2, 2 / 3, 3 / 4]) {
      let pair = num * ratio;
      if (map.has(pair)) {
        count += c * map.get(pair);
      }
    }
  }
  return count;
}

//택배 배달과 수거하기
function solution(cap, n, deliveries, pickups) {
  let total = 0;
  let dRemail = 0,
    pRemail = 0;

  for (let i = n - 1; i >= 0; i--) {
    dRemail += deliveries[i];
    pRemail += pickups[i];

    while (dRemail > 0 || pRemail > 0) {
      dRemail -= cap;
      pRemail -= cap;
      total += (i + 1) * 2;
    }
  }

  return total;
}

//마법의 엘리베이터
function solution(storey) {
  var answer = 0;

  while (storey > 0) {
    let digit = storey % 10;
    let nextDigit = Math.floor(storey / 10) % 10;

    if (digit > 5 || (digit === 5 && nextDigit >= 5)) {
      answer += 10 - digit;
      storey += 10;
    } else {
      answer += digit;
    }

    storey = Math.floor(storey / 10);
  }

  return answer;
}

//테이블 해시 함수
function solution(data, col, row_begin, row_end) {
  data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) {
      return b[0] - a[0];
    }
    return a[col - 1] - b[col - 1];
  });

  let sum = 0;
  for (let i = row_begin - 1; i < row_end; i++) {
    sum ^= data[i].reduce((a, c) => a + (c % (i + 1)), 0);
  }
  return sum;
}

//디펜스 게임
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.heap[parent] >= this.heap[idx]) break;
      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    let idx = 0;

    while (true) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      let largest = idx;

      if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }
      if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }
      if (largest === idx) break;
      [this.heap[idx], this.heap[largest]] = [this.heap[largest], this.heap[idx]];
      idx = largest;
    }
    return max;
  }

  size() {
    return this.heap.length;
  }
}

function solution(n, k, enemy) {
  let maxHeap = new MaxHeap();
  let total = n;

  for (let i = 0; i < enemy.length; i++) {
    maxHeap.push(enemy[i]);
    total -= enemy[i];

    if (total < 0) {
      if (k > 0) {
        total += maxHeap.pop();
        k--;
      } else {
        return i;
      }
    }
  }

  return enemy.length;
}

//매 라운드마다 enemy[i]마리의 적이 등장
//남은 병사 중 enemy[i]명 만큼 소모하여 enemy[i]마리의 적을 막을 수
//무적권을 사용하면 병사의 소모없이 한 라운드의 공격을 막을 수
//무적권은 최대 k번 사용
//남은 병사의 수보다 현재 라운드의 적의 수가 더 많으면 게임이 종료
//무적권은 소모하는 병사 수가 가장 많을때 사용하는게 좋음

//점찍기
function solution(k, d) {
  let count = 0;
  for (let x = 0; x <= d; x += k) {
    let maxY = Math.sqrt(d * d - x * x);
    count += Math.floor(maxY / k) + 1;
  }

  return count;
}

//숫자 카드 나누기
function solution(arrayA, arrayB) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  let getA = arrayA.reduce((a, c) => gcd(a, c));
  let getB = arrayB.reduce((a, c) => gcd(a, c));

  const getGCD = (arr) => arr.reduce((acc, cur) => gcd(acc, cur));

  let gcdA = getGCD(arrayA);
  let gcdB = getGCD(arrayB);

  const isValid = (g, a) => a.every((n) => n % g !== 0);

  let rA = isValid(gcdA, arrayB) ? gcdA : 0;
  let rB = isValid(gcdB, arrayA) ? gcdB : 0;

  return Math.max(rA, rB);
}
//A끼리 나눌 수 있고 B끼리 나눌 수 없는 경우
//반대
//최대 공약수를 구하는 함수

//롤케이크 자르기
function solution(topping) {
  let answer = 0;
  let left = new Map();
  let right = new Map();

  for (let i = 0; i < topping.length; i++) {
    right.set(topping[i], (right.get(topping[i]) || 0) + 1);
  }
  let uL = 0;
  let uR = right.size;

  for (let i = 0; i < topping.length; i++) {
    left.set(topping[i], (left.get(topping[i]) || 0) + 1);
    if (left.get(topping[i]) === 1) {
      uL++;
    }
    right.set(topping[i], right.get(topping[i]) - 1);
    if (right.get(topping[i]) === 0) {
      uR--;
    }

    if (uL === uR) {
      answer++;
    }
  }

  return answer;
}

//택배 상자
function solution(order) {
  let queue = [];
  let idx = 0;
  let count = 0;

  for (let i = 1; i <= order.length; i++) {
    queue.push(i);

    while (queue.length > 0 && queue[queue.length - 1] === order[idx]) {
      queue.pop();
      idx++;
      count++;
    }
  }
  return count;
}

//할인행사
//자신이 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 경우에 맞춰서 회원가입
//바나나 3개, 사과 2개, 쌀 2개, 돼지고기 2개, 냄비 1개
//XYZ 마트에서 14일간 회원을 대상으로 할인하는 제품이 날짜 순서대로 치킨, 사과, 사과, 바나나, 쌀, 사과, 돼지고기, 바나나, 돼지고기, 쌀, 냄비, 바나나, 사과, 바나나인 경우
function solution(want, number, discount) {
  let sum = number.reduce((a, c) => a + c, 0);
  let map = new Map();
  let count = 0;

  want.forEach((v, i) => {
    map.set(v, number[i]);
  });

  const mapEqual = (m1, m2) => {
    if (m1.size !== m2.size) return false;

    for (let [key, value] of m1) {
      if (!m2.has(key) || m2.get(key) !== value) {
        return false;
      }
    }

    return true;
  };

  for (let i = 0; i <= discount.length - sum; i++) {
    let box = discount.slice(i, i + sum);
    let newBox = new Map();
    box.forEach((v) => {
      newBox.set(v, (newBox.get(v) || 0) + 1);
    });
    if (mapEqual(map, newBox)) {
      count += 1;
    }
  }

  return count;
}

//양궁대회
// 라이언과 어피치는 10점~0점 과녁에 화살을 쏠 수 있음.
// 어피치가 이미 쏜 화살 개수가 info[i]에 주어짐.
// 라이언은 해당 점수를 얻으려면 어피치보다 1발 더 많이 쏘아야 함.
// 라이언이 점수를 따지 못하는 경우도 가능.
// 승리 조건:
// 총 점수 비교: 라이언이 어피치보다 점수가 높아야 함.
// 여러 가지 방법이 있다면 낮은 점수를 많이 맞힌 경우 선택.
function solution(n, info) {
  let maxDiff = 0;
  let bestShot = Array(11).fill(0);

  function dfs(index, arrows, ryan) {
    if (arrows > n) return;

    if (index === 11) {
      let appeachScore = 0,
        ryanScore = 0;

      for (let i = 0; i < 11; i++) {
        if (info[i] === 0 && ryan[i] === 0) continue;
        if (info[i] >= ryan[i]) {
          appeachScore += 10 - i;
        } else {
          ryanScore += 10 - i;
        }
      }

      let diff = ryanScore - appeachScore;
      if (diff > maxDiff) {
        maxDiff = diff;
        bestShot = [...ryan];
      } else if (diff === maxDiff) {
        for (let i = 10; i >= 0; i--) {
          if (ryan[i] !== bestShot[i]) {
            if (ryan[i] > bestShot[i]) {
              bestShot = [...ryan];
            }
            break;
          }
        }
      }
      return;
    }

    if (info[index] + 1 <= n - arrows) {
      ryan[index] = info[index] + 1;
      dfs(index + 1, arrows + ryan[index], ryan);
      ryan[index] = 0;
    }

    dfs(index + 1, arrows, ryan);
  }

  dfs(0, 0, Array(11).fill(0));

  if (maxDiff > 0) {
    let remainingArrows = n - bestShot.reduce((a, b) => a + b, 0);
    bestShot[10] += remainingArrows;
  }

  return maxDiff === 0 ? [-1] : bestShot;
}

//k진수에서 소수 개수 구하기

// 0P0처럼 소수 양쪽에 0이 있는 경우
// P0처럼 소수 오른쪽에만 0이 있고 왼쪽에는 아무것도 없는 경우
// 0P처럼 소수 왼쪽에만 0이 있고 오른쪽에는 아무것도 없는 경우
// P처럼 소수 양쪽에 아무것도 없는 경우
// 단, P는 각 자릿수에 0을 포함하지 않는 소수입니다.
// 예를 들어, 101은 P가 될 수 없습니다.

//n.toString(k)를 통해 변환
//let queue=[]생성
//let box=[]
//[i]가 >0이상이면 큐에 푸쉬
//0이 나오면 스탑
//box에 큐 조인해 푸쉬
//큐를 비우고 0을 넣음
//다시 이어서 0이 나올때까지 푸쉬.
//0이 아니면 큐에 푸쉬
//0이 나오면 box에 조인해서 푸쉬
//큐를 비우고 0을 넣음
//길이가 끝나면 끝

function solution(n, k) {
  let transNum = n.toString(k).split('').map(Number);
  let queue = [transNum[0]];
  let box = [];

  function isTrue(num) {
    if (num < 2) return false;

    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  for (let i = 1; i < transNum.length; i++) {
    if (transNum[i] > 0) {
      queue.push(transNum[i]);
    } else {
      box.push(+queue.join(''));
      queue = [0];
    }
  }

  box.push(+queue.join(''));

  let count = 0;
  box.map((v) => (isTrue(v) ? (count += 1) : count));
  return count;
}

//n^2 배열 자르기
//n행 n열 크기의 비어있는 2차원 배열
function solution(n, left, right) {
  let result = [];

  for (let k = left; k <= right; k++) {
    let r = Math.floor(k / n);
    let c = k % n;
    result.push(Math.max(r, c) + 1);
  }

  return result;
}

//행렬 테두리 회전하기

//rows, columns로 배열 생성(false)
//queries forEach로 순회
//해당부분 true로 변경
//가운데 부분 false로 변경
//true인 부분에서 가장 작은 것 result에 푸쉬쉬

function solution(rows, columns, queries) {
  let matrix = Array.from({ length: rows }, (_, i) => Array.from({ length: columns }, (_, j) => i * columns + j + 1));

  let result = [];
  for (let [x1, y1, x2, y2] of queries) {
    x1--;
    y1--;
    x2--;
    y2--;

    let prev = matrix[x1][y1];
    let minValue = prev;

    for (let y = y1 + 1; y <= y2; y++) {
      [matrix[x1][y], prev] = [prev, matrix[x1][y]];
      minValue = Math.min(minValue, prev);
    }

    for (let x = x1 + 1; x <= x2; x++) {
      [matrix[x][y2], prev] = [prev, matrix[x][y2]];
      minValue = Math.min(minValue, prev);
    }

    for (let y = y2 - 1; y >= y1; y--) {
      [matrix[x2][y], prev] = [prev, matrix[x2][y]];
      minValue = Math.min(minValue, prev);
    }

    for (let x = x2 - 1; x >= x1; x--) {
      [matrix[x][y1], prev] = [prev, matrix[x][y1]];
      minValue = Math.min(minValue, prev);
    }

    result.push(minValue);
  }

  return result;
}

//괄호 회전하기
function solution(s) {
  function isValid(str) {
    let stack = [];
    let pairs = { ')': '(', ']': '[', '}': '{' };

    for (let char of str) {
      if (char === '(' || char === '[' || char === '{') {
        stack.push(char);
      } else {
        if (stack.length === 0 || stack.pop() !== pairs[char]) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }

  let answer = 0;
  let n = s.length;

  for (let i = 0; i < n; i++) {
    let rotated = s.slice(i) + s.slice(0, i);
    if (isValid(rotated)) {
      answer++;
    }
  }

  return answer;
}

//쿼드압축 후 개수 세기
//0202
//2424
//0224
//2402
function solution(arr) {
  let result = [0, 0];

  function compress(x, y, size) {
    let first = arr[x][y];

    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (arr[i][j] !== first) {
          let half = size / 2;
          compress(x, y, half);
          compress(x, y + half, half);
          compress(x + half, y, half);
          compress(x + half, y + half, half);
          return;
        }
      }
    }

    result[first]++;
  }

  compress(0, 0, arr.length);
  return result;
}

//최댓값과 최솟값
function solution(s) {
  let result = [];
  s = s
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  result.push(s[0]);
  result.push(s[s.length - 1]);
  return result.join(' ');
}

//최솟값 만들기
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((a, c, i) => a + c * B[i], 0);
}

//JadenCase 문자열 만들기
function solution(s) {
  s = s.split(' ').map((v) => {
    v = v.split('');
    return v.length > 0
      ? v[0].toUpperCase() +
          v
            .slice(1)
            .map((s) => s.toLowerCase())
            .join('')
      : '';
  });

  return s.join(' ');
}

//올바른 괄호
function solution(s) {
  let strMap = { '(': ')', '{': '}', '[': ']' };
  s = s.split('');
  let stack = [];

  for (let char of s) {
    if (strMap[char]) {
      stack.push(char);
    } else {
      let last = stack.pop();
      if (strMap[last] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

//이진 변환 반복하기
function solution(s) {
  s = s.split('');
  let change = 0;
  let count = 0;

  while (s.join(' ') !== '1') {
    change += 1;
    count += s.filter((v) => v === '0').length;
    s = s
      .filter((v) => v === '1')
      .join('')
      .length.toString(2)
      .split('');
  }
  return [change, count];
}

//숫자의 표현
function solution(n) {
  let count = 0;

  for (let m = 1; (m * (m - 1)) / 2 < n; m++) {
    if ((n - (m * (m - 1)) / 2) % m === 0) {
      count++;
    }
  }

  return count;
}

//다음 큰 숫자
function solution(n) {
  let nCount = n
    .toString(2)
    .split('')
    .filter((v) => v === '1').length;
  let nextNum = n + 1;
  while (true) {
    let nextNumLength = nextNum
      .toString(2)
      .split('')
      .filter((v) => v === '1').length;
    if (nCount === nextNumLength) {
      return nextNum;
    }
    nextNum++;
  }
}
//n+1부터 확인
//n 2진수로 변환 1의 개수 count
//n+1 2진수로 변환 1의 개수 count

//피보나치 수
function solution(n) {
  const MOD = 1234567;
  let prev = 0,
    cur = 1;

  for (let i = 2; i <= n; i++) {
    let next = (prev + cur) % MOD;
    prev = cur;
    cur = next;
  }

  return cur;
}

//짝지어 제거하기
function solution(s) {
  s = s.split('');
  let stack = [];

  s.forEach((v) => {
    if (stack.length === 0) {
      stack.push(v);
    } else {
      if (stack[stack.length - 1] === v) {
        stack.pop();
      } else {
        stack.push(v);
      }
    }
  });

  return stack.length === 0 ? 1 : 0;
}

//카펫
function solution(brown, yellow) {
  let sum = brown + yellow;
  let start = Math.floor(sum / 2);
  for (let i = start; i > 0; i--) {
    if (sum % i === 0) {
      if ((i - 2) * (sum / i - 2) === yellow) {
        return [i, sum / i];
      }
    }
  }
}

//구명보트
function solution(people, limit) {
  people.sort((a, b) => a - b);
  let count = 0;
  let low = 0,
    high = people.length - 1;
  while (low <= high) {
    if (people[low] + people[high] <= limit) {
      low++;
    }
    high--;
    count++;
  }
  return count;
}

//점프와 순간 이동
function solution(n) {
  let count = 0;

  while (n > 0) {
    if (n % 2 === 1) {
      count++;
      n--;
    }
    n /= 2;
  }

  return count;
}

//귤 고르기
function solution(k, tangerine) {
  let map = new Map();

  tangerine.forEach((v) => {
    map.set(v, (map.get(v) || 0) + 1);
  });

  let counts = [...map.values()].sort((a, b) => b - a);
  let total = 0;
  let kind = 0;

  for (let count of counts) {
    total += count;
    kind++;
    if (total >= k) break;
  }

  return kind;
}

//멀리 뛰기
function solution(n) {
  let dp = Array(n).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  return dp[n];
}

//N개의 최소공배수
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  return arr.reduce((a, c) => lcm(a, c));
}

//영어 끝말잇기
function solution(n, words) {
  let count = 0;
  let map = new Map();
  let nowStr = '';

  for (let i = 0; i < words.length; i += n) {
    count++;
    let arr = words.slice(i, i + n);
    for (let j = 0; j < n; j++) {
      if (nowStr !== arr[j][0] && nowStr.length > 0) {
        return [j + 1, count];
      } else {
        nowStr = arr[j][arr[j].length - 1];
        if (map.get(arr[j])) {
          return [j + 1, count];
        } else {
          map.set(arr[j], 1);
        }
      }
    }
  }

  return [0, 0];
}

//에상 대진표
function solution(n, a, b) {
  let count = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    count++;
  }

  return count;
}
