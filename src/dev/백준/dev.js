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
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// var input = fs.readFileSync(file).toString().trim().split("\n");

// let n = +input[0];
// let a = input[1].split(" ").map((v) => +v);
// let result = 0;

// for (let i = 0; i < n; i++) {
//   let b = [];

//   for (let j = 2; j <= a[i]; j++) {
//     if (a[i] % j === 0) {
//       b.push(j);
//     }
//   }

//   if (b.length === 1) {
//     result++;
//   }
// }

// console.log(result);

//2581
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// var input = fs.readFileSync(file).toString().trim().split("\n");

// let m = +input[0];
// let n = +input[1];
// let a = [];

// for (let i = m; i <= n; i++) {
//   let s = [];

//   for (let j = 2; j <= i; j++) {
//     if (i % j === 0) {
//       s.push(j);
//     }
//   }

//   if (s.length === 1) {
//     a.push(+s);
//   }
// }

// if (a.length > 0) {
//   console.log(a.reduce((a, c) => a + c, 0));
//   console.log(a[0]);
// } else {
//   console.log("-1");
// }

//11653
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// var input = Number(fs.readFileSync(file));

// let answer = [];

// for (let i = 2; i <= input; i++) {
//   while (input % i === 0) {
//     input /= i;
//     answer.push(i);
//   }

//   if (input === 1) break;
// }

// answer.forEach((v) => console.log(v));

//27323
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// var input = fs.readFileSync(file).toString().split("\n");
// let [m, n] = input.map((v) => +v);

// console.log(m * n);

//1085
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// var input = fs.readFileSync(file).toString();
// let [a, b, c, d] = input.split(" ").map((v) => +v);

// let s = [a, b, Math.abs(c - a), Math.abs(d - b)];
// console.log(Math.min(...s));

//14215
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// var input = fs.readFileSync(file).toString();
// let [a, b, c] = input
//   .split(" ")
//   .map((v) => +v)
//   .sort((a, b) => a - b);

// if (a + b > c) {
//   console.log(a + b + c);
// } else {
//   console.log(2 * (a + b) - 1);
// }

//2798
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// var input = fs.readFileSync(file).toString().trim().split("\n");
// let [n, m] = input[0]
//   .trim()
//   .split(" ")
//   .map((v) => +v);

// let sum = 0;
// let max = 0;

// input[1] = input[1].split(" ").map((v) => +v);

// for (let i = 0; i < n - 2; i++) {
//   for (let j = i + 1; j < n - 1; j++) {
//     for (let k = j + 1; k < n; k++) {
//       sum = input[1][i] + input[1][j] + input[1][k];
//       if (sum <= m && sum > max) {
//         max = sum;
//       }
//     }
//   }
// }

// console.log(max);

//2231
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// var input = Number(fs.readFileSync(file).toString().trim());

// let mm = 0;

// for (let i = 0; i <= input; i++) {
//   let s = 0;
//   const b = i.toString().split("");
//   for (let j = 0; j < b.length; j++) {
//     s += +b[j];
//   }

//   s += i;

//   if (s === input) {
//     mm = i;
//     break;
//   }
// }

// console.log(mm);

//19532
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// var input = fs
//   .readFileSync(file)
//   .toString()
//   .split(" ")
//   .map((v) => +v);

// const [a, b, c, d, e, f] = input;

// for (let x = -999; x < 1000; x++) {
//   for (let y = -999; y < 1000; y++) {
//     if (a * x + b * y === c && d * x + e * y === f) {
//       console.log(`${x} ${y}`);
//     }
//   }
// }

//1018-체스판 다시 칠하기
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(file).toString().trim().split("\n");

// function solution(A) {
//   let [size, ...arr] = A;
//   let [row, col] = size.split(" ");
//   arr = arr.map((item) => item.trim("\r").split(""));

//   const answer = [];
//   const line = ["WBWBWBWB", "BWBWBWBW"];

