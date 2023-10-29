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
