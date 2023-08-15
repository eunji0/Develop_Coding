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

//6, 12, 13, 15