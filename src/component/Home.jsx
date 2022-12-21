import React from "react";

export default function Home() {
    
    let user = {name: 'mike'};
    let info = {age:30};
    let fe = ["JS", "React"];
    let lang = ["Korean", "English"];

    user ={
        ...user, ...info, skills:[...fe, ...lang]
    }
    console.log(user);


    return (
        <div></div>
    );
}