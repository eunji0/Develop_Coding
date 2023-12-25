//멀리뛰기
function solution(n) {
  return fibonacci(n);
}

const fibonacci = (n) => {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;

  return dp[n];
};

//n개의 최소공배수
function getGcd(a, b) {
  if (b === 0) return a;
  return getGcd(b, a % b);
}

function solution2(arr) {
  return arr.reduce((a, b) => (a * b) / getGcd(a, b));
}

//귤고르기
function solution3(k, t) {
  const obj = {};

  t.forEach((n) => {
    obj[n] = ++obj[n] || 1;
  });

  let kinds = Object.values(obj).sort((a, b) => b - a);

  let answer = 0;
  let sum = 0;

  for (let num of kinds) {
    ++answer;
    sum += num;

    if (sum >= k) break;
  }
  return answer;
}

//글자 이어붙여 문자열 만들기
function solution4(my_string, index_list) {
  let result = "";

  index_list.forEach((v) => {
    result += my_string[v];
  });

  return result;
}

//조건에 맞게 수열 변환하기 1
function solution5(arr) {
  return arr.map((a) => {
    if (a >= 50 && a % 2 === 0) return Math.floor(a / 2);
    if (a < 50 && a % 2 === 1) return a * 2;
    return a;
  });
}

//문자열 정수의 합
function solution6(num_str) {
  return num_str
    .split("")
    .map((v) => Number(v))
    .reduce((a, c) => a + c, 0);
}

//뒤에서 5등 뒤로
function solution7(num_list) {
  return num_list.sort((a, b) => a - b).splice(5);
}

//0떼기
function solution8(n_str) {
  return String(Number(n_str));
}

//카운트업
function solution9(start_num, end_num) {
  return Array.from(
    { length: end_num - start_num + 1 },
    (_, index) => start_num + index
  );
}

//배열 만들기1
function solution10(n, k) {
  const result = Array.from({ length: n / k }, (_, index) => (index + 1) * k);
  return result;
}

// 홀짝에 따라 다른 값 반환하기
function solution11(n) {
  const isOdd = n % 2 !== 0;

  return Array.from({ length: n }, (_, index) => index + 1).reduce(
    (result, value) => {
      return (
        result +
        (isOdd
          ? value % 2 !== 0
            ? value
            : 0
          : value % 2 === 0
            ? value * value
            : 0)
      );
    },
    0
  );
}

//해시-베스트앨범
function solution12(genres, plays) {
  const grouped = genres.reduce((acc, genre, index) => {
    acc[genre] = (acc[genre] || 0) + plays[index];
    return acc;
  }, {});

  const songs = genres.map((genre, index) => ({
    genre,
    index,
    play: plays[index],
  }));

  songs.sort((a, b) => {
    if (a.genre !== b.genre) {
      return grouped[b.genre] - grouped[a.genre];
    }
    if (a.play !== b.play) {
      return b.play - a.play;
    }
    return a.index - b.index;
  });

  const result = {};

  console.log(songs);
  return songs.reduce((acc, song) => {
    if (!result[song.genre]) {
      result[song.genre] = 0;
    }
    if (result[song.genre] < 2) {
      acc.push(song.index);
      result[song.genre]++;
    }
    // console.log(result)
    // console.log(acc)
    return acc;
  }, []);
}

//프로세스
function solution13(priorities, location) {
  let count = 0; // 처리된 프로세스 수
  let maxPriority = Math.max(...priorities); // 최대 우선순위

  while (true) {
    const currentProcess = priorities.shift(); // 대기중인 프로세스를 큐에서 꺼냄

    console.log(currentProcess);
    if (currentProcess === maxPriority) {
      count++; // 프로세스 실행
      if (location === 0) return count; // 찾고자 하는 프로세스일 경우 결과 반환
      maxPriority = Math.max(...priorities); // 최대 우선순위 갱신
    } else {
      priorities.push(currentProcess); // 큐에 다시 넣음
    }

    location = location === 0 ? priorities.length - 1 : location - 1; // 위치 조정
  }
}

