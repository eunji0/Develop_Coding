//25083 새싹
// console.log("         ,r'\"7");
// console.log("r`-_   ,'  ,/");
// console.log(" \\. \". L_r'");
// console.log("   `~\\/");
// console.log("      |");
// console.log("      |");

//3003
// let fs = require("fs");
// let input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split(" ")
//   .map((el) => Number(el));
// let origin = [1, 1, 2, 2, 2, 8];
// let result = origin.map((el, idx) => el - input[idx]);

// console.log(result.join(" "));

//2444
// let fs = require("fs");
// const N = Number(fs.readFileSync("input.txt"));

// for (let i = 1; i < N; i++) {
//   let blank = " ".repeat(N - i);
//   let stars = "*".repeat(i + (i - 1));
//   console.log(blank + stars);
// }

// for (let j = N; j > 0; j--) {
//   let blank = " ".repeat(N - j);
//   let stars = "*".repeat(j + (j - 1));
//   console.log(blank + stars);
// }

//10988
let fs = require("fs");
const input = String(fs.readFileSync("input.txt")).trim();

if (input === input.split("").reverse().join("")) {
  console.log(1);
} else {
  console.log(0);
}
