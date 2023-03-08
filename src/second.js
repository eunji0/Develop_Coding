//애너그램
//두 단어의 글자 나열 순서 

const stringA = "listen";
const stringB = "slient";

//#1 split(), sort(), join()
function isAnagram(strA, strB){
    if(strA.length !== strB.length){
        return false;
    }
    return strA.split('').sort().join()===strB.split('').sort().join()

}

// console.log(isAnagram(stringA, stringB))


// 1. for : 고전적인 for문

// 2. for in : 객체의 프로퍼티 키 열거 전용

// 3. for of : 이터러블 순회 전용

// 4. forEach(): 배열 순회 전용 메서드
//#2 map={}

function isAnagram2(strA, strB){
    if(strA.length!==strB.length){
        return false;
    }

    const hashMap={};
    for(const char of strA){
        hashMap[char]=hashMap[char] ? hashMap[char]+1:1;
    }

    for(const char of strB){
        if(!hashMap[char]){
            return false;
        }
        hashMap[char]--;
    }
    return true;
}


console.log(isAnagram2(stringA, stringB))