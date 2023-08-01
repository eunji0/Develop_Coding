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