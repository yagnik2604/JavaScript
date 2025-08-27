
const mysym = Symbol("key1");

const jsuser = {
    name : "yagnik",
    "full name" : "yagnik chavadhari",
    email: "yagnkchavadhari@gmail.com",
     locaction : "ahmedabad",
     age: 20,
     [mysym]: "mykey1",
     ismariede : false,
}

console.log(jsuser.name);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);


jsuser.email = "yagnikchavadhari@google.com"
console.log(jsuser["email"]);
// Object.freeze(jsuser);
console.log(jsuser);



jsuser.greeting = function(){
    console.log("hello js user");
}
console.log(jsuser.greeting());

jsuser.greetingtwo = function(){
    console.log(`hello js user ${this.name}`);
}
console.log(jsuser.greetingtwo());



console.log(jsuser);
