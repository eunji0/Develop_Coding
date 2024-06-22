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
// class ListNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class CircularDoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   append(value) {
//     const newNode = new ListNode(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//       this.head.next = this.head;
//       this.head.prev = this.head;
//     } else {
//       newNode.prev = this.tail;
//       newNode.next = this.head;
//       this.tail.next = newNode;
//       this.head.prev = newNode;
//       this.tail = newNode;
//     }
//     this.size++;
//   }

//   remove(node) {
//     if (this.size === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       node.prev.next = node.next;
//       node.next.prev = node.prev;
//       if (node === this.head) this.head = node.next;
//       if (node === this.tail) this.tail = node.prev;
//     }
//     this.size--;
//     return node.value;
//   }
// }

// function josephusProblem(N, K) {
//   const list = new CircularDoublyLinkedList();

//   // 리스트에 1부터 N까지의 노드를 추가
//   for (let i = 1; i <= N; i++) {
//     list.append(i);
//   }

//   let result = [];
//   let currentNode = list.head;

//   // 리스트에서 K번째 노드를 제거하고 결과에 추가
//   while (list.size > 0) {
//     for (let i = 1; i < K; i++) {
//       currentNode = currentNode.next;
//     }
//     result.push(list.remove(currentNode));
//     currentNode = currentNode.next;
//   }

//   // 결과 출력
//   console.log(`<${result.join(', ')}>`);
// }

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const [N, K] = require('fs').readFileSync(filePath).toString().trim().split(' ');
// josephusProblem(N, K);

//2164-카드2
// class ListNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedListQueue {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   enqueue(value) {
//     const newNode = new ListNode(value);
//     if (this.tail) {
//       this.tail.next = newNode;
//     } else {
//       this.head = newNode;
//     }
//     this.tail = newNode;
//     this.size++;
//   }

//   dequeue() {
//     if (!this.head) {
//       return null;
//     }
//     const dequeuedValue = this.head.value;
//     this.head = this.head.next;
//     if (!this.head) {
//       this.tail = null;
//     }
//     this.size--;
//     return dequeuedValue;
//   }

//   getSize() {
//     return this.size;
//   }
// }

// function card2(N) {
//   const queue = new LinkedListQueue();

//   // 1부터 N까지의 카드를 큐에 추가
//   for (let i = 1; i <= N; i++) {
//     queue.enqueue(i);
//   }

//   // 카드가 한 장 남을 때까지 반복
//   while (queue.getSize() > 1) {
//     queue.dequeue(); // 제일 위에 있는 카드를 버림
//     queue.enqueue(queue.dequeue()); // 그 다음 제일 위에 있는 카드를 제일 아래로 옮김
//   }

//   // 마지막으로 남은 카드
//   console.log(queue.dequeue());
// }

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input= require('fs').readFileSync(filePath).toString().trim().split(' ');
// const N = parseInt(input, 10);
// card2(N);

//20920-영단어암기는 어려워
// let input = require('fs').readFileSync('/dev/stdin').toString();
// let N = Number(input)

//     class Node{ // 1
//         constructor(val){
//             this.val = val; 
//             this.next = null;
//         }
//     }
    
//     class LinkedList{ // 2
//         constructor(){
//             this.head = null;
//             this.tail = null;
//             this.length = 0;
//         }
        
//         push(val){ // 3
//             let newNode = new Node(val);
            
//             if(!this.head){
//                 this.head = newNode
                
//             }else{
//                 this.tail.next = newNode
//             }
//             this.tail = newNode;
//             this.length++;

//             return newNode;
//         }
        
//         getHead(){ // 4
//           return this.head.val;
//         }
        
//         removeHead(){ // 5
//             this.head = this.head.next;
//             this.length--;
//         }
        
//         getLength(){ // 6
//             return this.length;
//         }
//     }
    
//     const cards = new LinkedList(); // 7
    
//     for(let i = 1; i<=N; i++){ // 8
//         cards.push(i)
        
//     }

//       while(cards.getLength() != 1){ // 9
//         cards.removeHead()
//         cards.push(cards.getHead())
//         cards.removeHead()
//     }
    
//     console.log(cards.getHead()) // 10


// 연결리스트 시간 복잡도
// 삽입 (Insertion)

// 리스트의 시작 부분에 삽입: O(1)
// 새로운 노드를 생성하고, 그 노드의 next 포인터를 현재의 헤드 노드를 가리키도록 한 후, 헤드를 새로운 노드로 변경하면 된다.
// 리스트의 끝 부분에 삽입: O(n)
// 리스트의 끝을 찾기 위해 리스트의 모든 노드를 순회한 후, 마지막 노드의 next 포인터를 새로운 노드를 가리키도록 설정한다.
// 중간 위치에 삽입: O(n)
// 삽입 위치까지 노드를 순회한 후, 해당 위치에 노드를 삽입한다. 삽입 위치까지 가는 데 O(n) 시간이 걸린다.
// 삭제 (Deletion)

// 리스트의 시작 부분에서 삭제: O(1)
// 헤드 노드를 다음 노드로 변경하면 된다.
// 리스트의 끝 부분에서 삭제: O(n)
// 끝 노드를 찾기 위해 리스트를 순회한 후, 마지막 노드의 이전 노드의 next 포인터를 null로 설정한다.
// 중간 위치에서 삭제: O(n)
// 삭제 위치까지 노드를 순회한 후, 해당 위치의 노드를 제거한다. 삭제 위치까지 가는 데 O(n) 시간이 걸린다.
// 탐색 (Search)

// 특정 값 또는 인덱스 탐색: O(n)
// 원하는 값을 찾기 위해 리스트의 모든 노드를 순회해야 한다.
// 접근 (Access)

