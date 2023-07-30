// 프로그래머스 369게임

function solution(order){
  let a = order.toString().match(/[369]/g) ?? [];

  return a.length
}

function solution(order){
  let a = new Set('369')
  return order.toString().split('').filter(v=>a.has(v)).length
}

//중복된 문자 제거
function solution(my_string) {
  return [...new Set(my_string)].join('');
}

//A로 B만들기
function solution(before, after) {
  return before.split('').sort().join()===after.split('').sort().join() ? 1 : 0;
}