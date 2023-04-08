//중복이 없는가
//문자열이 주어졌을 때, 이 문자열에 같은 문자가 중복되어 등장하는지 확인하는 알고리즘을 작성하라/

function isSet(str){
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<str.length;j++){
            if(str[i]===str[j]){
                return false
            }
            
        }
    }
    return true
}

console.log(isSet(""));
console.log(isSet("abbd"));
console.log(isSet("bajb"));