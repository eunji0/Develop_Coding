//팩토리얼

// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let n = 0;
  for await (const line of rl) {
    n = +line;
  }

  rl.close();

  function factorial(n) {
    let result = BigInt(1);
    for (let i = 2n; i <= BigInt(n); i++) {
      result *= i;
    }
    return result;
  }

  let total = factorial(n);

  while (total >= 10n) {
    total = total
      .toString()
      .split("")
      .reduce((a, c) => a + BigInt(c), BigInt(0));
  }
  console.log(total.toString());

  process.exit();
})();

function solution(genres, plays) {
  const grouped = genres.reduce((acc, genre, index) => {
    acc[genre] = (acc[genre] || 0) + plays[index];
    return acc;
  }, {});

  console.log(grouped);

  const result = genres.map((genre, index) => ({
    genre,
    index: index,
    play: plays[index],
  }));

  console.log(result);

  if (grouped.classic > grouped.pop) {
    console.log();
  }
}
