let myName = 'hitesh'
let myname2 = 'hitesh   '
String.prototype.truelength = function(){
    return this.trim().length;
}
console.log(myname2.length);
console.log(myname2.truelength());

