// import Batch from "./class.js";

// var batchs = new Batch("Vinoth", 31);
// batchs.batchData();

class User{
    
    static userAccess = 0;
    constructor(name, age){
        this.name = name;
        this.age = age;
        User.userAccess++;
    }
    login(){
        console.log("Welcome back " + this.name);
    }
    static deployUser(){
        console.log("Total user access " + User.userAccess);
    }


}
let userOne = new User("Vinoth", 31);
userOne.login();

class Student extends User{
    constructor(st_name, st_age){
        super(st_name, st_age);
        this.num = 1;
    }
    message(){
        console.log(`You have ${this.num}GB storage available`);
    }
    logout(){
        console.log("User logout successfully" );
        return this;
    }
}

let user2 = new Student("Sankar", 30);
let user3 = new Student("Moorthy", 23);
user2.login();
user2.message();
User.deployUser();

//Method chaing
user3.logout().message();

function Product(){
    this.name = "Vinoth"
}
Product.prototype.login = function(){
    
}
let setProd = new Product();
