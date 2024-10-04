//완주하지 못한 선수
function solution(participant, completion) {
  participant.sort()
  completion.sort()
  for(let i=0; i<participant.length; i++){
      if(participant[i]!==completion[i]){
          return participant[i]
      }
  }
}

//전화번호 목록
function solution(phone_book) {
  phone_book.sort()

  for(let i=0; i<phone_book.length-1; i++){
    if(phone_book[i+1].startsWith(phone_book[i])){
      return false
    }
  }

  return true
}

//의상
function solution(clothes) {
  let count = new Map()

  clothes.forEach(v=>{
    count.set(v[1], (count.get(v[1])||0)+1)
  })

  return [...count.values()].reduce((a, c)=>a*(c+1), 1)-1
}