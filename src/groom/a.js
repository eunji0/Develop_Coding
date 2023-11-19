// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let n = 0;
  let input = "";
  let isFirst = true;

  for await (const line of rl) {
    if (isFirst) {
      n = line;
      isFirst = false;
    } else {
      input = line;
    }
    rl.close();
  }

  process.exit();
})();
