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

//가장 많이 받은 선물

//친구 이름을 인덱스에 대응시키기 위한 맵
//선물을 주고받은 기록을 저장하는 2차원 배열
//각 친구가 받은 선물 지수를 계산하기 위한 배열
//다음 달에 선물을 받을 친구의 수를 기록하는 배열

function solution(friends, gifts) {
  const len = friends.length;
  const nameMap = new Map();
  const giftTable = new Array(len).fill(0).map(_ => new Array(len).fill(0));
  const rankInfo = new Array(len).fill(0);
  const nextMonth = new Array(len).fill(0);

  friends.forEach((v, i)=>{
    nameMap.set(v, i)
  })

  gifts.forEach(v=>{
    const [from, to] =v.split(' ')
    giftTable[nameMap.get(from)][nameMap.get(to)]++
  })

  for(let i=0; i<len; i++){
    rankInfo[i]=giftTable[i].reduce((a, c)=>a+=c, 0)

    for(let j=0; j<len; j++){
      rankInfo[i]-=giftTable[j][i]
    }
  }

  for(let i=0; i<len; i++){
    for(let j=i+1; j<len; j++){
      if(giftTable[i][j]>giftTable[j][i]) nextMonth[i]++
      if(giftTable[i][j]<giftTable[j][i]) nextMonth[j]++
      if(giftTable[i][j]===giftTable[j][i]){
        if(rankInfo[i]>rankInfo[j]) nextMonth[i]++
        if(rankInfo[i]<rankInfo[j]) nextMonth[j]++
      }
    }
  }

  return Math.max(...nextMonth)
}

//붕대 감기
//t초 동안 붕대를 감으면서 1초마다 x만큼의 체력을 회복
// t초 연속으로 붕대를 감는 데 성공한다면 y만큼의 체력을 추가로 회복
// 현재 체력이 최대 체력보다 커지는 것은 불가능

//최대 체력을 넘는지 확인하는 메서드
//최대체력을 넘는다면 0 아니면 초당 회복량을 더함
//연속 성공 상태, 연속 성공을 성공한다면 초당회복량과 추가 회복량을 더함

function solution(bandage, health, attacks) {
  const maxHealth = health

  const [t, x, y] = bandage

  const lastTimeAttacks = 0;

  for(const [attackTime, damage] of attacks){
    const timeDiff = attackTime-lastTimeAttacks-1

    const heal = timeDiff*x+Math.floor(timeDiff/t)*y

    health = Math.min(health+heal, maxHealth)

    health-=damage

    if(health<=0) return -1

    lastTimeAttacks=attackTime
  }

  return health
}