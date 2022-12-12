import React from "react";

export default function Home() {
    function User(name, height) {
        this.name = name;
        this.height = height;
        this.showHeight=function(){
            console.log(`키는 ${height}입니다.`)
        }
    }

    let user1 = new User('안나', 160);
    let user2 = new User('라임', 158);
    let user3 = new User('주원', 183);

    console.log(user1, user2, user3);
    user3.showHeight();
    return (
        <div></div>
    );
}