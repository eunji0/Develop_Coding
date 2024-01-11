//완주하지 못한 선수
function wrongSolution(participant, completion) {
  participant.sort();
  completion.sort().forEach((v) => {
    let find = participant.findIndex((a) => a === v);
    participant.splice(find, 1);
  });
  return participant.toString();
}
//시간초과
//splice 메서드는 해당 인덱스에서부터의 모든 요소를 이동시키기 때문에 삭제 작업 자체가 O(n)의 시간 복잡도를 가지게 된다.
//이를 completion 배열의 길이만큼 반복하면 전체 시간 복잡도는 O(n^2)가 되어 매우 비효율적

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }

  return participant[participant.length - 1];
}
