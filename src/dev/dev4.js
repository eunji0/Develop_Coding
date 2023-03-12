//최대 수익 계산하기

input=[100,200,50,30,150,250]

function expe(prices){
    let max=0;
    let minp=prices[0];

    for(let p of prices){
        if(minp < p){
            max=Math.max(max, p-minp)
        }else{
            minp=p
        }
    }
    return max
}

const t1 = [10,20,50,100,80,250]
const t2 = [100,80,70,50,40]

console.log(expe(t1));
console.log(expe(t2));