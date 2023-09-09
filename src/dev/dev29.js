const { data } = require("jquery");

//부분 문자열
function solution(str1, str2) {
  return str2.includes(str1)? 1:0;
}

//A강조하기
function solution(my_string, target) {
  return my_string.includes(target)? 1:0;
}

//이어 붙인 수
function solution(num_list) {
  let a = []//홀수
  let b=[]//짝수
  for(let i of num_list){
      if(i%2===0){
          b.push(i)
      }else{
          a.push(i)
      }
  }
  return +a.join('') + +b.join('')
}

//문자열 곱하기
function solution(my_string, k) {
  return my_string.repeat(k)
}

//공배수
function solution(number, n, m) {
  if(number%m===0 && number%n===0){
      return 1
  }else{
      return 0
  }
}

//문자열 바꿔서 찾기
function solution(myString, pat){
  return [...myString].map(a=>a==='A'?'B':'A').join('').includes(pat)? 1:0
}

//정수 찾기
function solution(num_list, n) {
  return num_list.includes(n)? 1:0;
}

//수 조작하기1
function solution(n, control) {
  let a = control.split('')
  for(let i of a){
      if(i==='w'){
          n+=1
      }else if(i==='s'){
          n-=1
      }else if(i==='d'){
          n+=10
      }else if(i==='a'){
          n-=10
      }
  }
  return n
}

//특정한 문자를 대문자로 바꾸기
function solution(my_string, alp) {
  return my_string.replaceAll(alp, alp.toUpperCase())
}

//정수 부분
function solution(flo) {
  return Math.floor(flo)
}

//나머지가 1이 되는 수 찾기
function solution(n) {
  let x=1;
  while(true){
      if(n%x===1){
          return x
      }
      x++
  }
}

//문자열을 정수로 바꾸기
function solution(s) {
  return +s
}

//문자열 내 p와 y의 개수
function solution(s){
  let a = s.toLowerCase()
  return [...a].filter(v=> v==='p').length === [...a].filter(v=> v==='y').length ? true: false
}

//정수 제곱근 판별
function solution(n) {
  let x = Math.sqrt(n);
  if (Number.isInteger(x)) {
      return (x + 1) * (x + 1);
  }
  return -1;
}

//정수 내림차순으로 배치하기
function solution(n) {
  return +n.toString().split('').sort((a, b)=> b-a).join('')
}

//하샤드 수
function solution(x) {
  let a = x.toString().split('').map((i)=>+i).reduce((a, c)=>a+c, 0)
  return x%a===0 ? true : false
}

//두 정수 사이의 합
function solution(a, b) {
  let result =0
  if(a<b){
  for(a; a<=b; a++){
      result+=a
  }
  }else{
      for(b; b<=a; b++){
      result+=b
  }
  }
  return result
}

function solution(a, b) {
  return (a+b) * (Math.abs(a-b)+1) / 2;
}

//콜라츠 추측
function solution(num) {
  let s = 0;
  while (num != 1) {
    if (s > 500) {
      return -1
    } else {
      if (num % 2 === 0) {
        s += 1
        num = num / 2
      } else {
        s += 1
        num = num * 3 + 1
      }
    }
  }
  return s
}

//서울에서 김서방 찾기
function solution(seoul) {
  return `김서방은 ${seoul.findIndex(v=>v==="Kim")}에 있다`
}

//나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  let a = arr.filter(v=>v%divisor===0)
  return a.length===0 ? [-1]:a.sort((a, b)=>a-b)
}

//음양 더하기
function solution(absolutes, signs) {
    let sum = 0;
    for(let i=0; i<absolutes.length; i++){
        sum+=signs[i] ? absolutes[i]: -absolutes[i]
    }
    return sum
}

//핸드폰 번호 가리기
function solution(phone_number) {
    let answer = '*'.repeat(phone_number.length - 4)+ phone_number.slice(-4);
    return answer;
}

//없는 숫자 더하기
function solution(numbers) {
    return 45 - numbers.reduce((a, c)=> a+c, 0)
}

