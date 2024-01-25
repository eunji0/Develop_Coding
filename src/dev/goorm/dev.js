//숫자 제거 배열
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let a = [];
  let b = [];
  let s = true;
  let result = 0;

  for await (const line of rl) {
    if (s) {
      a = line.split(" ");
      s = false;
    } else {
      b = line.split(" ");
      break;
    }
  }

  b.forEach((v) => {
    if (!v.includes(a[1])) {
      result += 1;
    }
  });

  console.log(result);

  rl.close();
  process.exit();
})();
