const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({name: 'javascript', password:'123'});
        }else{
            reject("ERROR 404!")
        }
    },3000)
});

// promiseOne
// .then((user)=>{
//     console.log(user);
//     return user;
// }).then(({name})=>{
//     console.log(name);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("finally executed");
    
// })

// async function consumePromiseOne(){
//     try {
//         const response = await promiseOne
//         console.log(response);
        
//     } catch (error) {
//         console.log(error);
//     }    
// }

// consumePromiseOne()
// async function consumePromiseOne(){
//     console.log("A: function started");
//     const response = await promiseOne;   // 3-second wait
//     console.log("B: function resumed");
// }

// consumePromiseOne();
// console.log("C: outside the function");


// async function consumePromiseOne() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
        
//         const data = await response.json();
//         console.log(data);
        
//     } catch (error) {
//         console.log('ERROR 404 !');        
//     }
// }
// consumePromiseOne()
// console.log("meanwhile outside code is running");


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})

console.log("while outside continues");
