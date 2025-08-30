

function salary(num){
     return num* .7
}

//setTimeout(()=>{console.log( salary(30))}, 4000)

const mySalaries = [50,40,20,110,11,33,21, 60,300,400]

const sl =mySalaries.filter(n => n>20).filter(m => m % 2 ==0).map(o => o/2)
console.log(mySalaries)
console.log(sl)

const asyncHandler =  (requestHandler)=>{
     
    // ensure requestHandler (which will be async) runs inside a promise
    Promise.resolve(requestHandler(req, res, next))
           //if it fails, catch error and forward it to express error middleware
            .catch((err) => next(err));
}

// requestHandler = your original route handler (may be async).

// Promise.resolve() ensures that whether it’s an async function or not, it’s treated as a promise.

// If the promise rejects (error happens), .catch(next) forwards the error to Express’s built-in error handler.