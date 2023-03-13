//이진 탐색

function bp(arr, target){
    let low=0;
    let high=arr.length - 1;
    while(low<=high){
        let mid=Math.floor((low+high)/2)
        if(target < arr[mid]){
            high = mid-1;
        }else if(target>arr[mid]){
            low = mid+1;
        }
        else{
            return mid
        }
    }

    return -1;
}



console.log(bp([1,2,5,6,7,8], 5));