//계단 오르기
//다이나믹 프로그래밍

//문제
//당신 앞에 계단이 있습니다. n 개의 계단을 올라야 꼭대기에 도착할 수 있고.
//한번에 1또는 2계단 씩 올라갈 수 있다고 했을떄, 꼭대기에 도달할 수 있는
//경우의 수가 몇가지가 있을까요?

//1.dp 배열 만들기
//2. 1계단, 2계단 미리 저장
//3. 반복문 -> dp테이블 채워주기
//4. formula 적용
//5. 최종 결과값 리턴하기

function stairs(n){
    if(n==0){
        return 0
    }

    let dp = new Array(n+1);

    dp[1]=1;
    dp[2]=2;

    for(let i=3;i<=n;i++){
        dp[i]=dp[i-1]+dp[i-2]
    }
    return dp[n];
}

console.log(stairs(3));
console.log(stairs(4));