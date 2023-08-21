//6, 12, 13, 15, 17, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30
//배열의 평균값
function solution(numbers){
  let a = +numbers.slice(-1)
  let b = +numbers.shift() 
  return (a+b)/2
}
solution([1,2,3,4,5,6,7,8,9,10])

//문자열 뒤집기
function solution(my_string){
  return my_string.split('').reverse().join('')
}

solution("jaron")

//특정문자 제거하기
function solution(my_string, letter){
  return my_string.replaceAll(letter, "")
}

solution("abcdef", "f")

//가위바위보
function solution(rsp){
  let a = rsp.split('')
  let result=[]
  for(let i of a){
    if(i==="2"){
      result.push("0")
    }else if(i==="5"){
      result.push("2")
    }else{
      result.push("5")
    }
  }
  return result.join('')
}

solution("025")

//외계행성의 나이
function solution(age){
  let chr="abcdefghij"
  return Array.from(age.toString()).map(v=>chr[v]).join('')
}

solution(23)

//중복된 문자 제거
function solution(my_string){
  return [...new Set(my_string)].join('')
}

solution("people")

//A로 B 만들기
function solution(before, after){
  return before.split("").sort().join('') === after.split("").sort().join('') ? 1: 0
}

solution("olleh", "hello")

//팩토리얼
function solution(n){
  let i=1;
  let fac = 1
  while(fac<=n){
    i+=1
    fac*=i
  }
  return i-1
}

solution(7)

//k의 개수
function solution(i, j, k){
  let s=''
  for(i; i<=j; i++){
    s+=i
  }
  return s.split(k).length-1
}

solution(1, 13, 1)

//가까운 수
function solution(array, n){
  array.sort((a, b) => a-b)
  let s =0;
  for(let i=0; i<array.length; i++){
    if(Math.abs(array[i]-n<s)){
      s=array[i]
    }
  }

  return s
}

solution([3,10,28], 20)

//한 번만 등장한 문자
function solution(s){
  return [...s].filter(c=>s.split(c).length==2).sort().join('')
}

solution("abcdc")

//잘라서 배열로 저장하기
function solution(my_str, n){
  let result=[]
  for(let i=0; i < my_str.length; i+=n){
    result.push(my_str.slice(i, i+n))
  }
  return result
}

solution("asdasdads", 3)

//17, 19, 21, 22, 23, 24