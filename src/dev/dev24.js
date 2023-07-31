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