//   // i = x 축 -8
//   // j = y 축 -8
//   for (let i = 0; i <= row - 8; i++) {
//     for (let j = 0; j <= col - 8; j++) {
//       //2가지의 경우를 위해 z for문을 이용하였습니다 white로 시작할 경우 black으로 시작할 경우
//       for (let z = 0; z < 2; z++) {
//         let count = 0;
//         // 8*8 정사각형의 틀을 도는 for 문 입니다.
//         for (let x = 0; x < 8; x++) {
//           for (let y = 0; y < 8; y++) {
//             const current = arr[i + x][j + y]; //current는 모든 각 글자를 비교하여 모든 경우의 8*8을 유추합니다
//             if (current !== line[(x + z) % 2][y]) {
//               //line의 올바른 줄과 비교하여 틀린 것이 있다면 count를 셉니다
//               count++;
//             }
//           }
//         }
//         answer.push(count); //count의 개수를 배열에 넣습니다
//       }
//     }
//   }
//   console.log(Math.min(...answer)); // 모든 경우의 count 개수를 얻었다면 min으로 최솟값을 구해줍니다.
// }

// solution(input);

//1436
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const n = +fs.readFileSync(file).toString();

// let num = 666;
// let count = 1;
// while (count !== n) {
//   num++;
//   if (String(num).includes("666")) count++;
// }
// console.log(num);

//2839-설탕배달
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const n = Number(fs.readFileSync(file).toString());

// function solution(n) {
//   let c = 0;
//   while (n > 0) {
//     if (n % 5 === 0) {
//       n -= 5;
//     } else {
//       n -= 3;
//     }
//     c += 1;
//   }
//   return n === 0 ? c : -1;
// }

// console.log(solution(n));

//2750-수 정렬하기
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(file).toString().trim().split("\n");

// let a = [];
// for (let i = 1; i < input.length; i++) {
//   a.push(input[i]);
// }

// a.sort((a, b) => a - b);

// a.forEach((v) => {
//   console.log(v);
// });

//2587-대표값2
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs
//   .readFileSync(file)
//   .toString()
//   .trim()
//   .split("\n")
//   .map((v) => +v);

// input.sort((a, b) => a - b);

// console.log(input.reduce((a, c) => a + c, 0) / input.length);
// console.log(input[Math.floor(input.length / 2)]);

//25305-커트라인
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(file).toString().trim().split("\n");

// const [n, k] = input[0].split(" ").map((v) => +v);

// let a = input[1]
//   .split(" ")
//   .map((v) => +v)
//   .sort((a, b) => b - a);

// console.log(a[k - 1]);

//2751-수 정렬하기2
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(file).toString().split("\n").slice(1);

// console.log(
//   input
//     .map((v) => +v)
//     .sort((a, b) => a - b)
//     .join("\n")
// );

//10989-수 정렬하기3
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(file).toString().split("\n").slice(1);

// console.log(
//   input
//     .map((v) => +v)
//     .sort((a, b) => a - b)
//     .join("\n")
// );

//1427-소트인사이드
// var fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs
//   .readFileSync(file)
//   .toString()
//   .trim()
//   .split("")
//   .map((v) => +v)
//   .sort((a, b) => b - a)
//   .join("");
// console.log(input);

//11650-좌표정렬하기
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs
//   .readFileSync(file)
//   .toString()
//   .trim()
//   .split("\n")
//   .slice(1)
//   .map((el) => el.split(" ").map(Number));

// const solution = (input) => {
//   return input
//     .sort((a, b) => {
//       return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
//     })
//     .map((el) => el.join(" "))
//     .join("\n");
// };

// console.log(solution(input));

//11651-좌표정렬하기2
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs
//   .readFileSync(file)
//   .toString()
//   .trim()
//   .split("\n")
//   .slice(1)
//   .map((el) => el.split(" ").map(Number));

// const solution = (input) => {
//   return input
//     .sort((a, b) => {
//       return a[1] === b[1] ? a[0] - b[0] : a[1] - b[1];
//     })
//     .map((el) => el.join(" "))
//     .join("\n");
// };

// console.log(solution(input));

