"use strict";

// createElement,createTextNode,appendChild
const e = document.getElementById("button");
e.addEventListener(
  "click",
  () => {
    // nodeの作成
    const li = document.createElement("li");
    const text = document.createTextNode("test");

    // appendChild:指定された要素を現在の要素の最後の子要素として追加する
    // <li>test</li>完成
    li.appendChild(text);

    // <ul id="list"></ul>を持ってくる
    const listElement = document.getElementById("list");

    // <ul id="list"></ul>に<li>test</li>が追加される
    listElement.appendChild(li);
  },
  false
);
