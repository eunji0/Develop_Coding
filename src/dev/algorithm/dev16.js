//url화
//주어진 문자열 내의 모든 공백을  '%20'으로 바꾸는 메서드를 작성하라.
//문자역 끝에 추가로 필요한 문자들을 더할 수 있는 충분한 공간이 있다고 가정하라.
//공백을 포함하는 문자열의 길이도 함께 주어진다고 가정하라.

//trim()
//let hello = " hello   "
//->hello.trim()=>"hello"

function urlify(s, n){
    let toArray = s.trim().split("");

    for(let i in toArray){
        if(toArray[i]==' '){
            toArray[i]='%20';
        }
    }
    return toArray.join("");
}

console.log(urlify("   a b c    ", 5)==="a%20b%20c")