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