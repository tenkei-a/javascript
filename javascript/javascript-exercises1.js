'use strict'

let age = 11;
const largePrice = 5000;
const middlePrice = 2500;
const smallPrice = 1000;

if(age >= 12){
    console.log(largePrice);
}else if(age < 6){
    console.log(smallPrice);
}else{
    console.log(middlePrice);
}