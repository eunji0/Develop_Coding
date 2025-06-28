function solution(param0) {
  const SIZE = {
    BOOL: 1,
    SHORT: 2,
    FLOAT: 4,
    INT: 8,
    LONG: 16,
  };

  const ALIGN = {
    BOOL: 1,
    SHORT: 2,
    FLOAT: 4,
    INT: 8,
    LONG: 8,
  };

  const MAX_SIZE = 128;
  let memory = [];

  for (let type of param0) {
    const size = SIZE[type];
    const align = ALIGN[type];

    // align 위치 계산 (padding 삽입)
    let offset = memory.length;
    let padding = (align - (offset % align)) % align;

    // 패딩 삽입
    for (let i = 0; i < padding; i++) {
      memory.push('.');
    }

    // 공간 부족 시 HALT
    if (memory.length + size > MAX_SIZE) return 'HALT';

    // 실제 데이터 삽입
    for (let i = 0; i < size; i++) {
      memory.push('#');
    }
  }

  // 8바이트 단위로 쪼개기
  let result = [];
  for (let i = 0; i < memory.length; i += 8) {
    result.push(
      memory
        .slice(i, i + 8)
        .join('')
        .padEnd(8, '.'),
    );
  }

  return result.join(',');
}

console.log(solution(['INT', 'INT', 'BOOL', 'SHORT', 'LONG']));
// ➜ "########,########,#.......,.#......,################"
