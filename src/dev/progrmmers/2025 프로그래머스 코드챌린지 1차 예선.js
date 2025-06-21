//유연근무제
// 일주일 동안 각자 설정한 출근 희망 시각에 늦지 않고 출근한 직원들에게 상품을 주는 이벤트
// 출근 희망 시각 + 10분
// 토요일, 일요일의 출근 시각은 영향x
// 시에 100을 곱하고 분을 더한 정수로 표현
// output: 상품을 받을 직원이 몇 명인지

// schedules[i]는 i + 1번째 직원이 설정한 출근 희망 시각을 의미
// timelogs[i][j]는 i + 1번째 직원이 이벤트 j + 1일차에 출근한 시각을 의미
// 1은 월요일, 2는 화요일, 3은 수요일, 4는 목요일, 5는 금요일, 6은 토요일, 7은 일요일에 이벤트를 시작했음을 의미

//풀이
// schedules를 map으로 checkInTime 출근 인정시각을 시*60+분+10으로 설정
// let len = schedules.length로 설정, result = len
// for(let i=0; i<len; i++)로 순회
// timelogs도 map으로 시*60+분 재설정
// startday++로 증가시키면서 6과 7이면 continue, 아니면 출근 인정시간을 넘는지 확인
// 넘는 순간 break result--

function solution(schedules, timelogs, startday) {
  let len = schedules.length;
  let result = len;
  schedules = schedules.map((v) => {
    let hour = Math.floor(v / 100);
    let min = v % 100;
    return hour * 60 + min + 10;
  });

  for (let i = 0; i < len; i++) {
    let iDay = startday;
    timelogs[i] = timelogs[i].map((v) => {
      let hour = Math.floor(v / 100);
      let min = v % 100;
      return hour * 60 + min;
    });

    for (let j = 0; j < timelogs[i].length; j++) {
      let rest = iDay % 7;

      if (rest === 6 || rest === 0) {
        iDay++; // 주말이어도 날은 흐른다
        continue;
      }

      if (timelogs[i][j] > schedules[i]) {
        result--;
        break;
      }

      iDay++;
    }
  }

  return result;
}
