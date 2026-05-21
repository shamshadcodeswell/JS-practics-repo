const obj = {
    name : "hitesh",
    greeting : function(){
        console.log("hello");
        
    }
}
// obj.greeting = function () {
//     console.log("hello");
// }
// obj.greeting();

function sum (num1, num2){
    console.log(`num1 : ${num1} num2 : ${num2}`);
    
    return num1+num2;
}

let addedNum = sum()
console.log(addedNum);
