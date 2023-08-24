//부분 문자열
function solution(str1, str2) {
  return str2.includes(str1)? 1:0;
}

//A강조하기
function solution(my_string, target) {
  return my_string.includes(target)? 1:0;
}

//이어 붙인 수
function solution(num_list) {
  let a = []//홀수
  let b=[]//짝수
  for(let i of num_list){
      if(i%2===0){
          b.push(i)
      }else{
          a.push(i)
      }
  }
  return +a.join('') + +b.join('')
}

//문자열 곱하기
function solution(my_string, k) {
  return my_string.repeat(k)
}

//공배수
function solution(number, n, m) {
  if(number%m===0 && number%n===0){
      return 1
  }else{
      return 0
  }
}

//문자열 바꿔서 찾기
function solution(myString, pat){
  return [...myString].map(a=>a==='A'?'B':'A').join('').includes(pat)? 1:0
}

//정수 찾기
function solution(num_list, n) {
  return num_list.includes(n)? 1:0;
}

//수 조작하기1
function solution(n, control) {
  let a = control.split('')
  for(let i of a){
      if(i==='w'){
          n+=1
      }else if(i==='s'){
          n-=1
      }else if(i==='d'){
          n+=10
      }else if(i==='a'){
          n-=10
      }
  }
  return n
}

//특정한 문자를 대문자로 바꾸기
function solution(my_string, alp) {
  return my_string.replaceAll(alp, alp.toUpperCase())
}

//정수 부분
function solution(flo) {
  return Math.floor(flo)
}