"use strict";

const e = document.getElementById("button");
e.addEventListener(
  "click",
  () => {
    // nodeの生成(<li></li>)
    const li = document.createElement("li");
    // 入力された内容のnodeの生成
    const text = document.getElementById("textbox");
    const textNode = document.createTextNode(text.value);
    // <li> 入力された内容 </li>
    li.appendChild(textNode);

    // <ul id="list"></ul>を持ってくる
    const listElement = document.getElementById("list");
    // <ul id="list"><li> 入力された内容 </li></ul>
    listElement.appendChild(li);
  },
  false
);
