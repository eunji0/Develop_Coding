//몫 구하기
//~표시 하나가 부정연산자
function solution(n1, n2){
  return ~~(n1/n2);
}

solution(7, 2)

//숫자 비교하기
function solution(n1, n2){
  return n1 === n2 ? 1 : -1
}

solution(7, 7)

//나이 출력
function solution(age){
  return 2022-age+1;
}

solution(40)

//각도기
function solution(angle){
  if(angle>0 && angle<90){
    return 1
  }else if(angle == 90){
    return 2
  }else if(angle>90 && angle<180){
    return 3
  }else if(angle == 180){
    return 4
  }
}

solution(90)

//양꼬치
function solution(n, k){
  if(n>=10){
    return 12000*n+2000*k-2000*n/10
  }
}

function solution(n, k){
  if(n>=10){
    k-=~~(n/10)
  }
  return 12000*n+2000*k
}

solution(10,3)

//짝수의 합
function solution(n){
  let result=0;
  for(let i=0; i<=n; i++){
    if(i%2===0){
      result+=i
    }
  }
  return result
}

solution(10)

//배열의 평균값
function solution(numbers) {
  return numbers.reduce((a,c)=>a+c, 0)/numbers.length;
}
solution([1,2,3,4,5,6,7,8,9,10])

//머쓱이보다 키큰 사람
function solution(array, height) {
  array.push(height);
  let a = array.sort((a, b) => a-b)
  return a.filter(v=> v>height).length
}

solution([149, 180, 192, 170], 167);

//중복된 숫자 개수
function solution(array, n){
  return array.filter(v=>v==n).length
}

solution([2,3,4,5], 1)

//피자 나눠 먹기
function solution(n){
  if(n<7){
    return 1
  }else if(n%7==0){
    return n/7
  }else{
    return Math.floor(n/7+1)
  }
}

solution(7)

//짝수 홀수 개수
function solution(num_list){
  let a=0;
  let b=0;
  for(i of num_list){
    if(i%2==0){
      a++
    }else{
      b++
    }
  }
  return([a, b])
}

solution([1,2,3,4,5])


//배열 두 배 만들기
function solution(numbers){
  return numbers.map((a) => a*2)
}

solution([1,2,100, -99])

//문자열 뒤집기
function solution(my_string){
  return my_string.split('').reverse().join('')
}

solution("jaron")

//특정 문자 제거하기
function solution(my_string, letter){
  let reg = new RegExp(letter, 'g')
  return my_string.replaceAll(reg, '')
}

solution("abcdef", "f")

//배열의 유사도
function solution(s1, s2){
  return s1.filter((v)=> s2.includes(v)).length
}

solution(["a", "b", "c"], ["asd", "b", "c"])

//가위바위보
function solution(rsp) {
  let result = ''
  for (let i of rsp) {
    if (i == '0') {
      result+='5'
    } else if (i == '2') {
      result+='0'
    } else {
      result+='2'
    }
  }
  return result
}

solution('005')


//배열 회전시키기
function solution(numbers, direction) {
  if (direction == "right") {
    numbers.unshift(numbers.pop());
  }else{
    numbers.push(numbers.shift())
  }
  return numbers;
}

solution([1, 2, 3], "left");


//외계행성의 나이
function solution(age){
  return Array.from(age.toString()).map(v=>'abcdefghij'[v]).join('')
}

solution(23)


//369게임
function solution(order) {
  return order.toString().split('').filter(v => v === '3' || v === '6' || v === '9').length;
}

solution(29423)


//중복된 문자 제거
function solution(my_string){
  return [...new Set(my_string)].join('')
}
solution('people')


//A로 B만들기
function solution(before, after){
  return before.split('').sort().join('') === after.split('').sort().join('') ? 1:0
}

solution("olleh", "hello")


//팩토리얼
function solution(n){
  let i=1;
  let fac = 1
  while(fac<=n){
    i+=1
    fac*=i
  }
  return i-1
}

solution(7)


//k의 개수
function solution(i, j, k){
  let s=''
  for(i; i<=j; i++){
    s+=i
  }
  return s.split(k).length-1
}

solution(10, 50, 5)


//가까운 수
function solution(array, n){
  array.sort((a, b) => a-b)
  let s =0;
  for(let i=0; i<array.length; i++){
    if(Math.abs(array[i]-n<s)){
      s=array[i]
    }
  }

  return s
}

solution([3,10,28], 20)


//한 번만 등장한 문자
function solution(s){
  return [...s].filter(c=>s.split(c).length==2).sort().join('')
}

solution("abdc")


//잘라서 배열로 저장하기
function solution(my_str, n){
  let a =[];
  for(let i=0; i<my_str.length; i+=n){
    a.push(my_str.slice(i, i+n))
  }
  return a
}

solution("abcjkdhasdkl", 3)

//6, 12, 13, 15, 17, 19, 20, 21, 22, 23, 24, 25