const { configure } = require('@testing-library/react');

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
