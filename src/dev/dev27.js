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

//