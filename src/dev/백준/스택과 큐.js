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
class Zero {
  constructor() {
    this.arr = [];
  }

  push(data) {
    return this.arr.push(data);
  }

  pop() {
    return this.arr.pop();
  }
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [n, ...arr] = input.map(Number);

let array = new Zero();

arr.forEach(v => {
  if (v === 0) {
    array.pop();
  } else {
    array.push(v);
  }
});

let sum = array.arr.reduce((a, c) => a + c, 0);
console.log(sum);

