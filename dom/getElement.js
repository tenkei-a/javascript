"use strict";

// getElementById
const e = document.getElementById("button");
e.addEventListener("click", () => {
    // console.log('Clicked!');
    const result = document.getElementById('result');
    // result.innerText:id=resultの中身だけをとってくる
    console.log(result.innerText);
}, false);