


const tinderUser = {};

tinderUser.id = "123abs";
tinderUser.name = " sammy";
tinderUser.isloggedin = false

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(tinderUser.hasOwnProperty("isloggedin"));


const object1 = {1:"a", 2: "b"}
const object2 = {3:"c", 4: "d"}

// const obj3 = {object1, object2}; //here boj3 contain two obj 

//const obj3 = Object.assign(object1, object2)
//  here without {}empty array    boject1 become a target 

//const obj3 = Object.assign({},object1, object2)  // (target, source)

const obj3 = {...object1, ...object2}
//console.log(obj3);



//=----- array of object ---------------//

// this type of data come from database 

const user = [
    {
        id:1,
        email :'exmaple1@gmail.com'
    },
    {
        id:2,
        email: "example2@gmail.com"
    },
    {
        id:3,
        email: "example3@gmail.com"
    },
    {
        id:4,
        email: "example4@gmail.com"
    }
]

//console.log(user);
//console.log(user[1].email);