//제일 작은 수 제거하기
function solution(arr) {
    if(arr.length<=1){
        return [-1]
    }
    
    let min = Math.min(...arr)
    let a = arr.filter(v=>v!==min)
    return a
}

//가운데 글자 가져오기
function solution(s) {
    let m = Math.floor(s.length/2)
    return s.length%2===0 ? s.slice(m - 1, m + 1) : s[m]
}

//같은 숫자는 싫어
function solution(arr)
{
    return arr.filter((a, c)=>a!=arr[c+1])
}

//3진법 뒤집기
function solution(n) {
  return parseInt(n.toString(3).split('').reverse().join(''), 3);
}

//이상한 문자 만들기
function solution(s) {
  return s.toUpperCase().replace(/(\w)(\w)/g, function(match, p1, p2) {
    return p1.toUpperCase() + p2.toLowerCase();
  });
}

//예산
function solution(d, budget) {
    d.sort((a, b)=> a-b)
    
    let c=0;
    let t=0;
    
    for(let i=0; i<d.length; i++){
        if(t+d[i]<=budget){
            t+=d[i]
            c++
        }else{
            break;
        }
    }
    
    return c
}

//크기가 작은 부분 문자열
function solution(t, p) {
    var answer = 0;
    let a =t.length;
    let b= p.length;
    for(let i=0; i<=a-b; i++){
        if(t.slice(i, i+b)<=p){
            answer++
        }
    }
    return answer
}

//최소 직사각형
function solution(sizes) {
    let a = 0;
    let b=0;
    
    for(let i of sizes){
        const[w,h]=i
        a=Math.max(a, Math.max(w, h))
        b=Math.max(b, Math.min(w, h))
    }
    return a*b
}

//숫자 문자열과 영단어ㅏ
function solution(s) {
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var answer = s;

  for(let i=0; i< numbers.length; i++) {
      let arr = answer.split(numbers[i]);
      answer = arr.join(i);
  }

  return Number(answer);
}

//k번째 수
function solution(array, commands) {
    var answer = [];
    
    for(let i=0; i<commands.length; i++){
        const [start, end, k] = commands[i]
        let a = array.slice(start-1, end)
        let b=a.sort((a, b)=>a-b)
        answer.push(b[k-1])
    }
    return answer
}

//1차 비밀지도
function solution(n, arr1, arr2) {
    const answer = [];

    for (let i = 0; i < n; i++) {
        // 두 개의 배열을 이진수 문자열로 변환하고, 길이를 n에 맞춥니다.
        const row1 = decToBinary(arr1[i], n);
        const row2 = decToBinary(arr2[i], n);

        // 두 줄을 합쳐서 비밀지도의 한 줄을 만듭니다.
        const decodedRow = decodeRow(row1, row2);

        // 결과 배열에 추가합니다.
        answer.push(decodedRow);
    }

    return answer;
}

// 정수를 이진수로 변환하는 함수
function decToBinary(decimal, n) {
    const binary = decimal.toString(2);
    return binary.padStart(n, '0');
}

// 두 개의 이진수를 비교하여 비밀지도의 한 줄을 만드는 함수
function decodeRow(row1, row2) {
    let decodedRow = '';

    for (let j = 0; j < row1.length; j++) {
        if (row1[j] === '1' || row2[j] === '1') {
            decodedRow += '#';
        } else {
            decodedRow += ' ';
        }
    }

    return decodedRow;
}

//문자열 내 마음대로 정렬하기
function solution(strings, n) {
    return strings.sort((a, b)=>{
        if(a[n]===b[n]){
            return a.localeCompare(b)
        }else{
            return a[n].localeCompare(b[n])
        }
    })
}

//가장 가까운 같은 글자
function solution(s) {
    const result = new Array(s.length).fill(-1); // 결과 배열 초기화, 모두 -1로 채움
    const positions = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char in positions) {
            const prevIndex = positions[char]; // 이전에 나온 위치
            result[i] = i - prevIndex; // 현재 위치와 이전 위치의 차이를 저장
        }
        positions[char] = i; // 해당 문자의 위치를 업데이트
    }

    return result;
}

