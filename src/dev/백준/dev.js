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

//4948-베르트랑 공준
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(file).toString().split("\n").map(Number);

// function isPrime(n) {
//   if (n < 2) {
//     return false;
//   }
//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// let result = [];
// let idx = 0;

// while (true) {
//   const n = input[idx++];
//   if (n === 0) {
//     break;
//   }

//   let count = 0;
//   for (let i = n + 1; i <= n * 2; i++) {
//     if (isPrime(i)) {
//       count++;
//     }
//   }
//   result.push(count);
// }

// console.log(result.join("\n"));

//17103-골드바흐 파티션
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(file).toString().trim().split("\n");

// // 첫 번째 줄은 테스트 케이스의 개수이므로 제거
// input.shift();

// // 문자열 배열을 숫자 배열로 변환
// let number = input.map(Number);

// // 결과를 저장할 배열
// let answer = [];

// // 입력된 숫자 중 최댓값 찾기
// let maxNum = Math.max(...number);

// // 에라토스테네스의 체를 구현한 배열 생성
// let sieve = Array.from({ length: maxNum + 1 }, () => true);

// // 0과 1은 소수가 아니므로 false로 설정
// sieve[0] = false;
// sieve[1] = false;

// // 에라토스테네스의 체 알고리즘을 활용하여 소수 판별
// for (let i = 2; i <= Math.sqrt(maxNum); i++) {
//   if (sieve[i]) {
//     for (let j = 2; j <= maxNum / i; j++) {
//       // 현재 소수의 배수들은 소수가 아님
//       sieve[i * j] = false;
//     }
//   }
// }

// // 각 테스트 케이스에 대해 골드바흐 파티션의 개수 계산
// for (let x of number) {
//   let count = 0;
//   for (let i = 2; i <= x / 2; i++) {
//     // i와 (x-i)가 모두 소수인 경우를 찾아 개수 세기
//     if (sieve[i] && sieve[x - i]) {
//       count++;
//     }
//   }
//   // 결과 배열에 추가
//   answer.push(count);
// }

// // 결과 출력
// console.log(answer.join("\n"));

//13909-창문 닫기
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(file).toString();
// const n = Number(input);

// let r = 0;
// for (let i = 1; i * i <= n; i++) {
//   r++;
// }
// console.log(r);

//28278-스택2
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs
//   .readFileSync(file)
//   .toString()
//   .split("\n")
//   .map((v) => v.trim());

// let stack = [];
// let result = [];

// input.shift();

// input.forEach((v) => {
//   if (v.length > 1) {
//     let [a, b] = v.split(" ").map((c) => +c);
//     stack.push(b);
//   } else {
//     v = Number(v);
//     if (v === 4) {
//       result.push(stack.length === 0 ? 1 : 0);
//     }
//     if (v === 2) {
//       result.push(stack.length === 0 ? -1 : stack.pop());
//     }
//     if (v === 3) {
//       result.push(stack.length);
//     }
//     if (v === 5) {
//       result.push(stack.length === 0 ? -1 : stack.at(-1));
//     }
//   }
// });

// console.log(result.join("\n"));

//10773-제로
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(file).toString().trim().split("\n");

// const K = Number(input[0]);
// const commands = input.slice(1).map(Number);

// let stack = [];

// for (let i = 0; i < K; i++) {
//   const command = commands[i];

//   if (command !== 0) {
//     stack.push(command);
//   } else {
//     stack.pop();
//   }
// }

// const answer = stack.reduce((acc, cur) => acc + cur, 0);
// console.log(answer);

//9012-괄호
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs
//   .readFileSync(file)
//   .toString()
//   .split("\n")
//   .map((v) => v.trim());
// const len = input.shift();
// const result = [];

// for (let i = 0; i < len; i++) {
//   let c = 0;
//   for (let s of input[i]) {
//     c += s === "(" ? 1 : -1;

//     if (c < 0) break;
//   }

//   result.push(c === 0 ? "YES" : "NO");
// }

// console.log(result.join("\n"));

//4949-균형잡힌 세상
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(file).toString().split("\n");

