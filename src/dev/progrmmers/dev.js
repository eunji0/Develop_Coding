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
