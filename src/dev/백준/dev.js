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
// let fs = require("fs");
// const input = String(fs.readFileSync("input.txt")).trim();

// if (input === input.split("").reverse().join("")) {
//   console.log(1);
// } else {
//   console.log(0);
// }

//1157
// let fs = require("fs");
// const input = String(fs.readFileSync("input.txt")).trim().toUpperCase();

// let max = {};

// input.split("").forEach((v) => {
//   max[v] = (max[v] || 0) + 1;
// });

// const maxCount = Math.max(...Object.values(max));
// const maxChars = Object.keys(max).filter((char) => max[char] === maxCount);

// if (maxChars.length > 1) {
//   console.log("?");
// } else {
//   console.log(maxChars.toString());
// }

//2941
// let fs = require("fs");
// const input = String(fs.readFileSync("input.txt")).trim();

// let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

// function solution(input) {
//   for (let alphabet of croatia) {
//     input = input.split(alphabet).join("Q");
//   }

//   return input.length;
// }

// console.log(solution(input));

//1316
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(file).toString().trim();
// const arr = input.split("\n");

// const n = parseInt(arr[0]);
// let countGroupWord = 0;

// for (let i = 1; i <= n; i++) {
//   const word = arr[i];
//   const letter = [];
//   let isGroupWord = true;

//   for (let j = 0; j < word.length; j++) {
//     if (letter.indexOf(word[j]) === -1) {
//       letter.push(word[j]);
//     } else {
//       if (letter.indexOf(word[j]) !== letter.length - 1) {
//         isGroupWord = false;
//         break;
//       }
//     }
//   }

//   if (isGroupWord) {
//     countGroupWord += 1;
//   }
// }

// console.log(countGroupWord);

//25206
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(file).toString().trim();
// const arr = input.split("\n");

// let k = {};
// const a = ["A+", "A0", "B+", "B0", "C+", "C0", "D+", "D0", "F"];
// const b = [4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0.0];

// a.forEach((v, i) => {
//   k[v] = b[i];
// });

// let ss = 0;
// let aa = 0;

// for (let i = 0; i < arr.length; i++) {
//   let [name, score, level] = arr[i].split(" ").map((v) => v.trim());

//   if (level !== "P") {
//     ss += Number(score) * k[level];
//     aa += Number(score);
//   }
// }

// console.log((ss / aa).toFixed(6));

//2738
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(file).toString().trim();
// const arr = input.split("\n");

// const [q, w] = arr[0].split(" ").map((v) => +v);

// for (let i = 1; i <= q; i++) {
//   const a = arr[i].split(" ").map((v) => +v);
//   const b = arr[i + q].split(" ").map((v) => +v);

//   const t = [];

//   a.forEach((v, i) => {
//     t.push(v + b[i]);
//   });

//   console.log(t.join(" "));
// }

//2566
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(file).toString().trim();
// const arr = input.split("\n");

// let max = 0;
// let a = [0, 0];

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i].split(" ").map((v) => +v);
//   for (let j = 0; j < arr[i].length; j++) {
//     if (max < arr[i][j]) {
//       max = arr[i][j];
//       a = [i, j];
//     }
//   }
// }

// console.log(max);
// console.log(a.map((v) => v + 1).join(" "));

//10798
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(file).toString().trim().split("\n");

// let maxL = 0;
// let result = "";

// for (let i = 0; i < input.length; i++) {
//   if (maxL < input[i].length) {
//     maxL = input[i].length;
//   }
// }

// for (let i = 0; i < maxL; i++) {
//   for (let j = 0; j < input.length; j++) {
//     if (input[j][i] === undefined) continue;
//     else result += input[j][i];
//   }
// }

// console.log(result);

//2563
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(file).toString().trim().split("\n");

// let ans = 0;
// let arr = Array.from(Array(100), () => Array(100).fill(0));
// for (let t = 1; t <= Number(input[0]); t++) {
//   const tmp = input[t].split(" ").map((i) => parseInt(i));

//   let x = tmp[0];
//   let y = tmp[1];
//   for (let i = x; i < x + 10; i++) {
//     for (let j = y; j < y + 10; j++) {
//       if (++arr[i][j] === 1) ans++;
//     }
//   }
// }
// console.log(ans);

