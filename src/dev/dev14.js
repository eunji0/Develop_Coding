//순열 확인
//문자열 두개가 주어졌을때 이 둘이 서로 순열관계에 있는지 확인하는 메서드를 작성하라
//순열:순서가 달라도 a의 구성요소로 b를 만들 수 있으면 true


//input -> fn(stringA, stringB)빈문자열x
//output -> 순열관계확인 -> true, 아닐 경우 false

function abc(stringA, stringB){
    if(stringA.length !== stringB.length){
        return false
    }

    let sortedstringA = stringA.split("").sort().join("");
    let sortedstringB = stringB.split("").sort().join("");

    return sortedstringA === sortedstringB;
}

console.log(abc("hooh", "oohh"));
console.log(abc("sda", "cds"));