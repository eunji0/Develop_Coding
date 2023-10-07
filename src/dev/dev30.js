//자릿수 더하기
function solution(n) {
    return n.toString().split('').reduce((a, c) => a + Number(c), 0)
}

//나머지가 1이 되는 수 찾기
function solution(n) {
    for (let i = 0; i < n; i++) {
        if (n % i === 1) {
            return i
        }
    }
}

//평균 구하기
function solution(arr) {
    return arr.reduce((a, c) => a + c, 0) / arr.length
}

//짝수와 홀수
function solution(num) {
    return num % 2 === 0 ? "Even" : "Odd"
}

//약수의 합
function solution(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            sum += i
        }
    }
    return sum
}

//x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x * i)
    }
    return answer
}

//자연수 뒤집어 배열로 만들기
function solution(n) {
    return n.toString().split('').reverse().map((v) => v = +v)
}

//문자열 내 p와 y의 개수
function solution(s) {
    let a = s.toLowerCase().split('p')
    let b = s.toLowerCase().split('y')
    return a.length === b.length ? true : false
}

//문자열을 정수로 바꾸기
function solution(s) {
    return +s
}

//정수 제곱근 판별
function solution(n) {
    let a = Math.sqrt(n)
    let b = Math.floor(Math.sqrt(n))
    return a === b ? (a + 1) * (a + 1) : -1
}

//정수 내림차순으로 배치하기
function solution(n) {
    return +(n.toString().split('').sort((a, c) => c - a).join(''))
}

//하샤드 수
function solution(x) {
    let a = x.toString().split('')
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += +a[i]
    }
    return x % sum === 0 ? true : false
}

//두 정수 사이의 합
function solution(a, b) {
    let s = a > b ? b : a
    let ss = a > b ? a : b
    let n = 0
    for (let i = s; i <= ss; i++) {
        n += i
    }
    return n
}

//콜라츠 추측
function solution(num) {
    let count = 0;
    while (num != 1 && count < 500) {
        num % 2 === 0 ? num = num / 2 : num = num * 3 + 1
        count += 1
    }
    return num === 1 ? count : -1
}

//서울에서 김서방 찾기
function solution(seoul) {
    return `김서방은 ${seoul.indexOf("Kim")}에 있다`
}

//나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
    let s = arr.filter(v => v % divisor === 0)
    return s.length < 1 ? [-1] : s.sort((a, b) => a - b)
}

//음양 더하기
function solution(absolutes, signs) {
    let s = 0
    for (let i = 0; i < signs.length; i++) {
        signs[i] === true ? s += absolutes[i] : s += -absolutes[i]
    }
    return s
}

//핸드폰 번호 가리기
function solution(n) {
    return '*'.repeat(n.length - 4) + n.slice(-4)
}

//없는 숫자 더하기
function solution(numbers) {
    return 45 - numbers.reduce((a, c) => a + c, 0)
}

//제일 작은 수 제거하기
function solution(arr) {
    const min = Math.min(...arr)
    return arr.length === 1 ? [-1] : arr.filter(v => v != min)
}

//가운데 글자 가져오기
function solution(s) {
    let a = Math.floor(s.length / 2)
    return s.length % 2 === 0 ? s.slice(a - 1, a + 1) : s.slice(a, a + 1)
}

//수박수
function solution(n) {
    var answer = '';
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            answer += '수'
        } else {
            answer += '박'
        }
    }
    return answer;
}

//내적
function solution(a, b) {
    return a.reduce((ac, _, i) => ac + a[i] * b[i], 0)
}

//약수의 개수와 덧셈
function solution(left, right) {
    let count = 0;
    let s = 0
    for (let i = left; i <= right; i++) {
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                count++
            }
        }
        if (count % 2 === 0) {
            s += i
        } else {
            s -= i
        }
        count = 0
    }

    return s
}

//문자열 내림차순으로 배치하기
function solution(s) {
    return s.split('').sort().reverse().join('')
}

//부족한 금액 계산하기
function solution(price, money, count) {
    let s = 0
    for (let i = 1; i <= count; i++) {
        s += price * i
    }
    return s - money > 0 ? s - money : 0
}

