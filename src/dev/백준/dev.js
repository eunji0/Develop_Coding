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

//11279-최대힙
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
// let operations = []
// for (let i = 1; i < input.length; i++) {
//     operations.push(+input[i])
// }

// class maxHeap {
//     constructor() {
//         this.nodes = []
//     }

//     insert(data) {
//         this.nodes.push(data)
//         this.bubbleUp()
//     }

//     bubbleUp(index = this.nodes.length - 1) {
//         if (index < 1) return
//         let currentNode = this.nodes[index]
//         let parentIndex = Math.floor((index - 1) / 2)
//         let parentNode = this.nodes[parentIndex]

//         if (parentNode >= currentNode) return

//         this.nodes[parentIndex] = currentNode
//         this.nodes[index] = parentNode
//         index = parentIndex
//         this.bubbleUp(index)
//     }

//     extract() {
//         const max = this.nodes[0]
//         if (this.nodes.length === 1) {
//             this.nodes.pop()
//             return max
//         }
//         this.nodes[0] = this.nodes.pop()
//         this.trickleDown()
//         return max
//     }

//     trickleDown(index = 0) {
//         let leftChildIndex = index * 2 + 1
//         let rightChildIndex = index * 2 + 2
//         let length = this.nodes.length
//         let maximum = index

//         if (!this.nodes[leftChildIndex] && !this.nodes[rightChildIndex]) return

//         if (!this.nodes[rightChildIndex]) {
//             if (this.nodes[leftChildIndex] > this.nodes[maximum]) {
//                 maximum = leftChildIndex
//             }
//         }

//         if (this.nodes[leftChildIndex] < this.nodes[rightChildIndex]) {
//             if (rightChildIndex <= length && this.nodes[rightChildIndex] > this.nodes[maximum]) {
//                 maximum = rightChildIndex
//             }
//         } else {
//             if (leftChildIndex <= length && this.nodes[leftChildIndex] > this.nodes[maximum]) {
//                 maximum = leftChildIndex
//             }
//         }

//         if (maximum !== index) {
//             let t = this.nodes[maximum]
//             this.nodes[maximum] = this.nodes[index]
//             this.nodes[index] = t
//             this.trickleDown(maximum)
//         }
//     }
// }
// const heap = new maxHeap()
// let extracts = ''
// operations.forEach((operation, index) => {
//     if (operation !== 0) {
//         heap.insert(operation)
//     } else {
//         if (heap.nodes.length === 0) {
//             extracts += "0" + "\n"
//         } else {
//             let t = heap.extract()
//             extracts += t + "\n"
//         }
//     }
// })

// console.log(extracts.trim())

//1927-최소 힙
// const [N, ...ARR] = require('fs')
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
//   .toString()
//   .trim()
//   .split('\n')
//   .map(Number);

// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   heapifyUp(index) {
//     const parentIndex = Math.floor((index - 1) / 2);
//     if (parentIndex >= 0 && this.heap[index] < this.heap[parentIndex]) {
//       [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
//       this.heapifyUp(parentIndex);
//     }
//   }

//   heapifyDown(index) {
//     const len = this.heap.length;
//     let smallest = index;
//     const leftChild = 2 * index + 1;
//     const rightChild = 2 * index + 2;

//     if (leftChild < len && this.heap[leftChild] < this.heap[smallest]) {
//       smallest = leftChild;
//     }

//     if (rightChild < len && this.heap[rightChild] < this.heap[smallest]) {
//       smallest = rightChild;
//     }

//     if (smallest !== index) {
//       [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
//       this.heapifyDown(smallest);
//     }
//   }

//   insert(value) {
//     this.heap.push(value);
//     this.heapifyUp(this.heap.length - 1);
//   }

//   extractMin() {
//     if (this.heap.length === 0) {
//       return null;
//     }

//     const min = this.heap[0];
//     const lastIdx = this.heap.length - 1;
//     this.heap[0] = this.heap[lastIdx];
//     this.heap.pop();
//     this.heapifyDown(0);

//     return min;
//   }
// }

// const minHeap = new MinHeap();
// const answer = [];

// for (let i = 0; i < N; i++) {
//   const x = ARR[i];

//   if (x !== 0) {
//     minHeap.insert(x);
//   } else {
//     const min = minHeap.extractMin() || 0;
//     answer.push(min);
//   }
// }

// console.log(answer.join('\n'));

//11279-최대힙
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");

// class maxHeap {
//     constructor() {
//         this.nodes = []
//     }

//     insert(data) {
//         this.nodes.push(data)
//         //push된 가장 마지막 원소를 부모노드와 비교
//         this.bubbleUp()
//     }

//     //삽입된 노드를 위로 올려 부모와 비교하여 위치를 조정하는 메서드
//     bubbleUp(index = this.nodes.length - 1) {
//         if (index < 1) return
//         //현재노드
//         let currentNode = this.nodes[index]
//         //부모인덱스
//         let parentIndex = Math.floor((index - 1) / 2)
//         //부모노드
//         let parentNode = this.nodes[parentIndex]

//         //현재 노드와 부모 노드를 비교하여 부모 노드가 크다면 return.
//         if (parentNode >= currentNode) return

//         //현재 노드가 크다면 swap
//         this.nodes[parentIndex] = currentNode
//         this.nodes[index] = parentNode
//         index = parentIndex
//         //제자리를 찾을때까지 swap
//         this.bubbleUp(index)
//     }

//     //최대 힙에서 최댓값(루트 노드)을 추출
//     extract() {
//       //최댓값 정의
//         const max = this.nodes[0]

//         //힙의 길이가 1이면 pop하고 해당원소를 return
//         if (this.nodes.length === 1) {
//             this.nodes.pop()
//             return max
//         }

//         //현재 힙에 있는 가장 마지막 노드를 루트 자리에 놓는다.
//         this.nodes[0] = this.nodes.pop()
//         //최대 힙 속성을 다시 만족하도록 한다.
//         this.trickleDown()
//         return max
//     }

//     //부모자식 관계 재정리
//     trickleDown(index = 0) {
//       //왼쪽 자식 index: (현재 노드의 index × 2) + 1
//         let leftChildIndex = index * 2 + 1
//         //오른쪽 자식 index: (현재 노드의 index × 2) + 2
//         let rightChildIndex = index * 2 + 2
//         let length = this.nodes.length
//         let maximum = index

//         //자식이 둘 다 없으면? 마침내 제자리를 찾았다는 의미다. 재귀를 멈춘다.
//         if (!this.nodes[leftChildIndex] && !this.nodes[rightChildIndex]) return

//         //왼쪽 자식만 있으면?(=오른쪽 자식이 없다면) 왼쪽 자식과 비교한다.
//         if (!this.nodes[rightChildIndex]) {
//             if (this.nodes[leftChildIndex] > this.nodes[maximum]) {
//                 maximum = leftChildIndex
//             }
//         }

//         //자식이 둘 다 있으면? 두 자식 중 값이 더 큰 자식과 비교한다.
//         if (this.nodes[leftChildIndex] < this.nodes[rightChildIndex]) {
//             if (rightChildIndex <= length && this.nodes[rightChildIndex] > this.nodes[maximum]) {
//                 maximum = rightChildIndex
//             }
//         } else {
//             if (leftChildIndex <= length && this.nodes[leftChildIndex] > this.nodes[maximum]) {
//                 maximum = leftChildIndex
//             }
//         }

//         if (maximum !== index) {
//             let t = this.nodes[maximum]
//             this.nodes[maximum] = this.nodes[index]
//             this.nodes[index] = t
//             this.trickleDown(maximum)
//         }
//     }
// }

// let operations = []

// for (let i = 1; i < input.length; i++) {
//     operations.push(+input[i])
// }

// const heap = new maxHeap()
// let extracts = ''

// operations.forEach((operation, index) => {
//     if (operation !== 0) {
//         heap.insert(operation)
//     } else {
//       //힙의 노드 개수가 0이라면, 추출할 값이 없으므로 "0"을 extracts에 추가한다.
//         if (heap.nodes.length === 0) {
//             extracts += "0" + "\n"
//         } else {
//           //그렇지 않으면, heap.extract()를 호출하여 힙에서 최댓값을 추출하고, extracts에 추가한다.
//             let t = heap.extract()
//             extracts += t + "\n"
//         }
//     }
// })

// console.log(extracts.trim())

//1927-최소힙
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");

// class MinHeap {
//   constructor() {
//       this.nodes = [];
//   }

//   insert(data) {
//       this.nodes.push(data);
//       this.bubbleUp();
//   }

//   bubbleUp(index = this.nodes.length - 1) {
//       if (index < 1) return;
//       let currentNode = this.nodes[index];
//       let parentIndex = Math.floor((index - 1) / 2);
//       let parentNode = this.nodes[parentIndex];

//       if (parentNode <= currentNode) return;

//       this.nodes[parentIndex] = currentNode;
//       this.nodes[index] = parentNode;
//       index = parentIndex;
//       this.bubbleUp(index);
//   }

//   extract() {
//       const min = this.nodes[0];

//       if (this.nodes.length === 1) {
//           this.nodes.pop();
//           return min;
//       }

//       this.nodes[0] = this.nodes.pop();
//       this.trickleDown();
//       return min;
//   }