//두개 뽑아서 더하기
function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}

//n개 간격의 원소들
function solution(num_list, n) {
    const result = [];
    for (let i = 0; i < num_list.length; i += n) {
        result.push(num_list[i]);
    }
    return result;
}

//n의 배수
function solution(num, n) {
    return num%n===0?1:0
}

//푸드 파이트 대회
function solution(food){
  let answer=''

  for(let i=1; i<food.length; i++){
    answer+=String(i).repeat(Math.floor(food[i]/2))
  }

  return answer+'0'+[...answer].reverse().join('')
}

//콜라 문제
function solution(a, b, n) {
    let change =0 
    while(n>=a){
        change+=Math.floor(n/a)*b
        n=Math.floor(n/a)*b + n%a
    }
    return change
}

//추억점수
function solution(name, yearning, photo){
  let s={}

  for(let i=0; i<name.length; i++){
    s[name[i]]=yearning[i]
  }

  let result=[]
  for(let i=0;i<photo.length; i++){
    let t=0
    for(let j=0; j<photo[i].length; j++){
      if(s[photo[i][j]] !== undefined){
        t+=s[photo[i][j]]
      }
    }
    result.push(t)
  }

  return result
}

//명예의 전당
function solution(k, score){
  let result=[]//명예의 전당
  let s= []//발표 점수

  for(let i=0; i<score.length; i++){
    if(result.length <k){
      result.push(score[i])
      s.push(Math.min(...result))
    }else{
      result.push(score[i])
      result.sort((a, b) => a-b)
      result.shift()
      s.push(Math.min(...result))
    }
  }

  return s
}

//[...result]는 배열 자체를 복사하고자 할 때 사용하며, (...result)는 배열의 요소를 개별 인자로 전달하고자 할 때 사용합니다.

//2016년
function solution(a, b){
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
  const d1 =new Date(`2016-${a}-${b}`)
  const d2 = d1.getDay()
  return days[d2]
}

//카드 뭉치
function solution(cards1, cards2, goal){
  for(const s of goal){
    if(cards1[0]===s){
      cards1.shift()
    }else if(cards2[0]===s){
      cards2.shift()
    }
    else{
      return "No"
    }
  }

  return "Yes"
}

//폰켓몬
function solution(nums) {
    let a = [...new Set(nums)]
    let b= nums.length/2
    return Math.min(a.length, b)
}

//과일 장수
function solution(k, m, score) {
    let result=0
    score.sort((a, b)=> b-a)
    
    for(let i=0; i<score.length; i+=m){
     let a = score.slice(i, i+m).pop()
     let b = score.slice(i,i+m).length
        if(b===m){
            result+=a*b
        }
    }
    return result
}

//모의고사 
function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}

//소수 찾기
function solution(n){
  let answer=0;
  let arr = new Array(n+1).fill(true)
  let end=Math.sqrt(n)

  for(let i=2; i<=end; ++i){
    if(arr[i]===false){
      continue;
    }

    for(let k =i*i; k<=n; k+=i){
      arr[k]=false
    }
  }

  for(let i=2; i<=n; ++i){
    if(arr[i]===true){
      answer++
    }
  }

  return answer
}

//덧칠하기
function solution(n, m, selection){
  let answer=0;
  let a = new Array(n).fill(true)
  selection.forEach(i=>a[i-1]=false)

  for(let i=0; i<a.length; i++){
    if(!a[i]){
      answer+=1
      i+=m-1
    }
  }

  return answer
}

//실패율
function solution(N, stages) {
    let l = []
    
    for(let stage=1; stage<=N; stage++){
        let t = stages.filter(v=> v>=stage).length
        let f = stages.filter(v=> v===stage).length
        
        let fr = t===0? 0:f/t
        
        l.push({stage, fr})
    }
    
    l.sort((a, b)=>{
        if(a.fr !== b.fr){
            return b.fr-a.fr
        }
        else{
            return a.stage-b.stage
        }
    })
    
    return l.map(v=>v.stage)
}

