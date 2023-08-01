//프로그래머스 겹치는 선분의 길이
function solution(lines){
  let line = Array(200).fill(0)
  lines.forEach(([min, max])=>{
    for(; min< max; min++){
      line[min+100]++
    }
  })
  return line.filter(v=>v>1).length
}

//코딩 도장
//1부터 10000까지 8이라는 숫자가 총 몇번 나오는가?
Array(10000).fill(0).map((v,i)=>i).toString().split('').filter(v=>v==='8').length