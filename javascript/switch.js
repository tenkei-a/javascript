"use strict";

// if(a===b)との使い分けは比較が3個以上だとswitchだとわかりやすい
const n = 5;
switch (n) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  case 3:
    console.log("three");
    break;
  default:
    console.log('other');
    break;
}
