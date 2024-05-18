// 스택 - (Last In First Out)LIFO
// 큐 - (First In First Out)FIFO 

// class Stack {
//   constructor(){
//     this.arr = [];
//   }

//   push(data){
//     this.arr.push(data)
//   }

//   pop(index){
//     if(index === this.arr.length-1){
//       return this.arr.pop();
//     }

//     let result = this.arr.splice(index, 1);
//     return result
//   }

//   empty(){
//     if(this.arr.length===0){
//       return true;
//     }else{
//       return false;
//     }
//   }

//   top(){
//     return this.arr[this.arr.length-1]
//   }

//   bottom(){
//     return this.arr[0];
//   }

// }

// let s = new Stack();
// s.push(10);
// s.push(20);
// s.push(30);
// s.push(100);
// s.push(200);
// s.push(300);
// let popValue = s.pop(2)
// console.log(s);
// console.log(popValue)

//10773-제로
// class Zero {
//   constructor() {
//     this.arr = [];
//   }

//   push(data) {
//     return this.arr.push(data);
//   }

//   pop() {
//     return this.arr.pop();
//   }
// }

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
// const [n, ...arr] = input.map(Number);

// let array = new Zero();

// arr.forEach(v => {
//   if (v === 0) {
//     array.pop();
//   } else {
//     array.push(v);
//   }
// });

// let sum = array.arr.reduce((a, c) => a + c, 0);
// console.log(sum);

//10799-쇠막대기
// class Stack {
//   constructor() {
//     this.arr = [];
//   }

//   push(data) {
//     return this.arr.push(data);
//   }

//   pop() {
//     return this.arr.pop();
//   }

//   length() {
//     return this.arr.length;
//   }
// }

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = require('fs').readFileSync(filePath).toString().trim().split('');

// let stack = new Stack();
// let answer =0;

// input.forEach((v, i)=>{
//   if(v==='('){
//     stack.push(v);
//   }else{
//     if(input[i-1]==='('){
//       stack.pop();
//       answer+=stack.length();
//     }else{
//       stack.pop();
//       answer++;
//     }
//   }
// })

// console.log(answer)

//17413-단어 뒤집기2
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = require('fs').readFileSync(filePath).toString().trim().split('');

// let word = '';
// let ans ='';
// //공백이 문자내 공백인지 괄호안 공백인지 구분위함
// let isTag=false;

// //forin은 객체, forof는 문자열이나 배열
// for(let str of input){
//   if(str === '<'){
//     //괄호가 열림
//     isTag=true;

//     //괄호 전까지 나온 것 뒤집기+괄호
//     ans+=word.split('').reverse().join('')+str;

//     word='';
//   }else if(str === '>'){
//     //괄호가 닫힘
//     isTag = false;

//     //괄호안은 뒤집기x
//     ans+=word+str;

//     word=''
//   }else if(str ===' '){
//     //괄호안 빈칸인지 구분
//     ans+=(!isTag ? word.split('').reverse().join('') : word) + ' ';
//     word = '';
//   }else{
//     //아무 조건에 해당되지 않으면 그냥 넣음
//     word+=str;
//   }
// }
// // 만약 ">" 기호로 태그가 닫히는 것으로 끝나는게 아니라,
// // 문자로 끝나는 경우에는 word에 넣어진 상태로 for문이 종료된다.
// // 양 끝에는 공백이 없기 때문에 분기처리가 안되고 else문만 실행되고 종료되기 때문이다.
// // 따라서 출력 전에 word를 뒤집어서 바꿔줄 필요가 있다.
// ans+=word.split('').reverse().join('')
// console.log(ans)

//3986-좋은 단어
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [n, ...arr]=input;

let count =0;

for(let word of arr){
  let stack = [];
  for(let letter of word){
    if(stack.length && stack[stack.length-1] === letter){
      stack.pop();
    }else{
      stack.push(letter);
    }
  }

  if(stack.length === 0) count++;
}

console.log(count)


