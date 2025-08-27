

// this keyword referes to current context 

const user ={
    name : "hitesh",
    price : 999,

    welcomemessage: function(){
        console.log(`${this.name}, welcome to website`);
        console.log(this)
    }
}


// user.welcomemessage();
// user.name = "yagnik"
// user.welcomemessage();

// console.log(this); //  here this referes to empty becsuse there is no context in this environment 


// =------------------arrow function ---------------/

// const addtwo = (n1, n2)=>{
//     return n1+ n2
// }




//const addtwo = (n1, n2) => n1 + n2
const addtwo = (n1, n2) => (n1 + n2)

// this technique called implicit return 
console.log(addtwo(4,5))

const showname = (name) => ({username: "yagnik"})

console.log(showname());