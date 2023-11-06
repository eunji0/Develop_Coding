//멀리뛰기
function solution(n) {
  return fibonacci(n);
}

const fibonacci = (n) => {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;

  return dp[n];
};

//n개의 최소공배수
function getGcd(a, b) {
  if (b === 0) return a;
  return getGcd(b, a % b);
}

function solution2(arr) {
  return arr.reduce((a, b) => (a * b) / getGcd(a, b));
}

//귤고르기
function solution3(k, t) {
  const obj = {};

  t.forEach((n) => {
    obj[n] = ++obj[n] || 1;
  });

  let kinds = Object.values(obj).sort((a, b) => b - a);

  let answer = 0;
  let sum = 0;

  for (let num of kinds) {
    ++answer;
    sum += num;

    if (sum >= k) break;
  }
  return answer;
}

//글자 이어붙여 문자열 만들기
function solution4(my_string, index_list) {
  let result = "";

  index_list.forEach((v) => {
    result += my_string[v];
  });

  return result;
}

//조건에 맞게 수열 변환하기 1
function solution5(arr) {
  return arr.map((a) => {
    if (a >= 50 && a % 2 === 0) return Math.floor(a / 2);
    if (a < 50 && a % 2 === 1) return a * 2;
    return a;
  });
}

//문자열 정수의 합
function solution6(num_str) {
  return num_str.split('').map(v=> Number(v)).reduce((a, c)=>a+c, 0);
}

//뒤에서 5등 뒤로
function solution(num_list) {
    return num_list.sort((a, b)=>a-b).splice(5);
}