//기사단원의 무기
function solution(number, limit, power) {
    let sum = 0;

    for (let i = 1; i <= number; i++) {
        let count = 0;
        
        for (let j = 1; j <= i / 2; j++) {
            if (i % j === 0) {
                count++;
            }
        }

        if (count + 1 > limit) {
            sum += power;
        } else {
            sum += count + 1;
        }
    }

    return sum;
}

//로또의 최고 순위와 최저 순위
function solution(lottos, win_nums) {
    var answer = [];
    let count=win_nums.filter(v=>lottos.includes(v)).length//겹치는 수
    let zero=lottos.filter(v=>v===0).length//0의 개수
    console.log(count, zero)
    let min = 7-count >= 6 ? 6 : 7-count;
    let max = min-zero< 1 ? 1 : min-zero;
    
    answer = [max, min]
    return answer;
}

//옹알이2
function solution(babbling) {
  let count = 0;
  let r = ["aya", "ye", "woo", "ma"]

  for(let i=0; i<babbling.length; i++){
    let b = babbling[i]

    for(let j=0; j<r.length; j++){
      if(b.includes(r[j].repeat(2))){
        break;
      }

      b=b.split(r[j]).join(' ')
    }

    if(b.split(' ').join('').length===0){
      count+=1
    }
  }

  return count
}

//숫자짝꿍
function solution(X, Y) {
  let answer = ''
  X = X.split("")
  Y = Y.split("")

  for(let i=0; i<10; i++){
    let curX=X.filter(v=>Number(v)===i).length
    let curY=Y.filter(v=>Number(v)===i).length

    answer+=String(i).repeat(Math.min(curX, curY))
  }

  if(answer==='') return '-1'
  if(Number(answer)===0) return '0'
  
  return answer.split('').sort((a, b)=>Number(b)-Number(a)).join('')
}

//완주하지 못한 선수
function solution(participant, completion) {
    participant.sort()
    completion.sort()
    for(let i=0; i<participant.length; i++){
        if(participant[i]!=completion[i]){
            return participant[i]
        }
    }
}

//문자열 나누기
function solution(s){
  let stack=[]
  let count=0

  for(let i=0; i<s.length; i++){
    stack.push(s[i])

    let same=stack.filter(v=>v===stack[0]).length
    let nosame=stack.filter(v=>v!=stack[0]).length

    if(same===nosame){
      count+=1
      stack=[]
    }
  }

  if(stack.length !=0){
    count+=1
  }

  return count
}

//대충만든 자판
function solution(keymap, targets) {
  let answer=[];
  let map= new Map()

  for(let key of keymap){
    for(let i=0; i<key.length; i++){
      if(!map.has(key[i]) || i+1<map.get(key[i])) map.set(key[i], i+1)
    }
  }

  for(let target of targets){
    let count=0
    for(let i=0; i<target.length; i++){
      count+=map.get(target[i])
    }
    answer.push(count||-1)
  }

  return answer
} 

//둘만의 암호
function solution(s, skip, index) {
  let answer = '';
  const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
  [...skip].forEach(v => alphabet.delete(v))

  const arr = [...alphabet]

  for (let i of s) {
    const a = arr.indexOf(i) + index
    answer += arr[a % arr.length]
  }

  return answer
}

//신고 결과 받기
function solution(id_list, report, k) {
  var answer=new Array(id_list.length).fill(0)
  let report_list={}

  id_list.map((user)=>{
    report_list[user]=[]
  })

  report.map((user)=>{
    const [user_id, report_id]=user.split(' ')
    if(!report_list[report_id].includes(user_id)){
      report_list[report_id].push(user_id)
    }
  })

  for(const key in report_list){
    if(report_list[key].length>=k){
      report_list[key].map((user)=>{
        answer[id_list.indexOf(user)] += 1
      })
    }
  }

  return answer
}