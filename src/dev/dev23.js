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