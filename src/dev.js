//중복제거

//set()
 const nums = [1,2,3,6,6,7,2,2,8,9];

// const mySet = new Set()
// mySet.add(1);
// mySet.add(2);
// mySet.add(3);

// console.log(mySet);

const uniqueNums = [...new Set(nums)];
// console.log(uniqueNums);



//indexOf()
// console.log(nums.indexOf(6))

const a= nums.filter((item, position)=>{
    return nums.indexOf(item)===position;
})

// console.log(a);




//caching/loop

function uniN(arr){
    const uniE = {};
    const result = [];
    for(let element of arr){
        if(!uniE[element]){
            result.push(element);
        }
        uniE[element]=element;
    }
    return result;
}

console.log(uniN(nums));