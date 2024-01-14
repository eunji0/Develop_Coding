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

//폰켓몬
function solution2(nums) {
  let a = nums.length / 2;
  let b = Array.from(new Set(nums)).length;
  return a < b ? a : b;
}

//전화번호 목록
function solution3(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
    return true;
  }
}

//의상
function solution4(clothes) {
  let a = new Map();

  clothes.forEach((v) => {
    let [q, w] = v;
    a.set(w, (a.get(w) || 0) + 1);
  });

  return Array.from(a.values()).reduce((a, c) => a * (c + 1), 1) - 1;
}

//베스트앨범
function solution5ㅛ(genres, plays) {
  const grouped = genres.reduce((acc, genre, index) => {
    acc[genre] = (acc[genre] || 0) + plays[index];
    return acc;
  }, {});
  console.log(grouped);

  const songs = genres.map((genre, index) => ({
    genre,
    index,
    play: plays[index],
  }));
  console.log(songs);

  songs.sort((a, b) => {
    if (a.genre !== b.genre) {
      return grouped[b.genre] - grouped[a.genre];
    }
    if (a.play !== b.play) {
      return b.play - a.play;
    }
    return a.index - b.index;
  });

  // 최종 결과를 저장할 객체
  const result = {};
  // 최종 결과 배열을 반환
  return songs.reduce((acc, song) => {
    // 만약 해당 장르가 아직 result에 등록되지 않았다면
    if (!result[song.genre]) {
      result[song.genre] = 0; // 해당 장르의 선택된 노래 수를 초기화
    }
    // 해당 장르에서 이미 2곡을 선택하지 않았다면
    if (result[song.genre] < 2) {
      acc.push(song.index); // 결과 배열에 현재 노래의 인덱스를 추가
      result[song.genre]++; // 해당 장르의 선택된 노래 수 증가
    }
    return acc; // 결과 배열 반환
  }, []);
}
