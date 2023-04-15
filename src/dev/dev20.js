//행렬회전
//이미지를 표현하는 N * N 행렬이 있다.
//이미지의 각 픽셀은 4바이트로 표현된다. 이때 이미지를 90도 회전시키는 메서드를 작성하라
//부가적인 행렬을 사용하지 않고서도 할 수 있겠는가?

function matrixa(m){
    //1.transpose
    for(let i=0; i<m.length; i++){
        for(let j=0; j<i; j++){
            let temp = m[i][j]
            m[i][j]=m[j][i]
            m[j][i]=temp
        }
    }

    //2.reverse
    for(let row of m){
        const size=row.length
        for(let i=0; i<size/2;i++){
            let temp=row[i]
            row[i]=row[size-1-i]
            row[size-1-i]=temp
        }
    }

    return m;
}

console.log(matrixa([[1,2,3], [4,5,6], [7,8,9]]))