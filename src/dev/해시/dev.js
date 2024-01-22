//완주하지 못한 선수
function wrongSolution(participant, completion) {
  participant.sort();
  completion.sort().forEach((v) => {
    let find = participant.findIndex((a) => a === v);
    participant.splice(find, 1);
  });
  return participant.toString();
}
//시간초과
//splice 메서드는 해당 인덱스에서부터의 모든 요소를 이동시키기 때문에 삭제 작업 자체가 O(n)의 시간 복잡도를 가지게 된다.
//이를 completion 배열의 길이만큼 반복하면 전체 시간 복잡도는 O(n^2)가 되어 매우 비효율적

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }

  return participant[participant.length - 1];
}

//폰켓몬
function solution2(nums) {
  let a = nums.length / 2;
  let b = Array.from(new Set(nums)).length;
  return a < b ? a : b;
}

//전화번호 목록
function solution3(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
    return true;
  }
}

//의상
function solution4(clothes) {
  let a = new Map();

  clothes.forEach((v) => {
    let [q, w] = v;
    a.set(w, (a.get(w) || 0) + 1);
  });

  return Array.from(a.values()).reduce((a, c) => a * (c + 1), 1) - 1;
}

//베스트앨범
function solution5(genres, plays) {
  const grouped = genres.reduce((acc, genre, index) => {
    acc[genre] = (acc[genre] || 0) + plays[index];
    return acc;
  }, {});
  console.log(grouped);

  const songs = genres.map((genre, index) => ({
    genre,
    index,
    play: plays[index],
  }));
  console.log(songs);

  songs.sort((a, b) => {
    if (a.genre !== b.genre) {
      return grouped[b.genre] - grouped[a.genre];
    }
    if (a.play !== b.play) {
      return b.play - a.play;
    }
    return a.index - b.index;
  });

  // 최종 결과를 저장할 객체
  const result = {};
  // 최종 결과 배열을 반환
  return songs.reduce((acc, song) => {
    // 만약 해당 장르가 아직 result에 등록되지 않았다면
    if (!result[song.genre]) {
      result[song.genre] = 0; // 해당 장르의 선택된 노래 수를 초기화
    }
    // 해당 장르에서 이미 2곡을 선택하지 않았다면
    if (result[song.genre] < 2) {
      acc.push(song.index); // 결과 배열에 현재 노래의 인덱스를 추가
      result[song.genre]++; // 해당 장르의 선택된 노래 수 증가
    }
    return acc; // 결과 배열 반환
  }, []);
}

//달리기 경주
function solution6(players, callings) {
  const playerMap = {};

  // calling 원소들의 idx를 미리 구해서 저장
  for (let i = 0; i < players.length; i++) {
    playerMap[players[i]] = i;
  }

  for (let i = 0; i < callings.length; i++) {
    const idx = playerMap[callings[i]];
    const temp = players[idx - 1];

    // 해당 idx와 이전 idx의 원소를 swap
    players[idx - 1] = callings[i];
    players[idx] = temp;

    // map의 idx도 갱신
    playerMap[callings[i]] = idx - 1;
    playerMap[temp] = idx;
  }

  return players;
}

//추억 점수
function solution7(name, yearning, photo) {
  let obj = {};
  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }

  return photo.map((value) =>
    value.map((v) => (obj[v] ? obj[v] : 0)).reduce((a, c) => a + c, 0)
  );
}

//공원산책
function solution(park, routes) {
  const maxR = park.length - 1;
  const maxC = park[0].length - 1;

  let setR = park.findIndex((v) => v.includes("S"));
  let setC = park[setR].indexOf("S");

  routes.forEach((j) => {
    const [d, n] = j.split(" ");

    let tempR = setR;
    let tempC = setC;
    let flag = true;

    for (let i = 0; i < Number(n); i++) {
      if (d === "E") tempC++;
      else if (d === "W") tempC--;
      else if (d === "S") tempR++;
      else if (d === "N") tempR--;

      if (
        tempR > maxR ||
        tempR < 0 ||
        tempC > maxC ||
        tempC < 0 ||
        park[tempR][tempC] === "X"
      ) {
        flag = false;
        break;
      }
    }

    if (flag) {
      setC = tempC;
      setR = tempR;
    }
  });

  return [setR, setC];
}

//바탕화면 정리
function solution(wallpaper) {
  let x = [];
  let y = [];

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        y.push(i);
        x.push(j);
      }
    }
  }

  x.sort((a, b) => a - b);
  y.sort((a, b) => a - b);

  return [y[0], x[0], y[y.length - 1] + 1, x[x.length - 1] + 1];
}

//덧칠하기
function solution(n, m, section) {
  var answer = 0;
  var p = 0;
  for (s of section) {
    if (p < s) {
      answer++;
      p = s + m - 1;
    }
  }
  return answer;
}

