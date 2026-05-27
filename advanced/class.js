// class user{
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptpassword(){
//         return `${this.password}abc`                
//     }
// }
// const hitesh = new user('hitesh',`hitesh@google.com`,'hitesh12345');
// console.log(hitesh.encryptpassword());


// class parent{
//     constructor(surname){
//         this.surname = surname;
//     }
//     parentlogMe(){
//         console.log('parent function');
        
//     }
// }
// class child extends parent{
//     constructor(firstname, surname){
//         super(surname)
//         this.firstname = firstname;
//     }
//     childLogMe(){
//         console.log(`name is ${this.firstname} ${this.surname}`);
        
//     }
// }

// const son = new child('hitesh','choudhary')
// son.childLogMe()
// son.parentlogMe()