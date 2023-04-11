"use strict";

// getElementById
// const e = document.getElementById("button");
// e.addEventListener(
//   "click",
//   () => {
//     // console.log('Clicked!');
//     const result = document.getElementById("result");
//     // result.innerText:id=resultの中身だけをとってくる
//     console.log(result.innerText);
//   },
//   false
// );

// getElementsByTagName
// const e = document.getElementById("button");
// e.addEventListener(
//     // クリック時に処理を行う
//   "click",
//   () => {
//     // クリック時の処理
//     // elementsには複数の要素が入ってくる。配列と似た要素が入ってくる。
//     const elements = document.getElementsByTagName("div");
//     for (let i = 0; i < elements.length; i++) {
//       console.log(elements[i].innerText);
//     }
//   },
//   false
// );


//getElementsByName
const e = document.getElementById("button");
e.addEventListener(
  "click",
  () => {
    const elements = document.getElementsByName("result");
    // テキストに入力された内容を受け取るため、valueが必要
    console.log(elements[0].value);
  },
  false
);
