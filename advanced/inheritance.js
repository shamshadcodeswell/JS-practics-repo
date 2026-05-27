const father= {
    surname : 'gupta',
    networth : 10000,
    greeting : function(){
        return `hello namaste`
    },
}
const son = {
    firstname : 'rohit',
    // __proto__ : father,
}


Object.setPrototypeOf(son,father);
console.log(son.greeting());