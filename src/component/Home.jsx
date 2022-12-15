import React from "react";

export default function Home() {
    
    function hasCola(str){
        if(str.includes('콜라')){
            console.log('금칙어가 있습니다.');
        }
        else {
            console.log("통과");
        }
    }

    hasCola('사이다가 좋아');
    hasCola('콜라가 좋아');

    return (
        <div></div>
    );
}