//dfs 피로도
function solution(k, dungeons) {
  // 정답을 담을 배열
  let answer = [];
  // 방문 여부를 저장하는 배열
  let visited = Array(dungeons.length).fill(false);

  // 깊이 우선 탐색 함수
  function dfs(count, k) {
    // 탐험한 던전 수를 answer 배열에 추가
    answer.push(count);

    // 모든 던전에 대해 반복
    for (let i = 0; i < dungeons.length; i++) {
      let current = dungeons[i];
      // 피로도가 최소 필요 피로도보다 크거나 같고 아직 방문하지 않은 던전인 경우
      if (k >= current[0] && !visited[i]) {
        // 해당 던전을 방문했음을 표시
        visited[i] = true;
        // 깊이 우선 탐색 호출 (던전 수 증가, 남은 피로도 감소)
        dfs(count + 1, k - current[1]);
        // 백트래킹: 해당 던전을 빠져나왔으므로 방문 여부를 다시 false로 설정
        visited[i] = false;
      }
    }
  }

  // 초기값으로 깊이 우선 탐색 호출 (던전 수 0, 현재 피로도 k)
  dfs(0, k);

  // 탐험할 수 있는 최대 던전 수 반환
  return Math.max(...answer);
}

//영어 끝말잇기
function solution(n, words) {
  let answer = [0, 0];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let a = (i % n) + 1;
    let turn = Math.ceil((i + 1) / n);

    if (i > 0) {
      let last = words[i - 1].split("").pop();

      if (i > words.indexOf(word) || words[i][0] !== last) {
        answer = [a, turn];
        break;
      }
    }
  }

  return answer;
}

//귤고르기
function solution(k, tangerine) {
  const obj = {};
  tangerine.forEach((n) => {
    obj[n] = ++obj[n] || 1;
  });

  const kinds = Object.values(obj).sort((a, b) => b - a);
  let answer = 0;
  let sum = 0;

  for (let num of kinds) {
    ++answer;
    sum += num;

    if (sum >= k) break;
  }
  return answer;
}

//피로도
function solution(k, dungeons) {
  // 정답을 담을 배열
  let answer = [];
  // 방문 여부를 저장하는 배열
  let visited = Array(dungeons.length).fill(false);

  // 깊이 우선 탐색 함수
  function dfs(count, k) {
    // 탐험한 던전 수를 answer 배열에 추가
    answer.push(count);

    // 모든 던전에 대해 반복
    for (let i = 0; i < dungeons.length; i++) {
      let current = dungeons[i];
      // 피로도가 최소 필요 피로도보다 크거나 같고 아직 방문하지 않은 던전인 경우
      if (k >= current[0] && !visited[i]) {
        // 해당 던전을 방문했음을 표시
        visited[i] = true;
        // 깊이 우선 탐색 호출 (던전 수 증가, 남은 피로도 감소)
        dfs(count + 1, k - current[1]);
        // 백트래킹: 해당 던전을 빠져나왔으므로 방문 여부를 다시 false로 설정
        visited[i] = false;
      }
    }
  }

  // 초기값으로 깊이 우선 탐색 호출 (던전 수 0, 현재 피로도 k)
  dfs(0, k);

  // 탐험할 수 있는 최대 던전 수 반환
  return Math.max(...answer);
}

//모음 사전
function solution(word) {
  const result = [];
  const str = "";
  for (let i = 1; i <= 5; i++) dfs(str, i, result);
  return result.sort().indexOf(word) + 1;
}

const dfs = (word, length, result) => {
  const vowels = [..."AEIOU"];
  if (length === word.length) {
    result.push(word);
    return;
  }
  vowels.forEach((vowel) => {
    dfs(word + vowel, length, result);
  });
};
