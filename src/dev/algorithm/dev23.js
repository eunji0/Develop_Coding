//프로그래머스 팩토리얼
function solution(n) {
  let i=1 ;
  let fac = 1;
  while(fac <= n){
    i+=1
    fac+=i
  }
  return i-1;
}

//k의 개수
function solution(i, j, k){
  let s= ' ';
  for(i; i<=j; i++){
    s+=i
  }
  return s.split(k).length-1;
}

//가까운 수
function solution(array, n) {
  array.sort((a, b) => a-b)
  let 두수의차 = Infinity
  let result=0;
  
  for(let i of array){
      if(Math.abs(n-i)<두수의차){
          두수의차=Math.abs(n-i)
          result = i
      }
  }
  
  return result
}

//잘라서 배열로 저장하기
function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, 'g'))
}

//진료순서 정하기
function solution(emergency) {
  let dm = emergency.slice().sort((a,b)=>b-a)
  return emergency.map(v=>dm.indexOf(v)+1) 
}

//영어가 싫어요
function solution(numbers) {
  return +numbers.replaceAll('one', 1).replaceAll('two', 2).replaceAll('three', 3).replaceAll('four', 4).replaceAll('five', 5).replaceAll('six', 6).replaceAll('seven', 7).replaceAll('eight', 8).replaceAll('nine', 9).replaceAll('zero', 0)
}


//forEach(), map(), some()
//1.forEach()
//forEach() 메서드는 배열의 각 요소에 대해 주어진 함수를 실행합니다. 
//일반적으로 배열의 각 요소에 대해 반복하면서 특정 작업을 수행해야 할 때 사용
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number);
});

//2.map()
//map() 메서드는 배열의 각 요소에 대해 주어진 함수를 실행하고, 새로운 배열을 반환합니다. 
//기존 배열은 변경되지 않습니다.
const squaredNumbers = numbers.map((number) => {
  return number * number;
});

console.log(squaredNumbers); // [1, 4, 9, 16, 25]

//3.some() , every()는 모두 다 만족해야 함
//some() 메서드는 배열의 요소 중에서 주어진 조건을 만족하는 요소가 하나 이상 있는지 검사합니다. 만약 조건을 만족하는 요소가 하나 이상 존재하면 true를 반환하고, 그렇지 않으면 false를 반환합니다.
//예를 들어, 배열에 특정 숫자가 포함되어 있는지 확인하는 코드는 다음과 같습니다:
const isNumberIncluded = numbers.some((number) => {
  return number === 3;
});

console.log(isNumberIncluded); // true

//외계어 사전
function solution(spell, dic) {
  return dic.some((v)=>[...v].sort().toString() === [...spell].sort().toString()) ? 1 :2;
}

//문자열 밀기
function solution(A, B) {
  return (B+B).indexOf(A);
}