//   trickleDown(index = 0) {
//       let leftChildIndex = index * 2 + 1;
//       let rightChildIndex = index * 2 + 2;
//       let length = this.nodes.length;
//       let minimum = index;

//       if (!this.nodes[leftChildIndex] && !this.nodes[rightChildIndex]) return;

//       if (!this.nodes[rightChildIndex]) {
//           if (this.nodes[leftChildIndex] < this.nodes[minimum]) {
//               minimum = leftChildIndex;
//           }
//       }

//       if (this.nodes[leftChildIndex] < this.nodes[rightChildIndex]) {
//           if (leftChildIndex < length && this.nodes[leftChildIndex] < this.nodes[minimum]) {
//               minimum = leftChildIndex;
//           }
//       } else {
//           if (rightChildIndex < length && this.nodes[rightChildIndex] < this.nodes[minimum]) {
//               minimum = rightChildIndex;
//           }
//       }

//       if (minimum !== index) {
//           let t = this.nodes[minimum];
//           this.nodes[minimum] = this.nodes[index];
//           this.nodes[index] = t;
//           this.trickleDown(minimum);
//       }
//   }
// }

// let operations = [];

// for (let i = 1; i < input.length; i++) {
//   operations.push(+input[i]);
// }

// const heap = new MinHeap();
// let extracts = '';

// operations.forEach((operation, index) => {
//   if (operation !== 0) {
//       heap.insert(operation);
//   } else {
//       if (heap.nodes.length === 0) {
//           extracts += "0" + "\n";
//       } else {
//           let t = heap.extract();
//           extracts += t + "\n";
//       }
//   }
// });

// console.log(extracts.trim());

//11286-절댓값 힙
// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");

// let operations = [];

// for (let i = 1; i < input.length; i++) {
//   operations.push(+input[i]);
// }

// const heap = new AbsoluteMinHeap();
// let extracts = '';

// operations.forEach((operation, index) => {
//   if (operation !== 0) {
//       heap.insert(operation);
//   } else {
//       if (heap.nodes.length === 0) {
//           extracts += "0" + "\n";
//       } else {
//           let t = heap.extract();
//           extracts += t + "\n";
//       }
//   }
// });

// console.log(extracts.trim());

//1715-카드 정렬하기
// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   getLength = () => {
//     return this.heap.length;
//   };

//   push = (node) => {
//     this.heap.push(node);
//     let i = this.heap.length - 1;
//     let parentI = Math.floor((i - 1) / 2);
//     while (i > 0 && this.heap[parentI] > this.heap[i]) {
//       this.swap(i, parentI);
//       i = parentI;
//       parentI = Math.floor((i - 1) / 2);
//     }
//   };

//   pop = () => {
//     if (this.heap.length === 1) {
//       return this.heap.pop();
//     }

//     const result = this.heap[0];
//     this.heap[0] = this.heap.pop();
//     let i = 0;
//     while (true) {
//       const leftI = i * 2 + 1,
//         rightI = i * 2 + 2;
//       if (leftI >= this.heap.size) {
//         break;
//       }
//       let nextI = i;
//       if (this.heap[nextI] > this.heap[leftI]) {
//         nextI = leftI;
//       }
//       if (rightI < this.heap.length && this.heap[nextI] > this.heap[rightI]) {
//         nextI = rightI;
//       }
//       if (nextI === i) {
//         break;
//       }
//       this.swap(i, nextI);
//       i = nextI;
//     }
//     return result;
//   };

//   swap = (a, b) => {
//     const temp = this.heap[a];
//     this.heap[a] = this.heap[b];
//     this.heap[b] = temp;
//   };
// }

// const input = [];

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     const minHeap = new MinHeap();
//     for (let i = 1; i < input.length; i++) {
//       minHeap.push(+input[i]);
//     }

//     let totalCompareCount = 0;
//     while (minHeap.getLength() > 1) {
//       let aCount = minHeap.pop();
//       let bCount = minHeap.pop();
//       let compareCount = aCount + bCount;
//       totalCompareCount += compareCount;
//       minHeap.push(compareCount);
//     }
//     console.log(totalCompareCount);
//   });

//1665-가운데를 말해요
// const fs = require("fs");

// // 큰수그룹
// class MinHeap {
//   constructor() {
//     this.values = [];
//   }

//   getLen() {
//     return this.values.length;
//   }

//   enqueue(val) {
//     this.values.push(val);
//     this.bubbleUp();
//   }

//   bubbleUp() {
//     let idx = this.values.length - 1;
//     const element = this.values[idx];
//     while (idx > 0) {
//       let parentIdx = Math.floor((idx - 1) / 2);
//       let parent = this.values[parentIdx];
//       if (element >= parent) break;
//       this.values[parentIdx] = element;
//       this.values[idx] = parent;
//       idx = parentIdx;
//     }
//   }

//   dequeue() {
//     const min = this.values[0];
//     const end = this.values.pop();
//     if (this.values.length > 0) {
//       this.values[0] = end;
//       this.sinkDown();
//     }
//     return min;
//   }

//   sinkDown() {
//     let idx = 0;
//     const length = this.values.length;
//     const element = this.values[0];
//     while (true) {
//       let leftIdx = 2 * idx + 1;
//       let rightIdx = 2 * idx + 2;
//       let left, right;
//       let swap = null;
//       if (leftIdx < length) {
//         left = this.values[leftIdx];
//         if (left < element) {
//           swap = leftIdx;
//         }
//       }
//       if (rightIdx < length) {
//         right = this.values[rightIdx];
//         if (
//           (swap === null && right < element) ||
//           (swap !== null && right < left)
//         ) {
//           swap = rightIdx;
//         }
//       }
//       if (swap === null) break;
//       this.values[idx] = this.values[swap];
//       this.values[swap] = element;
//       idx = swap;
//     }
//   }
// }

// // 작은수그룹
// class MaxHeap {
//   constructor() {
//     this.values = [];
//   }

//   getLen() {
//     return this.values.length;
//   }

//   enqueue(val) {
//     this.values.push(val);
//     this.bubbleUp();
//   }

//   bubbleUp() {
//     let idx = this.values.length - 1;
//     const element = this.values[idx];
//     while (idx > 0) {
//       let parentIdx = Math.floor((idx - 1) / 2);
//       let parent = this.values[parentIdx];
//       if (element <= parent) break;
//       this.values[parentIdx] = element;
//       this.values[idx] = parent;
//       idx = parentIdx;
//     }
//   }

//   dequeue() {
//     const max = this.values[0];
//     const end = this.values.pop();
//     if (this.values.length > 0) {
//       this.values[0] = end;
//       this.sinkDown();
//     }
//     return max;
//   }

//   sinkDown() {
//     let idx = 0;
//     const length = this.values.length;
//     const element = this.values[0];
//     while (true) {
//       let leftIdx = 2 * idx + 1;
//       let rightIdx = 2 * idx + 2;
//       let left, right;
//       let swap = null;
//       if (leftIdx < length) {
//         left = this.values[leftIdx];
//         if (left > element) {
//           swap = leftIdx;
//         }
//       }
//       if (rightIdx < length) {
//         right = this.values[rightIdx];
//         if (
//           (swap === null && right > element) ||
//           (swap !== null && right > left)
//         ) {
//           swap = rightIdx;
//         }
//       }
//       if (swap === null) break;
//       this.values[idx] = this.values[swap];
//       this.values[swap] = element;
//       idx = swap;
//     }
//   }
// }

// const input = fs.readFileSync("input.txt").toString().trim().split("\n");
// const N = parseInt(input[0]);
// const nums = input[1].split(" ").map(Number);
// const minHeap = new MinHeap();
// const maxHeap = new MaxHeap();
// const answer = [nums[0]];
// maxHeap.enqueue(nums[0]);
// for (let i = 1; i < N; i++) {
//   if (nums[i] > maxHeap.values[0]) minHeap.enqueue(nums[i]);
//   else maxHeap.enqueue(nums[i]);

//   if (minHeap.getLen() > maxHeap.getLen()) {
//     maxHeap.enqueue(minHeap.dequeue());
//   } else if (minHeap.getLen() + 1 < maxHeap.getLen()) {
//     minHeap.enqueue(maxHeap.dequeue());
//   }
//   answer.push(maxHeap.values[0]);
// }
// console.log(answer.join("\n"));

//1202-보석도둑
//우선순위 큐
// class PriorityQueue {
//   constructor() {
//     this.store = [];
//   }
//   //무게와 가격을 받아서 배열에 넣어준다.
//   enqueue(name, score) {
//     this.store.push([name, score]);
//   }
//   //제일 큰 값을 리턴
//   dequeue() {
//     let entry = 0;
//     this.store.forEach((item, index) => {
//       if (this.store[entry][1] < this.store[index][1]) {
//         entry = index;
//       }
//     });
//     return this.store.splice(entry, 1);
//   }
// }

// const solution = (k, priorityQueue, bag) => {
//   let cnt = 0;
//   //가방 개수 만큼
//   for (let i = 0; i < k; i++) {
//     //우선순위 큐에서 제일 큰 보석정보 가져옴
//     let value = priorityQueue.dequeue();