//2745
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// var inputs = fs.readFileSync(file).toString().split(" ");
// var char = inputs[0].split("").reverse();
// var base = Number(inputs[1]);
// var result = 0;

// for (var i = 0; i < char.length; i++) {
//   if (char[i] >= "A" && char[i] <= "Z") {
//     char[i] = char[i].charCodeAt(0) - 55;
//     result += char[i] * Math.pow(base, i);
//   } else {
//     char[i] = Number(char[i]);
//     result += char[i] * Math.pow(base, i);
//   }
// }
// console.log(result);

//11005
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// var inputs = fs.readFileSync(file).toString().split(" ");

// console.log(Number(inputs[0]).toString(Number(inputs[1])).toUpperCase());

//2720
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// var input = fs
//   .readFileSync(file)
//   .toString()
//   .split("\n")
//   .map((v) => +v);

// for (let i = 1; i < input.length; i++) {
//   console.log(solution(input[i]));
// }

// function solution(change) {
//   let count = [0, 0, 0, 0];
//   const coins = [25, 10, 5, 1];

//   for (let i = 0; i < coins.length; i++) {
//     count[i] += Math.floor(change / coins[i]);
//     change %= coins[i];
//   }

//   return count.join(" ");
// }

//2903
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// var input = fs.readFileSync(file).toString().trim();

// let dot = 2;
// for (let i = 0; i < +input; i++) {
//   dot += Math.pow(2, i);
// }
// console.log(Math.pow(dot, 2));

//61
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// var input = fs.readFileSync(file).toString().trim();

// let range = 1;
// let block = 1;

// while (block < +input) {
//   block += 6 * range;
//   range++;
// }

// console.log(range);

//1193
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// var input = fs.readFileSync(file).toString().trim();

// const solution = (input) => {
//   const sum = (n) => (n * (n + 1)) / 2;
//   let i = 1;

//   while (sum(i) < input) {
//     i++;
//   }

//   let a = input - sum(i - 1);

//   return (i + 1) % 2 === 1
//     ? [a, i + 1 - a].join("/")
//     : [i + 1 - a, a].join("/");
// };

// console.log(solution(input));

//2869
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// var input = fs.readFileSync(file).toString().trim();
// let [a, b, h] = input.split(" ");

// let result = Math.ceil((h - b) / (a - b));
// console.log(result);

//5086
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// var input = fs.readFileSync(file).toString().trim().split("\n");

// function aa(a, b) {
//   if (a > b && a % b === 0) return "multiple";
//   if (a < b && b % a === 0) return "factor";
//   if (a === b) return "";
//   return "neither";
// }

// for (let i = 0; i < input.length; i++) {
//   let [a, b] = input[i].split(" ").map((v) => +v);
//   console.log(aa(a, b));
// }

//2501
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// var input = fs.readFileSync(file).toString().trim();
// let [a, b] = input.split(" ");

// let s = [1];

// for (let i = 2; i <= a; i++) {
//   if (a % i === 0) {
//     s.push(i);
//   }
// }

// console.log(s[b - 1] === undefined ? 0 : s[b - 1]);

//9506
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// var input = fs.readFileSync(file).toString().trim().split("\n");

// for (let i = 0; i < input.length; i++) {
//   let a = Number(input[i]);
//   if (a !== -1) {
//     let s = [1];

//     for (let i = 2; i < a; i++) {
//       if (a % i === 0) {
//         s.push(i);
//       }
//     }

//     let sum = s.reduce((a, c) => a + c, 0);

//     if (sum === a) {
//       console.log(a + " = " + s.join(" + "));
//     } else {
//       console.log(a + " is NOT perfect.");
//     }
//   }
// }

//1978
var fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
var input = fs.readFileSync(file).toString().trim().split("\n");

let n = +input[0];
let a = input[1].split(" ").map((v) => +v);
let result = 0;

for (let i = 0; i < n; i++) {
  let b = [];

  for (let j = 2; j <= a[i]; j++) {
    if (a[i] % j === 0) {
      b.push(j);
    }
  }

  if (b.length === 1) {
    result++;
  }
}

console.log(result);
