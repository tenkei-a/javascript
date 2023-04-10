"use strict";

let num = 100;
let str = '100';

// 抽象的な比較
if (num == str){
    console.log('same');
}else{
    console.log('not same');
}

// 内容も型もそのまま比較する
// 基本的には比較する際は===を用いる
if (num === str){
    console.log('same');
}else{
    console.log('not same');
}