//1181-단어 정렬
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(file).toString().trim().split("\n").slice(1);

// const solution = (input) => {
//   input = [...new Set(input)];
//   return input
//     .sort((a, b) => a.length - b.length || a.localeCompare(b))
//     .join("\n");
// };

// console.log(solution(input));

//10814-나이순 정렬
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(file).toString().trim().split("\n").slice(1);

// input.sort((a, b) => parseFloat(a) - parseFloat(b));

// console.log(input.join("\n"));

//18870-좌표 압축
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(file).toString().trim().split("\n");
// let N = Number(input.shift());
// let arr = input[0].split(" ").map((x) => +x);

// let set = new Set(arr);
// let uniq = [...set].sort((a, b) => a - b);

// let dic = {};
// uniq.forEach((e, index) => {
//   dic[e] = index;
// });

// let answer = "";
// for (let i = 0; i < arr.length; i++) {
//   answer += dic[arr[i]] + " ";
// }

// console.log(answer);

//10815-숫자카드
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs
//   .readFileSync(file)
//   .toString()
//   .trim()
//   .split("\n")
//   .map((v) => v.trim());

// let r = "";

// let a = new Set(input[1].split(" ").map((v) => +v));
// let b = input[3].split(" ").map((v) => +v);

// b.forEach((v) => {
//   if (a.has(v)) {
//     r += 1;
//   } else {
//     r += 0;
//   }
//   r += " ";
// });

// console.log(r);

//14425-문자열집합
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs
//   .readFileSync(file)
//   .toString()
//   .split("\n")
//   .map((v) => v.trim());

// let [n, m] = input[0].split(" ").map((v) => +v);
// let count = 0;

// const aSet = new Set(input.slice(1, 1 + n));

// for (let i = 1 + n; i <= m + n; i++) {
//   if (aSet.has(input[i])) {
//     count += 1;
//   }
// }

// console.log(count);

//7785-회사에 있는 사람
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs
//   .readFileSync(file)
//   .toString()
//   .split("\n")
//   .map((v) => v.trim());

// let n = +input[0];
// const s = new Set();

// const ss = input.slice(1);

// for (let i = 0; i < n; i++) {
//   const [n, m] = ss[i].split(" ");

//   if (m === "enter") {
//     s.add(n);
//   } else {
//     s.delete(n);
//   }
// }

// console.log(Array.from(s).sort().reverse().join("\n"));

//1620-나는야 포켓몬 마스터 이다솜
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs
//   .readFileSync(file)
//   .toString()
//   .split("\n")
//   .map((v) => v.trim());

// const [n, m] = input[0].split(" ").map(Number);
// const arr = input.slice(1, n + 1);

// const indexMap = {};
// arr.forEach((value, index) => {
//   indexMap[value] = index + 1;
// });

// const answer = input
//   .slice(n + 1)
//   .map((v) => (Number.isNaN(+v) ? indexMap[v] : arr[+v - 1]));

// console.log(answer.join("\n"));

//10816-숫자카드2
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs
//   .readFileSync(file)
//   .toString()
//   .split("\n")
//   .map((v) => v.trim());

// let result = "";
// let arr = input[1].split(" ").map((v) => +v);
// let arr2 = input[3].split(" ").map((v) => +v);
// let countMap = {};

// arr.forEach((num) => {
//   countMap[num] = (countMap[num] || 0) + 1;
// });

// arr2.forEach((v, index) => {
//   result += countMap[v] || 0;
//   if (index < arr2.length - 1) {
//     result += " ";
//   }
// });

// console.log(result);

//1764-듣보잡
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs
//   .readFileSync(file)
//   .toString()
//   .split("\n")
//   .map((v) => v.trim());

// const [n, m] = input[0].split(" ").map((v) => +v);

// let a = input.slice(1, n + 1);
// let b = input.slice(n + 1);

// let c = {};

// a.forEach((v) => {
//   c[v] = (c[v] || 0) + 1;
// });

// b.forEach((v) => {
//   c[v] = (c[v] || 0) + 1;
// });

// let count = 0;
// let names = [];

