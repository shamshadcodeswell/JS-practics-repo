function setUsername(username){
    this.username = username
    console.log(`called`);
    
}
function createUser(username, age, city){
    setUsername.call(this, username);
    this.age = age;
    this.city = city;
}

const user1 = new createUser('Rohit', 23, 'kolkata');

console.log(user1);
