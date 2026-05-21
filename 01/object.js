
const mySym = Symbol("key 1");

const JsUser = {
    name : "hitesh",
    age : 18,
    [mySym] : "mykey1", 
    state : "Rajasthan",
    "City" : "Jaipur",
    daysLoggedIn : ["monday", "tuesday", "wednesday"]
}
// console.log(JsUser[mySym]);

// console.log(JsUser["name"]);
console.log(JsUser.state);
console.log(JsUser["daysLoggedIn"]); //"City" keys can only be obtaned through this wah JsUser.city wont work

// JsUser.age = 19;
// Object.freeze(JsUser);
// console.log(JsUser.age);

// JsUser.age = 20;
// console.log(JsUser.age);

// JsUser.greeting = function (){
//     console.log(`Hello User ${this.name}`);    
// }
// JsUser.greeting();
// console.log(JsUser.greeting);

