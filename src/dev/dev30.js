//자릿수 더하기
function solution(n)
{
    return n.toString().split('').reduce((a, c)=>a+Number(c), 0)
}

//나머지가 1이 되는 수 찾기
function solution(n) {
  for(let i=0; i<n; i++){
      if(n%i===1){
          return i
      }
  }
}

//평균 구하기
function solution(arr) {
  return arr.reduce((a, c)=>a+c, 0)/arr.length
}

//짝수와 홀수
function solution(num) {
  return num%2===0 ? "Even" : "Odd"
}

//약수의 합
function solution(n) {
  let sum=0
  for(let i=1; i<=n; i++){
      if(n%i===0){
          sum+=i
      }
  }
  return sum
}

//x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
  var answer = [];
  for(let i=1; i<=n; i++){
      answer.push(x*i)
  }
  return answer
}

