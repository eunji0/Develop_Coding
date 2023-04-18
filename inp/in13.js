//숫자타입
var number_a = 10;
var number_b = new Number(100);

// console.log(number_b.valueOf());

Number.prototype.show = function(num){
    console.log(this.valueOf()+num+"\n"+this.valueOf()*num)
}

// number_b.show(number_a);

var array = [52, 273, 103, 32];
array.sort(function (left, right) {
return left - right;
});
// 출력합니다.
// console.log(array);

var date = new Date('December 9, 1991');
var date1 = new Date();
// console.log(date1.toDateString())

// 변수를 선언합니다.
var now = new Date();
var before = new Date('September 24, 2000');
// 날짜 간격을 구합니다.
var inte = now.getMonth()-before.getMonth();
inte = Math.floor(inte/(1000*24))
console.log('Interval: ' + inte + '달');