// const [a, , b] = [1, 2, 3, 4];
// console.log(a, b);

// const[a] = [1,2,3]
// console.log(a);


// const user = {
//     name : 'Rahul',
//     age : 18,
//     company : 'company xyz',
//     address:{
//         city: 'kolkata',
//         pincode : 700024,
//     }
// }
// // console.log({ name:'john',...user});


// const user2 ={ 
//        name: 'john'
//     ...user,
   
// }
// console.log(user2);


// const {address:{city}} = user
// console.log(city);


/*
1
a=1
b=3

2
const{response:{message : {greeting}}} ='hello'

3.
const students = [
    { name: "Ada", score: 95 },
  { name: "Bruno", score: 82 },
]

for (const item of students) {
    console.log(`${item.name} - ${item.score}`);

4. 
42
but why is type of [key] is a string
    
}
    
//    const key = "score";
// const { key: val } = { score: 42 };
// console.log(typeof val);


const obj = {
    name : 'rahul',
    age : 18,
    score : 43
}
const key = "score"
const {[key]:val} = obj;
console.log(val);
 */


/*
b= {y:2 , x:1}
c= {x:1, y:99}
//last one overwrites

function broken( last,...nums)
as rest should be last parameter


bc object copied using rest are copied only to first level
c is shared between the teo

function mergeConfigs(defaults, overrides) {
    return {
        ...defaults,
        ...overrides
    }
}

*/
const bold = function (strings, ...values){
    let temp = ``;
    for (let i = 0; i < values.length; i++) {
        temp = `${temp} ${strings[i]}` ;
        temp = `${temp} <strong>${values[i]}</strong>`
    }
    temp= `${temp} ${strings[strings.length-1]}`
    return temp;
}



console.log(bold`Hello ${name}, your score is ${score}!`);