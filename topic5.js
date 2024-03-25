// 
// let user = {
//     name: "Volodymyr",
//     email: "email@gmail.com",
//     age: 34
// }


// let object = {
//     ключ: значення
//     key: value

// }
// let user = {
//     name: "Volodymyr",
//     email: "email@gmail.com",
//     age: 34
// }

// console.log(user.name);

// let key = "email";

// console.log(user[key]);

// console.log(user.key);

// console.log(user);

// user.city = "MyCity";
// console.log(user);

// delete user.email;

// console.log(user);

// Object.keys()
// Object.Values()

// console.log(Object.keys(user));
// console.log(Object.values(user));

// let user = {
//     name: "Volodymyr",
//     email: "email@gmail.com",
//     age: 34,
//     friends: ["Ivan", "John"],
//     son: {
//         name: "Vova",
//         age: 2
//     }
// }

// let user = {
//     name: "Volodymyr",
//     email: "email@gmail.com",
//     age: 34,
//     showName: function(){
//         console.log(user.name);
//     }
// }

// let user = {
//     name: "Volodymyr",
//     email: "email@gmail.com",
//     age: 34,
//     showName: function(){
//         console.log(this.name);
//     }
// }

// user.showName();

// let user = new Object();

// user.name = "Volodymyr";

// function User(name, age, city){
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.showName = function(){
//         console.log(this.name);
//     }
// }


// let user1 = new User("Volodymyr", 34, "MyCilty");
// let user2 = new User("Volodymyr2", 34, "MyCilty2");

// user1.showName();

// user2.showName();


// console.log(user1);
// console.log(user2);


// class User{
//     constructor(name, age, city){
//         this.name = name;
//         this.age = age;
//         this.city = city;
//     }

//     showName(){
//         console.log(this.name);
//     }

// }

// let user1 = new User("Volodymyr", 34, "MyCilty");

// // console.log(user1);
// user1.showName();

// user1.name = "Peter";

// console.log(user1);

// class User{
//     constructor(name, age, city){
//         this._name = name;
//         this.age = age;
//         this.city = city;
//     }

//     _surname = "Peter"

//     get name(){
//         return this._name;
//     }

//     set name(value){
//         if(value.length < 4){
//             alert("Name must be at least 4 characters");
//             return;
//         }
//         this._name = value;
//     }

   

// }

// let user1 = new User("Volodymyr", 34, "MyCilty");

// // console.log(user1.name);
// user1.name = "Peter";

// console.log(user1._surname);



