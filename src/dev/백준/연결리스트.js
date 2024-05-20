//연결리스트
// class Node{
//   constructor(data){
//     this.data = data;
//     this.next=null;
//   }
// }

// class LinkedList {
//   constructor(){
//     let init = new Node('init');
//     this.head = init;
//     this.tail = init;
  
//     this.현재노드 = undefined;
//     this.데이터수 =0;
//   }

//   length(){
//     return this.데이터수;
//   }

//   append(data){
//     let 새로운노드 = new Node(data);
//     this.tail.next = 새로운노드;
//     this.tail = 새로운노드;
//     this.데이터수+=1;
//   }

//   toString(){
//     let 순회용현재노드 = this.head;
//     순회용현재노드 = 순회용현재노드.next;

//     let s = '';
//     for(let i=0; i<this.데이터수; i++){
//       s+=`${순회용현재노드.data}, `

//       //순회용현재노드가 계속해서 next값을 가리켜야함
//       순회용현재노드 = 순회용현재노드.next;
//     }

//     //맨 마지막,이거는 빼고
//     return `${s.slice(0, -1)}`
//   }

//   getfullData(){
//     let 순회용현재노드 = this.head;
//     순회용현재노드 = 순회용현재노드.next;

//     let s = '';
//     for(let i=0; i<this.데이터수; i++){
//       s+=`${순회용현재노드.data}, `

//       //순회용현재노드가 계속해서 next값을 가리켜야함
//       순회용현재노드 = 순회용현재노드.next;
//     }

//     //맨 마지막,이거는 빼고
//     //배열로 바꿔줌
//     return JSON.parse(`[${s.slice(0, -2)}]`)
//   }

//   //index에 data를 넣어주는 메서드,
//   insert(index, data){
//     let 순회용현재노드 = this.head;
//     순회용현재노드 = 순회용현재노드.next;

//     for(let i=0; i<index-1; i++){
//       순회용현재노드 = 순회용현재노드.next;
//     }

//     let 새로운노드 = new Node(data);
//     새로운노드.next = 순회용현재노드.next;
//     순회용현재노드.next = 새로운노드;
//     this.데이터수+=1;
//   }
// }

// let l = new LinkedList();
// l.append(1);
// l.append(2);
// l.append(3);
// l.append(10);
// l.append(20);
// l.append(30);
// l.insert(2, 2000)
// console.log(l.length());
// console.log(l.toString())

//1406-에디터
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
// const [str, n, ...arr] = input.map(v=>v.trim());

// let LStack = str.split('');// 커서의 왼쪽 stack
// let RStack = [];// 커서의 오른쪽 stack

// arr.forEach(v=>{
//   const [command, val] = v.split(' ');

//   //LStack의 길이가 0이 아닐 경우만, 왼쪽으로 커서 이동(L) 
//   //커서가 왼쪽으로 이동하기 때문에 RStack에 쌓는다.
//   if (command === "L" && LStack.length) RStack.push(LStack.pop());
//   //RStack의 길이가 0이 아닐 경우만, 오른쪽으로 커서 이동(D)
//   //마찬가지 이유로 LStack에 쌓는다.
//   else if (command === "D" && RStack.length) LStack.push(RStack.pop());
//   //제할 경우(B) LStack에서 지운다.
//   else if (command === "B") LStack.pop();
//   //추가한 경우(P) LStack에 쌓는다
//   else if (command === "P") LStack.push(val);
// })

//   //왼쪽(LStack)부터 오른쪽(RStack) 값을 출력한다. 
//   console.log([...LStack, ...RStack.reverse()].join(""));

//5397-키로거
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [n, ...arr] = input;

for(let i of arr){
  let LStack = [];// 커서의 왼쪽 stack
  let RStack = [];// 커서의 오른쪽 stack

  const str= i.trim().split('');

  str.forEach(v=>{
    if(v==='<'&&LStack.length) RStack.push(LStack.pop())
    else if (v==='>' && RStack.length) LStack.push(RStack.pop())
    else if(v==='-'&&LStack.length) LStack.pop()
    else if (v !== '<' && v !== '>' && v !== '-') LStack.push(v)
  })

  console.log(LStack.join('')+RStack.reverse().join(''))
}