
// const promiseOne = new Promise(function(resolve, reject){
//     // do async task

//     setTimeout(function(){

//         console.log("async task is complete")
//         resolve();

//     },3000)
// })



// promiseOne.then(function(){
//     console.log("promise consumed")
// })

// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("task two complete")
//         resolve()
//     },5000)
// }).then(()=>{
//     console.log("promise 2 consumed")
// })


// const promisethree = new Promise(function(resolve, reject){

//     setTimeout(()=>{
//         resolve({username: "yagnik", email: "yagnik@example.com"})
//     }, 3000)
// })



// promisethree.then(function(user){
//     console.log(user)
// })

const promisefour = new Promise(function(resolve, reject){

    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username: "yagnik", email: "yagnik@example.com"})
        }else{
            reject('error: something went wrong');
        }

    }, 3000)
})

promisefour.then((user)=>{
    console.log(user);
    return user,username
}).then((username)=>{
  console.log(username)
}).catch((err)=>{
      console.log(err)
}).finally(()=> console.log("the promise either resolve or rejected"))