// for (let text of input) {
//   const stack = [];
//   let isCompare = true;
//   if (text === ".") break;
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === "[" || text[i] === "(") {
//       stack.push(text[i]);
//     } else if (text[i] === "]") {
//       if (stack[stack.length - 1] === "[") {
//         stack.pop();
//       } else {
//         isCompare = false;
//         break;
//       }
//     } else if (text[i] === ")") {
//       if (stack[stack.length - 1] === "(") {
//         stack.pop();
//       } else {
//         isCompare = false;
//         break;
//       }
//     } else if (text[i] === ".") break;
//   }
//   if (stack.length > 0 || !isCompare) console.log("no");
//   else console.log("yes");
// }

//12789-도키도키 간식드리미
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(file).toString().split("\n");
// const line = input[1].split(" ").map(Number);
// const stack = [];
// let cur = 1;
// let i = 0;

// while (i < +input[0]) {
//   if (line[i] === cur) {
//     cur++;
//     i++;
//   } else {
//     if (stack.length > 0 && stack.at(-1) === cur) {
//       stack.pop();
//       cur++;
//     } else {
//       stack.push(line[i]);
//       i++;
//     }
//   }
// }

// for (let s = stack.length - 1; s >= 0; s--) {
//   if (stack[s] === cur) {
//     stack.pop();
//     cur++;
//   }
// }

// console.log(stack.length > 0 ? "Sad" : "Nice");

//18258-큐2
// Queue 클래스 정의
// class Queue {
//   constructor() {
//     this.data = []; // 큐를 저장할 배열
//     this.front = 0; // 큐의 앞 부분 인덱스
//     this.rear = -1; // 큐의 뒷 부분 인덱스
//   }

//   // 큐에 원소 추가
//   push(value) {
//     this.data[++this.rear] = value; // rear를 증가시킨 뒤 해당 위치에 값을 추가
//   }

//   // 큐에서 원소 제거 및 반환
//   pop() {
//     if (!this.isEmpty()) {
//       return this.data[this.front++]; // front를 증가시킨 뒤 해당 위치의 값을 반환
//     }
//     return -1;
//   }

//   // 큐가 비어있는지 확인
//   isEmpty() {
//     return this.front > this.rear; // front가 rear보다 크면 큐는 비어있음
//   }

//   // 큐의 크기 반환
//   size() {
//     return this.rear - this.front + 1; // rear와 front의 차이에 1을 더하여 큐의 크기 반환
//   }

//   // 큐의 가장 앞에 있는 원소 반환
//   getFront() {
//     if (!this.isEmpty()) {
//       return this.data[this.front]; // front에 위치한 값을 반환
//     }
//     return -1;
//   }

//   // 큐의 가장 뒤에 있는 원소 반환
//   getRear() {
//     if (!this.isEmpty()) {
//       return this.data[this.rear]; // rear에 위치한 값을 반환
//     }
//     return -1;
//   }
// }

// 입력 처리
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs
//   .readFileSync(file)
//   .toString()
//   .split("\n")
//   .map((v) => v.trim());

// input.shift(); // 첫 번째 줄은 큐의 연산 횟수이므로 무시

// let queue = new Queue(); // Queue 클래스 인스턴스 생성
// let result = []; // 결과를 저장할 배열

// // 입력된 연산 수행
// for (let i = 0; i < input.length; i++) {
//   if (input[i].startsWith("push")) {
//     let [a, b] = input[i].split(" ");
//     queue.push(+b); // 숫자로 변환하여 큐에 원소 추가
//   }
//   if (input[i] === "front") {
//     result.push(queue.getFront()); // 큐의 가장 앞에 있는 원소를 결과 배열에 추가
//   }
//   if (input[i] === "back") {
//     result.push(queue.getRear()); // 큐의 가장 뒤에 있는 원소를 결과 배열에 추가
//   }
//   if (input[i] === "pop") {
//     result.push(queue.pop()); // 큐에서 원소를 제거하고 결과 배열에 추가
//   }
//   if (input[i] === "size") {
//     result.push(queue.size()); // 큐의 크기를 결과 배열에 추가
//   }
//   if (input[i] === "empty") {
//     result.push(queue.isEmpty() ? 1 : 0); // 큐가 비어있는지 여부를 결과 배열에 추가
//   }
// }

// console.log(result.join("\n")); // 결과 배열을 개행 문자로 구분하여 출력

//2164-카드 2
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString();

// const N = Number(input);

// // 노드 클래스 정의
// class Node {
//   constructor(val) {
//     this.val = val; // 현재 노드의 값
//     this.next = null; // 다음 노드를 가리키는 포인터
//     this.prev = null; // 이전 노드를 가리키는 포인터
//   }
// }

// // 연결 리스트 클래스 정의
// class LinkedList {
//   constructor() {
//     this.head = null; // 맨 처음 노드를 가리키는 포인터
//     this.tail = null; // 맨 마지막 노드를 가리키는 포인터
//     this.length = 0; // 연결 리스트의 길이
//   }

//   // 연결 리스트에 노드 추가
//   push(val) {
//     const newNode = new Node(val);

//     if (!this.head) {
//       this.head = newNode;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//     }

//     this.tail = newNode;
//     this.length++;

//     return newNode;
//   }

//   // 연결 리스트의 맨 처음 노드 값 반환
//   getHead() {
//     return this.head.val;
//   }

//   // 연결 리스트의 맨 처음 노드를 제거
//   removeHead() {
//     this.head = this.head.next;
//     if (this.head) {
//       this.head.prev = null;
//     }
//     this.length--;
//   }

//   // 연결 리스트의 길이 반환
//   getLength() {
//     return this.length;
//   }
// }

// // 초기 카드 덱 생성
// const cards = new LinkedList();
// for (let i = 1; i <= N; i++) {
//   cards.push(i);
// }

// // 마지막 카드를 찾을 때까지 반복
// while (cards.getLength() !== 1) {
//   cards.removeHead(); // 맨 앞 노드를 제거
//   cards.push(cards.getHead()); // 맨 앞 노드를 맨 뒤로 이동
//   cards.removeHead(); // 다시 맨 앞 노드를 제거
// }

// // 결과 출력
// console.log(cards.getHead());

//3009-네번째 점
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(file).toString().split("\n");
// let arrayX = [];
// let arrayY = [];
// let x;
// let y;
// for (let i = 0; i < 3; i++) {
//   arrayX.push(Number(input[i].split(" ")[0]));
//   arrayY.push(Number(input[i].split(" ")[1]));
// }
// arrayX = arrayX.sort();
// arrayY = arrayY.sort();

// x = arrayX[1] === arrayX[0] ? arrayX[2] : arrayX[0];
// y = arrayY[1] === arrayY[0] ? arrayY[2] : arrayY[0];

// console.log(`${x} ${y}`);

//18258-큐2
// class Queue {
//   constructor() {
//     this.data = [];
//     this.front = 0;
//     this.rear = -1;
//   }

//   push(value) {
//     return (this.data[++this.rear] = value);
//   }

//   isEmpty() {
//     return this.front > this.rear;
//   }

//   pop() {
//     if (!this.isEmpty()) {
//       return this.data[this.front++];
//     }
//     return -1;
//   }

//   size() {
//     return this.rear - this.front + 1;
//   }

//   getFront() {
//     if (!this.isEmpty()) {
//       return this.data[this.front];
//     }
//     return -1;
//   }

//   getRear() {
//     if (!this.isEmpty()) {
//       return this.data[this.rear];
//     }
//     return -1;
//   }
// }

// // 입력 처리
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs
//   .readFileSync(file)
//   .toString()
//   .split("\n")
//   .map((v) => v.trim());

// input.shift();

// let que = new Queue();
// let result = [];

// for (let i = 0; i < input.length; i++) {
//   if (input[i].startsWith("push")) {
//     let [a, b] = input[i].split(" ");
//     que.push(+b);
//   }

//   if (input[i] === "front") {
//     result.push(que.getFront());
//   }

//   if (input[i] === "back") {
//     result.push(que.getRear());
//   }
//   if (input[i] === "size") {
//     result.push(que.size());
//   }
//   if (input[i] === "empty") {
//     result.push(que.isEmpty() ? 1 : 0);
//   }
//   if (input[i] === "pop") {
//     result.push(que.pop());
//   }
// }

// console.log(result.join("\n"));

//2164-카드 2
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString();

// const N = Number(input);

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.prev = null;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(val) {
//     this.head = null;
//     this.tail = null;
//     this._size = 0;
//   }

//   add(val) {
//     const newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//     }

//     this.tail = newNode;
//     this._size++;
//     return newNode;
//   }

//   getHead() {
//     return this.head.val;
//   }

//   getSize() {
//     return this._size;
//   }

//   removeHead() {
//     this.head = this.head.next;
//     this.head.prev = null;
//     this._size--;
//   }
// }

// const node = new LinkedList();

// for (let i = 1; i <= N; i++) {
//   node.add(i);
// }

// while (node.getSize() !== 1) {
//   node.removeHead();
//   node.add(node.getHead());
//   node.removeHead();
// }

// console.log(node.getHead());

//11866-요세푸스 문제 0
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString().trim();

// const [N, K] = input.split(" ").map(Number);

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this._size = 0;
//   }

//   add(value) {
//     const newNode = new Node(value);

//     if (!this.head) this.head = newNode;
//     else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//     }

//     this.tail = newNode;
//     this._size++;

//     return newNode;
//   }

//   getHead() {
//     return this.head.value;
//   }

//   removeHead() {
//     this.head = this.head.next;
//     if (this.head) {
//       this.head.prev = null;
//     }
//     this._size--;
//   }

//   getSize() {
//     return this._size;
//   }
// }

// const josephusPermutation = (N, K) => {
//   const node = new LinkedList();

//   for (let i = 1; i <= N; i++) {
//     node.add(i);
//   }

//   let result = [];

//   while (node._size !== 0) {
//     for (let i = 0; i < K - 1; i++) {
//       node.add(node.getHead());
//       node.removeHead();
//     }

//     result.push(node.getHead());
//     node.removeHead();
//   }

//   return result;
// };

// const permutation = josephusPermutation(N, K);
// console.log(`<${permutation.join(", ")}>`);

//28279-덱2
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .split("\n")
//   .map((v) => v.trim());

// class Node {
//   constructor(val) {
//     this.value = val;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class Deque {
//   constructor(val) {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   insert(val, type) {
//     const curNode = new Node(val);
//     if (!this.size) {
//       if (!this.head) this.head = curNode;
//       if (!this.tail) this.tail = curNode;
//     } else {
//       if (type === "front") {
//         this.head.prev = curNode;
//         curNode.next = this.head;
//         this.head = curNode;
//       } else if (type === "back") {
//         this.tail.next = curNode;
//         curNode.prev = this.tail;
//         this.tail = curNode;
//       }
//     }

//     this.size += 1;
//   }

//   frontExtract() {
//     if (!this.head) return -1;
//     const curVal = this.head.value;
//     this.head = this.head.next;
//     if (!this.head) this.tail = undefined;
//     else {
//       this.head.prev = undefined;
//     }
//     this.size -= 1;
//     return curVal;
//   }

//   backExtract() {
//     if (!this.tail) return -1;
//     const curVal = this.tail.value;
//     this.tail = this.tail.prev;
//     if (!this.tail) this.head = undefined;
//     else {
//       this.tail.next = undefined;
//     }
//     this.size -= 1;
//     return curVal;
//   }

//   length() {
//     return this.size;
//   }

//   isEmpty() {
//     return !this.size ? 1 : 0;
//   }

//   printFront() {
//     if (!this.head) return -1;
//     return this.head.value;
//   }

//   printBack() {
//     if (!this.tail) return -1;
//     return this.tail.value;
//   }
// }

// const deque = new Deque();
// const result = [];
// input.shift();

// input.forEach((command) => {
//   const [type, val] = command.split(" ");
//   switch (type) {
//     case "1":
//       deque.insert(Number(val), "front");
//       break;
//     case "2":
//       deque.insert(Number(val), "back");
//       break;
//     case "3":
//       result.push(deque.frontExtract());
//       break;
//     case "4":
//       result.push(deque.backExtract());
//       break;
//     case "5":
//       result.push(deque.length());
//       break;
//     case "6":
//       result.push(deque.isEmpty());
//       break;
//     case "7":
//       result.push(deque.printFront());
//       break;
//     case "8":
//       result.push(deque.printBack());
//       break;
//     default:
//       break;
//   }
// });

// console.log(result.join("\n"));

//24511-queuestack
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.prev = null;
//     this.next = null;
//   }
// }

// class Deque {
//   constructor() {
//     this.left = null;
//     this.right = null;
//     this.size = 0;
//   }

//   leftInsert(val) {
//     const curNode = new Node(val);
//     this.size += 1;
//     if (!this.left || !this.right) {
//       this.left = curNode;
//       this.right = curNode;
//     } else {
//       curNode.next = this.left;
//       this.left.prev = curNode;
//       this.left = curNode;
//     }
//   }
//   rightInsert(val) {
//     const curNode = new Node(val);
//     this.size += 1;
//     if (!this.left || !this.right) {
//       this.left = curNode;
//       this.right = curNode;
//     } else {
//       curNode.prev = this.right;
//       this.right.next = curNode;
//       this.right = curNode;
//     }
//   }
//   leftExtract() {
//     if (!this.left) return;
//     const popedVal = this.left.value;
//     this.size -= 1;
//     if (this.left.next) {
//       this.left = this.left.next;
//       this.left.prev = null;
//     } else {
//       this.left = null;
//       this.right = null;
//     }
//     return popedVal;
//   }
// }

// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// let deq = new Deque();
// const C = input.pop().split(" ");
// const cLen = input.pop();
// const B = input.pop().split(" ");
// const A = input.pop().split(" ");
// const abLen = input.pop();

// let result = [];

// for (let i = 0; i < abLen; i++) {
//   if (A[i] === "0") deq.leftInsert(B[i]);
// }

// for (let i = 0; i < cLen; i++) {
//   deq.rightInsert(C[i]);
//   result.push(deq.leftExtract());
// }

// console.log(result.join(" "));

//15439-베라의 패션
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString().trim();

// const n = +input;
// console.log(n * (n - 1));

//24723-녹색거탑
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString().trim();

// const n = +input;
// console.log(2 ** n);

//10872-팩토리얼
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString().trim();

// const n = +input;

// const factorial = (n) => {
//   if (n === 0) {
//     return 1;
//   }

//   if (n < 2) {
//     return n;
//   }

//   return factorial(n - 1) * n;
// };

// console.log(factorial(n));

//11050-이항계수
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString().trim();

// const [n, r] = input.split(" ").map(Number);

// const factorial = (m) => {
//   if (m === 0) {
//     return 1;
//   }

//   if (m < 2) {
//     return m;
//   }

//   return factorial(m - 1) * m;
// };

// console.log(factorial(n) / (factorial(r) * factorial(n - r)));

//1010-다리 놓기
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// const factorial = (m) => {
//   if (m === 0) {
//     return 1;
//   }

//   if (m < 2) {
//     return m;
//   }

//   return factorial(m - 1) * m;
// };

// for (let i = 1; i <= +input[0]; i++) {
//   const [n, r] = input[i].split(" ").map(Number);
//   console.log(Math.round(factorial(r) / (factorial(n) * factorial(r - n))));
// }

//1037-약수
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// let a = input[1].split(" ").sort((a, b) => a - b);

// let max = Math.max(...a);
// let min = Math.min(...a);

// console.log(a.length >= 2 ? max * min : min * min);

//25192-인사성 밝은 곰곰이
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n")
//   .map((v) => v.trim());

// let u = {};
// let result = 0;

// for (let i = 1; i < input.length; i++) {
//   if (input[i] === "ENTER") {
//     u = {};
//     continue;
//   }

//   if (input[i] in u) continue;
//   u[input[i]] = 1;
//   result += 1;
// }

// console.log(result);

//26069-붙임성 좋은 총총이
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n")
//   .map((v) => v.trim());

// let a = new Set();

// for (let i = 1; i < input.length; i++) {
//   let [q, w] = input[i].split(" ");
//   if (q === "ChongChong" || w === "ChongChong" || a.has(q) || a.has(w)) {
//     a.add(q);
//     a.add(w);
//   }
// }

// console.log(a.size);

//2108-통계학
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString().split("\n");

// let arr = input.map(Number);
// let length = arr.shift();

// // 산술평균
// let a = arr.reduce((a, b) => a + b, 0);
// let avg = Math.round(a / length);

// // 중앙값
// arr.sort((a, b) => a - b);
// let answer =
//   length % 2 === 0
//     ? arr[length / 2] + arr[length / 2 - 1]
//     : arr[Math.floor(length / 2)];

// // 최빈값 데이터 집합에서 가장 많이 등장하는 값, 여러개 있을때 두번째로 작은값 출력
// function getMostValue() {
//   const map = new Map();
//   for (let i in arr) {
//     if (!map.has(arr[i])) {
//       map.set(arr[i], 1); // key, value 저장
//     } else {
//       map.set(arr[i], map.get(arr[i]) + 1); // value + 1   중복되면 빈도수 추가, get은 value불러옴 아하
//     }
//   }
//   let maxValue = 0;
//   let arr2 = [];
//   map.forEach((ele, key) => {
//     if (maxValue < ele) {
//       maxValue = ele;
//       arr2 = []; // 배열 리셋
//       arr2.push(key); // 반도수가 큰 것만 배열에 추가
//     } else if (maxValue === map.get(key)) {
//       arr2.push(key); // 빈도수가 똑같다면 전부 배열에 추가하기
//     }
//   });
//   return arr2.length !== 1 ? arr2[1] : arr2[0]; // 배열의 길이가 1이 아니라면 두번째로 작은 최빈값 출력
// }

// // 범위
// let max = Math.max(...arr);
// let min = Math.min(...arr);
// let range = max - min;

// console.log(avg === -0 ? 0 : avg);
// console.log(answer);
// console.log(getMostValue());
// console.log(range);

//20920-영단어암기는 어려워
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .split("\n")
//   .map((v) => v.trim());

// let [N, M] = input[0].split(" ").map(Number);

// input.shift();

// let map = new Map();

// for (let i = 0; i < input.length; i++) {
//   if (input[i].length >= M) map.set(input[i], (map.get(input[i]) || 0) + 1);
// }

// map = [...map]
//   .sort((a, b) => {
//     if (a[1] === b[1]) {
//       if (a[0].length === b[0].length) {
//         return a[0] < b[0] ? -1 : 1;
//       } else {
//         return b[0].length - a[0].length;
//       }
//     } else {
//       return b[1] - a[1];
//     }
//   })
//   .map((v) => v[0])
//   .join("\n");

// console.log(map);

//27433-팩토리얼2
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString();
// let a = 1;

// for (let i = +input; i > 1; i--) {
//   a *= i;
// }

// console.log(a);

//10870-피보나치 수 5
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString();

// const f = (n) => {
//   if (n === 0) return 0;
//   else if (n === 1) return 1;
//   else return f(n - 1) + f(n - 2);
// };

// console.log(f(+input));

//25501-재귀의 귀재
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");
// let callCount = 0;

// // 재귀 함수
// function recursion(s, l, r) {
//   if (l === 0) callCount = 0; // 처음 호출될 때, 호출 횟수 초기화
//   callCount++; // 함수가 호출될 때마다 호출 횟수 증가

//   if (l >= r) return 1; // 문자열이 비어있거나 한 글자인 경우, 팰린드롬으로 간주
//   else if (s[l] !== s[r])
//     return 0; // 현재 비교하는 두 문자가 다른 경우, 팰린드롬이 아님
//   else return recursion(s, l + 1, r - 1); // 현재 비교하는 두 문자가 같은 경우, 재귀 호출
// }

// // 주어진 문자열이 팰린드롬인지 여부와 재귀 호출 횟수를 반환하는 함수
// function isPalindrome(s) {
//   return recursion(s, 0, s.length - 1);
// }

// input.shift(); // 첫 번째 줄은 테스트 케이스의 개수이므로 제거

// // 각 테스트 케이스에 대해 결과를 계산
// const result = input.map((a, i) => {
//   return `${isPalindrome(a)} ${callCount}`;
// });

// // 결과 출력
// console.log(result.join("\n"));

//4779-칸토어 집합
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .split("\n")
//   .map(Number);

// // 칸토어 집합을 생성하는 함수
// function cantore(n) {
//   // n이 0이면 "-"을 반환하고 종료
//   if (n === 0) {
//       return "-";
//   }

//   // 현재 레벨의 칸토어 집합을 생성
//   const dash = '-'.repeat(3 ** n);
//   const splitedArr = [];

//   // 칸토어 집합을 3등분하고 재귀적으로 각 부분을 생성
//   for (let i = 0; i <= dash.length - dash.length / 3; i += dash.length / 3) {
//       splitedArr.push(cantore(n - 1));
//   }

//   // 가운데 부분을 공백으로 변환
//   splitedArr[1] = splitedArr[1].split("-").join(" ");

//   // 현재 레벨의 칸토어 집합을 조합하여 반환
//   return splitedArr.join("");
// }

// // 입력을 받아 각각에 대해 칸토어 집합을 생성하고 결과를 출력
// const result = input.map(cantore);

// console.log(result.join("\n"));

//11047-동전 0
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString().split("\n");

// let [a, price] = input[0].split(" ").map(Number);

// let count = 0;

// input.shift();

// const coins = input.map(Number).sort((a, b) => b - a);

// for (let i = 0; i < coins.length; i++) {
//   if (price < coins[i]) {
//     continue;
//   } else {
//     const value = Math.floor(price / coins[i]);
//     price -= value * coins[i];
//     count += value;

//     if (price === 0) {
//       break;
//     }
//   }
// }

// console.log(count);

//1931-회의실 배정
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// const [n, ...arr] = input;

// const t = arr
//   .map((v) => [...v.split(" ").map(Number)])
//   .sort((a, b) => {
//     if (a[1] === b[1]) {
//       return a[0] - b[0]; // 종료 시간이 같으면 시작 시간으로 정렬
//     } else {
//       return a[1] - b[1];
//     }
//   });

// let e = 0;
// let r = 0;

// t.forEach((tt) => {
//   if (tt[0] >= e) {
//     r++;
//     e = tt[1];
//   }
// });

// console.log(r);

//11399-ATM
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// const arr = input[1]
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => a - b);

// let t = 0;
// let s = 0;
// for (let i = 0; i < arr.length; i++) {
//   t += s + arr[i];
//   s += arr[i];
// }

// console.log(t);

//1541-잃어버린 괄호
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString().trim();

// function sol(input) {
//   const n = input.split("-").map((v) =>
//     v
//       .split("+")
//       .map(Number)
//       .reduce((a, c) => a + c, 0)
//   );
//   return 2 * n[0] - n.reduce((a, c) => a + c, 0);
// }

// console.log(sol(input));

//13305-주유소
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// const n = +input[0];
// const distance = input[1].split(" ").map((v) => BigInt(v));
// const price = input[2].split(" ").map((v) => BigInt(v));

// let curP = price[0];
// let cost = 0n;

// for (let i = 0; i < n - 1; i++) {
//   cost += distance[i] * curP;
//   if (curP > price[i + 1]) curP = price[i + 1];
// }

// console.log(String(cost));

//그리디 문제 다시 풀기
//11047-동전0
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString().split("\n");

// let [a, price] = input[0].split(" ").map(Number);

// let count = 0;

// input.shift();

// const coins = input.map(Number).sort((a, b) => b - a);

// for (let i = 0; i < coins.length; i++) {
//   if (price < coins[i]) {
//     continue;
//   } else {
//     const value = Math.floor(price / coins[i]);
//     price -= value * coins[i];
//     count += value;

//     if (price === 0) {
//       break;
//     }
//   }
// }

// console.log(count);

//1931-회의실 배정
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// const [n, ...arr] = input;

// const t = arr
//   .map((v) => v.trim().split(" ").map(Number))
//   .sort((a, b) => {
//     if (a[1] === b[1]) {
//       return a[0] - b[0];
//     } else {
//       return a[1] - b[1];
//     }
//   });

// let a = 0;
// let s = 0;
// t.forEach((tt) => {
//   if (tt[0] >= a) {
//     s++;
//     a = tt[1];
//   }
// });

// console.log(s);

//11399-ATM
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// const arr = input[1]
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => a - b);