//문자열 다루기 기본
function solution(s) {
    const num = '0123456789';

    if (s.length !== 4 && s.length !== 6) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        if (!num.includes(s[i])) {
            return false;
        }
    }

    return true;
}

//행렬의 덧셈
function solution(arr1, arr2) {
    var answer = [];
    for (let i = 0; i < arr1.length; i++) {
        let c = []
        for (let j = 0; j < arr1[i].length; j++) {
            c.push(arr1[i][j] + arr2[i][j])
        }
        answer.push(c)
    }
    return answer
}

//최대공약수와 최소공배수
function solution(n, m) {
    var r;
    for (var nm = n * m; r = n % m; n = m, m = r) { }
    return [m, nm / m]
}

//같은 숫자는 싫어
function solution(arr) {
    return arr.filter((v, i) => v !== arr[i + 1])
}

//3진법
function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3)
}

//예산
function solution(d, budget) {
    return d.sort((a, b) => a - b).reduce((a, c) => {
        return a + ((budget -= c) >= 0)
    }, 0)
}

//이상한 문자 만들기
function solution(s) {
    let ss = s.toLowerCase().split(' ')
    let answer = []
    for (let i = 0; i < ss.length; i++) {
        let t = ''
        for (let j = 0; j < ss[i].length; j++) {
            if (j % 2 === 0) {
                t += ss[i][j].toUpperCase()
            } else {
                t += ss[i][j]
            }
        }
        answer.push(t)
    }
    return answer.join(' ')
}

//크기가 작은 부분 문자열
function solution(t, p) {
    let count = 0
    for (let i = 0; i < t.length; i++) {
        let tt = t.slice(i, i + p.length)
        if (tt.length === p.length && tt <= +p) {
            count++
        }
    }
    return count
}

//삼총사
function solution(number) {
    let result = 0;

    const combination = (current, start) => {
        if (current.length === 3) {
            result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
            return;
        }

        for (let i = start; i < number.length; i++) {
            combination([...current, number[i]], i + 1);
        }
    }
    combination([], 0);
    return result;
}

//최소 직사각형
function solution(sizes) {
    let a = 0;
    let b = 0;

    for (const [w, h] of sizes) {
        const max = Math.max(w, h)
        const min = Math.min(w, h)

        a = Math.max(a, max)
        b = Math.max(b, min)
    }

    return a * b
}

//시저암호
function solution(s, n) {
    var chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          "
    return s.split('').map(v => chars[chars.indexOf(v) + n]).join('')
}

//숫자 문자열과 영단어
function solution(s) {
    const words = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
    };

    for (const word in words) {
        let r = RegExp(word, 'g')
        s = s.replace(r, words[word])
    }

    return +s
}

//1차 비밀지도
function solution(n, arr1, arr2) {
    let s = []
    let a1 = arr1.map(v => v.toString(2).padStart(n, '0'))
    let a2 = arr2.map(v => v.toString(2).padStart(n, '0'))

    for (let i = 0; i < a1.length; i++) {
        let a = ''
        for (let j = 0; j < a1[i].length; j++) {
            if (a1[i][j] === '1' || a2[i][j] === '1') {
                a += '#'
            } else {
                a += ' '
            }
        }
        s.push(a)
    }
    return s
}

//문자열 내 마음대로 정렬하기
function solution(strings, n) {
    return strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]))
}

//k번째 수
function solution(array, commands) {
    var answer = [];
    for (let i = 0; i < commands.length; i++) {
        let a = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)
        answer.push(a[commands[i][2] - 1])
    }
    return answer;
}

//가장 가까운 글자
function solution(s) {
    let answer = []
    let a = ''
    let ss = s.split('')
    for (let i = 0; i < ss.length; i++) {
        if (a.includes(ss[i])) {
            answer.push(a.split('').reverse().indexOf(ss[i]) + 1)
            a += ss[i]
        } else {
            a += ss[i]
            answer.push(-1)
        }
    }
    return answer
}

