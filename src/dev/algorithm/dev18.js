//하나빼기
//문자열을 편집하는 방법에는 세 가지 종류가 있다. 문자 삽입, 문자 삭제, 문자 교체.
//문자열 두 개가 주어졌을 때, 문자열을 길게 만들기 위한 편집 횟수가 1회 이내인지 확인하는 함수를 작성하라.

//1.교체 -> 두개의 문자열 길이를 비교, 같은 길이일 걍우 교체 사실 체크
//2.갑입 -> 두개의 문자열 길이를 비교, 하나의 차이일 경우 진행
//3. 삭제 -> 삽입의 정반대

const cedit=(str1, str2)=>{
    let edit=0;
    for(let i=0; i<str1.length; i++){
        if(str1[i] !== str2[i]){
            edit++;
        }
    }
   
    return edit<2;
}

const cplus = (str1, str2)=>{
    let index1=0;
    let index2=0;
    while(index1<str1.length && index2<str2.index2){
        if(str1[index1] !== str2[index2]){
            if(index1 !== index2){
                return false;
            }
            index2++;
        }
        else{
            index1++;
            index2++;
        }
    }
    return true;
}

function onaway(str1, str2){
    if(str1.length === str2.length){
        return cedit(str1, str2)
    }
    else if(str1.length-1===str2.length){
        return cplus(str2, str1)
    }
    else if(str1.length+1===str2.length){
        return cplus(str1, str2)
    }
    return false;
}
console.log(onaway("apple", "aple"))
console.log(onaway("aple", "apple"))
console.log(onaway("mod", "sda"));