// let s = 0;
// let a = 0;

// for (let i = 0; i < arr.length; i++) {
//   s += a + arr[i];
//   a += arr[i];
// }

// console.log(s);

//1541-잃어버린 괄호
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString().trim();

// const i = input.split("-").map((v) =>
//   v
//     .split("+")
//     .map(Number)
//     .reduce((a, c) => a + c, 0)
// );
// console.log(i[0] * 2 - i.reduce((a, c) => a + c, 0));

//13305-주유소
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// const n = +input[0];
// const dis = input[1].split(" ").map((v) => BigInt(v));
// const price = input[2].split(" ").map((v) => BigInt(v));

// let s = 0n;
// let cur = price[0];
// for (let i = 0; i < n - 1; i++) {
//   s += cur * dis[i];
//   if (cur > price[i + 1]) cur = price[i + 1];
// }

// console.log(String(s));

//1026-보물
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// const a = input[1]
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => a - b);
// const b = input[2]
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => b - a);

// let s = 0;
// for (let i = 0; i < +input[0]; i++) {
//   s += a[i] * b[i];
// }

// console.log(s);

//5585-거스름돈
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString().trim();

// let price = 1000 - +input;

// let arr = [500, 100, 50, 10, 5, 1];

// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (price < arr[i]) {
//     continue;
//   } else {
//     let value = Math.floor(price / arr[i]);
//     count += value;
//     price -= value * arr[i];
//     if (price === 0) {
//       break;
//     }
//   }
// }

// console.log(count);

//10162-전자레인지
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString().trim();

// let time = +input;
// const t = [300, 60, 10];

// let a = new Array(t.length).fill(0);

// for (let i = 0; i < a.length; i++) {
//   if (time < t[i]) {
//     continue;
//   } else {
//     let val = Math.floor(time / t[i]);
//     time -= val * t[i];
//     a[i] += val;

//     if (time === 0) {
//       break;
//     }
//   }
// }

// console.log(time === 0 ? a.join(" ") : "-1");

//2864-5와 6의 차이
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString().trim();

// function convertNumber(str, from, to) {
//   return str
//     .split("")
//     .map((v) => (v === from ? to : v))
//     .join("");
// }

// const numbers = input.split(" ");
// let min = 0;
// let max = 0;

// for (let i = 0; i < numbers.length; i++) {
//   min += +convertNumber(numbers[i], "6", "5");
//   max += +convertNumber(numbers[i], "5", "6");
// }

// console.log(min, max);

//16435-스네이크버드
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// let [n, l] = input[0].split(" ").map(Number);
// const arr = input[1]
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => a - b);

// arr.forEach((v) => {
//   if (v <= l) {
//     l += 1;
//   }
// });
// console.log(l);

//9237-이장님초대
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// const t = input[1]
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => b - a);
// let day = 0;

// for (let i = 0; i < t.length; i++) {
//   day = Math.max(day, t[i] + i + 1);
// }

// console.log((day += 1));

//14720-우유 축제
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// const arr = input[1].split(" ").map(Number);

// let count = 0;

// arr.forEach((v) => {
//   if (v === count % 3) {
//     count += 1;
//   }
// });

// console.log(count);

//14469-소가 길을 건너간 이유 3
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
// const N = Number(input.shift());
// input = input.map((a) => a.split(" ").map(Number));
// input = input.sort((a, b) => a[0] - b[0]);
// let time = 0;
// input.forEach((list, i) => {
//   const [arrived, delay] = list;
//   if (i === 0) time = arrived + delay;
//   else {
//     time = Math.max(arrived, time) + delay;
//   }
// });
// console.log(time);

//14487-욱제는 효도쟁이야!!
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");
// const N = Number(input.shift());

// let sum = 0;
// let max = 0;

