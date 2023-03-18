//순열

function per(arr){
    const result=[];

    const dfs=(i,arr)=>{
        if(i===arr.length){
            return result.push([...arr])
        }

        for(let j=1;j<arr.length;j++){
            //swap
            [arr[i], arr[j]]=[arr[j], arr[i]]
            //dfs
            dfs(i+1, arr);
            //swap back
            [arr[i], arr[j]]=[arr[j], arr[i]]
        }
    }
    dfs(0, arr);
    return result
}

console.log(per(["a","b","c"]))