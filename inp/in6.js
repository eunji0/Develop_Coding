// 변수를 선언합니다.
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 메서드를 사용합니다.
array = array.every(function (element, index, array) {
return element <= 5;
});
// 출력합니다.
console.log(array);

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));