//두 개 뽑아서 더하기
function solution(numbers) {
    let a = []
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            a.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(a)]

    return answer.sort((a, b) => a - b)

}

//푸드 파이트 대회
function solution(food) {
    let a = ''
    for (let i = 1; i < food.length; i++) {
        a += i.toString().repeat(Math.floor(food[i] / 2))
    }
    return a + '0' + a.split('').reverse().join('')
}

//콜라문제
function solution(a, b, n) {
    let answer = 0
    while (n >= a) {
        answer += Math.floor(n / a) * b
        n = Math.floor(n / a) * b + n % a
    }
    return answer
}

//추억 점수
function solution(name, yearning, photo) {
    let obj = {};
    for (let i = 0; i < name.length; i++) {
        obj[name[i]] = yearning[i]
    }

    return photo.map(value => value.map(v => obj[v] ? obj[v] : 0).reduce((a, c) => a + c, 0))
}

//명예의 전당1
function solution(k, score) {
    var answer = [];//k담
    let a = []//발표점수
    for (let i of score) {
        if (answer.length < k) {
            answer.push(i)
            answer.sort((a, b) => a - b)
            a.push(answer[0])
        } else {
            answer.push(i)
            answer.sort((a, b) => a - b)
            answer.shift()
            a.push(answer[0])
        }
    }
    return a;
}

//카드 뭉치
function solution(cards1, cards2, goal) {
    for (let i of goal) {
        if (cards1[0] === i) {
            cards1.shift()
        } else if (cards2[0] === i) {
            cards2.shift()
        }
        else {
            return 'No'
        }
    }
    return 'Yes'
}

//2016년
function solution(a, b) {
    var t = new Date(2016, a - 1, b)
    return t.toString().slice(0, 3).toUpperCase();
}

//폰켓몬
function solution(nums) {
    var answer = 0;
    let n = nums.length / 2
    let a = [...new Set(nums)]
    return a.length >= n ? n : a.length;
}

//과일 장수
function solution(k, m, score) {
    var answer = 0;
    score.sort((a, b) => b - a)
    for (let i = 0; i < score.length; i += m) {
        let a = score.slice(i, i + m)
        if (a.length === m) {
            answer += a.slice(-1) * a.length
        }
    }
    return answer
}

//모의고사
function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];

    const score = [0, 0, 0]
    const result = []

    for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < 3; j++) {
            const pattern = patterns[j]
            if (answers[i] === pattern[i % pattern.length]) {
                score[j]++
            }
        }
    }

    const maxScore = Math.max(...score)

    for (let i = 0; i < score.length; i++) {
        if (score[i] === maxScore) {
            result.push(i + 1)
        }
    }
    return result
}

//소수 만들기
function isPrime(num) {
    if (num < 2) return false
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false
    }
    return true
}

function solution(nums) {
    let c = 0

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k]

                if (isPrime(sum)) {
                    c++
                }
            }
        }
    }
    return c
}


//소수 찾기
function solution(n) {
    let a = new Array(n + 1).fill(true)
    a[0] = a[1] = false

    for (let i = 2; i * i <= n; i++) {
        if (a) {
            for (let j = i * i; j <= n; j += i) {
                a[j] = false
            }
        }
    }

    return a.filter(v => v).length
}

//덧칠하기
function solution(n, m, section) {
    var answer = 0;
    var p = 0
    for (s of section) {
        if (p < s) {
            answer++
            p = s + m - 1
        }
    }
    return answer;
}

//기사단원의 무기
function solution(number, limit, power) {
    let s = 0
    for (let i = 1; i <= number; i++) {
        let d = 0
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                d++
                if (j * j !== i) {
                    d++
                }
            }

        }

        if (d > limit) {
            s += power
        } else {
            s += d
        }
    }

    return s
}

//실패율
function solution(N, stages) {
    let a = new Array(N).fill(0)
    let b = stages.length
    for (let i = 1; i <= N; i++) {
        a[i - 1] = stages.filter(v => v === i).length / b
        b -= stages.filter(v => v === i).length
    }
    let aa = a.map((v, i) => ({ v, i }))
    aa.sort((a, b) => b.v - a.v)
    aa.sort((a, b) => {
        if (a.v === b.v) {
            a.i - b.i
        }
    })
    return aa.map(i => i.i + 1);
}

