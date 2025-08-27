

function setusername(username){
    this.username = username
   // console.log(username)
}

function createuser(username, email, password){
    setusername.call(this, username)
     //call jo hai vo hamara current execution context dusare function ko pass kar deta hai 
     
    this.email = email
    this.password  = password
}

const chai = new createuser("chai","chai@fb.com", "123")

console.log(chai)