//대충 만든 자판
function solution(keymap, targets) {
  let answer = [];
  let map = new Map();

  for (let key of keymap) {
    for (let i = 0; i < key.length; i++) {
      if (!map.has(key[i]) || i + 1 < map.get(key[i])) map.set(key[i], i + 1);
    }
  }

  for (let target of targets) {
    let c = 0;
    for (let i = 0; i < target.length; i++) {
      c += map.get(target[i]);
    }

    answer.push(c || -1);
  }

  return answer;
}

//카드 뭉치
function solution(cards1, cards2, goal) {
  for (let i of goal) {
    if (cards1[0] === i) {
      cards1.shift();
    } else if (cards2[0] === i) {
      cards2.shift();
    } else {
      return "No";
    }
  }
  return "Yes";
}

//둘만의 암호
function solution(s, skip, index) {
  let result = "";
  s = s.split("");
  skip = skip.split("");
  let a = "abcdefghijklmnopqrstuvwxyz".split("");

  a.forEach((v, i) => {
    if (skip.includes(v)) {
      a[i] = "";
    }
  });

  a = a.join("").split("");
  console.log(a);

  for (let i = 0; i < s.length; i++) {
    result += a[+(a.findIndex((v) => v === s[i]) + index) % a.length];
  }
  return result;
}

//개인정보 수집 유효기간
function solution(today, terms, privacies) {
  var answer = [];

  const e = new Date(today);

  let a = new Map();
  terms.forEach((v) => {
    let [d, n] = v.split(" ");
    a[d] = +n;
  });

  privacies.forEach((v, i) => {
    let [d, n] = v.split(" ");

    let ch = new Date(d);

    ch.setMonth(ch.getMonth() + a[n]);

    if (ch <= e) answer.push(i + 1);
  });
  return answer;
}

//크기가 작은 부분 문자열
function solution(t, p) {
  var answer = 0;
  for (let i = 0; i < t.length; i++) {
    let tt = t.slice(i, i + p.length);
    if (tt.length === p.length && +tt <= +p) {
      answer++;
    }
  }
  return answer;
}

//가장 가까운 같은 글자
function solution(s) {
  let stack = [];
  let ans = [];

  [...s].forEach((str) => {
    if (!stack.includes(str)) {
      ans.push(-1);
    }

    if (stack.includes(str)) {
      ans.push(stack.length - stack.lastIndexOf(str));
    }

    stack.push(str);
  });

  return ans;
}

//문자열 나누기
function solution(s) {
  let stack = [];
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);

    let same = stack.filter((v) => v === stack[0]).length;
    let nosame = stack.filter((v) => v != stack[0]).length;

    if (same === nosame) {
      count += 1;
      stack = [];
    }
  }

  if (stack.length != 0) {
    count += 1;
  }

  return count;
}

//명예의 전당
function solution(k, score) {
  var kk = [];
  let result = [];

  score.forEach((v) => {
    if (kk.length < k) {
      kk.push(v);
      kk.sort((a, b) => a - b);
    } else {
      kk.push(v);
      kk.sort((a, b) => a - b);
      kk.shift();
    }
    result.push(kk[0]);
  });
  return result;
}

//기사단원의 무기
function solution(number, limit, power) {
  let s = 0;
  for (let i = 1; i <= number; i++) {
    let d = 0;
    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        d++;
        if (j * j !== i) {
          d++;
        }
      }
    }

    if (d > limit) {
      s += power;
    } else {
      s += d;
    }
  }

  return s;
}

//과일 장수
function solution(k, m, score) {
  var answer = 0;
  score.sort((a, b) => b - a);

  for (let i = 0; i < score.length; i += m) {
    let a = score.slice(i, i + m);

    if (a.length === m) {
      answer += a.pop() * m;
    }
  }
  return answer;
}

//푸드 파이트 대회
function solution(food) {
  var answer = "";
  for (let i = 1; i < food.length; i++) {
    let a = Math.floor(food[i] / 2);
    answer += i.toString().repeat(a);
  }
  return answer + "0" + answer.split("").reverse().join("");
}

//햄버거 만들기
function solution(ingredient) {
  let st = [];
  let c = 0;

  ingredient.forEach((v) => {
    st.push(v);
    if (st.length >= 4) {
      const s = st.slice(-4).join("");
      if (s === "1231") {
        st.pop();
        st.pop();
        st.pop();
        st.pop();
        c++;
      }
    }
  });

  return c;
}

//옹알이2
function solution(babbling) {
  const babblables = ["aya", "ye", "woo", "ma"];

  return babbling.reduce((possible, babbl, index) => {
    for (let i = 0; i < babblables.length; i += 1) {
      if (babbl.includes(babblables[i].repeat(2))) return possible;
    }

    for (let i = 0; i < babblables.length; i += 1) {
      babbl = babbl.split(babblables[i]).join(" ").trim();
    }

    if (babbl) return possible;

    return (possible += 1);
  }, 0);
}