// input[0]
//   .split(" ")
//   .map(Number)
//   .forEach((numStr) => {
//     sum += numStr;
//     max = Math.max(max, numStr);
//   });

// sum -= max;
// console.log(sum);

//20115-에너지드링크
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
// const N = Number(input.shift());
// input = input
//   .toString()
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => b - a);

// let s = input[0];
// for (let i = 1; i < input.length; i++) {
//   s += input[i] / 2;
// }
// console.log(s);

//1920-수찾기
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// const numbersSet = new Set(input[1].split(" ").map(Number));
// const b = input[3].split(" ").map(Number);

// let result = b.map((v) => (numbersSet.has(v) ? 1 : 0));
// console.log(result.join("\n"));

//11659-구간 합 구하기 4
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// const arr = input[1].split(" ").map(Number);
// const cumsum = new Array(arr.length + 1).fill(0);
// const output = [];

// arr.forEach((v, i) => {
//   cumsum[i + 1] = cumsum[i] + v;
// });

// input.slice(2).forEach((ij) => {
//   const [i, j] = ij.split(" ").map((v) => +v);
//   output.push(cumsum[j] - cumsum[i - 1]);
// });

// console.log(output.join("\n"));

//2559-수열
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// const [N, K] = input[0].split(" ").map(Number);
// const arr = input[1].split(" ").map(Number);
// let sum = arr.slice(0, K).reduce((a, c)=>a+c, 0);

// let answer = sum;

// for(let i=0; i<N-K; i++){
//   sum += arr[i+K]-arr[i];
//   if(sum>answer){
//     answer=sum
//   }
// }
// console.log(answer)

//11659-구간 합 구하기 4
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// const arr = input[1].split(" ").map(Number);
// const sum = new Array(arr.length + 1).fill(0);

// arr.forEach((v, i) => {
//   sum[i + 1] = sum[i] + v;
// });

// let out = [];
// input.slice(2).forEach((ij) => {
//   let [i, j] = ij.split(" ").map(Number);
//   out.push(sum[j] - sum[i-1]);
// });

// console.log(out.join("\n"));

//16139-인간-컴퓨터 상호작용
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

// const [str, q, ...INPUT] = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// let result = '';
// let input=[];

// INPUT.forEach(e=>{
//   let temp = e.split(' ');
//   temp[1] = +temp[1];
//   temp[2]= +temp[2];

//   input.push(temp);
// })

// const dp={};

// input.forEach(e=>{
//   if(!dp[e[0]]){
//     let arr = [];

//     for(let i=0; i<str.length; i++){
//       let temp = i === 0 ? 0:arr[i-1];
//       if(str[i]===e[0]) temp++;
//       arr.push(temp)
//     }

//     dp[e[0]] = arr
//   }

//   if(e[1] === 0){
//     result+=dp[e[0]][e[2]]+'\n';
//   }else{
//     result+=dp[e[0]][e[2]] - dp[e[0]][e[1]-1]+'\n'
//   }
// })

// console.log(result)

//10986-나머지합
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// const [n, m] = input[0].split(" ").map(Number);
// const a = input[1].split(" ").map(Number);

// const [b, c] = [Array(n).fill(0), Array(m).fill(0n)];

// for (let i = 0; i < n; i++) {
//   b[i] = ((b[i - 1] ?? 0) + a[i]) % m;
// }
// b.forEach((e) => c[e]++);
// const o = c[0] + c.reduce((a, c) => a + (c * (c - 1n)) / 2n, 0n);
// console.log(o.toString());

//11659-구간 합 구하기 4
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// const arr = input[1].split(" ").map(Number);
// const sum = new Array(arr.length).fill(0);
// let q = [];

// arr.forEach((v, i) => {
//   sum[i + 1] = sum[i] + v;
// });

// input.slice(2).forEach((ij) => {
//   const [i, j] = ij.split(" ").map(Number);
//   q.push(sum[j] - sum[i - 1]);
// });

// console.log(q.join("\n"));

//11660- 구간 합 구하기 5
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const [[n, m], ...input] = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n")
//   .map((v) => v.split(" ").map(Number));

// const arr = input.slice(0, n);
// const xy = input.slice(n);

// const table = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

// arr.forEach((v, i) => {
//   v.forEach((q, j) => {
//     table[i + 1][j + 1] = q;
//   });
// });

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     table[i][j] += table[i - 1][j] + table[i][j - 1] - table[i - 1][j - 1];
//   }
// }

// const q = [];

// xy.forEach(([x1, y1, x2, y2]) => {
//   q.push(
//     table[x2][y2] +
//       table[x1 - 1][y1 - 1] -
//       table[x1 - 1][y2] -
//       table[x2][y1 - 1]
//   );
// });

// console.log(q.join("\n"));

//25682-체스판 다시 칠하기 2
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// // 입력으로부터 보드의 크기 N, M과 획득해야 하는 정사각형의 크기 K를 가져옵니다.
// let [N, M, K] = input[0].split(" ").map(Number);

// // 입력에서 보드 정보를 가져와 2차원 배열 형태로 저장합니다.
// const board = input.slice(1, N + 1).map((line) => line.split(""));

// // 최소 변경 개수를 계산하는 solve 함수를 호출합니다.
// solve();

// // 보드에서 최소로 변경해야 하는 정사각형의 개수를 출력하는 함수
// function solve() {
//   // 검은색 정사각형과 흰색 정사각형 중에서 최소 변경 개수를 출력합니다.
//   console.log(Math.min(minimalBoard("B"), minimalBoard("W")));
// }

// // 보드에서 최소로 변경해야 하는 정사각형의 개수를 계산하는 함수
// function minimalBoard(color) {
//   let count = Infinity; // 최소 변경 개수를 저장하는 변수를 초기화합니다.
//   let value; // 현재 위치의 값을 나타내는 변수입니다.

//   // 각 위치까지의 누적 합을 저장할 배열을 초기화합니다.
//   let prefixSum = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));

