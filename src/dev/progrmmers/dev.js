//완주하지 못한 선수
function solution(participant, completion) {
  participant.sort()
  completion.sort()
  for(let i=0; i<participant.length; i++){
      if(participant[i]!==completion[i]){
          return participant[i]
      }
  }
}

//전화번호 목록
function solution(phone_book) {
  phone_book.sort()

  for(let i=0; i<phone_book.length-1; i++){
    if(phone_book[i+1].startsWith(phone_book[i])){
      return false
    }
  }

  return true
}

//의상
function solution(clothes) {
  let count = new Map()

  clothes.forEach(v=>{
    count.set(v[1], (count.get(v[1])||0)+1)
  })

  return [...count.values()].reduce((a, c)=>a*(c+1), 1)-1
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

