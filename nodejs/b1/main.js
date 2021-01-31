// 1   var
// var a =1;
// var b =2;
// console.log(a+b);

// 2   function
// function saySomething(sentence){
//     console.log(sentence);
// }
// saySomething("test 1");

// function haveFuncInside(){
//     saySomething("test 2");
// }
// haveFuncInside();

// var testFuncExpression = function(){
//     saySomething("test 3");
// }
// testFuncExpression();

//3     module
// var sayHello = require("./module.js");
// sayHello();

// 4       Object literal
// var person = {
//     fullname: "",
//     age: "",
//     toShow: function () {
//         console.log("Hi, I am "+ this.fullname +" and "+this.age+" years old");
//     }
// }
// person.fullname = "Khanh Qui";
// person.age = "17";
// person.toShow();

// 5       Object, init Object and Prototype
// function Person(username, password){
//     this.username = username;
//     this.password = password;
// }
// Person.prototype.getUsername = function(){
//     return this.username;
// }
// Person.prototype.getPassword = function(){
//     return this.password;
// }
// Person.prototype.getRole = function(){
//     return this.role;
// }
// Person.prototype.role = "admin";

// function User(username){
//     this.username = username;
// }
// User.prototype = new Person();

// var person = new Person("test uid person", "test pwd person");
// var user = new User("test uid user", "test pwd user");

// console.log(person.getUsername());
// console.log(person.getPassword());
// console.log(person.getRole());
// //
// console.log(user.getUsername());
// console.log(user.getPassword());
// console.log(user.getRole());
// // 
// Date.prototype.vnFormat = function (){
//     var yyyy = this.getFullYear();
//     var mm = this.getMonth()+1;
//     var dd = this.getDate();
//     return dd +"/"+mm+"/"+yyyy;
// }
// var now = new Date();
// var xms = new Date(2020, 12, 15);
// console.log(now.vnFormat());
// console.log(xms.vnFormat());

// 6       execute while init 

var name = "Khanh Qui";
(
    function(lastname){
        var name = "just Qui";
        console.log(name);
        console.log(lastname);
    }("last name")

);
console.log(name);