//1차 다트게임
function solution(dartResult) {
    const bonus = { 'S': 1, 'D': 2, 'T': 3 },
        options = { '*': 2, '#': -1, undefined: 1 };

    let darts = dartResult.match(/\d.?\D/g);

    for (let i = 0; i < darts.length; i++) {
        let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
            score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

        if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

        darts[i] = score;
    }

    return darts.reduce((a, b) => a + b);
}

//로또의 최고 순위와 최저 순위
function solution(lottos, win_nums) {
    var answer = [0, 0];//최고, 최저순위
    lottos.sort((a, b) => a - b)
    win_nums.sort((a, b) => a - b)
    let s = 0
    let o = lottos.filter(v => v === 0).length
    for (let i = 0; i < lottos.length; i++) {
        if (win_nums.includes(lottos[i])) {
            s++
        }
    }
    answer[0] = s + o
    answer[1] = s
    if (7 - answer[0] > 6) answer[0] = 6
    else answer[0] = 7 - answer[0]
    if (7 - answer[1] > 6) answer[1] = 6
    else answer[1] = 7 - answer[1]
    return answer
}

//숫자 짝꿍
function solution(X, Y) {
    var result = '';
    let num = {}

    for (const char of X) {
        num[char] = (num[char] || 0) + 1
    }

    for (const char of Y) {
        if (!num[char]) continue;
        result += char
        num[char]--
    }

    if (result === '') return '-1'
    if (+result === 0) return '0'
    return [...result].map(v => +v).sort((a, b) => b - a).join('')
}

//체육복
function solution(n, lost, reserve) {
    var answer = new Array(n).fill(1);
    lost.forEach(v => {
        answer[v - 1] -= 1
    })
    reserve.forEach(v => {
        answer[v - 1] += 1
    })

    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === 0 && answer[i - 1] > 1) {
            answer[i] += 1
            answer[i - 1] -= 1
        } else if (answer[i] === 0 && answer[i + 1] > 1) {
            answer[i] += 1
            answer[i + 1] -= 1
        }
    }
    return answer.filter(v => v > 0).length
}

//완주하지 못한 선수
function solution(participant, completion) {
    let p = {}

    for (const name of participant) {
        p[name] = (p[name] || 0) + 1
    }

    for (const name of completion) {
        if (p[name] > 0) {
            p[name] -= 1
        } else {
            return name
        }
    }

    for (const name in p) {
        if (p[name] > 0) {
            return name
        }
    }
}

//문자열 나누기
function solution(s) {
    let stack = []
    let count = 0

    for (let i = 0; i < s.length; i++) {
        stack.push(s[i])

        const same = stack.filter(v => v === stack[0]).length
        const nosame = stack.filter(v => v != stack[0]).length

        if (same === nosame) {
            count += 1
            stack = []
        }
    }

    if (stack.length != 0) {
        count += 1
    }

    return count
}

//대충 만든 자판
function solution(keymap, targets) {
    let answer = []
    let map = new Map()

    for (let key of keymap) {
        for (let i = 0; i < key.length; i++) {
            if (!map.has(key[i]) || i + 1 < map.get(key[i])) map.set(key[i], i + 1)
        }
    }

    for (let target of targets) {
        let c = 0;
        for (let i = 0; i < target.length; i++) {
            c += map.get(target[i])
        }

        answer.push(c || -1)
    }

    return answer
}

//둘만의 암호
function solution(s, skip, index) {
    let result = ''
    s = s.split('')
    skip = skip.split('')
    let a = 'abcdefghijklmnopqrstuvwxyz'.split('')

    a.forEach((v, i) => {
        if (skip.includes(v)) {
            a[i] = '';
        }
    });

    a = a.join('').split('')

    for (let i = 0; i < s.length; i++) {
        result += a[+(a.findIndex(v => v === s[i]) + index) % a.length]
    }
    return result
}

