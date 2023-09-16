//자릿수 더하기
function solution(n)
{
    return n.toString().split('').reduce((a, c)=>a+Number(c), 0)
}

//나머지가 1이 되는 수 찾기
function solution(n) {
  for(let i=0; i<n; i++){
      if(n%i===1){
          return i
      }
  }
}

//평균 구하기
function solution(arr) {
  return arr.reduce((a, c)=>a+c, 0)/arr.length
}

//짝수와 홀수
function solution(num) {
  return num%2===0 ? "Even" : "Odd"
}

//약수의 합
function solution(n) {
  let sum=0
  for(let i=1; i<=n; i++){
      if(n%i===0){
          sum+=i
      }
  }
  return sum
}

//x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
  var answer = [];
  for(let i=1; i<=n; i++){
      answer.push(x*i)
  }
  return answer
}

//자연수 뒤집어 배열로 만들기
function solution(n) {
    return n.toString().split('').reverse().map((v)=>v=+v)
}

//문자열 내 p와 y의 개수
function solution(s){
    let a= s.toLowerCase().split('p')
    let b= s.toLowerCase().split('y')
    return a.length===b.length ? true : false
}

//문자열을 정수로 바꾸기
function solution(s) {
    return +s
}

//정수 제곱근 판별
function solution(n) {
    let a= Math.sqrt(n)
    let b=Math.floor(Math.sqrt(n))
    return a===b ? (a+1)*(a+1) : -1
}

//정수 내림차순으로 배치하기
function solution(n) {
    return +(n.toString().split('').sort((a, c)=>c-a).join(''))
}

//하샤드 수
function solution(x) {
     let a = x.toString().split('')
     let sum=0;
     for(let i=0; i<a.length; i++){
         sum+=+a[i]
     }
    return x%sum===0 ? true:false
}

//두 정수 사이의 합
function solution(a, b) {
    let s = a>b ? b : a
    let ss = a>b ? a : b
    let n = 0
    for(let i=s; i<=ss; i++){
        n+=i
    }
    return n
}

//콜라츠 추측
function solution(num) {
    let count=0;
    while(num !=1 && count<500){
        num%2===0 ? num=num/2 : num=num*3+1
            count+=1
    }
    return num===1 ? count : -1
}

//서울에서 김서방 찾기
function solution(seoul) {
    return `김서방은 ${seoul.indexOf("Kim")}에 있다`
}

//나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
    let s = arr.filter(v=>v%divisor===0)
    return s.length < 1 ? [-1] : s.sort((a, b)=>a-b)
}

//음양 더하기
function solution(absolutes, signs) {
    let s=0
    for(let i=0; i<signs.length; i++){
        signs[i]===true ? s+=absolutes[i] : s+= -absolutes[i]
    }
    return s
}

//핸드폰 번호 가리기
function solution (n) {
    return '*'.repeat(n.length-4)+n.slice(-4)
}

//없는 숫자 더하기
function solution(numbers) {
    return 45-numbers.reduce((a, c)=>a+c, 0)
}

//제일 작은 수 제거하기
function solution(arr) {
    const min = Math.min(...arr)
    return arr.length===1 ? [-1]:arr.filter(v=>v!=min)
}

//가운데 글자 가져오기
function solution(s) {
    let a = Math.floor(s.length/2)
    return s.length%2===0 ? s.slice(a-1, a+1) :s.slice(a, a+1) 
}

//수박수
function solution(n) {
    var answer = '';
    for(let i=0; i<n; i++){
        if(i%2===0){
            answer+='수'
        }else{
            answer+='박'
        }
    }
    return answer;
}

//내적
function solution(a, b) {
    return a.reduce((ac, _, i)=>ac+a[i]*b[i], 0)
}

//약수의 개수와 덧셈
function solution(left, right) {
    let count=0;
    let s =0
    for(let i=left; i<=right; i++){
        for(let j=1; j<=i; j++){
            if(i%j===0){
                count++
            }
        }
        if(count%2===0){
            s+=i
        }else{
            s-=i
        }
        count=0
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
    for(let i=1; i<=count; i++){
        s+=price*i
    }
    return s-money > 0? s-money:0
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
    for(let i=0; i<arr1.length; i++){
        let c=[]
        for(let j=0; j<arr1[i].length; j++){
            c.push(arr1[i][j]+arr2[i][j])
        }
        answer.push(c)
    }
    return answer
}

//최대공약수와 최소공배수
function solution(n, m) {
    var r;
    for(var nm=n*m; r=n%m; n=m, m=r){}
    return [m, nm/m]
}

//같은 숫자는 싫어
function solution(arr){
    return arr.filter((v, i)=>v!==arr[i+1])
}

//3진법
function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''),3)
}

//예산
function solution(d, budget) {
    return d.sort((a, b) => a-b).reduce((a, c)=>{
        return a+((budget-=c)>=0)
    }, 0)
}

//이상한 문자 만들기
function solution(s) {
    let ss= s.toLowerCase().split(' ')
    let answer=[]
    for(let i=0; i<ss.length; i++){
        let t=''
        for(let j=0; j<ss[i].length; j++){
            if(j%2===0){
                t+=ss[i][j].toUpperCase()
            }else{
                t+=ss[i][j]
            }
        }
        answer.push(t)
    }
    return answer.join(' ')
}

//크기가 작은 부분 문자열
function solution(t, p) {
    let count=0
    for(let i=0; i<t.length; i++){
        let tt = t.slice(i, i+p.length)
        if(tt.length===p.length && tt<=+p){
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
function solution(sizes){
    let a =0;
    let b=0;

    for(const[w,h] of sizes){
        const max = Math.max(w, h)
        const min = Math.min(w, h)

        a=Math.max(a, max)
        b=Math.max(b, min)
    }

    return a*b
}