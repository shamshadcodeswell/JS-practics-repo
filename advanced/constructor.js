function user(name,loginCount,isLoggedIn){
    this.name = name;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}
user.prototype.increment = function(){
    this.loginCount ++;
    return this.loginCount;
}
const user1 = new user('hitesh',11,true)
console.log(user1.loginCount);
const newIncrement =  user1.increment();
console.log(newIncrement);