//     //가방을 순회하면서 보석 무게보다 크거가 같은 경우는 그 보석을 담았다고 가정하고
//     //담은 가방을 제외한 가방을 리턴함
//     bag = bag.map((el, index) => {
//       if (el >= value[0][0]) {
//         return;
//       } else {
//         return el;
//       }
//     });
//     cnt += value[0][1];
//   }
//   console.log(cnt);
// };

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];
// rl.on("line", function (line) {
//   //여러줄 입력
//   input.push(line);
// }).on("close", function () {
//   let [n, k] = input
//     .shift()
//     .split(" ")
//     .map((el) => Number(el));

//   //우선순위 큐 생성
//   const priorityQueue = new PriorityQueue();

//   for (let i = 0; i < n; i++) {
//     let [x, y] = input[i].split(" ").map((el) => Number(el));
//     //우선순위 큐에 보석 무게, 가격 담아줌
//     priorityQueue.enqueue(x, y);
//   }
//   let bag = [];
//   //가방넣어줌
//   for (let j = 0; j < k; j++) {
//     bag.push(Number(input[j]));
//   }
//   //가방 오름차순정렬
//   bag = bag.sort((a, b) => a - b);
//   solution(k, priorityQueue, bag);
//   process.exit();
// });

//7662-이중 우선순위 큐
// const fs = require("fs");

// const MAX = 1000003;
// const visited = new Array(MAX).fill(false);

// const input = fs.readFileSync("input.txt").toString().trim().split("\n");

// const output = [];

// const N = parseInt(input[0]);
// let idx = 1;
// for (let i = 0; i < N; i++) {
//     const M = parseInt(input[idx++]);
//     const maxPQ = [];
//     const minPQ = [];

//     for (let j = 0; j < M; j++) {
//         const [command, num] = input[idx++].split(" ");
//         if (command === 'I') {
//             const index = j;
//             minPQ.push({ num: parseInt(num), index });
//             maxPQ.push({ num: parseInt(num), index });
//             visited[index] = true;
//         } else if (command === 'D') {
//             if (num === '1') {
//                 while (maxPQ.length && !visited[maxPQ[0].index]) maxPQ.shift();
//                 if (!maxPQ.length) continue;
//                 visited[maxPQ[0].index] = false;
//                 maxPQ.shift();
//             } else if (num === '-1') {
//                 while (minPQ.length && !visited[minPQ[0].index]) minPQ.shift();
//                 if (!minPQ.length) continue;
//                 visited[minPQ[0].index] = false;
//                 minPQ.shift();
//             }
//         }
//     }

//     while (maxPQ.length && !visited[maxPQ[0].index]) maxPQ.shift();
//     while (minPQ.length && !visited[minPQ[0].index]) minPQ.shift();

//     if (!minPQ.length || !maxPQ.length) output.push("EMPTY");
//     else output.push(`${maxPQ[0].num} ${minPQ[0].num}`);
// }

// fs.writeFileSync("output.txt", output.join("\n"));

//1715-카드 정렬하기
// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   getLength = () => {
//     return this.heap.length;
//   };

//   push = (node) => {
//     this.heap.push(node);
//     let i = this.heap.length - 1;
//     let parentI = Math.floor((i - 1) / 2);
//     while (i > 0 && this.heap[parentI] > this.heap[i]) {
//       this.swap(i, parentI);
//       i = parentI;
//       parentI = Math.floor((i - 1) / 2);
//     }
//   };

//   pop = () => {
//     if (this.heap.length === 1) {
//       return this.heap.pop();
//     }

//     const result = this.heap[0];
//     this.heap[0] = this.heap.pop();
//     let i = 0;
//     while (true) {
//       const leftI = i * 2 + 1,
//         rightI = i * 2 + 2;
//       if (leftI >= this.heap.size) {
//         break;
//       }
//       let nextI = i;
//       if (this.heap[nextI] > this.heap[leftI]) {
//         nextI = leftI;
//       }
//       if (rightI < this.heap.length && this.heap[nextI] > this.heap[rightI]) {
//         nextI = rightI;
//       }
//       if (nextI === i) {
//         break;
//       }
//       this.swap(i, nextI);
//       i = nextI;
//     }
//     return result;
//   };

//   swap = (a, b) => {
//     const temp = this.heap[a];
//     this.heap[a] = this.heap[b];
//     this.heap[b] = temp;
//   };
// }

// const input = [];

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     const minHeap = new MinHeap();
//     for (let i = 1; i < input.length; i++) {
//       minHeap.push(+input[i]);
//     }

//     let totalCompareCount = 0;
//     while (minHeap.getLength() > 1) {
//       let aCount = minHeap.pop();
//       let bCount = minHeap.pop();
//       let compareCount = aCount + bCount;
//       totalCompareCount += compareCount;
//       minHeap.push(compareCount);
//     }
//     console.log(totalCompareCount);
//   });

//11000-강의실 배정
// let input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");
// input.shift();

// const times = [];

// input.forEach((v) => {
//   v = v.split(" ");
//   v = v.map((v) => parseInt(v));
//   times.push([v[0], 1]);
//   times.push([v[1], -1]);
// });

// times.sort((a, b) => {
//   if (a[0] === b[0]) return a[1] - b[1];
//   return a[0] - b[0];
// });

// let answer = 0;
// let result = 0;

// for (let i = 0; i < times.length; i++) {
//   result += times[i][1];
//   answer = Math.max(result, answer);
// }

// console.log(answer);

//2075-n번째 큰 수
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let n;

// rl.question('', (answer) => {
//   n = Number(answer);

//   rl.on('line', lineListener).on('close', closeListener);
// });

// class MinHeap {
//   constructor() {
//     this.list = [];
//   }

//   swap(a, b) {
//     const tmp = this.list[a];
//     this.list[a] = this.list[b];
//     this.list[b] = tmp;
//   }

//   push(num) {
//     this.list.push(num);
//     let index = this.size - 1;

//     while (index > 0) {
//       const parentIndex = Math.floor((index - 1) / 2);
//       const parent = this.list[parentIndex];
//       const currentChild = this.list[index];

//       if (parent <= currentChild) {
//         break;
//       }

//       this.swap(parentIndex, index);
//       index = parentIndex;
//     }
//   }

//   shift() {
//     this.swap(0, this.size - 1);
//     this.list.pop();

//     let index = 0;

//     while (true) {
//       const leftChildIndex = index * 2 + 1;

//       if (leftChildIndex >= this.size) {
//         break;
//       }

//       const rightChildIndex = index * 2 + 2;
//       const leftChild = this.list[leftChildIndex];
//       const rightChild = this.list[rightChildIndex];

//       let minChildIndex;
//       let minChild;

//       if (rightChild === undefined || leftChild < rightChild) {
//         minChildIndex = leftChildIndex;
//         minChild = leftChild;
//       } else {
//         minChildIndex = rightChildIndex;
//         minChild = rightChild;
//       }

//       if (minChild >= this.list[index]) {
//         break;
//       }

//       this.swap(index, minChildIndex);
//       index = minChildIndex;
//     }
//   }

//   peek() {
//     return this.list[0];
//   }

//   get size() {
//     return this.list.length;
//   }
// }

// const priorityQ = new MinHeap();

// function lineListener(line) {
//   if (line === '') {
//     rl.close();
//   }

//   line.split(' ').forEach((num) => {
//     num = Number(num);

//     priorityQ.push(num);

//     if (priorityQ.size > n) {
//       priorityQ.shift();
//     }
//   });
// }

// function closeListener() {
//   console.log(priorityQ.peek());
//   process.exit();
// }

//24479-깊이 우선 탐색 1
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
// const [N, M, R] = input.shift().split(' ').map(Number);
// const arr = input.map((v) => v.split(' ').map(Number));
// const graph = [...Array(N + 1)].map(() => []);
// const visited = Array(N).fill(0);
// let cnt = 1;

// // 무방향(양방향) 그래프 만들기
// arr.map(([from, to]) => {
//   graph[from].push(to);
//   graph[to].push(from);
// });

// // 오름차순 정렬
// graph.map((v) => v.sort((a, b) => a - b));

// // DFS
// const dfs = (node) => {
//   // graph의 0번째 인덱스는 쓰지 않으므로 현재 노드번호에 -1의 방문여부 체크
//   if (!visited[node - 1]) {
//     // 방문 체크함과 동시에 해당 인덱스의 값은 1씩 증가하는 cnt로 넣어준다.
//     visited[node - 1] = cnt;
//     cnt++;
//     for (const next of graph[node]) dfs(next); // 재귀
//   }
// };

// dfs(R);

// console.log(visited.join('\n'));

//24480-깊이 우선 탐색2
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
// const [N, M, R] = input.shift().split(' ').map(Number);
// const arr = input.map((v) => v.split(' ').map(Number));
// const graph = [...Array(N + 1)].map(() => []);
// const visited = Array(N).fill(0);
// let cnt = 1;

// // 무방향(양방향) 그래프 만들기
// arr.map(([from, to]) => {
//   graph[from].push(to);
//   graph[to].push(from);
// });

// // 내림차순 정렬
// graph.map((v) => v.sort((a, b) => b - a));

// // DFS
// const dfs = (node) => {
//   // graph의 0번째 인덱스는 쓰지 않으므로 현재 노드번호에 -1의 방문여부 체크
//   if (!visited[node - 1]) {
//   	// 방문 체크함과 동시에 해당 인덱스의 값은 1씩 증가하는 cnt로 넣어준다.
//     visited[node - 1] = cnt;
//     cnt++;
//     for (const next of graph[node]) dfs(next);
//   }
// };