// for (const key in c) {
//   if (c[key] === 2) {
//     count++;
//     names.push(key);
//   }
// }

// console.log(count);
// console.log(names.sort().join("\n"));

//1269-대칭차집합
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs
//   .readFileSync(file)
//   .toString()
//   .split("\n")
//   .map((v) => v.trim());

// const a = input[1].split(" ").map((v) => +v);
// const b = input[2].split(" ").map((v) => +v);

// let c = {};

// a.forEach((v) => {
//   c[v] = (c[v] || 0) + 1;
// });

// b.forEach((v) => {
//   c[v] = (c[v] || 0) + 1;
// });

// let count = 0;

// for (const key in c) {
//   if (c[key] === 1) {
//     count++;
//   }
// }

// console.log(count);

//11478-서로 다른 부분 문자열의 개수
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(file).toString().split('\n').map(v=>v.trim());

// let r = '';
// for(let i=1; i<+input[0]; i++){
//   let [a,b]=input[i].split(' ').map(v=>+v);
//   if(a===1 ||b===1){
//     r+=a*b;
//   }else{

//   }
// }

//1934-최소공배수
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(file).toString().split("\n");

// input.shift();

// function lcm(a, b) {
//   return (a * b) / gcd(a, b);
// }

// function gcd(a, b) {
//   while (b != 0) {
//     [a, b] = [b, a % b];
//   }
//   return a;
// }

// for (let i = 0; i < input.length; i++) {
//   const [a, b] = input[i].split(" ");
//   console.log(lcm(a, b));
// }

//13241-최소공배수
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(file).toString();

// const [A, B] = input.split(" ").map((v) => +v);
// const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
// const lcm = Math.floor((A * B) / gcd(A, B));
// console.log(lcm);

//1735-분수합
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs
//   .readFileSync(file)
//   .toString()
//   .split("\n")
//   .map((v) => v.trim());

// function gcd(a, b) {
//   while (b !== 0) {
//     [a, b] = [b, a % b];
//   }
//   return a;
// }

// const [a1, b1] = input[0].split(" ").map(Number);
// const [a2, b2] = input[1].split(" ").map(Number);

// // 분모 계산
// const denominator = b1 * b2;
// // 분자 계산
// const numerator = a1 * (denominator / b1) + a2 * (denominator / b2);
// // 최대공약수 계산
// const gcdValue = gcd(numerator, denominator);

// console.log(`${numerator / gcdValue} ${denominator / gcdValue}`);

//2485-가로수
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs
//   .readFileSync(file)
//   .toString()
//   .split("\n")
//   .map((v) => +v);

// input.shift();
// let arr = [];
// let ans = 0;

// for (let i = 0; i < input.length - 1; i++) {
//   const dist = input[i + 1] - input[i];
//   arr.push(dist);
// }

// function getGCD(num1, num2) {
//   return num2 > 0 ? getGCD(num2, num1 % num2) : num1;
// }

// let num = 0;

// for (let i = 0; i < arr.length; i++) {
//   num = getGCD(num, arr[i]);
// }

// arr.forEach((v) => {
//   if (v > num) ans += v / num - 1;
// });

// console.log(ans);

// 4134-다음 소수
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
// input.shift();
// let arr = input.map(Number);
// let answer = [];

// function isPrime(n){
//   if(n<2){
//     return false;
//   }
//   for(let i = 2; i<= Math.sqrt(n); i++){
//     if(n%i===0) return false;
//   }
//   return true;
// }

// while(arr.length != 0){
//   if(isPrime(arr[0])){
//     answer.push(arr[0]);
//     arr.shift();
//   }else{
//     arr[0]++;
//   }
// }

// console.log(answer.join('\n'));

//1929-소수구하기
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(file).toString();

// const [a, b] = input.split(" ").map(Number);
// let result = [];

// function isPrime(n) {
//   if (n < 2) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// for (let i = a; i <= b; i++) {
//   if (isPrime(i)) {
//     result.push(i);
//   }
// }

// console.log(result.join("\n"));
