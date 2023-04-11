"use strict";

// onclick
// const e = document.getElementById("button");
// // onclick:クリック時の動作
// e.onclick = () => {
//   console.log("click");
// };

// onload
// ロード時の処理
// window.onload = () => {
//   console.log("load event");
// };

// addEventListener
const e = document.getElementById("button");
e.addEventListener(
    // イベントの種類
  "click",
  () => {
    // イベントハンドラ
    console.log("click");
  },
  false
);