// dfs(R);

// console.log(visited.join('\n'));

//24444-너비우선탐색1
// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

// class Que {
//     q = [];
//     h = 0;
//     t = 0;
//     enque(v) {
//         this.q[this.t++] = v;
//     }
//     deque() {
//         const v = this.q[this.h];
//         delete this.q[this.h++];
//         return v;
//     }
//     size() {
//         return this.t - this.h;
//     }
// }

// const [n, m, r] = input[0].split(" ").map(Number);
// const graph = Array.from({ length: n + 1 }, () => []);
// for (let i = 1; i <= m; i++) {
//     const [a, b] = input[i].split(" ").map(Number);
//     graph[a].push(b);
//     graph[b].push(a);
// }
// graph.forEach((line) => line.sort((a, b) => a - b));
// // console.log(graph);
// const visited = new Array(n + 1).fill(0);

// const queue = new Que();
// queue.enque(r);
// visited[r] = 1;

// let step = 1;
// while (queue.size()) {
//     const cur = queue.deque();

//     for (const next of graph[cur]) {
//         if (!visited[next]) {
//             queue.enque(next);
//             visited[next] = ++step;
//         }
//     }
// }

// console.log(visited.slice(1).join("\n"));

//24445-너비우선탐색2
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const [N, M, R] = input.shift().split(' ').map(v => +v);
// const graph = Array.from({length:N+1}).map(() => []); //정점이 1부터 N까지 이니까, 배열의 idx를 N+1d 을 해줘야 생각하기 쉬움
// for(let i=0; i<N; i++){ //만든 graph 채우기
//     const [from, to] = input[i].split(' ').map(v => +v);
//     graph[from].push(to); //간선 연결
//     graph[to].push(from);
// }
// graph.forEach((el) => el.sort((a,b) => b-a)); //내림차순 정렬
// const visited = new Array(N+1).fill(0); //방문하지 않음 0 표시

// const queue = [];
// queue.push(R);// 시작 정점 push
// let cnt = 1; //첫번째 순서
// visited[R] = cnt //방문 표시 & 순서 표시
// while(queue.length){
//     let cur = queue.shift(); //현재 방문하고 있는 정점
//     for(let i=0; i<graph[cur].length; i++){ //방문한 정점과 연결되어있는 모든 정점 방문해보자
//         let nx = graph[cur][i]
//         if(visited[nx] === 0){ //단 이미 방문했으면 안됨
//             queue.push(nx); //queue에 넣으면서 방문
//             visited[nx] = ++cnt;  //방문 표시 & 순서 표시
//         }
//     }
// }
// console.log(visited.slice(1).join('\n')) //아까 visited 배열을 0부터 N 까지 생성했으니, idx 1부터 slice 하면 된다.

//2606-바이러스
// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// let node = Number(input[0]);
// let edge_num = Number(input[1]);
// let graph = [...new Array(node + 1)].map(() => []);
// let visited = [...new Array(node + 1)].fill(0);
// let ans = 0;
// // 그래프 생성
// for (let i = 0; i < edge_num; i++) {
//   let start = Number(input[i + 2].split(" ")[0]);
//   let end = Number(input[i + 2].split(" ")[1]);
//   graph[start].push(end);
//   graph[end].push(start);
// }
// // 1번노드 방문처리해주고 dfs 시작
// visited[1] = 1;
// function dfs(start) {
//   for (let end of graph[start]) {
//     if (!visited[end]) {
//       visited[end] = 1;
//       ans++;
//       dfs(end);
//     }
//   }
// }
// dfs(1);
// console.log(ans);

//1260-DFS와 BFS
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const [N, M, V] = input.shift().split(' ').map(Number);
// const edges = input.map(v => v.split(' ').map(Number));
// const graph = [...Array(N + 1)].map(() => []);
// edges.forEach(([from, to]) => {
//   graph[from].push(to);
//   graph[to].push(from);
// });

// const dfs = (start) => {
//   const stack = [start];
//   const visited = Array(N + 1).fill(false);
//   const order = [];
//   while (stack.length) {
//     const node = stack.pop();
//     if (!visited[node]) {
//       visited[node] = true;
//       order.push(node);
//       stack.push(...graph[node]);
//     }
//   }
//   return order.join(' ');
// };

// const bfs = (start) => {
//   const queue = [start];
//   const visited = Array(N + 1).fill(false);
//   const order = [];
//   while (queue.length) {
//     const node = queue.shift();
//     if (!visited[node]) {
//       visited[node] = true;
//       order.push(node);
//       queue.push(...graph[node]);
//     }
//   }
//   return order.join(' ');
// };

// graph.forEach(v => v.sort((a, b) => b - a));
// console.log(dfs(V));

// graph.forEach(v => v.sort((a, b) => a - b));
// console.log(bfs(V));

//2667-단지번호붙이기
// const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
// const N = input.shift();
// const arr = input.map((item) => item.split('').map(Number))

// function bfs(x, y) {
//     const queue = [[x,y]];
//     const visited = {};
//     visited[[x,y]] = true;
//     visitedCoords[[x,y]] = true;
//     let dx = [0, 0, 1, -1];
//     let dy = [-1, 1, 0, 0];
//     let cnt = 1;

//     while(queue.length) {
//         for(let i=0; i<queue.length; i++) {
//             let X = queue.shift();
//             for(let j = 0; j < 4; j++) {
//                 let nx = X[0] + dx[j];
//                 let ny = X[1] + dy[j];
//                 if(( nx >= 0 &&
//                     ny >= 0 &&
//                     nx < arr.length &&
//                     ny < arr.length ) &&
//                 // 좌표의 유효성 확인
//                     (arr[nx][ny] === 1) &&
//                 // 1일 경우에만 진행되므로 1인 경우만 좌표 출력
//                     (!visited[[nx,ny]])
//                 // visited 확인
//                     )
//                 {
//                     visited[[nx,ny]] = true;
//                     visitedCoords[[nx,ny]] = true;
//                     cnt++;
//                     queue.push([nx,ny]);
//                 }
//             }
//         }
//     }
//     return cnt;
// }

// // 정답 출력을 위해 좌표를 순회할때, 중복된 좌표를 순회하지 않기 위해서 추가로 삽입한 객체
// // 여기서, ture로 지정된 좌표는 더이상 순회하지 않는다.
// const visitedCoords = {};
// const answer = [];
// for(let i=0; i<N; i++) {
//     for(let j=0; j<N; j++) {
//         if(arr[i][j] === 1 && !visitedCoords[[i,j]]) answer.push(bfs(i,j));
//     }
// }

// console.log(answer.length);
// answer.sort((a,b) => a-b)
// answer.forEach((item) => console.log(item));

//1012-유기농 배추
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// const num = Number(input.shift());
// const ds = [
//   [-1, 0],
//   [1, 0],
//   [0, 1],
//   [0, -1],
// ];
// function bfs(startX, startY) {
//   //시작 좌표 기준으로 시작
//   const queue = [[startX, startY]];
//   // queue가 비워지면 탈출
//   while (queue.length) {
//     const [x, y] = queue.shift();
//     // queue의 값을 하나씩 빼서 xy로 저장
//     // xy좌표가 0 이면 다시, 1이면 0으로 만들어준다.
//     // 인접한 1들 다 0으로 만들기
//     if (!map[x][y]) continue;
//     else map[x][y] = 0;

//     // 상하좌우 탐색하여 1이 있다면 queue에 push 해준다.
//     for (let i = 0; i < 4; i++) {
//       const xPos = x + ds[i][0];
//       const yPos = y + ds[i][1];

//       if (xPos < 0 || yPos < 0 || xPos >= M || yPos >= N) continue;
//       if (map[xPos][yPos]) queue.push([xPos, yPos]);
//     }
//   }
// }
// for (let i = 0; i < num; i++) {
//   let worm = 0;
//   var [M, N, K] = input.shift().split(" ").map(Number);
//   var map = Array.from(Array(M), () => new Array(N).fill(0));
//   for (let j = 0; j < K; j++) {
//     let xy = input.shift().split(" ");
//     map[xy[0]][xy[1]] = 1;
//   }
//   for (let k = 0; k < M; k++) {
//     for (let l = 0; l < N; l++) {
//       //만약 그 좌표가 1이라면 worm을 늘려주고 상하좌우 탐색하여 전부 0으로 만들어준다.
//       if (map[k][l]) {
//         bfs(k, l);
//         worm++;
//       }
//     }
//   }
//   console.log(worm);
// }

//2178-미로탐색
// const sol = (input) => {
//     const [N, M] = input[0].split(" ").map((v) => +v);
//     const adjM = [];
//     for (let i = 1; i <= N; i++) adjM.push(input[i].split("").map((v) => +v)); // 미로 행렬
//     const check = Array.from({ length: N }, () => Array(M).fill(0)); // 방문 여부를 위한 체크 행렬

