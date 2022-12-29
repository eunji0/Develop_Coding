import React from "react";

export default function Home() {
    

    const user = {
        name: 'mike',
        showName: function (){
            console.log(`hello, ${this.name}`);
        },
    };

    user.showName(); //hello, mike

    let fn =user.showName;

    fn();//hello, 

    fn.call(user);

    let boundfn =fn.bind(user);
    boundfn();
;
    return (
        <div></div>
    );
}