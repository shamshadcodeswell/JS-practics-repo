// const score =  200;
// console.log(score);

const balance = new Number(627);
// console.log(balance);
// console.log(balance.toString());

const decimal = 123.456;
// console.log(decimal.toFixed(1));
// console.log(decimal.toPrecision(2));

// let max = Number.MAX_SAFE_INTEGER
// console.log(max);
// let min = Number.MIN_VALUE
// console.log(min);
// let safeMin = Number.MIN_SAFE_INTEGER
// console.log(safeMin);

// ++++++++++++++++++++++++++++++++++++++++++++MATH++++++++++++++++++++++++++++++++++++++++++++++++++



// let x = Math.random()
// console.log(x);

// let x = Math.random() * 10;
// console.log(x); 

// to avoid 0

// let x = (Math.random() * 10)+1;
// console.log(x);

//to get natural numbers only                                                          

// let x = Math.floor((Math.random() * 10)+1);
// console.log(x);


//formula

const min = 10;
const max = 20;

let randomValInRange = Math.floor((Math.random() * (max-min+1)) +min);
console.log(randomValInRange);
