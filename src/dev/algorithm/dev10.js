// 가장 긴 공통 접두사 (LCP)

const strs=["flower", "flow", "flight"]
const strs2=["wr", "fds", "sdfdsf"]

function pre(strs){
    let prefix="";

    if(strs===null||strs[0].length===0){
        return prefix
    }

    for(let i=0; i< strs[0].length;i++){
        let char=strs[0][i];

        for(let j=1; j<strs.length;j++){
            if(strs[j][i] !== char){
                return prefix;
            }
        }

        prefix=prefix+char
    }
    return prefix

}

console.log(pre(strs2))