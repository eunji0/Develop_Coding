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

//이모티콘 할인행사

//문제 정리
// 이모티콘 플러스 서비스 가입자를 최대한 늘리는 것.
// 이모티콘 판매액을 최대한 늘리는 것.
// 1번 목표가 우선이며, 2번 목표가 그 다음
//각 사용자들은 일정 비율 이상 할인하는 이모티콘을 모두 구매
//이모티콘 구매 비용의 합이 일정 가격 이상이 된다면, 이모티콘 구매를 모두 취소하고 이모티콘 플러스 서비스에 가입

function solution(users, emoticons) {
  const discounts = [10, 20, 30, 40];
  let maxJoin = 0;
  let maxProfit = 0;

  const dfs = (depth, currentCombo) => {
    if (depth === emoticons.length) {
      let join = 0;
      let profit = 0;

      for (let [minRate, minPrice] of users) {
        let total = 0;

        for (let i = 0; i < emoticons.length; i++) {
          const sale = currentCombo[i];
          if (sale >= minRate) {
            const discounted = (emoticons[i] * (100 - sale)) / 100;
            total += discounted;
          }
        }

        if (total >= minPrice) {
          join++;
        } else {
          profit += total;
        }
      }

      if (join > maxJoin || (join === maxJoin && profit > maxProfit)) {
        maxJoin = join;
        maxProfit = profit;
      }

      return;
    }

    for (let rate of discounts) {
      currentCombo.push(rate);
      dfs(depth + 1, currentCombo);
      currentCombo.pop();
    }
  };

  dfs(0, []);
  return [maxJoin, Math.floor(maxProfit)];
}
