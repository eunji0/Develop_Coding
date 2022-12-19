import React from "react";

export default function Home() {
    
    let user = {
        name: 'moke',
        age: 20
    }

    let userlist = ['mike', 'jane', 'tom'];

    console.log(Array.isArray(user))
    console.log(Array.isArray(userlist))

    return (
        <div></div>
    );
}