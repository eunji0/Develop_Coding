function Baseball() {
  this.play = function (computer, user) {
    if (computer === user) {
      return '정답입니다.';
    }

    const comdigit = computer.toString().split('');
    const userdigit = user.toString().split('');

    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if(comdigit[i] === userdigit[i]){
        strike++;
      }
      else if(comdigit.includes(userdigit[i])){
        ball++;
      }
    }

    let result='';
    if(strike > 0){
      result+=`${strike}strike`;
    }
    if(ball > 0){
      if(result !== ''){
        result+=' ';
      }
      result+=`${ball}ball`;
    }

    return result || '낫싱';
  }
}

const baseball = new Baseball(); 

console.log(baseball.play(123, 456)); // '낫싱'
console.log(baseball.play(123, 345)); // '1볼'
console.log(baseball.play(123, 432)); // '2볼'