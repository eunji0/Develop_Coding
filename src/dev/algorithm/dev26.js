//코딩 도장
//1차원 점들이 주어졌을떄 그 중 거리가 가장 짧은 점의 쌍를 구하시오
s=[1,3,4,8,12]
index=0;
min=Infinity
for(let i=0; i<s.length; i++){
  if(s[i]-s[i-1]<min){
    index=i
    min=s[i]-s[i-1]
  }
}
console.log(s[index], s[index-1])

//문자열 압축하기
const ss='aaabbccccca'

let result = ss[0]
let count = 0;

for(let str of ss){
  console.log(result)
  if(str == result.slice(-1)){
    count +=1
  }else{
    result+=count +str
    count=1
  }
}
result+=count

//special sort
function solution(value){
  return [...value.filter(v=> v<0), ...value.filter(v=>v>0)]
}

solution([-1,-3,3,4])


//every other digit
//모든 짝수번째 숫자를 *로 치환하시오.
//숫자 출력하기
let num = 20150111
num.toString(33)
console.log(parseInt('gwnae', '!'.charCodeAt()))

//배열 형태 바꾸기
//[a1, a2,a3...,an, b1,b2,...bn]을 [a1,b1,a2,b2...]형태로 바꾸시오
//flat은 평평하게 만드는 것 배열을
let list = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3']
const zip = (a, b) => a.map((v, i)=>[v, b[i]])
zip([1,2,3], [10,20,30])

let l1 = list.slice(0, list.length/2)
let l2 = list.slice(list.length/2)
zip(l1, l2).flat(2)


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


//그 시간 사무실에 몇명이 있었나?
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

//120번째 죄수
let room = Array(120)
room.fill(-1)
for (let i = 0; i < 121; i++) {
  for (let n = 0; n < 121; n++) {
    if(n%i===0){
      room[n-1]*=-1
    }
  }
}
room.filter(v=>v===1).length


//비슷한 단어 찾아내기
function one(a, b){
  while(a.length!=0 && b.length!=0){
    if(a.slice(-1) == b.slice(-1)){
      a= a.slice(0, -1)
      b=b.slice(0,-1)
    }else if(a[0]==b[0]){
      a=a.slice(1)
      b=b.slice(1)
    }else{
      break;
    }
  }
  return a.length <=1 && b.length <=1
}

console.log(one("cat", "dog"))
console.log(one("cat", "cats"))


//subdate
//두 날짜의 차이 일수
function sub(date){
  const 년 = parseInt(date.slice(0,4))
  const 월 = parseInt(date.slice(4,6))
  const 일 = parseInt(date.slice(6))
  
  const 월별일 = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let 일수 = 년 * 365 +일
  for(let i=0; i<월; i++){
    일수+=월별일[i]
  }
  return 일수
}

function sol(a, b){
  return Math.abs(sub(a)-sub(b))
}

sol('20070515', '20070501')


//happy number
function happy(입력숫자){
  let 더할숫자=[]
  let 더한숫자=입력숫자
  let 제곱의합리스트=[]
  while(더한숫자 !=1){
    for(let i of 더한숫자){
      let sq = parseInt(i)**2
      더할숫자.push(sq)
    }
    더한숫자=String(더할숫자.reduce((a,b)=>a+b, 0))
    console.log(더할숫자, 더한숫자, 제곱의합리스트)
    더할숫자=[]
    if(더한숫자==입력숫자){
      return false
    }
    for(let i of 제곱의합리스트){
      if(i==더한숫자){
        return false
      }
    }
    제곱의합리스트.push(더한숫자)

  }
  return true
}

happy(String(7))


//ugly number
function ugly(n) {
  let uglyN = [1]
  for (let i = 0; i < n - 1; i++) {
    let last = uglyN.slice(-1)

    let temp = []
    for (let i of uglyN) {
      for (let j of [i * 2, i * 3, i * 5]) {
        if (j > last) {
          temp.push(j)
        }
      }
    }
    uglyN.push(Math.min(...temp))
    console.log(uglyN)
  }
  return uglyN.slice(-1)
}
ugly(20)


//two printers
function print(a, b, page){
  let time =1
  while(true){
    if(Math.floor(time/a)+Math.floor(time/b)>=page){
      return time
    }
    time+=1
  }
}

print(1, 1, 5)


//tic-tac-toc game
let board=[['1','2','3'], ['4', '5', '6'], ['7', '8', '9']]
let marker = ['x', 'o']
let player = 1 

function print(){
  for(let i of board){
    console.log('| ' + i.join(' | ') + ' |')
  }
  console.log('-----------')
}

function checkWinner(){
  if(board[0][0]==board[1][1] && board[1][1] == board[2][2]){
    return board[0][0]
  }else if(board[0][2]==board[1][1] && board[1][1]==board[2][0]){
    return board[0][2]
  }else{
    for(let i =0; i<3; i++){
      if(new Set([board[0][i], board[1][i], board[2][i]]).size==1){
        return board[0][i]
      }
      else if(new Set([board[i][0], board[i][1], board[i][2]]).size==1){
        return board[i][0]
      }
    }
  }
  if(new Set(board.flat()).size==2){
    return 'Draw'
  }
  return false
}


function solution(){
  let userInput = window.prompt()
  let pos =[]
  for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
      if(board[i][j]===userInput){
        pos=[i,j]
      }
    }
  }
  if(pos.length ===2){
    board[pos[0]][pos[1]] = marker[player]
    print()
  }
  let ch = checkWinner()
  if(ch){
    if(ch==='Draw'){
      console.log('비김!')
    }else{
      console.log(ch, '이김!')
    }
    return false
  }
  return true
}

while(solution()){
  player^=1
}