//   // 보드를 순회하며 누적 합을 계산합니다.
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < M; j++) {
//       // 해당 위치의 값이 color와 일치하는지 확인하여 value를 설정합니다.
//       if ((i + j) % 2 === 0) {
//         value = board[i][j] !== color ? 1 : 0;
//       } else {
//         value = board[i][j] === color ? 1 : 0;
//       }
//       // 누적 합을 계산하여 prefixSum 배열에 저장합니다.
//       prefixSum[i + 1][j + 1] =
//         prefixSum[i][j + 1] + prefixSum[i + 1][j] - prefixSum[i][j] + value;
//     }
//   }

//   // 보드에서 정사각형의 크기가 K인 모든 부분에서 최소 변경 개수를 계산합니다.
//   for (let i = 1; i <= N - K + 1; i++) {
//     for (let j = 1; j <= M - K + 1; j++) {
//       count = Math.min(
//         count,
//         // 해당 부분의 누적 합을 이용하여 최소 변경 개수를 계산합니다.
//         prefixSum[i + K - 1][j + K - 1] -
//           prefixSum[i + K - 1][j - 1] -
//           prefixSum[i - 1][j + K - 1] +
//           prefixSum[i - 1][j - 1]
//       );
//     }
//   }

//   return count; // 최소 변경 개수를 반환합니다.
// }

//11659-구간 합 구하기 4
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// const arr = input[1].split(" ").map(Number);
// let a = new Array(arr.length + 1).fill(0);

// arr.forEach((v, i) => {
//   a[i + 1] = a[i] + v;
// });

// let result = [];

// input.slice(2).forEach((v) => {
//   const [q, w] = v.split(" ").map(Number);
//   result.push(a[w] - a[q - 1]);
// });

// console.log(result.join("\n"));

//2559-수열
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// const [n, m] = input[0].split(" ").map(Number);
// const arr = input[1].split(" ").map(Number);
// let sum = arr.slice(0, m).reduce((a, c) => a + c, 0);

// let answer = sum;

// for (let i = 0; i < n - m; i++) {
//   sum += arr[i + m] - arr[i];
//   if (sum > answer) {
//     answer = sum;
//   }
// }

// console.log(answer);

//16139-인간-컴퓨터 상호작용
// const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

// const [str, q, ...INPUT] = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// let result = "";
// let input = [];

// INPUT.forEach((v) => {
//   let temp = v.split(" ");
//   temp[1] = +temp[1];
//   temp[2] = +temp[2];
//   input.push(temp);
// });

// let dp = {};

// input.forEach((v) => {
//   if (!dp[v[0]]) {
//     let arr = [];

//     for (let i = 0; i < str.length; i++) {
//       let temp = i === 0 ? 0 : arr[i - 1];
//       if (str[i] === v[0]) temp++;
//       arr.push(temp);
//     }

//     dp[v[0]]= arr
//   }

//   if (v[1] === 0) {
//     result += dp[v[0]][v[2]] + "\n";
//   } else {
//     result += dp[v[0]][v[2]] - dp[v[0]][v[1] - 1] + "\n";
//   }
// });

// console.log(result);

//11660- 구간 합 구하기 5
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const [[n, m], ...input] = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n")
//   .map((v) => v.split(" ").map(Number));

// const arr = input.slice(0, n);
// let table = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
// const xy = input.slice(n);

// arr.forEach((v, i) => {
//   v.forEach((q, j) => {
//     table[i + 1][j + 1] = q;
//   });
// });

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     table[i][j] += table[i - 1][j] + table[i][j - 1] - table[i - 1][j - 1];
//   }
// }

// let result = [];

// xy.forEach((v) => {
//   let [x1, y1, x2, y2] = v;
//   result.push(
//     table[x2][y2] -
//       table[x1 - 1][y2] -
//       table[x2][y1 - 1] +
//       table[x1 - 1][y1 - 1]
//   );
// });

// console.log(result.join("\n"));

//25682-체스판 다시 칠하기 2
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// let [N, M, K] = input[0].split(" ").map(Number);

// // 입력에서 보드 정보를 가져와 2차원 배열 형태로 저장
// const board = input.slice(1, N + 1).map((line) => line.split(""));

// // 최소 변경 개수를 계산하는 solve 함수를 호출
// solve();

// // 보드에서 최소로 변경해야 하는 정사각형의 개수를 출력하는 함수
// function solve() {
//   // 검은색 정사각형과 흰색 정사각형 중에서 최소 변경 개수를 출력
//   console.log(Math.min(minimalBoard("B"), minimalBoard("W")));
// }

// // 보드에서 최소로 변경해야 하는 정사각형의 개수를 계산하는 함수
// function minimalBoard(color) {
//   let count = Infinity; // 최소 변경 개수를 저장하는 변수를 초기화
//   let value; // 현재 위치의 값을 나타내는 변수

//   // 각 위치까지의 누적 합을 저장할 배열을 초기화
//   let prefixSum = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));

//   // 보드를 순회하며 누적 합을 계산
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < M; j++) {
//       // 해당 위치의 값이 color와 일치하는지 확인하여 value를 설정
//       if ((i + j) % 2 === 0) {
//         value = board[i][j] !== color ? 1 : 0;
//       } else {
//         value = board[i][j] === color ? 1 : 0;
//       }
//       // 누적 합을 계산하여 prefixSum 배열에 저장
//       prefixSum[i + 1][j + 1] =
//         prefixSum[i][j + 1] + prefixSum[i + 1][j] - prefixSum[i][j] + value;
//     }
//   }

//   // 보드에서 정사각형의 크기가 K인 모든 부분에서 최소 변경 개수를 계산
//   for (let i = 1; i <= N - K + 1; i++) {
//     for (let j = 1; j <= M - K + 1; j++) {
//       count = Math.min(
//         count,
//         // 해당 부분의 누적 합을 이용하여 최소 변경 개수를 계산.
//         prefixSum[i + K - 1][j + K - 1] -
//           prefixSum[i + K - 1][j - 1] -
//           prefixSum[i - 1][j + K - 1] +
//           prefixSum[i - 1][j - 1]
//       );
//     }
//   }

//   return count; // 최소 변경 개수를 반환.
// }

//1753-최단경로
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");

// class minHeap {
//   heapArray = [];
//   constructor() {
//     this.heapArray.push(null);
//   }

//   push(data) {
//     if (this.heapArray === null) {
//       this.heapArray = [];
//       this.heapArray.push(null);
//       this.heapArray.push(data);
//     } else {
//       this.heapArray.push(data);
//       let inserted_idx = this.heapArray.length - 1;
//       let parent_idx = parseInt(inserted_idx / 2);
//       while (inserted_idx > 1) {
//         if (this.heapArray[inserted_idx][1] < this.heapArray[parent_idx][1]) {
//           const tmp = this.heapArray[inserted_idx];
//           this.heapArray[inserted_idx] = this.heapArray[parent_idx];
//           this.heapArray[parent_idx] = tmp;
//           inserted_idx = parent_idx;
//           parent_idx = parseInt(parent_idx / 2);
//         } else {
//           break;
//         }
//       }
//     }
//   }
//   move_down(pop_idx) {
//     const left_child = pop_idx * 2;
//     const right_child = pop_idx * 2 + 1;

//     if (left_child >= this.heapArray.length) {
//       return false;
//     } else if (right_child >= this.heapArray.length) {
//       if (this.heapArray[pop_idx][1] > this.heapArray[left_child][1]) {
//         return true;
//       }
//       return false;
//     } else {
//       if (this.heapArray[left_child][1] < this.heapArray[right_child][1]) {
//         if (this.heapArray[pop_idx][1] > this.heapArray[left_child][1]) {
//           return true;
//         }
//         return false;
//       } else {
//         if (this.heapArray[pop_idx][1] > this.heapArray[right_child][1]) {
//           return true;
//         }
//         return false;
//       }
//     }
//   }

//   pop() {
//     if (this.heapArray === null) {
//       return null;
//     } else {
//       const return_data = this.heapArray[1];
//       this.heapArray[1] = this.heapArray[this.heapArray.length - 1];
//       this.heapArray.pop();
//       let popped_idx = 1;
//       while (this.move_down(popped_idx)) {
//         const left_child = popped_idx * 2;
//         const right_child = popped_idx * 2 + 1;
//         if (right_child >= this.heapArray.length) {
//           if (this.heapArray[popped_idx][1] > this.heapArray[left_child][1]) {
//             const tmp = this.heapArray[popped_idx];
//             this.heapArray[popped_idx] = this.heapArray[left_child];
//             this.heapArray[left_child] = tmp;
//             popped_idx = left_child;
//           }
//         } else {
//           if (this.heapArray[left_child][1] < this.heapArray[right_child][1]) {
//             if (this.heapArray[popped_idx][1] > this.heapArray[left_child][1]) {
//               const tmp = this.heapArray[popped_idx];
//               this.heapArray[popped_idx] = this.heapArray[left_child];
//               this.heapArray[left_child] = tmp;
//               popped_idx = left_child;
//             }
//           } else {
//             if (
//               this.heapArray[popped_idx][1] > this.heapArray[right_child][1]
//             ) {
//               const tmp = this.heapArray[popped_idx];
//               this.heapArray[popped_idx] = this.heapArray[right_child];
//               this.heapArray[right_child] = tmp;
//               popped_idx = right_child;
//             }
//           }
//         }
//       }
//       return return_data;
//     }
//   }
// }

// const [v, e] = input.shift().split(" ").map(Number);
// const start = +input.shift();
// const graph = Array.from({ length: v + 1 }, () => []);
// const distance = Array.from({ length: v + 1 }, () => Infinity);
// const visited = Array.from({ length: v + 1 }, () => false);
// const pq = new minHeap();

// input.forEach(i => {
//   const [from, to, weight] = i.split(" ").map(Number);
//   graph[from].push([to, weight]);
// });

// distance[start] = 0;
// pq.push([start, 0]);

// while (pq.heapArray.length > 1) {
//   const [curNode, dist] = pq.pop();
//   if (visited[curNode]) continue;

//   visited[curNode] = true;
//   for (let [nextNode, nextDistance] of graph[curNode]) {
//     if (distance[nextNode] > distance[curNode] + nextDistance) {
//       distance[nextNode] = nextDistance + distance[curNode];
//       pq.push([nextNode, distance[nextNode]]);
//     }
//   }
// }
// console.log(
//   distance
//     .map(i => (i === Infinity ? "INF" : i))
//     .slice(1)
//     .join("\n")
// );

//1504-특정한 최단 경로
// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   empty() {
//     if (this.heap.length == 0) {
//       return true;
//     }
//     return false;
//   }

//   swap(arr, x, y) {
//     let temp = arr[x];
//     arr[x] = arr[y];
//     arr[y] = temp;
//     return;
//   }

//   insert(value) {
//     this.heap.push(value);
//     this.bubbleUp();
//   }

//   bubbleUp() {
//     let currentIndex = this.heap.length - 1;

//     while (currentIndex > 0) {
//       const parentIndex = Math.floor((currentIndex - 1) / 2);
//       if (this.heap[parentIndex].cost <= this.heap[currentIndex].cost) break;
//       this.swap(this.heap, parentIndex, currentIndex)
//       currentIndex = parentIndex;
//     }
//   }

//   extractMin() {
//     if (this.heap.length == 1) {
//       return this.heap.pop();
//     }
//     const min = this.heap[0];
//     this.heap[0] = this.heap.pop();
//     this.sinkDown(0);
//     return min
//   }

//   sinkDown(index) {
//     const leftIndex = 2 * index + 1;
//     const rightIndex = 2 * index + 2;
//     const length = this.heap.length;
//     let smallestIndex = index;

//     if (leftIndex < length && this.heap[leftIndex].cost < this.heap[smallestIndex].cost) {
//       smallestIndex = leftIndex;
//     }
//     if (rightIndex < length && this.heap[rightIndex].cost < this.heap[smallestIndex].cost) {
//       smallestIndex = rightIndex;
//     }
//     if (smallestIndex !== index) {
//       this.swap(this.heap, index, smallestIndex);
//       this.sinkDown(smallestIndex)
//     }
//   }
// }

// const fs = require('fs');
// const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n').map(v => v.split(' ').map(v => +v));
// const [E, _] = input.shift();
// const [X, Y] = input.pop();
// const S = 1;

// let adj = Array.from(Array(E + 1), () => [])

// input.forEach(x => {
//   const [u, v, w] = x;
//   adj[u].push([v, w]);
//   adj[v].push([u, w]);
// })

// function route(s) {

//   let cost = new Array(E + 1).fill(Infinity);
//   cost[s] = 0;

//   let heap = new MinHeap();
//   heap.insert({ node: s, cost: 0 });

//   while (!heap.empty()) {
//     let now = heap.extractMin();
//     for (let i = 0; i < adj[now.node].length; i++) {
//       const [n, c] = adj[now.node][i];
//       if (cost[n] > now.cost + c) {
//         cost[n] = now.cost + c;
//         heap.insert({ node: n, cost: cost[n] })
//       }
//     }
//   }

//   return cost
// }

// const routeS = route(S);
// const routeX = route(X);
// const routeY = route(Y);

// const planA = routeS[X] + routeX[Y] + routeY[E];
// const planB = routeS[Y] + routeY[X] + routeX[E];
// if (planA == Infinity && planB == Infinity) {
//   console.log(-1)
// } else {
//   console.log(planA > planB ? planB : planA)
// }

//13549-숨바꼭질3
// const sol = (input) => {
//   const [N, K] = input.split(" ").map(Number);
//   const visit = Array.from({ length: 100100 }, () => 0);

//   function bfs(N) {
//     const queue = [];
//     queue.push([N, 0]);
//     visit[N] = 1;
//     while (queue.length) {
//       const [cur, time] = queue.shift();
//       if (cur === K) return time;
//       for (let next of [cur * 2, cur - 1, cur + 1]) {
//         if (!visit[next] && next >= 0 && next <= 100000) {
//           visit[next] = 1;
//           if (next == cur * 2) {
//             queue.unshift([next, time]); // 2X로 이동할 때는 시간을 증가시키지 않고, 우선순위를 반영하여 큐의 맨 앞에 넣어준다.
//           } else {
//             queue.push([next, time + 1]); // X-1, X+1로 이동할 때는 시간을 증가시키고, 큐에 순서대로 넣어준다.
//           }
//         }
//       }
//     }
//   }
//   return bfs(N);
// };

// require("readline")
//   .createInterface(process.stdin, process.stdout)
//   .on("line", (line) => {
//     console.log(sol(line));
//   })
//   .on("close", () => {
//     process.exit();
//   });

//9370-미확인 도착지
// function dijkstra(start, graph) {
//   heap.push([0, start]);
//   dist[start] = 0;

//   while (heap.size() > 0) {
//     const [curDist, curNode] = heap.pop();

//     if (curDist > dist[curNode]) continue;

//     for (const [nextNode, weight] of graph[curNode]) {
//       const nextDist = curDist + weight;

//       if (nextDist < dist[nextNode]) {
//         dist[nextNode] = nextDist;
//         heap.push([nextDist, nextNode]);
//       }
//     }
//   }

//   return dist;
// }

// const answer = [];

// // 각 좌표를 출발지로 하는 dist를 생성한다.
// const distS = dijkstra(s, graph);
// const distG = dijkstra(g, graph);
// const distH = dijkstra(h, graph);

// // 입력된 후보 값들을 검증한다.
// for (const goal of goalList) {
// 	const fromS = distS[goal];
//   	const gToH = distS[g] + distG[h] + distH[goal];
//   	const hToG = distS[h] + distH[g] + distG[goal];
//   	if (fromS != INF && (fromS === gToA || fromS === hToG))
//       answer.push(goal);
// }

// console.log(answer.sort().join(' '));

//1753-최단경로
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");

// class minHeap {
//   heapArray = [];
//   constructor() {
//     this.heapArray.push(null);
//   }

//   push(data) {
//     if (this.heapArray === null) {
//       this.heapArray = [];
//       this.heapArray.push(null);
//       this.heapArray.push(data);
//     } else {
//       this.heapArray.push(data);
//       let inserted_idx = this.heapArray.length - 1;
//       let parent_idx = parseInt(inserted_idx / 2);
//       while (inserted_idx > 1) {
//         if (this.heapArray[inserted_idx][1] < this.heapArray[parent_idx][1]) {
//           const tmp = this.heapArray[inserted_idx];
//           this.heapArray[inserted_idx] = this.heapArray[parent_idx];
//           this.heapArray[parent_idx] = tmp;
//           inserted_idx = parent_idx;
//           parent_idx = parseInt(parent_idx / 2);
//         } else {
//           break;
//         }
//       }
//     }
//   }
//   move_down(pop_idx) {
//     const left_child = pop_idx * 2;
//     const right_child = pop_idx * 2 + 1;

//     if (left_child >= this.heapArray.length) {
//       return false;
//     } else if (right_child >= this.heapArray.length) {
//       if (this.heapArray[pop_idx][1] > this.heapArray[left_child][1]) {
//         return true;
//       }
//       return false;
//     } else {
//       if (this.heapArray[left_child][1] < this.heapArray[right_child][1]) {
//         if (this.heapArray[pop_idx][1] > this.heapArray[left_child][1]) {
//           return true;
//         }
//         return false;
//       } else {
//         if (this.heapArray[pop_idx][1] > this.heapArray[right_child][1]) {
//           return true;
//         }
//         return false;
//       }
//     }
//   }

//   pop() {
//     if (this.heapArray === null) {
//       return null;
//     } else {
//       const return_data = this.heapArray[1];
//       this.heapArray[1] = this.heapArray[this.heapArray.length - 1];
//       this.heapArray.pop();
//       let popped_idx = 1;
//       while (this.move_down(popped_idx)) {
//         const left_child = popped_idx * 2;
//         const right_child = popped_idx * 2 + 1;
//         if (right_child >= this.heapArray.length) {
//           if (this.heapArray[popped_idx][1] > this.heapArray[left_child][1]) {
//             const tmp = this.heapArray[popped_idx];
//             this.heapArray[popped_idx] = this.heapArray[left_child];
//             this.heapArray[left_child] = tmp;
//             popped_idx = left_child;
//           }
//         } else {
//           if (this.heapArray[left_child][1] < this.heapArray[right_child][1]) {
//             if (this.heapArray[popped_idx][1] > this.heapArray[left_child][1]) {
//               const tmp = this.heapArray[popped_idx];
//               this.heapArray[popped_idx] = this.heapArray[left_child];
//               this.heapArray[left_child] = tmp;
//               popped_idx = left_child;
//             }
//           } else {
//             if (
//               this.heapArray[popped_idx][1] > this.heapArray[right_child][1]
//             ) {
//               const tmp = this.heapArray[popped_idx];
//               this.heapArray[popped_idx] = this.heapArray[right_child];
//               this.heapArray[right_child] = tmp;
//               popped_idx = right_child;
//             }
//           }
//         }
//       }
//       return return_data;
//     }
//   }
// }

// // 입력에서 정점의 개수와 간선의 개수를 읽어옵니다.
// const [v, e] = input.shift().split(" ").map(Number);
// // 시작 노드를 읽어옵니다.
// const start = +input.shift();
// // 그래프를 표현할 배열을 생성합니다.
// const graph = Array.from({ length: v + 1 }, () => []);
// // 각 노드로부터의 최단 거리를 저장할 배열을 생성하고 모두 무한대로 초기화합니다.
// const distance = Array.from({ length: v + 1 }, () => Infinity);
// // 각 노드의 방문 여부를 저장할 배열을 생성하고 모두 방문하지 않았음을 나타내는 false로 초기화합니다.
// const visited = Array.from({ length: v + 1 }, () => false);
// // 최소 힙을 생성합니다.
// const pq = new minHeap();

// // 입력된 간선 정보를 이용하여 그래프를 생성합니다.
// input.forEach((i) => {
//   const [from, to, weight] = i.split(" ").map(Number);
//   // 그래프의 from 노드에 [to, weight] 형태로 연결된 노드와 가중치를 추가합니다.
//   graph[from].push([to, weight]);
// });

// // 시작 노드의 거리를 0으로 설정하고 최소 힙에 시작 노드와 거리 0을 추가합니다.
// distance[start] = 0;
// pq.push([start, 0]);

// // 최소 힙이 비어있지 않은 동안 다음을 반복합니다.
// while (pq.heapArray.length > 1) {
//   // 최소 힙에서 노드와 해당 노드까지의 거리를 추출합니다.
//   const [curNode, dist] = pq.pop();
//   // 해당 노드가 이미 방문한 노드라면 반복문의 처음으로 돌아갑니다.
//   if (visited[curNode]) continue;

//   // 해당 노드를 방문 처리합니다.
//   visited[curNode] = true;
//   // 해당 노드와 연결된 모든 노드들에 대해 다음을 수행합니다.
//   for (let [nextNode, nextDistance] of graph[curNode]) {
//     // 다음 노드까지의 거리가 현재까지의 거리보다 짧다면 거리를 업데이트하고 최소 힙에 추가합니다.
//     if (distance[nextNode] > distance[curNode] + nextDistance) {
//       distance[nextNode] = nextDistance + distance[curNode];
//       pq.push([nextNode, distance[nextNode]]);
//     }
//   }
// }

// // 계산된 최단 거리를 출력합니다.
// console.log(
//   distance
//     .map((i) => (i === Infinity ? "INF" : i))
//     .slice(1)
//     .join("\n")
// );

//2630-색종이 만들기
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// const n = +input[0];
// const paper = input.slice(1).map(v => v.split(" ").map(vv => +vv));
// const countPaper = n => {
//     const count = [0, 0];
//     const recursion = (n, x, y) => {
//         let total = 0;
//         for(let i=0; i<n; i++) {
//             for(let j=0; j<n; j++) {
//                 total += paper[y+j][x+i];
//             }
//         }
//         if (total === 0) count[0]++;
//         else if (total === n*n) count[1]++;
//         else {
//             n /= 2;
//             recursion(n, x, y);
//             recursion(n, x+n, y);
//             recursion(n, x, y+n);
//             recursion(n, x+n, y+n);
//         }
//     }
//     recursion(n, 0, 0);
//     console.log(count.join("\n"));
// };
// countPaper(n);

//1654-랜선자르기
// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// const [n, k] = input
//   .shift()
//   .split(" ")
//   .map((a) => +a);
// const lines = input.map((a) => +a).sort();
// let max = Math.max(...lines);
// let min = 1;

// while (min <= max) {
//   let mid = parseInt((max + min) / 2);
//   let howManyPieces = lines
//     .map((line) => parseInt(line / mid))
//     .reduce((a, b) => a + b, 0);
//   if (howManyPieces >= k) {
//     min = mid + 1;
//   } else {
//     max = mid - 1;
//   }
// }
// console.log(max);

//1992-쿼드트리
// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");
// const n = +input[0];
// const screen = input.slice(1).map((v) => v.split("").map((vv) => +vv));

// const genQuadTree = (n) => {
//   const quadTree = [];
//   const recursion = (n, x, y) => {
//     let total = 0;
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         total += screen[y + j][x + i];
//       }
//     }
//     if (total === 0) quadTree.push("0");
//     else if (total === n * n) quadTree.push("1");
//     else {
//       n /= 2;
//       quadTree.push("(");
//       recursion(n, x, y);
//       recursion(n, x + n, y);
//       recursion(n, x, y + n);
//       recursion(n, x + n, y + n);
//       quadTree.push(")");
//     }
//   };
//   recursion(n, 0, 0);
//   console.log(quadTree.join(""));
// };

// genQuadTree(n);

//1780-종이의 개수
// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");
// const n = +input[0];
// const paper = input.slice(1).map((v) => v.split(" ").map((vv) => +vv));

// const countPaper = (n) => {
//   const count = [0, 0, 0];
//   const recursion = (n, x, y) => {
//     const num = paper[y][x];
//     let numCount = 0;
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         if (paper[y + j][x + i] === num) numCount++;
//         else break;
//       }
//     }
//     if (numCount === n * n) count[num + 1]++;
//     else {
//       n /= 3;
//       for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//           recursion(n, x + i * n, y + j * n);
//         }
//       }
//     }
//   };
//   recursion(n, 0, 0);
//   console.log(count.join("\n"));
// };

// countPaper(n);

//백트래킹
//15649-N과 M (1)
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim();
// const [n, m]=input.split(' ').map(Number);

// function solution(n, m){
//   const seq = [...Array(m)].fill(0);
//   let result = '';
//   const visited = [...Array(n)].fill(false);

//   function dfs(k){
//     if(k===m){
//       let arr = [];
//       for(let i=0; i<m; i++){
//         arr.push(seq[i])
//       }

//       return result+=`${arr.join(' ')}\n`
//     }

//     for(let i=1; i<=n; i++){
//       if(!visited[i]){
//         seq[k]=i;
//         visited[i]=true;
//         dfs(k+1);
//         visited[i]=false;
//       }
//     }
//   }

//   dfs(0);
//   return result;
// }

// console.log(solution(n, m))

//15650-N과 M (2)
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim();
// const [n, m] = input.split(' ').map(Number)

// function solution(n, m){
//   let seq = [...Array(m)].fill(0);
//   let visited = [...Array(n)].fill(false);
//   let result = '';

//   function dfs(k){
//     if(k===m){
//       let arr = [];
//       for(let i=0; i<m; i++){
//         arr.push(seq[i])
//       }
//       return result+=`${arr.join(' ')}\n`
//     }

//     for(let i=1; i<=n; i++){
//       if(!visited[i] && (k===0||seq[k-1]<i)){
//         seq[k]=i;
//         visited[i]=true;
//         dfs(k+1);
//         visited[i]=false;
//       }
//     }
//   }

//   dfs(0)
//   return result
// }

// console.log(solution(n, m))

//15651-N과 M (3) 
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim();
// const [n, m] = input.split(' ').map(Number)

// function solution(n, m){
//   let seq = [...Array(m)].fill(0);
//   let result = '';

//   function dfs(k){
//     if(k===m){
//       let arr = [];
//       for(let i=0; i<m; i++){
//         arr.push(seq[i])
//       }

//       return result+=`${arr.join(' ')}\n`
//     }

//     for(let i=1; i<=n; i++){
//       seq[k]=i;
//       dfs(k+1);
//     }
//   }

//   dfs(0)
//   return result;
// }

// console.log(solution(n, m))

//15652-N과 M (4) 
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim();
// const [n, m] = input.split(' ').map(Number)

// function solution(n, m){
//   let seq = [...Array(m)].fill(0);
//   let result = '';

//   function dfs(k){
//     if(k===m){
//       let arr = [];
//       for(let i=0; i<m; i++){
//         arr.push(seq[i])
//       }

//       return result += `${arr.join(' ')}\n`
//     }

//     for(let i=(k===0 ? 1: seq[k-1]); i<=n; i++){
//       seq[k]=i;
//       dfs(k+1);
//     }
//   }
//   dfs(0);
//   return result
// }

// console.log(solution(n, m))

//9663 - N-Queen
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim();
// const N = +input;

// let answer = 0;
// let row = Array.from({ length: N + 1 }, () => 0);

// function check(L) {
//   for (let i = 0; i < L; i++) {
//     if (row[L] === row[i] || L - i === Math.abs(row[L] - row[i])) {
//       return false;
//     }
//   }
//   return true;
// }

// function DFS(L) {
//   if (L === N) {
//     answer++;
//   } else {
//     for (let i = 0; i < N; i++) {
//       row[L] = i;
//       if (check(L)) {
//         DFS(L + 1);
//       }
//     }
//   }
// }

// DFS(0);
// console.log(answer);

//2580-스도쿠
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
// input = input.map(row => row.split(' ').map(i => Number(i)));

// let zeroCoords = getZeroCoords();
// let N = zeroCoords.length;
// let answer = "";
// DFS(0);

// function DFS(L) {
//   if (L === N) {
//     for (let x of input) {
//       answer += `${x.join(" ")}\n`;
//     }
//     console.log(answer);
//     process.exit(0);
//   } else {
//     let [row, col] = zeroCoords[L];

//     for (let i = 1; i <= input.length; i++) {
//       if (check(row, col, i)) {
//         input[row][col] = i;
//         DFS(L + 1);
//         input[row][col] = 0;
//       }
//     }
//   }
// }

// function check(row, col, value) {
//   let threeRow = Math.floor(row / 3) * 3;
//   let threeCol = Math.floor(col / 3) * 3;

//   for (let i = 0; i < input.length; i++) {
//     if (input[row][i] === value || input[i][col] === value) return false;
//   }

//   for (let i = threeRow; i < threeRow + 3; i++) {
//     for (let j = threeCol; j < threeCol + 3; j++) {
//       if (input[i][j] === value) return false;
//     }
//   }

//   return true;
// }

// function getZeroCoords() {
//   const arr = [];
//   for (let i = 0; i < input.length; i++) {
//     for (let j = 0; j < input.length; j++) {
//       if (input[i][j] === 0) arr.push([i, j]);
//     }
//   }
//   return arr;
// }

//13549-숨바꼭질3
// const sol = (input) => {
//   const [N, K] = input.split(" ").map(Number);
//   const visit = Array.from({ length: 100100 }, () => 0);

//   function bfs(N) {
//     const queue = [];
//     queue.push([N, 0]);
//     visit[N] = 1;
//     while (queue.length) {
//       const [cur, time] = queue.shift();
//       if (cur === K) return time;
//       for (next of [cur * 2, cur - 1, cur + 1]) {
//         if (!visit[next] && next >= 0 && next <= 100000) {
//           visit[next] = 1;
//           if (next == cur * 2) {
//             queue.unshift([next, time]); // 2X로 이동할 때는 시간을 증가시키지 않고, 우선순위를 반영하여 큐의 맨 앞에 넣어준다.
//           } else {
//             queue.push([next, time + 1]); // X-1, X+1로 이동할 때는 시간을 증가시키고, 큐에 순서대로 넣어준다.
//           }
//         }
//       }
//     }
//   }
//   return bfs(N);
// };

// require("readline")
//   .createInterface(process.stdin, process.stdout)
//   .on("line", (line) => {
//     console.log(sol(line));
//   })
//   .on("close", () => {
//     process.exit();
//   });

//1300-k번째 수
// const fs = require("fs");
// const input = fs.readFileSync(0).toString().trim().split("\n");
// const [N, K] = input.map(Number);

// function findOrder(n){
//     let count = 0;
//     for (let i=1; i<N+1; i++){
//         count += Math.min(parseInt(n/i), N);
//     }
//     return count;
// }

// function findNum(){
//     let start = 1;
//     let end = K;
    
//     while (start <= end){
//         let mid = parseInt((start + end) / 2);
//         let order = findOrder(mid);
        
//         if (order >= K){
//             end = mid - 1;
//         } else{
//             start = mid + 1;
//         }
//     }
    
//     return start;
// }

// console.log(findNum());

//2630-색종이 만들기
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");

// let [number, ...paper] = input;
// number = Number(number);
// paper = paper.map(v => v.split(' ').map(Number));

// function solution(number, paper) {
//   let white =0 ;
//   let blue=0;

//   function divide(x, y, length){
//     let tempCount =0 ;
//     for(let i=x; i<x+length; i++){
//       for(let j=y; j<y+length; j++){
//         if(paper[i][j]) tempCount++;
//       }
//     }

//     if(!tempCount){
//       white++;
//     }else if(tempCount === length * length){
//       blue++;
//     }else{
//       divide(x, y, length/2);
//       divide(x, y+length/2, length/2);
//       divide(x+length/2, y, length/2);
//       divide(x+length/2, y+length/2, length/2)
//     }
//   }

//   divide(0,0,number);
//   console.log(white);
//   console.log(blue)
// }

// solution(number, paper);

//1992-쿼드트리
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
// const n = +input[0];
// const screen = input.slice(1).map(v => v.split("").map(vv => +vv));

// const genQuadTree = n => {
//   const quadTree = [];

//   const recursion = (n, x, y)=>{
//     let total = 0;
//     for(let i=0; i<n; i++){
//       for(let j=0; j<n; j++){
//         total += screen[j+y][i+x];
//       }
//     }

//     if(total === 0) quadTree.push('0');
//     else if(total === n*n) quadTree.push('1');
//     else{
//       n/=2;
//       quadTree.push('(');
//       recursion(n, x, y);
//       recursion(n, x+n, y);
//       recursion(n, x, y+n);
//       recursion(n, x+n, y+n);
//       quadTree.push(')')
//     }
//   }

//   recursion(n, 0, 0);
//   console.log(quadTree.join(''))
// };

// genQuadTree(n);

//1780-색종이 만들기
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
// const n = +input[0];
// const paper = input.slice(1).map(v => v.split(" ").map(vv => +vv));

// const solution = n => {
//   let count = [0,0,0];

//   const recursion = (n, x, y)=>{
//     const num = paper[y][x];
//     let numCount = 0;
//     for (let i=0; i<n; i++) {
//         for (let j=0; j<n; j++) {
//             if (paper[y+j][x+i] === num) numCount++;
//             else break;
//         }
//     }
//     if (numCount === n*n) count[num+1]++;
//     else {
//         n /= 3;
//         for (let i=0; i<3; i++) {
//             for (let j=0; j<3; j++) {
//                 recursion(n, x+i*n, y+j*n);
//             }
//         }
//     }
// }

//   recursion(n, 0,0);
//   console.log(count.join('\n'))
// }

// solution(n)

//1629-곱셈
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString()
// .trim()
// .split(' ')
// .map(BigInt);

// const [a, b, c]=input;

// const solve = p =>{
//   if(p === 1n){
//     return a%c
//   }

//   const half = solve(p/2n)%c;

//   if(p%2n){
//     return (half*half*(a%c))%c
//   }

//   return (half*half)%c
// }

// console.log(solve(b).toString())

//2740-행렬 곱셈
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n").map(v=>v.split(' ').map(x=>+x)); 
// const A=[]; //첫번째 행렬
// const B=[];  // 두번째 행렬
// const C =[]; // 계산하기 좋게 두번째 행렬을 바꿔서 만들 행렬

// //첫번째 행렬 정리
// const [N,M] = input.shift();  
// for(let i = 0; i<N; i++){
//   A.push(input.shift());
// }

// //두번째 행렬 정리
// const [K,L] = input.shift();
// for(let i = 0; i<K; i++){
//   B.push(input.shift());
// }

// //두번째 행렬 수정
//  while(B[0].length>0){
//    const temp = [];
//    for(let i = 0; i<K;i++){
//     temp.push(B[i].shift())
//    }
//    C.push(temp)
//  }

//  // 행렬의 곱셈
//  const answer = [];
//  for(let i = 0; i < N; i++) { // 첫 번째 행렬 A의 각 행에 대해 반복합니다.
//    answer.push([]); // 결과 행렬의 각 행을 초기화합니다.
//    const X = A[i]; // 첫 번째 행렬 A의 i번째 행을 X에 저장합니다.
//    for(let j = 0; j < L; j++) { // 두 번째 행렬 C의 각 열에 대해 반복합니다.
//      let sum = 0; // 결과 행렬의 각 원소를 계산하기 위한 합을 초기화합니다.
//      const Y = C[j]; // 두 번째 행렬 C의 j번째 열을 Y에 저장합니다.
//      for(let k = 0; k < K; k++) { // 각 행과 열을 곱하여 결과 행렬의 원소를 계산합니다.
//        sum += X[k] * Y[k]; // 첫 번째 행렬 A의 k번째 원소와 두 번째 행렬 C의 k번째 원소를 곱하여 합에 더합니다.
//      }
//      answer[answer.length - 1].push(sum); // 계산한 결과를 결과 행렬의 현재 행에 추가합니다.
//    }
//  }
 

//  const result = answer.map(v=>v.join(' ')).join('\n')

//  console.log(result)

//10830-행렬 제곱
// const fs = require('fs');
// const stdin = (process.platform === 'linux'
//         ? fs.readFileSync('/dev/stdin').toString()
//         : `2 5
// 1 2
// 3 4`
// ).split('\n');

// const input = (() => {
//     let line = 0;
//     return () => stdin[line++];
// })();

// function mulMat(mata, matb){
//     // tmpmat init
//     let tmpmat = new Array(size);
//     for(let i=0; i<size; i++){
//         tmpmat[i] = new Array(size);
//     }
//     for(let i=0; i<size; i++){
//         for(let j=0; j<size; j++){
//             tmpmat[i][j] = 0;
//         }
//     }

//     // mul
//     for(let i=0; i<size; i++){
//         for(let j=0; j<size; j++){
//             for(let k=0; k<size; k++){
//                 tmpmat[i][j] += mata[i][k] * matb[k][j];
//             }
//             tmpmat[i][j] %= 1000;
//         }
//     }

//     return tmpmat;
// }

// // init
// const f = input().split(' ').map(Number);
// const size = f[0];
// let pow = f[1];
// let matrix = [];

// for(let i=0; i<size; i++){
//     matrix.push(input().split(' ').map(Number)); //deep copy
// }

// // unit matrix
// let tmpmat = new Array(size);
// for(let i=0; i<size; i++){
//     tmpmat[i] = new Array(size);
// }
// for(let i=0; i<size; i++){
//     for(let j=0; j<size; j++){
//         tmpmat[i][j] = 0;
//     }
//     tmpmat[i][i] = 1;
// }

// while(pow){
//     if(pow % 2 == 1){
//         tmpmat = mulMat(tmpmat, matrix);
//         pow--;
//     }
//     pow /= 2;
//     matrix = mulMat(matrix, matrix);
// }

// // answer
// for(let i=0; i<size; i++){
//     let tmp = "";
//     for(let j=0; j<size; j++){
//         tmp += tmpmat[i][j] + " ";
//     }
//     console.log(tmp);
// }

//1654-랜선자르기
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');

// const [n, k] = input.shift().split(' ').map((a) => +a);
// 	const lines = input.map((a) => +a).sort();
// 	let max = Math.max(...lines);
// 	let min = 1;

// while (min <= max) {
//   let mid = parseInt((max + min) / 2);
//   let howManyPieces = lines
//     .map((line) => parseInt(line / mid))
//     .reduce((a, b) => a + b, 0);
//   if (howManyPieces >= k) {
//     min = mid + 1;
//   } else {
//     max = mid - 1;
//   }
// }
// console.log(max);

//2805-나무 자르기
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// var [N, H] = input.shift().split(" ").map(Number);
// var Trees = input.shift().split(" ").map(Number);
// var MaxH = Math.max(...Trees);

// function binarySearch(H, Trees, min, max) {
//   let mid = 0;
//   let BestH = 0;
  
//   while (min <= max) {
//     let SumWood = 0;
//     mid = Math.floor((min + max) / 2);
//     Trees.forEach((a) => {
//       let rest = a - mid;
//       if (rest > 0) SumWood += rest;
//     });
//     if (SumWood >= H) {
//       if (mid > BestH) BestH = mid;
//       min = mid + 1;
//     } 
//     else {
//       max = mid - 1;
//     }
//   }
//   return BestH;
// }

// const answer = binarySearch(H, Trees, 0, MaxH);
// console.log(answer);

//1654-랜선 자르기
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// // 표준 입력을 받아와서 처리합니다.
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
// const [K, N] = input[0].split(" ").map(Number); // K: 가지고 있는 랜선의 개수, N: 필요한 랜선의 개수
// const lanCables = input.slice(1).map(Number); // 각 랜선의 길이를 배열로 저장합니다.

// // 최소 길이 1부터 최대 길이까지 이진 탐색을 수행하여 조건에 맞는 랜선의 길이를 찾습니다.
// let start = 1;
// let end = Math.max(...lanCables);
// let result = 0;

// while (start <= end) {
//     const mid = Math.floor((start + end) / 2); // 현재 탐색하는 랜선의 길이(mid)

//     let total = 0; // 현재 랜선 길이로 만들 수 있는 랜선의 개수
//     for (let cable of lanCables) {
//         total += Math.floor(cable / mid); // 현재 랜선 길이로 자른 개수를 누적합니다.
//     }

//     // 만들 수 있는 랜선의 개수가 필요한 개수보다 적은 경우
//     // 현재 랜선 길이로 만들 수 있는 랜선의 개수를 줄이기 위해
//     // 탐색 범위를 왼쪽으로 좁힙니다.
//     if (total < N) {
//         end = mid - 1;
//     }
//     // 만들 수 있는 랜선의 개수가 필요한 개수보다 많거나 같은 경우
//     // 현재 랜선 길이로 만들 수 있는 랜선의 개수를 늘리기 위해
//     // 탐색 범위를 오른쪽으로 좁힙니다.
//     else {
//         result = mid; // 현재 길이로 가능한 경우, 최대 길이를 갱신합니다.
//         start = mid + 1;
//     }
// }

// console.log(result); // 최대 길이를 출력합니다.

//1920-수찾기
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
// input.shift();
// const n = input[0].split(' ').map(Number).sort((a, b)=>a-b);
// input.shift();
// input.shift();
// const m = input[0].split(' ').map(Number);

// const solution = (arr, target) => {
//     let start = 0;
//     let end = arr.length - 1;

//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);

//         if (target < arr[mid]) {
//             end = mid - 1;
//         } else if (target > arr[mid]) {
//             start = mid + 1;
//         } else {
//             return 1;
//         }
//     }
//     return 0;
// }

// let result = [];
// m.forEach(v => {
//     result.push(solution(n, v));
// })

// console.log(result.join('\n'));

//10816-숫자카드2
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
// input.shift();
// const n = input[0].split(' ').map(Number).sort((a, b)=>a-b);
// input.shift();
// input.shift();
// const m = input[0].split(' ').map(Number);

// const myMap = new Map();
// n.forEach(v=>{
//     if(myMap.has(v)) myMap.set(v, myMap.get(v)+1);
//     else myMap.set(v, 1);
// })

// let result = [];
// m.forEach(v=>{
//     result.push(myMap.get(v)||0)
// })

// console.log(result.join(' '))

//1654-랜선자르기
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
// const [K, N] = input[0].split(" ").map(Number);
// const lanCables = input.slice(1).map(Number);

// let start = 1;
// let end = Math.max(...lanCables);
// let result =0 ;

// while(start<=end){
//     let mid = Math.floor((start+end)/2);

//     let total = 0;
//     for(let cable of lanCables){
//         total += Math.floor(cable/mid);
//     }

//     if(total < N){
//         end = mid-1;
//     }else{
//         result = mid
//         start = mid+1;
//     }
// }

// console.log(result)

//2805-나무자르기
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
// const [n, m] = input[0].split(' ').map(Number);
// const arr = input[1].split(' ').map(Number);
// const maxH = Math.max(...arr);

// const solution = (m, arr, min, max)=>{
//     let mid =0;
//     let bestH=0;

//     while(min<=max){
//         let sumWood = 0;
//         mid = Math.floor((min+max)/2);

//         arr.forEach(v=>{
//             let rest = v-mid;
//             if(rest>0) sumWood+=rest
//         })

//         if(sumWood >= m){
//             if(mid>bestH) bestH=mid;
//             min=mid+1;
//         }else{
//             max = mid-1;
//         }
//     }
//     return bestH;
// }

// console.log(solution(m, arr, 0, maxH))

//2110-공유기 설치
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
// const [n, m]=input[0].split(' ').map(Number);
// const arr = input.slice(1).map(Number).sort((a, b)=>a-b);

// let start = 1;
// let end = arr[arr.length-1];

// while(start <= end){
//     let mid = Math.floor((start+end)/2);

//     let count=1;
//     let prev = arr[0];
//     for(let cur of arr){
//         if(cur-prev<mid) continue;
//         prev=cur
//         count+=1;
//     }

//     if(count<m) end=mid-1;
//     else start = mid+1;
// }

// console.log(end)

//12015-가장 긴 증가하는 부분 수열 2
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
// const n = +input[0];
// const arr = input[1].split(' ').map(Number);

// const sol = (list, left, right, target) => {
    
//     while(left < right){
//         let mid = Math.floor((left+right)/2);
//         if(list[mid] < target){
//             left = mid+1;
//         }else{
//             right = mid;
//         }
//     }

//     return right;
// }

// let lis = [];
// lis.push(arr[0]);
// for(let i=1; i<n; i++){
//     if(lis[lis.length-1]<arr[i]){
//         lis.push(arr[i])
//     }else{
//         let idx = sol(lis, 0, lis.length-1, arr[i]);
//         lis[idx] = arr[i]
//     }
// }

// console.log(lis.length)

//1920-수 찾기
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
// const n = input[1].split(' ').map(Number).sort((a, b)=>a-b);
// const m = input[3].split(' ').map(Number);

// const sol = (arr, target)=>{
//     let start = 0;
//     let end = arr.length-1;

//     while(start <= end){
//         let mid = Math.floor((start+end)/2);

//         if(arr[mid] > target){
//             end = mid -1;
//         }else if(arr[mid] < target){
//             start = mid+1;
//         }else{
//             return 1;
//         }
//     }
//     return 0;
// }

// let result = [];
// m.forEach(v=>{
//     result.push(sol(n, v))
// })

// console.log(result.join('\n'))

//10816-숫자카드2
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
// const n = input[1].split(' ').map(Number).sort((a, b)=>a-b);
// const m=input[3].split(' ').map(Number);

// const arr = new Map();

// n.forEach(v=>{
//     arr.set(v, (arr.get(v)||0)+1)
// })

// let result = [];
// m.forEach(v=>{
//     result.push(arr.get(v)||0)
// })

// console.log(result.join(' '))

//1654-랜선자르기
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");

// const [k, n] = input[0].split(' ').map(Number);
// const arr = input.slice(1).map(Number);

// const sol = (arr, target) => {
//     let start = 1;
//     let end = Math.max(...arr);

//     let result =0;
//     while(start<=end){
//         let mid = Math.floor((start+end)/2);

//         let total = 0;

//         for(let a of arr){
//             total+=Math.floor(a/mid)
//         }

//         if(total < target){
//             end = mid-1;
//         }else{
//             result = mid;
//             start = mid+1
//         }
//     }

//     return result;
// }

// console.log(sol(arr, n))

//2805-나무자르기
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
// const [n, m]=input[0].split(' ').map(Number);
// const arr = input[1].split(' ').map(Number).sort((a, b)=>a-b);

// const sol = (arr, m, min, max) => {
//     let mid =0 ;
//     let bestH =0 ;

//     while(min<=max){
//         let sumwood =0; 
//         mid = Math.floor((min+max)/2);

//         arr.forEach(v=>{
//             let rest = v-mid;
//             if(rest>0) sumwood +=rest
//         })

//         if(sumwood >= m) {
//             if(mid>bestH) bestH = mid;
//             min = mid+1;
//         }else{
//             max = mid-1;
//         }
//     }

//     return bestH
// }

// console.log(sol(arr, m, 0, Math.max(...arr)))

//2110-공유기 설치
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m]=input[0].split(' ').map(Number);
const arr = input.slice(1).map(Number).sort((a, b)=>a-b);

let start = 1;
let end = arr[arr.length-1];

while(start <= end){
    let mid = Math.floor((start+end)/2);

    let count=1;
    let prev = arr[0];
    for(let cur of arr){
        if(cur-prev<mid) continue;
        prev=cur
        count+=1;
    }

    if(count<m) end=mid-1;
    else start = mid+1;
}

console.log(end)