//     function bfs(row, col) {
//       const dx = [-1, 0, 1, 0];
//       const dy = [0, 1, 0, -1]; // 현재 위치로부터 동서남북 조회를 위한 dx, dy 배열
//       const queue = [];
//       queue.push([row, col]);
//       check[row][col] = 1;
//       while (queue.length) {
//         const [x, y] = queue.shift(); // 큐는 FIFO이므로, 맨 앞부터 꺼낸다.
//         for (let i = 0; i < 4; i++) {
//           const [nx, ny] = [x + dx[i], y + dy[i]]; // (nx, ny)는 이동 가능성이 있는 좌표.
//           if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue; // 미로를 벗어나는 좌표는 제외
//           if (adjM[nx][ny] && !check[nx][ny]) { // 길이 있고, 방문하지 않았다면 방문
//             check[nx][ny] = check[x][y] + 1; // (x,y)의 값이 (x,y)까지 최단경로에 해당한다.
//             queue.push([nx, ny]); // BFS(너비 우선)로 현재 위치에서 갈 수 있는 좌표를 모두 큐에 넣어준다.
//           }
//         }
//       }
//     }
//     bfs(0, 0);
//     return check[N - 1][M - 1];
//   };

//   // 백준에서 입력을 받기 위한 코드
//   const input = [];
//   require("readline")
//     .createInterface(process.stdin, process.stdout)
//     .on("line", (line) => {
//       input.push(line);
//     })
//     .on("close", () => {
//       console.log(sol(input));
//       process.exit();
//     });

//24479-알고리즘 수업 - 깊이 우선 탐색 1
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
// const [N, M, R] = input.shift().split(' ').map(Number);
// const arr = input.map((v) => v.split(' ').map(Number));
// const graph = [...Array(N + 1)].map(() => []);
// const visited = Array(N).fill(0);
// let cnt = 1;

// // 무방향(양방향) 그래프 만들기
// arr.map(([from, to]) => {
//   graph[from].push(to);
//   graph[to].push(from);
// });

// // 오름차순 정렬
// graph.map((v) => v.sort((a, b) => a - b));

// // DFS
// const dfs = (node) => {
//   // graph의 0번째 인덱스는 쓰지 않으므로 현재 노드번호에 -1의 방문여부 체크
//   if (!visited[node - 1]) {
//     // 방문 체크함과 동시에 해당 인덱스의 값은 1씩 증가하는 cnt로 넣어준다.
//     visited[node - 1] = cnt;
//     cnt++;
//     for (const next of graph[node]) dfs(next); // 재귀
//   }
// };

// dfs(R);

// console.log(visited.join('\n'));

//1463-1로 만들기
// const input = require('fs').readFileSync('/dev/stdin').toString();
// const X = Number(input);

// function dp(n, memo = [0, 0]) {
//   let i = 2;
//   while (i <= n) {
//     memo[i] = memo[i - 1] + 1;
//     if (i % 3 === 0) {
//       memo[i] = Math.min(memo[i], memo[i / 3] + 1);
//     }
//     if (i % 2 === 0) {
//       memo[i] = Math.min(memo[i], memo[i / 2] + 1);
//     }
//     i++;
//   }
//   return memo[n];
// }

// console.log(dp(X));

//2512-예산
// const solve = (input, N, M) => {
//   input.sort((a, b) => a - b);
//   let high = input[N - 1];
//   let low = 1;
//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);
//     const sum = input.reduce((acc, v) => acc + (v <= mid ? v : mid), 0);
//     if (sum <= M) low = mid + 1;
//     else high = mid - 1;
//   }
//   console.log(high);
// };

// const [N, ...input] = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split(/\s+/)
//   .map((v) => +v);
// const M = input.pop();
// solve(input, N, M);

//2470-예산
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// const N = Number(input.shift());
// const solution = input
//   .shift()
//   .split(' ')
//   .map(Number)
//   .sort((a, b) => a - b);

// let left = 0;
// let right = N - 1;
// let tempSum = Number.MAX_SAFE_INTEGER;
// let answer = '';

// while (left < right) {
//   let sum = solution[left] + solution[right];

//   if (tempSum > Math.abs(sum)) {
//     tempSum = Math.abs(sum);
//     answer = [solution[left], solution[right]];
//   }

//   if (sum < 0) {
//     left++;
//   } else {
//     right--;
//   }
// }

// console.log(answer.sort((a, b) => a - b).join(' '));

//2467-용액
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

// let N = Number(input[0]);
// let liquidsArr = input[1].split(' ').map(Number);

// let abs = 2000000000;
// let ansLeft = 0;
// let ansRight = 0;

// for (let i = 0; i < N - 1; i++) {
//   let start = i + 1;
//   let end = N - 1;
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     let sum = liquidsArr[mid] + liquidsArr[i];
//     if (Math.abs(sum) < abs) {
//       abs = Math.abs(sum);
//       ansLeft = liquidsArr[i];
//       ansRight = liquidsArr[mid];
//     }
//     if (sum === 0) {
//       break;
//     } else if (sum > 0) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
// }
// console.log(ansLeft, ansRight);

//k번째수
// const { mkdir } = require('fs');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const binarySearch = (k, N) => {
//   let end = N * N;
//   let start = 1;
//   let ans = 0;
//   while (start <= end) {
//     mid = Math.floor((start + end) / 2);
//     let sum = 0;
//     for (let i = 1; i <= N; i++) {
//       let val = 0;
//       mid / i > N ? (val = N) : (val = Math.floor(mid / i));
//       sum += val;
//     }
//     // console.log("mid : ", mid , " sum :",sum)
//     if (sum >= k) {
//       ans = mid;
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return ans;
// };

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const k = parseInt(input[1]);
//   console.log(binarySearch(k, N));
// };

// const input = [];
// rl.on('line', function (line) {
//   input.push(line);
// }).on('close', function () {
//   solution(input);
//   process.exit();
// });

//1253-좋다
// const fs = require('fs');
// const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
// const inputs = fs
//   .readFileSync(path)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((it) => it.split(' ').map(BigInt));
// const n = Number(inputs[0][0]);
// const A = inputs[1];

// const map = new Map();

// for (const a of A) {
//   if (map.has(a)) map.set(a, map.get(a) + 1);
//   else map.set(a, 1);
// }

// let ans = 0;
// const bt = (selected, start) => {
//   if (selected.length === 2) {
//     const sum = selected[0] + selected[1];

//     if (map.has(sum)) {
//       if (sum === selected[0] && sum === selected[1] && map.get(sum) === 2) return;
//       if (sum === selected[0] && map.get(sum) === 1) return;
//       if (sum === selected[1] && map.get(sum) === 1) return;
//       ans += map.get(sum);
//       map.delete(sum);
//     }
//     return;
//   }

//   for (let i = start; i < n; i++) {
//     bt([...selected, A[i]], i + 1);
//   }
// };

// bt([], 0);

// console.log(ans);

//2343-기타레슨

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// const [N, M] = input.shift().split(' ').map(Number);
// const classes = input[0].split(' ').map(Number);

// let left = Math.max(...classes);

// let right = classes.reduce((acc, cur) => acc + cur);

// let answer = Number.MAX_SAFE_INTEGER;
// while (left <= right) {
//   let cnt = 1;
//   let mid = Math.floor((left + right) / 2);
//   let tmp = 0;
//   for (let i = 0; i < classes.length; i++) {
//     if (tmp + classes[i] <= mid) {
//       tmp += classes[i];
//     } else {
//       tmp = 0 + classes[i];
//       cnt++;
//       if (cnt > M) break;
//     }
//   }

//   if (cnt > M) {
//     left = mid + 1;
//   }

//   if (cnt <= M) {
//     if (answer >= mid) answer = mid;
//     right = mid - 1;
//   }
// }

// console.log(answer);

//1072-게임
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// let [x, y] = input[0].split(' ').map(Number);
// let z = Math.floor((100 * y) / x);
// let left = 1;
// let right = 1000000000;
// let ans = Infinity;
// while (left <= right) {
//   let mid = parseInt((left + right) / 2);
//   let new_z = Math.floor((100 * (y + mid)) / (x + mid));
//   if (z !== new_z) {
//     ans = Math.min(ans, mid);
//     right = mid - 1;
//   } else {
//     left = mid + 1;
//   }
// }
// if (ans === Infinity) console.log(-1);
// else console.log(ans);

//14003-가장 긴 증가하는 부분 수열 5
// const fs = require('fs');
// const input = fs
//   .readFileSync('./dev/stdin')
//   .toString()
//   .trim()
//   .split('\n')
//   .map((v) => v.split(' ').map(Number));
// const [N] = input[0];
// const arr = input[1];

// function binarySearch(left, right, target) {
//   let mid;
//   while (left < right) {
//     mid = Math.floor((left + right) / 2);

//     if (lis[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid;
//     }
//   }
//   return right;
// }

// let lis = [];
// let records = [];
// records[0] = 0;
// let j = 0;
// lis[0] = arr[0];
// let i = 1;

// while (i < N) {
//   if (lis[j] < arr[i]) {
//     lis[++j] = arr[i];
//     records[i] = j;
//   } else {
//     let idx = binarySearch(0, j, arr[i]);
//     lis[idx] = arr[i];
//     records[i] = idx;
//   }
//   i++;
// }
// let answer = [];

// let max = Math.max(...records);
// const maxIdx = records.indexOf(max);

// for (let i = maxIdx; i >= 0; i--) {
//   if (records[i] == max) {
//     answer.push(arr[i]);
//     max--;
//   }
//   if (max < 0) break;
// }

