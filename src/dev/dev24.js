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

//다항식 더하기
function solution(p){
  let a = p.split(' + ')
  let answer= [];
  let x = a.filter((v)=>v.includes('x')).map((v)=>parseInt(v.replace('x', ''))||1).reduce((a,c)=>a+c,0)
  let b = a.filter((v)=>!v.includes('x')).reduce((a,c)=>a+parseInt(c),0)
  if(x === 1) {
    answer.push('x')
  }else{
    answer.push(`${x}x`)
  }
  if(b){
    answer.push(b)
  }
  return answer.join(' + ')
}

solution("3x + 7 + x")


//set의 기능과 역할
//중복된 값 제거하기
const duplicates = [1, 2, 3, 2, 4, 1, 5];
const uniqueSet1 = new Set(duplicates); // Set { 1, 2, 3, 4, 5 }

//값 추가, 삭제하기
const uniqueSet = new Set();
uniqueSet.add(1);
uniqueSet.add(2);
uniqueSet.add(3);
uniqueSet.add(2); // 이미 존재하는 값이므로 무시됨
console.log(uniqueSet); // Set { 1, 2, 3 }

//값의 존재 여부 확인하기
const uniqueSet2 = new Set([1, 2, 3]);
console.log(uniqueSet2.has(2)); // true
console.log(uniqueSet2.has(4)); // false

//Set의 크기 확인하기
console.log(uniqueSet2.size); // 3
//Set을 배열로 변환하기
const arrayFromSet = Array.from(uniqueSet2); // [1, 2, 3]
const arrayFromSet2 = [...uniqueSet2]; // [1, 2, 3]