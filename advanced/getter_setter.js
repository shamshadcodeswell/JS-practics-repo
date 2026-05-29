// class abc {
//     constructor(val){
//         this.name = val;
//     }
//     set name (val) {
//         this._name = val.toUpperCase()
//     }
//     get name () {
//         return this._name
//     }

// }
// const obj = new abc('hitesh')
// console.log(obj.name);


// function User(email,password){
//     Object.defineProperty(this,'email',{
//         get: function(){
//             console.log('from getter');
            
//             return this._email
//         },
//         set: function(value){
//             this._email = value;
//         }
//     })
//     this.email = email;
//     this.password = password;
// }

// const user1 = new User('hitesh@gmail.com','123')
// console.log(user1.email);

// function User(email,password){
//     this._email = email
//     this.password = password
//     Object.defineProperty(this,'email',{
//         get: function(){
//             console.log('from getter');
            
//             return this._email
//         },
//         set: function(value){
//             this._email = value;
//         }
//     })

// }

// const user1 = new User('hitesh@gmail.com','123')
// console.log(user1.email);

const user = {
    _email: 'h@google.com',
    _password : '1234',

    get email(){
        return this._email
    },
    set email(val){
        this._email = val
    }
}
const user1 = Object.create(user)
console.log(user1.email);
user.email = "hitesh@gmail.com"
console.log(user1.email);
