import React from "react";

export default function Home() {
    
    let one;
    one = 1;

    function addOne(num) {
        console.log(one + num);
    }

    addOne(5);


    return (
        <div></div>
    );
}