// console.log(answer.length);
// console.log(answer.reverse().join(' '));

//12738-가장 긴 증가하는 부분 수열 3
// const fs = require('fs');
// const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v => v.split(' ').map(Number))
// const [N] = input[0];
// const arr = input[1];

// function binarySearch(left, right, target) {
//   let mid;
//   while (left < right) {
//     mid = Math.floor((left + right) / 2);

//     if (lis[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid
//     }
//   }
//   return right;
// }

// let lis = [];

// let j = 0;
// lis[0] = arr[0];
// let i = 1;

// while (i < N) {

//   if (lis[j] < arr[i]) {
//     lis[++j] = arr[i];
//   } else {
//     let idx = binarySearch(0, j, arr[i]);
//     lis[idx] = arr[i]
//   }
//   i++;
// }
// console.log(lis.length)

//2473-세용액
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");

// const N = +input[0];
// const nums = input[1]
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => a - b);
// const ansArr = Array.from({ length: 3 }, () => 0);
// let ans = Infinity;

// for (let i = 0; i < N - 2; i++) {
//   let left = i + 1;
//   let right = N - 1;
//   while (left < right) {
//     const sum = nums[i] + nums[left] + nums[right];
//     if (Math.abs(sum) < ans) {
//       ans = Math.abs(sum);
//       ansArr[0] = nums[i];
//       ansArr[1] = nums[left];
//       ansArr[2] = nums[right];
//     }
//     if (sum < 0) left++;
//     else right--;
//   }
// }

// console.log(ansArr.join(" "));

//2512-예산

//여러 지방의 예산요청을 심사하여 국가의 예산을 분배
//정해진 총액 이하에서 가능한 한 최대의 총 예산
//모든 요청이 배정될 수 있는 경우에는 요청한 금액을 그대로 배정
//모든 요청이 배정될 수 없는 경우에는 특정한 정수 상한액을 계산하여 그 이상인 예산요청에는 모두 상한액을 배정한다. 상한액 이하의 예산요청에 대해서는 요청한 금액을 그대로 배정한다.

//예산 요청들이 모두 상한액을 넘지 않는지 확인
//넘지 않는다면 return
//넘는다면 상한액으로 변환

//상한액 정하기
//

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');
// let count = +input[0];
// let arr = input[1].split(' ').map(Number);
// let limit = +input[2];

// let sum = arr.reduce((a, c) => a + c, 0);

// console.log((485 - 230) / (count / 2));
// while (sum > limit) {
//   arr.forEach((v) => v);
// }

//1300 - k번째 수
// const { mkdir } = require('fs');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const binarySearch = (k, N) => {
//   let end = N * N;
//   let start = 1;
//   let ans = 0;
//   while (start <= end) {
//     mid = Math.floor((start + end) / 2);
//     let sum = 0;
//     for (let i = 1; i <= N; i++) {
//       let val = 0;
//       mid / i > N ? (val = N) : (val = Math.floor(mid / i));
//       sum += val;
//     }
//     // console.log("mid : ", mid , " sum :",sum)
//     if (sum >= k) {
//       ans = mid;
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return ans;
// };

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const k = parseInt(input[1]);
//   console.log(binarySearch(k, N));
// };

// const input = [];
// rl.on('line', function (line) {
//   input.push(line);
// }).on('close', function () {
//   solution(input);
//   process.exit();
// });

//14938-서강그라운드
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// const [n, m, r] = input[0].split(' ').map(Number);
// const items = input[1].split(' ').map(Number);

// const roads = [];
// for (let i = 2; i < 2 + r; i++) {
//   const [a, b, l] = input[i].split(' ').map(Number);
//   roads.push([a, b, l]);
// }

// const graph = Array.from({ length: n + 1 }, () => []);
// roads.forEach(([a, b, l]) => {
//   graph[a].push([b, l]);
//   graph[b].push([a, l]);
// });

// const dijkstra = (start) => {
//   let dists = Array(n + 1).fill(Infinity);
//   let visited = Array(n + 1).fill(false);
//   dists[start] = 0;
//   let p = [[0, start]];

//   while (p.length) {
//     p.sort((a, b) => b[0] - a[0]);

//     let [curDist, curNode] = p.pop();

//     if (visited[curNode]) continue;
//     visited[curNode] = true;

//     for (const [node, dist] of graph[curNode]) {
//       let total = dist + curDist;
//       if (total < dists[node]) {
//         dists[node] = total;
//         p.push([total, node]);
//       }
//     }
//   }

//   return dists;
// };

// let result = 0;
// for (let i = 1; i <= n; i++) {
//   let dist = dijkstra(i);

//   let r = 0;

//   for (let j = 1; j <= n; j++) {
//     if (dist[j] <= m) {
//       r += items[j - 1];
//     }
//   }
//   result = Math.max(r, result);
// }

// console.log(result);

//2665-미로만들기
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const n = parseInt(input[0]);
// const graph = input.slice(1).map((line) => line.split('').map(Number));

// let dir = [
//   [0, 1],
//   [0, -1],
//   [1, 0],
//   [-1, 0],
// ];

// const dijkstra = () => {
//   let visited = Array.from({ length: n }, () => Array(n).fill(false));
//   let dists = Array.from({ length: n }, () => Array(n).fill(Infinity));
//   let queue = [[0, 0, 0]];
//   dists[0][0] = true;

//   while (queue.length) {
//     queue.sort((a, b) => b[0] - a[0]);
//     let [count, x, y] = queue.pop();

//     if (visited[x][y]) continue;
//     visited[x][y] = true;

//     if (x === n - 1 && y === n - 1) return count;

//     for (const [dx, dy] of dir) {
//       let nx = x + dx;
//       let ny = y + dy;

//       if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
//         let totalCount = count + (graph[nx][ny] === 0 ? 1 : 0);
//         if (totalCount < dists[nx][ny]) {
//           dists[nx][ny] = totalCount;
//           queue.push([totalCount, nx, ny]);
//         }
//       }
//     }
//   }

//   return -1;
// };

// console.log(dijkstra());

//2470-두용액
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const N = Number(input.shift());
// const solution = input
//   .shift()
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => a - b);

// let left = 0;
// let right = N - 1;
// let tempSum = Number.MAX_SAFE_INTEGER;
// let answer = "";

// while (left < right) {
//   let sum = solution[left] + solution[right];

//   if (tempSum > Math.abs(sum)) {
//     tempSum = Math.abs(sum);
//     answer = [solution[left], solution[right]];
//   }

//   if (sum < 0) {
//     left++;
//   } else {
//     right--;
//   }
// }

// console.log(answer.sort((a, b) => a - b).join(" "));

//2776-암기왕
// const fs = require('fs');
// const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
// const T = +input.shift();

// for (let i = 0; i < T; i++) {
//   input.shift();
//   const first = input
//     .shift()
//     .split(' ')
//     .map(Number)
//     .sort((a, b) => a - b);
//   input.shift();
//   const second = input.shift().split(' ').map(Number);
//   let answer = [];
//   second.forEach((target) => {
//     let min = 0;
//     let max = first.length - 1;
//     let mid;
//     let success = false;
//     while (min <= max) {
//       mid = Math.floor((min + max) / 2);
//       if (first[mid] == target) {
//         success = true;
//         break;
//       } else if (first[mid] < target) {
//         min = mid + 1;
//       } else {
//         max = mid - 1;
//       }
//     }
//     const res = success ? 1 : 0;
//     answer.push(res);
//   });

//   console.log(answer.join('\n'));
// }

//1939-중량제한
// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// const [N, M] = input.shift().split(' ');
// const [start, end] = input.pop().split(' ');

// input = input.map((v) => {
//   v = v.split(' ').map(Number);
//   return v;
// });
// let answer = 0;
// const graph = [];
// const set = Array.from({ length: N + 1 }, (v, i) => i);

// for (const [v1, v2, cost] of input) {
//   graph.push([v1, v2, cost]);
// }

// graph.sort((a, b) => b[2] - a[2]);

// function find(a) {
//   if (set[a] === a) return a;
//   return (set[a] = find(set[a]));
// }

// function union(a, b) {
//   const parentA = find(a);
//   const parentB = find(b);

//   parentA < parentB ? (set[parentB] = parentA) : (set[parentA] = parentB);
// }

// function isCycled(a, b) {
//   const parentA = find(a);
//   const parentB = find(b);

//   if (parentA === parentB) return true;
//   return false;
// }

// function isFinished(a, b) {
//   if (find(a) === find(b)) return true;
//   return false;
// }

// for (let i = 0; i < set.length; i++) {
//   const [v1, v2, cost] = graph[i];
//   if (!isCycled(v1, v2)) {
//     union(v1, v2);
//     if (isFinished(start, end)) {
//       answer = cost;
//       break;
//     }
//   }
// }

// console.log(answer);

//1446-지름길
//let now = 0
//now에 시작하는 게 있는지 확인.
//시작하는게 있다면
//끝이 길이를 넘지 않는지 확인
//여러개라면 그중 지름길 길이가 가장 짧은 걸로 셀렉
//0 50 10, 20
//->10이 더 짧을때 10으로 체인지
// const input = require('fs')
//   .readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// let [n, d] = input[0].split(' ').map(Number);
// let shortcuts = input.slice(1).map((v) => v.split(' ').map(Number));

