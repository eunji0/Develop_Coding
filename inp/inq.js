var output = ""

// for(let i=0; i<10;i++){
//   console.log(output+="*");
// }
for (let i = 0; i < 3; i++) {
    console.log(output += "*");
    for(let j=3; j<i ; j--){
      console.log(output += "*");
    }
}