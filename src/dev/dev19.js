//문자열 압축
//반복되는 문자의 개수를 세는 방식의 , 기본적인 문자열 압축메서드를 작성하라
//예를들어 aabcccccaaa를 압축하면 a2b1c5a3이 된다.
//압축한 문자열의 길이가 기존 문자열의 길이보다 길다면 기존 문자열을 반환해야 한다.
//문자열은 대소문자 알파벳 (a-z)로만 구성되어 있다.

//1. 아웃풋 변수 [배열]
//2.카운트 변수 시작을 1로
//3. 인풋 순회
//->반복 -> 카운터 변수++
//->반복ㅌ -> 아웃풋에 추가, 카운터변수 리셋,
//4. 아웃풋변수의 길이와 인풋의 길이 잠시루 조건에 따라서 리턴

function abc(s){
    let output=[]
    let count=1

    for(let i=0; i<s.length; i++){
        let current=s[i]
        let next=s[i+1]

        if(current === next){
            count++;
        }else{
            output.push(current+count)
            count = 1;
        }
    }
    out=output.join("")
    return out.length < s.length ? out : s 
}

console.log(abc("aabcccccaaa"))
console.log(abc("aa"))
console.log(abc("aacbba"))