// 특정 인덱스의 값 접근: O(n)
// 특정 인덱스에 접근하기 위해 해당 인덱스까지 리스트를 순회해야 한다.
// 정리
// 삽입

// 시작 부분: O(1)
// 끝 부분: O(n)
// 중간 위치: O(n)
// 삭제

// 시작 부분: O(1)
// 끝 부분: O(n)
// 중간 위치: O(n)
// 탐색

// 특정 값: O(n)
// 특정 인덱스: O(n)
// 접근

// 특정 인덱스: O(n)

//연결리스트 클래스
// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     // 리스트의 끝에 노드 추가
//     append(data) {

//         //먼저, data를 저장하는 새로운 노드를 생성한다.
//         // new Node(data)를 호출하여 Node 클래스의 인스턴스를 만든다.
//         // 새 노드의 next 포인터는 null로 초기화된다.
//         const newNode = new Node(data);

//         //헤드 노드가 없는 경우 (리스트가 비어있는 경우)
//         if (this.head === null) {

//             //리스트가 비어있다면 새 노드가 첫 번째 노드가 된다.
//             this.head = newNode;

//             //헤드 노드가 있는 경우 (리스트가 비어있지 않은 경우)
//         } else {

//             //current 변수를 this.head로 초기화한다.
//             let current = this.head;

//             //current.next가 null이 될 때까지 리스트를 순회
//             //이 루프는 리스트의 끝을 찾기 위한 것이다.
//             //끝을 찾아야 맨 마지막에 추가하기 떄문.
//             //current.next가 null이 되는 시점은 현재 노드가 리스트의 마지막 노드인 경우이다.
//             while (current.next !== null) {

//                 //루프가 종료되면 current는 리스트의 마지막 노드를 가리키고 있다.
//                 current = current.next;
//             }

//             // 마지막 노드의 next 포인터를 새 노드로 설정한다.
//             // 이로써 새 노드가 리스트의 끝에 추가된다.
//             current.next = newNode;
//         }

//         //노드가 추가되었으니까
//         //리스트의 크기를 업데이트
//         this.size++;
//     }

//     // 특정 위치에 노드 삽입
//     insertAt(data, index) {
//         //유효한 인덱스인지 확인
//         if (index < 0 || index > this.size) {
//             return console.log("Invalid index");
//         }

//         //새로운 노드 생성
//         //new Node(data)를 호출하여 Node 클래스의 인스턴스를 만든다.
//         const newNode = new Node(data);

//         //인덱스가 0인경우
//         //리스트의 시작 부분에 삽입
//         if (index === 0) {
//             //새 노드의 next 포인터를 현재의 헤드 노드(this.head)로 설정한다.
//             newNode.next = this.head;
//             //그런 다음, this.head를 새 노드로 업데이트한다.
//             this.head = newNode;


//             //인덱스가 0이 아닌 경우
//             //리스트의 중간 또는 끝 부분에 삽입
//         } else {

//             //인덱스가 0이 아닌 경우, 삽입하려는 위치까지 리스트를 순회한다.

//             let current = this.head;  // 현재 노드를 헤드 노드로 설정
//             let previous;             // 이전 노드를 추적하기 위한 변수
//             let count = 0;            // 현재 노드의 인덱스를 추적하기 위한 변수
            

//             //count가 index보다 작을 때까지 루프를 반복한다
//             while (count < index) {
//                 previous = current;
//                 current = current.next;
//                 //count를 1씩 증가시켜 현재 인덱스를 추적한다.
//                 count++;
//             }
//             //루프가 종료되면 
//             //current는 삽입하려는 위치의 노드를 가리키고, 
//             //previous는 그 이전 노드를 가리킨다.

//             //새 노드의 next 포인터를 current로 설정한다.
//             newNode.next = current;

//             //previous.next를 새 노드로 설정하여 새로운 노드를 리스트에 삽입한다.
//             previous.next = newNode;
//         }

//         //리스트의 크기를 업데이트
//         this.size++;
//     }

//     // 노드 삭제
//     removeAt(index) {
//         if (index < 0 || index >= this.size) {
//             return console.log("Invalid index");
//         }

//         let current = this.head;
//         let previous;
//         let count = 0;

//         if (index === 0) {
//             this.head = current.next;
//         } else {
//             //while문이 종료되면 current는 제거하려는 위치의 노드를 가리키고, previous는 그 이전 노드를 가리킨다.
//             while (count < index) {
//                 previous = current;
//                 current = current.next;
//                 count++;
//             }

//             //previous.next를 current.next로 설정하여 현재 노드를 리스트에서 제거한다.
//             previous.next = current.next;
//         }
//         this.size--;

//         //제거된 노드의 데이터를 반환한다.
//         return current.data;
//     }

//     // 특정 위치의 노드 데이터 반환
//     getAt(index) {
//         if (index < 0 || index >= this.size) {
//             return console.log("Invalid index");
//         }

//         //current 변수를 현재 헤드 노드(this.head)로 초기화한다
//         let current = this.head;

//         //count 변수는 현재 노드의 인덱스를 추적한다.
//         let count = 0;

//         while (count < index) {
//             // current를 current.next로 설정하여 다음 노드로 이동한다.
//             current = current.next;

//             //count를 1씩 증가시켜 현재 인덱스를 추적한다.
//             count++;
//         }

//         //현재 노드(current)의 데이터를 반환한다.
//         return current.data;
//     }

//     // 전체 리스트 출력
//     printList() {
//         let current = this.head;
//         while (current) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    append(data){
        const newNode = new Node(data);

        if(this.head === null){
            this.head = newNode;
        }else{
            let current = this.head;

            while(current.next !== null){
                current = current.next;
            }

            current.next = newNode;
        }

        this.size++;
    }


}