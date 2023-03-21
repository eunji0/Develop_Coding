//배열 0 옮기기
//(move seros)

const input=[0,1,0,3,12]

function movezero(nums){
    let j=0;

    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            //swap
            let temp=nums[j]
            nums[j]=nums[i]
            nums[i]=temp

            j++
        }
    }
    return nums
}

console.log(movezero(input));