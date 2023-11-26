// const remove = (arr, sum) => arr.filter((v, k, a) => !a.slice(k + 1).includes(sum - v));

// function solution(coin, cards) {
//   const n = cards.length;
//   const initialCards = Math.floor(n / 3);

//   // 초기에 n/3장의 카드를 뽑아 가지고 시작
//   let hand = cards.slice(0, initialCards);
//   cards = cards.slice(initialCards);

//   let rounds = 0;

//   for (let i = 0; i < initialCards; i += 2) {
//     const card1 = cards.shift();
//     const card2 = cards.shift();
//     hand.push(card1);
//     hand.push(card2);

//     if (coin > 0) {
//       // 동전을 사용하여 가지기
//       coin -= 2;

//       // n+1 값이 나오는 카드 2개 버리기
//       const sum = n + 1;
//       hand = remove(hand, sum);
//     } else {
//       // 동전을 사용하지 않고 버리기
//       hand.push(card1);
//       cards.unshift(card2); // 두 번째 카드는 다시 카드 뭉치의 맨 앞에 넣음
//     }

//     // 다음 라운드로 진행
//     rounds++;
//   }

//   return rounds;
// }

// // 예시 사용
// const coin = 4;
// const cards = [3, 6, 7, 2, 1, 10, 5, 9, 8, 12, 11, 4];
// console.log(solution(coin, cards));

// function calculateScore(dice) {
//   return dice.map((d) => d.reduce((acc, val) => acc + val, 0));
// }

// const getCombinations = function (arr, selectNumber) {
//   const results = [];
//   if (selectNumber === 1) return arr.map((value, index) => [{ value, index: index + 1 }]);

//   arr.forEach((value, index, origin) => {
//     const rest = origin.slice(index + 1);
//     const combinations = getCombinations(rest, selectNumber - 1);
//     const attached = combinations.map((combination) => [{ value, index }, ...combination]);
//     results.push(...attached);
//   });

//   let scores = results.map((combination) => ({
//     value: combination.reduce((a, { value }) => a + value, 0),
//     indices: combination.map(({ index }) => index),
//   }));

//   scores.sort((a, b) => b.value - a.value);

//   let maxScore = scores[0].value;

//   const maxIndices = scores.reduce((maxIndices, score) => {
//     if (score.value === maxScore) {
//       maxIndices.push(score.indices);
//     }
//     return maxIndices;
//   }, []);

//   return maxIndices;
// }

// function solution(dice) {
//   const n = dice.length;
//   const half = n / 2;
//   const allScores = calculateScore(dice);
//   let getMax = getCombinations(allScores, half);

//   // 오름차순으로 정렬
//   getMax.sort((a, b) => JSON.stringify(a) > JSON.stringify(b) ? 1 : -1);

//   return getMax[0];
// }