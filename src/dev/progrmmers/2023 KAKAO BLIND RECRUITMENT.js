//개인정보 수집 유효기간

//문제 정리
//output 오늘날짜를 기준으로 파기해야할 정보 번호
//모든 달은 28일

//풀이 설계
// today 입력을 .을 기준으로 split('.').map(Number)
// 날짜를 year * 12 * 28 + month * 28 + day 이렇게 변환하는 메서드 calDays
// today = [year, month, day] =>calDays메서드로 변환
// terms =>객체로 변환 {'A':6}
// for(let i=0; i<privacies; i++)로 순회
// let [days, term] = privacies.split(' )
// days =>calDays메서드로 변환
// days+terms.get(term)-1 <= today 파기 result.push(i)

const calDays = (year, month, day) => {
  return year * 12 * 28 + month * 28 + day;
};

function solution(today, terms, privacies) {
  let result = [];

  let [tYear, tMonth, tDay] = today.split('.').map(Number);
  const todayInDays = calDays(tYear, tMonth, tDay);

  const termMap = new Map();
  terms.forEach((v) => {
    const [type, duration] = v.split(' ');
    termMap.set(type, +duration);
  });

  privacies.forEach((entry, i) => {
    const [dateStr, term] = entry.split(' ');
    const [pYear, pMonth, pDay] = dateStr.split('.').map(Number);
    const startDate = calDays(pYear, pMonth, pDay);
    const expiryDate = startDate + termMap.get(term) * 28;

    if (expiryDate <= todayInDays) {
      result.push(i + 1);
    }
  });

  return result;
}
