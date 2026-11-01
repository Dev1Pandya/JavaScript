//singleton -using constructor
//object .create

//object literals

const mySym=Symbol("key1")

const Jsuser={
    name:"Hitesh",
    "Full name" :"Hitesh Chaudhary",
    [mySym]:"mykey1",
    age:18,
    location:"rajkot",
    email:"hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["Full name"]);
// console.log(Jsuser[mySym]);
// console.log(typeof Jsuser[mySym]);

Jsuser.email="hitesh@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email="hitesh@microsoft.com"
//console.log(Jsuser);

Jsuser.greeting=function(){
    console.log("hello js user");
    
}

Jsuser.greetingTwo=function(){
    console.log(`hello js user ${this.name}`);
    
}
    
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

