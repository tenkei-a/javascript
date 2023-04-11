"use strict";

// createElement,createTextNode,appendChild
// const e = document.getElementById("button");
// e.addEventListener(
//   "click",
//   () => {
//     // nodeの作成
//     const li = document.createElement("li");
//     const text = document.createTextNode("test");

//     // appendChild:指定された要素を現在の要素の最後の子要素として追加する
//     // <li>test</li>完成
//     li.appendChild(text);

//     // <ul id="list"></ul>を持ってくる
//     const listElement = document.getElementById("list");

//     // <ul id="list"></ul>に<li>test</li>が追加される
//     listElement.appendChild(li);
//   },
//   false
// );

// setAttribute,replaceChil
// const e = document.getElementById("button");
// e.addEventListener(
//   "click",
//   () => {
//     // li要素の生成<li></li>
//     const newList = document.createElement("li");
//     // 生成したli要素にid要素(newList)を付与<li id="newList"></li>
//     newList.setAttribute("id", "newList");

//     // textノードの生成
//     const newText = document.createTextNode('new element');
//     // 生成したノードを空のli要素に追加<li id="newList">new element</li>
//     newList.appendChild(newText);

//     // 置換前のoldListを参照
//     const oldList = document.getElementById('oldList');
//     // oldListの親ノード<ul></ul>を参照
//     const parentNode = oldList.parentNode;
//     // 置換処理(<li id="newList">new element</li> ← <li id="oldList">old element</li>)
//     parentNode.replaceChild(newList,oldList);
//   },
//   false
// );

// removeChild
const e = document.getElementById("button");
e.addEventListener(
  "click",
  () => {
    const parentElement = document.getElementById("list");
    const elements = parentElement.getElementsByTagName("li");
    const removeIndex = elements.length - 1;
    if(removeIndex >= 0){
        parentElement.removeChild(elements[removeIndex]);
    }else{
        console.log("no elements");
    }
  },
  false
);
