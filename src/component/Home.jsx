import React from "react";

export default function Home() {
    
    let a =1;
    let b=2;
    
    [a,b] = [b,a];
    console.log(a);
    console.log(b);


    return (
        <div></div>
    );
}