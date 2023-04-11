//회문순열
//주어진 문자열이 회문의 순열인지 아닌ㄴ지 확인하는 함수를 작성하라.
//회문이란 앞으로 읽으나 뒤로 읽으나 같은 단어 혹은 구절을 의미하며,
//순열이란 문자열을 재배치하는 것을 뜻한다. 회문이 꼭 사전에 등장하는 단어로 제한될 필요는 없다.
//(대소문자와 빈글자는 무시한다고 가정)

function cmap(s){
    let charCount=0;
    let map = new Map();
    s=s.toLowerCase();

    for(let char of s){
        if(char === " "){
            continue;
        }

        if(map.get(char)){
            map.delete(char);
        }else{
            map.set(char, true);
        }

        charCount++;
    }

    if(charCount %2===0){
        return map.size === 0;
    }else{
        return map.size ===1;
    }
}

console.log(cmap("Tact Coa"));
console.log(cmap("Tact Boa"));