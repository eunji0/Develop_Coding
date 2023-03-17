//두 객체 비교하기

const obj1={
    a:"a",
    b:1,
    c:["a","b","c"],
    d:{
        e:null,
        f:-1
    }
}

const obj2 = {
    a:"a",
    b:1,
    c:["a","b","c"],
    d:{
        e:null,
        f:-1
    }
}
 
function isEq(objA, objB){
    let a= JSON.stringify(objA)
    let b=JSON.stringify(objB)

    return a.split("").sort().join("") ===b.split("").sort().join("")
}

console.log(isEq(obj1, obj2));