//크레인 인형뽑기 게임
function solution(board, moves) {
    let answer = 0;
    let stack = []

    moves.forEach((move) => {
        for (let i = 0; i < board.length; i++) {
            let item = board[i][move - 1]

            if (item === 0) continue;

            if (item === stack[stack.length - 1]) {
                stack.pop()
                answer += 2
            } else {
                stack.push(item)
            }

            board[i][move - 1] = 0

            break;
        }
    })

    return answer
}

//키패드 누르기
function solution(numbers, hand) {
    let lh = '*'; // 왼손의 초기 위치
    let rh = '#'; // 오른손의 초기 위치
    let result = '';

    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2],
    };

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        const [lx, ly] = keypad[lh];
        const [rx, ry] = keypad[rh];
        const [nx, ny] = keypad[num];

        const leftDistance = Math.abs(lx - nx) + Math.abs(ly - ny);
        const rightDistance = Math.abs(rx - nx) + Math.abs(ry - ny);

        if (num === 1 || num === 4 || num === 7) {
            result += 'L';
            lh = num;
        } else if (num === 3 || num === 6 || num === 9) {
            result += 'R';
            rh = num;
        } else {
            if (leftDistance < rightDistance) {
                result += 'L';
                lh = num;
            } else if (leftDistance > rightDistance) {
                result += 'R';
                rh = num;
            } else {
                if (hand === 'right') {
                    result += 'R';
                    rh = num;
                } else {
                    result += 'L';
                    lh = num;
                }
            }
        }
    }
    return result;
}

//공원 산책
function solution(park, routes) {
    const maxR = park.length - 1
    const maxC = park[0].length - 1

    let setR = park.findIndex((v) => v.includes('S'))
    let setC = park[setR].indexOf('S')

    routes.forEach((j) => {
        const [d, n] = j.split(' ')

        let tempR = setR
        let tempC = setC
        let flag = true

        for (let i = 0; i < Number(n); i++) {
            if (d === "E") tempC++;
            else if (d === "W") tempC--;
            else if (d === "S") tempR++;
            else if (d === "N") tempR--;

            if (
                tempR > maxR ||
                tempR < 0 ||
                tempC > maxC ||
                tempC < 0 ||
                park[tempR][tempC] === "X"
            ) {
                flag = false;
                break;
            }
        }

        if (flag) {
            setC = tempC;
            setR = tempR;
        }
    });

    return [setR, setC];
}

//신고 결과 받기
function solution(id_list, report, k) {
    var answer= new Array(id_list.length).fill(0)
    var report_list={}

    id_list.map((user)=>{
        report_list[user]=[]
    })

    report.map((user)=>{
        const [user_id, report_id] = user.split(' ')
        if(!report_list[report_id].includes(user_id)){
            report_list[report_id].push(user_id)
        }
    })

    for(const key in report_list){
        if(report_list[key].length >= k){
            report_list[key].map((user)=>{
                answer[id_list.indexOf(user)]+=1
            })
        }
    }

    return answer
}

//달리기 경주
function solution(players, callings) {
    const playerMap = {};
  
    // calling 원소들의 idx를 미리 구해서 저장
    for (let i = 0; i < players.length; i++) {
        playerMap[players[i]] = i;
    }

    for (let i = 0; i < callings.length; i++) {
        const idx = playerMap[callings[i]];
        const temp = players[idx-1];
      
        // 해당 idx와 이전 idx의 원소를 swap
        players[idx-1] = callings[i];
        players[idx] = temp;
      
        // map의 idx도 갱신
        playerMap[callings[i]] = idx - 1;
        playerMap[temp] = idx;
    }
    
    return players;
}

//바탕화면 정리
function solution(wallpaper) {
  const X = [];
  const Y = [];

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {

      if (wallpaper[i][j] === "#") {
        Y.push(i);
        X.push(j);
      }

    }
  }

  X.sort((a, b) => a - b);
  Y.sort((a, b) => a - b);

  return [Y[0], X[0], Y[Y.length - 1] + 1, X[X.length - 1] + 1];
}