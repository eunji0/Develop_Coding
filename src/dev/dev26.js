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