//올바른 괄호
//괄호가 올바른게 Paired 되었다는 것은 "(", "{", "[", 등의 괄호가 열렸으면
//반드시 짝지어서 ")","}","]"가 닫혀야한다는 말

function vp(input){
    const stack=[]
    for(let char of input){
        if(char==="[" || char==="{"||char==="("){
            stack.push(char)
        }else{
            const last=stack.pop()
            if(last === "{" && char!=="}"||
            last === "[" && char !== "]" ||
            last === "(" && char !==")"){
                return false
            }
        }
    }
    return stack.length===0;
}

console.log(vp("[]{{"))
console.log(vp("{[]}"))