// let dists = Array(d + 1).fill(Infinity);
// dists[0] = 0;

// let graph = Array.from({ length: d + 1 }, () => []);
// shortcuts.forEach(([s, e, l]) => {
//   if (e > d) return; // 도착점이 범위를 초과
//   if (e - s <= l) return; // 지름길이 더 비효율적
//   graph[s].push([e, l]);
// });

// for (let i = 0; i <= d; i++) {
//   if (i > 0) {
//     dists[i] = Math.min(dists[i], dists[i - 1] + 1);
//   }

//   for (let [e, l] of graph[i]) {
//     if (e <= d && dists[e] > dists[i] + l) {
//       dists[e] = dists[i] + l;
//     }
//   }
// }

// console.log(dists[d]);

//10282-해킹
// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   push(value) {
//     this.heap.push(value);
//     this._heapifyUp();
//   }

//   pop() {
//     if (this.size() === 1) return this.heap.pop();
//     const root = this.heap[0];
//     this.heap[0] = this.heap.pop();
//     this._heapifyDown();
//     return root;
//   }

//   peek() {
//     return this.heap[0];
//   }

//   size() {
//     return this.heap.length;
//   }

//   _heapifyUp() {
//     let index = this.heap.length - 1;
//     while (index > 0) {
//       const parentIndex = Math.floor((index - 1) / 2);
//       if (this.heap[parentIndex][0] <= this.heap[index][0]) break;

//       [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
//       index = parentIndex;
//     }
//   }

//   _heapifyDown() {
//     let index = 0;
//     const lastIndex = this.heap.length - 1;

//     while (true) {
//       const leftChild = 2 * index + 1;
//       const rightChild = 2 * index + 2;
//       let smallest = index;

//       if (leftChild <= lastIndex && this.heap[leftChild][0] < this.heap[smallest][0]) {
//         smallest = leftChild;
//       }
//       if (rightChild <= lastIndex && this.heap[rightChild][0] < this.heap[smallest][0]) {
//         smallest = rightChild;
//       }
//       if (smallest === index) break;

//       [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
//       index = smallest;
//     }
//   }
// }
// const input = require('fs')
//   .readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// // 다익스트라 함수
// const dijkstra = (n, c, graph) => {
//   const dists = Array(n + 1).fill(Infinity);
//   dists[c] = 0;

//   const minHeap = new MinHeap();
//   minHeap.push([0, c]); // [시간, 컴퓨터]

//   while (minHeap.size()) {
//     const [time, computer] = minHeap.pop();

//     if (time > dists[computer]) continue; // 이미 처리된 노드 무시

//     for (const [next, t] of graph[computer]) {
//       const newTime = time + t;
//       if (newTime < dists[next]) {
//         dists[next] = newTime;
//         minHeap.push([newTime, next]);
//       }
//     }
//   }

//   // 감염된 컴퓨터 수와 최대 감염 시간 계산
//   let count = 0;
//   let maxTime = 0;
//   for (const time of dists) {
//     if (time < Infinity) {
//       count++;
//       maxTime = Math.max(maxTime, time);
//     }
//   }

//   return [count, maxTime];
// };

// // 입력 처리 및 결과 출력
// let t = +input[0];
// const results = [];

// for (let i = 1; i < input.length; ) {
//   const [n, d, c] = input[i].split(' ').map(Number);
//   const graph = Array.from({ length: n + 1 }, () => []);

//   for (let j = 0; j < d; j++) {
//     const [a, b, s] = input[i + 1 + j].split(' ').map(Number);
//     graph[b].push([a, s]); // b가 감염되면 a가 감염됨
//   }

//   const result = dijkstra(n, c, graph);
//   results.push(result.join(' '));

//   i += d + 1;
// }

// console.log(results.join('\n'));

//9370-미확인 도착지
// 다익스트라 알고리즘:

// 주어진 시작점 s에서 모든 노드까지의 최단 거리를 계산.
// s -> 목적지 최단 경로에 g <-> h 도로가 포함되어야 하므로, 두 가지 경로를 비교:
// 직접적으로 s -> 목적지로 가는 경로의 거리.
// s -> g -> h -> 목적지 또는 s -> h -> g -> 목적지로 가는 경로의 거리.
// 특별한 도로 확인:

// g <-> h 도로를 지나기 위해, s -> g, g -> h, h -> 목적지 등의 경로를 구체적으로 확인해야 한다.
// 출력 요구사항:

// 가능한 목적지를 오름차순으로 출력
// const input = require('fs')
//   .readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// const T = +input[0];
// let idx = 1;

// const dijkstra = (n, graph, start) => {
//   const dist = Array(n + 1).fill(Infinity);
//   const pq = [[0, start]]; // [거리, 노드]
//   dist[start] = 0;

//   while (pq.length > 0) {
//     const [currentDist, currentNode] = pq.shift();
//     if (currentDist > dist[currentNode]) continue;

//     for (const [nextNode, weight] of graph[currentNode]) {
//       const newDist = currentDist + weight;
//       if (newDist < dist[nextNode]) {
//         dist[nextNode] = newDist;
//         pq.push([newDist, nextNode]);
//       }
//     }
//     pq.sort((a, b) => a[0] - b[0]); // 우선순위 큐 정렬
//   }

//   return dist;
// };

// const results = [];

// for (let t = 0; t < T; t++) {
//   const [n, m, candidateCount] = input[idx++].split(' ').map(Number);
//   const [s, g, h] = input[idx++].split(' ').map(Number);

//   // 그래프 초기화
//   const graph = Array.from({ length: n + 1 }, () => []);
//   let ghDistance = 0;

//   for (let i = 0; i < m; i++) {
//     const [a, b, d] = input[idx++].split(' ').map(Number);
//     graph[a].push([b, d]);
//     graph[b].push([a, d]);
//     if ((a === g && b === h) || (a === h && b === g)) ghDistance = d;
//   }

//   const destinations = [];
//   for (let i = 0; i < candidateCount; i++) {
//     destinations.push(+input[idx++]);
//   }

//   // 다익스트라 3번 수행
//   const distFromS = dijkstra(n, graph, s);
//   const distFromG = dijkstra(n, graph, g);
//   const distFromH = dijkstra(n, graph, h);

//   // 조건에 맞는 목적지 필터링
//   const validDestinations = [];
//   for (const dest of destinations) {
//     const directDist = distFromS[dest];
//     const viaGH = distFromS[g] + ghDistance + distFromH[dest];
//     const viaHG = distFromS[h] + ghDistance + distFromG[dest];

//     if (directDist === viaGH || directDist === viaHG) {
//       validDestinations.push(dest);
//     }
//   }

//   results.push(validDestinations.sort((a, b) => a - b).join(' '));
// }

// console.log(results.join('\n'));

