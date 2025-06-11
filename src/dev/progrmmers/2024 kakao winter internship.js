//가장 많이 받은 선물

// 문제정리
// 두 사람이 선물을 주고받은 기록이 있다면:
// 더 많이 준 사람이 → 선물을 하나 받음
// 두 사람 간 선물 기록이 없거나 같다면:
// **선물 지수(=준 수 - 받은 수)**가 큰 사람이 → 작은 사람에게 선물 하나 받음
// 선물 기록도 없고, 선물 지수도 같다면:
// 아무 일도 없음 (선물 없음)
// 선물지수 =  이번 달까지 자신이 친구들에게 준 선물의 수 - 받은 선물의 수

// 출력: 다음달에 가장 많은 선물을 받는 친구가 받을 선물의 수

//설계
//주고받은 선물을 2차원 배열로 생성 -> giveTakeTable
//선물 지수를 2차원 배열로 생성 -> giftCountTable
//friends를 객체로 인덱스와 함께 변환환
//gifts기록을 for(let [give, take] of gifts)로 순회
//2차원 배열들을 채움

//giveTakeTable을 순회하면서 다음달 선물 수 각 인덱스에 맞는 result 업데이트

function solution(friends, gifts) {
  let n = friends.length;
  let giveTakeTable = Array.from({ length: n }, () => Array(n).fill(0));
  let giftCountTable = Array.from({ length: n }, () => Array(3).fill(0)); //[준선물, 받은선물, 선물지수]
  let result = Array(n).fill(0);

  let nameToIndex = {};
  for (let i = 0; i < n; i++) {
    nameToIndex[friends[i]] = i;
  }

  for (let gift of gifts) {
    let [give, take] = gift.split(' ');
    let gIdx = nameToIndex[give];
    let tIdx = nameToIndex[take];
    giveTakeTable[gIdx][tIdx]++;
    giftCountTable[gIdx][0]++; // 준 선물
    giftCountTable[tIdx][1]++; // 받은 선물
  }

  for (let i = 0; i < n; i++) {
    giftCountTable[i][2] = giftCountTable[i][0] - giftCountTable[i][1]; // 선물 지수
  }

  // 선물 받는 횟수 계산
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (giveTakeTable[i][j] > giveTakeTable[j][i]) {
        result[i]++;
      } else if (giveTakeTable[i][j] < giveTakeTable[j][i]) {
        result[j]++;
      } else {
        if (giftCountTable[i][2] > giftCountTable[j][2]) {
          result[i]++;
        } else if (giftCountTable[i][2] < giftCountTable[j][2]) {
          result[j]++;
        }
        // else: 선물 수 같고 지수도 같으면 아무도 안 줌
      }
    }
  }

  return Math.max(...result);
}
