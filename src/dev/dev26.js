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