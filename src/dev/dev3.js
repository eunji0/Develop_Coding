//펠린드롬
//#1 추가 문자열 활용
function abctive(str){
    let reverse=""
    for(let i=str.length-1;i>=0;i--){
        reverse+=str[i]
    }
    return reverse === str
}

// console.log(abctive("abba"));
// console.log(abctive('asd'));

//#2Two Pointer 투포인터 활용
function abc(str){
    let len=str.length;
    let mid=Math.floor(len/2);

    for(let i=0; i<=mid; i++){
        if(str.charAt(i) !== str.charAt(len-1-i)){
            return false;
        }
        return true;
    }
}

console.log(abc('abs'));
console.log(abc('abba'));