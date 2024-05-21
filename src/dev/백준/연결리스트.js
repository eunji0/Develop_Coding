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
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
// const [n, ...arr] = input;

// for(let i of arr){
//   let LStack = [];// 커서의 왼쪽 stack
//   let RStack = [];// 커서의 오른쪽 stack

//   const str= i.trim().split('');

//   str.forEach(v=>{
//     if(v==='<'&&LStack.length) RStack.push(LStack.pop())
//     else if (v==='>' && RStack.length) LStack.push(RStack.pop())
//     else if(v==='-'&&LStack.length) LStack.pop()
//     else if (v !== '<' && v !== '>' && v !== '-') LStack.push(v)
//   })

//   console.log(LStack.join('')+RStack.reverse().join(''))
// }

//1158-요세푸스 문제
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class CircularDoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.head.next = this.head;
      this.head.prev = this.head;
    } else {
      newNode.prev = this.tail;
      newNode.next = this.head;
      this.tail.next = newNode;
      this.head.prev = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  remove(node) {
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
      if (node === this.head) this.head = node.next;
      if (node === this.tail) this.tail = node.prev;
    }
    this.size--;
    return node.value;
  }
}

function josephusProblem(N, K) {
  const list = new CircularDoublyLinkedList();

  // 리스트에 1부터 N까지의 노드를 추가
  for (let i = 1; i <= N; i++) {
    list.append(i);
  }

  let result = [];
  let currentNode = list.head;

  // 리스트에서 K번째 노드를 제거하고 결과에 추가
  while (list.size > 0) {
    for (let i = 1; i < K; i++) {
      currentNode = currentNode.next;
    }
    result.push(list.remove(currentNode));
    currentNode = currentNode.next;
  }

  // 결과 출력
  console.log(`<${result.join(', ')}>`);
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, K] = require('fs').readFileSync(filePath).toString().trim().split(' ');
josephusProblem(N, K);


