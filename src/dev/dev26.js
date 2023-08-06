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