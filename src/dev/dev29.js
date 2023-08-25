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

//나머지가 1이 되는 수 찾기
function solution(n) {
  let x=1;
  while(true){
      if(n%x===1){
          return x
      }
      x++
  }
}

//문자열을 정수로 바꾸기
function solution(s) {
  return +s
}

//문자열 내 p와 y의 개수
function solution(s){
  let a = s.toLowerCase()
  return [...a].filter(v=> v==='p').length === [...a].filter(v=> v==='y').length ? true: false
}

//정수 제곱근 판별
function solution(n) {
  let x = Math.sqrt(n);
  if (Number.isInteger(x)) {
      return (x + 1) * (x + 1);
  }
  return -1;
}

//정수 내림차순으로 배치하기
function solution(n) {
  return +n.toString().split('').sort((a, b)=> b-a).join('')
}

//하샤드 수
function solution(x) {
  let a = x.toString().split('').map((i)=>+i).reduce((a, c)=>a+c, 0)
  return x%a===0 ? true : false
}

//두 정수 사이의 합
function solution(a, b) {
  let result =0
  if(a<b){
  for(a; a<=b; a++){
      result+=a
  }
  }else{
      for(b; b<=a; b++){
      result+=b
  }
  }
  return result
}

function solution(a, b) {
  return (a+b) * (Math.abs(a-b)+1) / 2;
}

//콜라츠 추측
function solution(num) {
  let s = 0;
  while (num != 1) {
    if (s > 500) {
      return -1
    } else {
      if (num % 2 === 0) {
        s += 1
        num = num / 2
      } else {
        s += 1
        num = num * 3 + 1
      }
    }
  }
  return s
}

//서울에서 김서방 찾기
function solution(seoul) {
  return `김서방은 ${seoul.findIndex(v=>v==="Kim")}에 있다`
}

//나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  let a = arr.filter(v=>v%divisor===0)
  return a.length===0 ? [-1]:a.sort((a, b)=>a-b)
}

//음양 더하기
function solution(absolutes, signs) {
    let sum = 0;
    for(let i=0; i<absolutes.length; i++){
        sum+=signs[i] ? absolutes[i]: -absolutes[i]
    }
    return sum
}

//핸드폰 번호 가리기
function solution(phone_number) {
    let answer = '*'.repeat(phone_number.length - 4)+ phone_number.slice(-4);
    return answer;
}

//없는 숫자 더하기
function solution(numbers) {
    return 45 - numbers.reduce((a, c)=> a+c, 0)
}

//제일 작은 수 제거하기
function solution(arr) {
    if(arr.length<=1){
        return [-1]
    }
    
    let min = Math.min(...arr)
    let a = arr.filter(v=>v!==min)
    return a
}

//가운데 글자 가져오기
function solution(s) {
    let m = Math.floor(s.length/2)
    return s.length%2===0 ? s.slice(m - 1, m + 1) : s[m]
}

//같은 숫자는 싫어
function solution(arr)
{
    return arr.filter((a, c)=>a!=arr[c+1])
}

//3진법 뒤집기
function solution(n) {
  return parseInt(n.toString(3).split('').reverse().join(''), 3);
}