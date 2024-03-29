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

//진료순서 정하기
function solution(em){
  let re=em.slice().sort((a, b)=>b-a)
  return em.map(v=>re.indexOf(v)+1)
}

solution([3,72,25])

//외계어 사전
function solution(spell, dic){
  let a = spell.sort().join('')
  for(let i=0; i<dic.length; i++){
    if(a === dic[i].split("").sort().join('')){
      return 1
    }
  }
  return 2
}

solution(["z", "d", "x"], ["def", "dxz", "xdz"])

//문자열 밀기
function solution(A, B){
  return (B+B).indexOf(A)
}

solution("hello", "lohel")

//컨트롤 제트
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

//17, 19, 21, 22, 23, 24, 26, 29, 30

//등수 매기기
function solution(score) {
  let sum= score.map((v)=>v[0]+v[1])
  let down = sum.slice().sort((a, b) => b-a);
   return sum.map((v)=>down.indexOf(v)+1)
}

solution([80, 70], [90, 50], [40, 70], [50, 80])

//저주의 숫자
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

solution(9)

//다항식 더하기
function solution(p){
  let a = p.split(' + ')
  let x=a.filter(v=>v.includes('x')).map(v=>parseInt(v.replaceAll('x', ''))||1).reduce((a, c)=>a+c, 0);//x항
  let b=a.filter(v=>!v.includes('x')).reduce((a, c)=> a+parseInt(c), 0);//상수항
  let result=[];
  if(x===1){
    result.push('x')
  }else{
    result.push(`${x}x`)
  }
  if(b){
    result.push(`${b}`)
  }
  return result.join(' + ')
}

solution("3x + 7 + x")

//겹치는 선분의 길이
function solution(lines){
  let line=new Array(200).fill(0)
  lines.forEach(([min, max])=>{
    for(; min<max; min++){
      line[min+100]++
    }
  })
  return line.filter(v=>v>1).length;
}

solution([[0,1], [2,5], [3,9]])

//1부터 10000까지 8이라는 숫자
function solution(n){
  Array(10000).fill(0).map((v, i)=>i).toString().split('').filter(v=> v==='8').length
}

//거리가 짧은 점
function solution(s){
  let ss = s.slice(1)
  return s.map((v, i)=>[v, ss[i]]).sort((a, b)=>(a[1]-a[0])-(b[1]-b[0]))[0]
}

solution([1,3,4,8,13,17,20])

//문자열 압축하기
function solution(s){
  let result=s[0]
  let count=0

  for(let str of s){
    if(str===result.slice(-1)){
      count+=1
    }else{
      result+=count+str
      count=1
    }
  }
  return result+=count
}
solution("aaabbccccca")

//special sort
function solution(n){
  return [...n.filter(v=> v<0), ...n.filter(v=>v>=0)]
}

solution([-1, 1, 3, -2, 2])

//숫자 출력하기
console.log(parseInt('gwnae', '!'.charCodeAt()))

//배열 형태
function solution(list){
  const zip = (a, b) => a.map((v, i)=>[v, b[i]])
  let l1 = list.slice(0, list.length/2)
  let l2 = list.slice(list.length/2)

  return zip(l1, l2).flat(2)
}

solution(["a1", "a2", "a3", "b1", "b2", "b3"])

//가성비 최대화
let 가격 = 10
let 성능 = 150
let 부품가격 = 3
let 부품성능 = [30,70,15,40,65]

부품성능.sort((a,b)=>b-a)
for(let i of 부품성능){
  if((성능/가격)>((성능+i)/(가격+부품가격))){
    break;
  }else{
    성능+=i
    가격+=부품가격
  }
}

console.log(성능/가격)
console.log(~~(성능/가격))

//그 시간 사무실에 몇명이 있었나
let t= '13:25:00'
t=t.split(':').join('')
let count1=0

let logs = `09:12:23 11:14:35
10:34:01 13:23:40
10:34:31 11:20:10`

let log=logs.split('\n')

for(let l of log){
  let 출근 = l.split(' ')[0].split(':').join('')
  let 퇴근 = l.split(' ')[1].split(':').join('')
  if(출근<=t && t<=퇴근){
    count1+=1
  }
}

count1


//31, 32, 33, 35, 36, 37, 38, 39
//-34, -40