"use strict";

let sum = 0;
let ave = 0;

const scores = [100, 90, 80, 70, 60];

for(let i = 0; i < scores.length; i++){
    // sum = sum + scores[i];
    sum += scores[i];
}

ave = sum / scores.length

console.log(sum,ave);