//5972-택배배송
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   size() {
//     return this.heap.length;
//   }

//   isEmpty() {
//     return this.heap.length === 0;
//   }

//   push(value) {
//     this.heap.push(value);
//     this._heapifyUp();
//   }

//   pop() {
//     if (this.isEmpty()) return null;
//     const root = this.heap[0];
//     const end = this.heap.pop();
//     if (!this.isEmpty()) {
//       this.heap[0] = end;
//       this._heapifyDown();
//     }
//     return root;
//   }

//   _heapifyUp() {
//     let index = this.heap.length - 1;
//     const current = this.heap[index];
//     while (index > 0) {
//       const parentIndex = Math.floor((index - 1) / 2);
//       if (this.heap[parentIndex][0] <= current[0]) break;
//       this.heap[index] = this.heap[parentIndex];
//       index = parentIndex;
//     }
//     this.heap[index] = current;
//   }

//   _heapifyDown() {
//     let index = 0;
//     const length = this.heap.length;
//     const current = this.heap[index];

//     while (true) {
//       let leftChildIndex = 2 * index + 1;
//       let rightChildIndex = 2 * index + 2;
//       let smallest = index;

//       if (leftChildIndex < length && this.heap[leftChildIndex][0] < this.heap[smallest][0]) {
//         smallest = leftChildIndex;
//       }

//       if (rightChildIndex < length && this.heap[rightChildIndex][0] < this.heap[smallest][0]) {
//         smallest = rightChildIndex;
//       }

//       if (smallest === index) break;

//       this.heap[index] = this.heap[smallest];
//       index = smallest;
//     }

//     this.heap[index] = current;
//   }
// }

// let [n, m] = input[0].split(' ').map(Number);
// let arr = input.slice(1).map((v) => v.split(' ').map(Number));
// let graph = Array.from({ length: n + 1 }, () => []);
// arr.forEach(([a, b, c]) => {
//   graph[a].push([b, c]);
//   graph[b].push([a, c]);
// });

// const dijkstra = (start) => {
//   let dists = Array(n + 1).fill(Infinity);
//   dists[start] = 0;
//   let pq = new MinHeap();
//   pq.push([0, start]);

//   while (!pq.isEmpty()) {
//     let [dist, node] = pq.pop();

//     if (dist > dists[node]) continue;

//     for (let [nextNode, nextDist] of graph[node]) {
//       let total = nextDist + dist;
//       if (total < dists[nextNode]) {
//         dists[nextNode] = total;
//         pq.push([total, nextNode]);
//       }
//     }
//   }

//   return dists;
// };

// console.log(dijkstra(1)[n]);

//1854-k번째 최단 경로 찾기
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// const [n, m, k] = input[0].split(' ').map(Number);
// const graph = Array.from({ length: n + 1 }, () => []);

// // 그래프 초기화
// for (let i = 1; i <= m; i++) {
//   const [a, b, c] = input[i].split(' ').map(Number);
//   graph[a].push([b, c]);
// }

// // K번째 최단 경로를 저장하는 배열
// const distances = Array.from({ length: n + 1 }, () => Array(k).fill(Infinity));
// distances[1][0] = 0;

// // 우선순위 큐: [거리, 노드]
// const pq = [[0, 1]]; // [현재까지 거리, 현재 노드]

// while (pq.length > 0) {
//   const [currentDist, currentNode] = pq.shift();

//   for (const [nextNode, weight] of graph[currentNode]) {
//     const newDist = currentDist + weight;

//     // K번째 최단 거리 배열의 최대값보다 작으면 갱신
//     if (newDist < distances[nextNode][k - 1]) {
//       distances[nextNode][k - 1] = newDist;
//       distances[nextNode].sort((a, b) => a - b); // 정렬하여 K번째 최단 거리 유지
//       pq.push([newDist, nextNode]);
//       pq.sort((a, b) => a[0] - b[0]); // 최소 힙처럼 동작하도록 정렬
//     }
//   }
// }

// // 결과 출력
// const result = distances.map((dist) => (dist[k - 1] === Infinity ? -1 : dist[k - 1]));
// console.log(result.slice(1).join('\n'));

//5719-거의 최단경로
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// const INF = Infinity;

// const dijkstra = (n, start, graph) => {
//   const dist = Array(n).fill(INF);
//   const pq = [[0, start]]; // [거리, 노드]
//   dist[start] = 0;

//   while (pq.length > 0) {
//     const [currentDist, currentNode] = pq.shift();

//     if (currentDist > dist[currentNode]) continue;

//     for (const [nextNode, weight] of graph[currentNode]) {
//       const newDist = currentDist + weight;
//       if (newDist < dist[nextNode]) {
//         dist[nextNode] = newDist;
//         pq.push([newDist, nextNode]);
//         pq.sort((a, b) => a[0] - b[0]); // 우선순위 큐 유지
//       }
//     }
//   }

//   return dist;
// };

// const removeShortestPaths = (n, start, end, dist, graph, reverseGraph) => {
//   const queue = [end];
//   const visited = Array(n).fill(false);

//   while (queue.length > 0) {
//     const currentNode = queue.pop();

//     if (visited[currentNode]) continue;
//     visited[currentNode] = true;

//     for (const [prevNode, weight] of reverseGraph[currentNode]) {
//       if (dist[prevNode] + weight === dist[currentNode]) {
//         // 최단 경로 간선을 제거
//         graph[prevNode] = graph[prevNode].filter(([nextNode, w]) => nextNode !== currentNode || w !== weight);
//         queue.push(prevNode);
//       }
//     }
//   }
// };

// const solve = (input) => {
//   let idx = 0;
//   const results = [];

//   while (true) {
//     const [n, m] = input[idx++].split(' ').map(Number);
//     if (n === 0 && m === 0) break;

//     const [start, end] = input[idx++].split(' ').map(Number);

//     const graph = Array.from({ length: n }, () => []);
//     const reverseGraph = Array.from({ length: n }, () => []);

//     for (let i = 0; i < m; i++) {
//       const [u, v, p] = input[idx++].split(' ').map(Number);
//       graph[u].push([v, p]);
//       reverseGraph[v].push([u, p]);
//     }

//     // 최단 경로 계산
//     const dist = dijkstra(n, start, graph);

//     // 최단 경로 간선 제거
//     removeShortestPaths(n, start, end, dist, graph, reverseGraph);

//     // 거의 최단 경로 계산
//     const newDist = dijkstra(n, start, graph);
//     const result = newDist[end] === INF ? -1 : newDist[end];
//     results.push(result);
//   }

//   console.log(results.join('\n'));
// };

// solve(input);

//1719-택배
// const fs = require('fs');
// const input = fs
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// const [n, m] = input[0].split(' ').map(Number);
// const path = input.slice(1).map((e) => e.split(' ').map(Number));
// const distance = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));
// let arr = Array.from({ length: n + 1 }, () => Array(n + 1));

// path.forEach(([a, b, c]) => {
//   distance[a][b] = c;
//   distance[b][a] = c;
//   arr[a][b] = b;
//   arr[b][a] = a;
// });

// for (let k = 1; k <= n; k++) {
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (i === j) {
//         arr[i][j] = '-';
//         continue;
//       }

//       if (distance[i][j] > distance[i][k] + distance[k][j]) {
//         distance[i][j] = distance[i][k] + distance[k][j];
//         arr[i][j] = arr[i][k];
//       }
//     }
//   }
// }

// arr.slice(1).map((v) => v.slice(1));
// for (let i = 1; i <= n; i++) {
//   console.log(arr[i].join(' '));
// }

//14497-주난의난
// class Node {
//   constructor(item) {
//     this.item = item;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(item) {
//     const node = new Node(item)
//     if (this.head == null) {
//       this.head = node;
//     } else {
//       this.tail.next = node;
//     }

//     this.tail = node;
//     this.length += 1;
//   }

//   pop() {
//     const popItem = this.head;
//     this.head = this.head.next;
//     this.length -= 1;
//     return popItem.item;
//   }
// }
// const fs = require('fs');
// const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
// const [N, M] = input.shift().split(' ').map(Number);
// const [x1, y1, x2, y2] = input.shift().split(' ').map(Number);
// let board = input.map(v => v.trim().split(''));

// function solve() {

//   let cnt = 1;
//   let q = new Queue();
//   let visited = Array.from(Array(N), () => Array(M).fill(false));
//   const dx = [0, 0, -1, 1]
//   const dy = [1, -1, 0, 0]

//   q.push([x1 - 1, y1 - 1]);
//   visited[x1 - 1][y1 - 1] = true;

//   while (q.length > 0) {
//     const friends = [];

//     while (q.length > 0) {
//       let [x, y] = q.pop();
//       for (let j = 0; j < 4; j++) {
//         const nx = x + dx[j]
//         const ny = y + dy[j]
//         if (nx >= 0 && ny >= 0 && nx < N && ny < M && !visited[nx][ny]) {
//           if (board[nx][ny] == '1') {
//             visited[nx][ny] = true;
//             friends.push([nx, ny])
//           } else if (board[nx][ny] == '0') {
//             visited[nx][ny] = true;
//             q.push([nx, ny])
//           } else {
//             return cnt;
//           }
//         }
//       }
//     }
//     friends.forEach(v => {
//       q.push([v[0], v[1]]);
//     })
//     cnt++;
//   }
// }

// const x = solve();
// console.log(x)

//18223-민준이와 마산 그리고 건우
const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n');
const [V, E, P] = input[0].split(' ').map(Number); // 정점, 간선, 건우의 위치
const nodes = Array.from({ length: V + 1 }, () => []); // 인접 리스트
const INF = Infinity;

for (let i = 1; i <= E; i++) {
  const [start, end, weight] = input[i].split(' ').map(Number);
  nodes[start].push({ x: end, weight });
  nodes[end].push({ x: start, weight });
}

// 다익스트라 알고리즘 구현
const dijkstra = (start) => {
  const dist = Array(V + 1).fill(INF);
  const visited = Array(V + 1).fill(false);
  const pq = new MinHeap();
  pq.push({ x: start, weight: 0 });
  dist[start] = 0;

  while (!pq.isEmpty()) {
    const { x: current, weight: currentWeight } = pq.pop();

    if (visited[current]) continue;
    visited[current] = true;

    for (const { x: next, weight: nextWeight } of nodes[current]) {
      if (!visited[next] && dist[next] > currentWeight + nextWeight) {
        dist[next] = currentWeight + nextWeight;
        pq.push({ x: next, weight: dist[next] });
      }
    }
  }

  return dist;
};

// 최소 힙 구현
class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(node) {
    this.heap.push(node);
    this._heapifyUp();
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return top;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  _heapifyUp() {
    let index = this.heap.length - 1;
    const current = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (current.weight >= parent.weight) break;
      this.heap[index] = parent;
      index = parentIndex;
    }

    this.heap[index] = current;
  }

  _heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    const current = this.heap[index];

    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let smallest = index;

      if (leftIndex < length && this.heap[leftIndex].weight < this.heap[smallest].weight) {
        smallest = leftIndex;
      }

      if (rightIndex < length && this.heap[rightIndex].weight < this.heap[smallest].weight) {
        smallest = rightIndex;
      }

      if (smallest === index) break;

      this.heap[index] = this.heap[smallest];
      index = smallest;
    }

    this.heap[index] = current;
  }
}

// 시작점에서 각 정점까지의 거리 계산
const distFromStart = dijkstra(1);
const distToV = distFromStart[V];
const distToP = distFromStart[P];

// 건우 위치에서 각 정점까지의 거리 계산
const distFromP = dijkstra(P);
const distPToV = distFromP[V];

// 최종 결과 출력
if (distToV === distToP + distPToV) {
  console.log('SAVE HIM');
} else {
  console.log('GOOD BYE');
}
