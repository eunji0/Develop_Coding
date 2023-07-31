//프로그래머스 컨트롤 제트
//reduce는 배열의 각 요소를 순회하면서 하나의 값으로 줄이는(reduce) 역할을 수행하는 배열 메서드
function solution(s) {
  s = s.split(' ')
  let result = []
  for(let i of s){
      if(i === 'Z'){
          result.pop()
      }else{
          result.push(+i)
      }
  }
  return result.reduce((a, c) => a+c, 0);
}

//등수 매기기
function solution(score) {
  let sum= score.map((v)=>v[0]+v[1])
  let down = sum.slice().sort((a, b) => b-a);
   return sum.map((v)=>down.indexOf(v)+1)
}

//저주의 숫자 3
function solution(n) {
  let answer = 0 ;
  for(let i = 0; i<n; i++){
      answer+=1
      while(answer%3===0 || answer.toString().split('').includes('3')){
          answer+=1
      }
  }
  return answer
}