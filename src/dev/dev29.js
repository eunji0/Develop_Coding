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

